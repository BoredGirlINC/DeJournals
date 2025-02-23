// Configuration
const CONFIG = {
    API_URL: 'https://r0c8kgwocscg8gsokogwwsw4.zetaverse.one/mongodb',
    APP_SLUG: 'dejournals-123456',
    // API key should be loaded from environment variables in production
    API_KEY: process.env.DEJOURNALS_API_KEY || 'PLACEHOLDER_API_KEY',
    CHAT_REFRESH_INTERVAL: 5000
};

// Error handling utilities
const ErrorHandler = {
    showError: (message, type = 'error') => {
        const errorDiv = document.createElement('div');
        errorDiv.className = `fixed top-4 right-4 p-4 rounded-lg ${type === 'error' ? 'bg-red-500' : 'bg-yellow-500'} text-white`;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    },
    
    handleApiError: async (response) => {
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'API request failed');
        }
        return response;
    }
};

// API utilities
const ApiService = {
    async makeRequest(action, collection, data = {}, conditions = {}) {
        try {
            const response = await fetch(CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CONFIG.API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    appSlug: CONFIG.APP_SLUG,
                    action,
                    collection,
                    ...(action === 'read' ? { conditions } : { data })
                })
            });
            
            await ErrorHandler.handleApiError(response);
            return await response.json();
        } catch (error) {
            ErrorHandler.showError(`API Error: ${error.message}`);
            throw error;
        }
    }
};

// Chat functionality
const ChatModule = {
    visible: false,
    
    init() {
        this.setupEventListeners();
        if (this.visible) {
            this.loadMessages();
        }
    },
    
    setupEventListeners() {
        document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    },
    
    toggle() {
        const chat = document.getElementById('chat-widget');
        this.visible = !this.visible;
        chat.classList.toggle('hidden');
        if (this.visible) {
            this.loadMessages();
        }
    },
    
    async loadMessages() {
        try {
            const { result: messages } = await ApiService.makeRequest('read', 'messages');
            const chatMessages = document.getElementById('chat-messages');
            
            if (!chatMessages) return;
            
            chatMessages.innerHTML = messages.map(msg => `
                <div class="mb-2">
                    <strong>${msg.user}:</strong> ${msg.text}
                </div>
            `).join('');
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (error) {
            ErrorHandler.showError('Failed to load messages');
        }
    },
    
    async sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        try {
            await ApiService.makeRequest('create', 'messages', {
                user: 'Anonymous',
                text: message,
                timestamp: new Date().toISOString()
            });
            
            input.value = '';
            await this.loadMessages();
        } catch (error) {
            ErrorHandler.showError('Failed to send message');
        }
    }
};

// Paper management functionality
const PaperModule = {
    init() {
        this.setupEventListeners();
        this.loadPapers();
    },
    
    setupEventListeners() {
        document.getElementById('upload-form')?.addEventListener('submit', (e) => this.handleUpload(e));
    },
    
    showUploadModal() {
        document.getElementById('upload-modal')?.classList.remove('hidden');
    },
    
    hideUploadModal() {
        document.getElementById('upload-modal')?.classList.add('hidden');
    },
    
    async handleUpload(e) {
        e.preventDefault();
        
        const title = document.getElementById('paper-title')?.value;
        const abstract = document.getElementById('paper-abstract')?.value;
        const fileInput = document.getElementById('paper-file');
        
        if (!title || !abstract || !fileInput?.files?.[0]) {
            ErrorHandler.showError('Please fill in all fields', 'warning');
            return;
        }
        
        try {
            // Handle file upload (placeholder for now)
            await this.handleFileUpload(fileInput.files[0]);
            
            await ApiService.makeRequest('create', 'papers', {
                title,
                abstract,
                author: 'Anonymous',
                timestamp: new Date().toISOString(),
                upvotes: 0
            });
            
            this.hideUploadModal();
            await this.loadPapers();
            
        } catch (error) {
            ErrorHandler.showError('Failed to upload paper');
        }
    },
    
    async handleFileUpload(file) {
        // Placeholder for file upload logic
        // In the future, implement IPFS or server upload here
        console.log('File selected for upload:', file.name);
        return Promise.resolve();
    },
    
    async loadPapers() {
        try {
            const { result: papers } = await ApiService.makeRequest('read', 'papers');
            const papersFeed = document.getElementById('papers-feed');
            
            if (!papersFeed) return;
            
            papersFeed.innerHTML = papers.map(paper => `
                <div class="neumorph-inset p-4 mb-4">
                    <h3 class="font-bold">${paper.title}</h3>
                    <p class="text-sm text-gray-600">by ${paper.author}</p>
                    <div class="flex items-center mt-2">
                        <button class="neumorph-button p-2 mr-2" onclick="PaperModule.upvotePaper('${paper._id}')">
                            <i class="bi bi-arrow-up"></i>
                        </button>
                        <span>${paper.upvotes || 0} upvotes</span>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            ErrorHandler.showError('Failed to load papers');
        }
    },
    
    async upvotePaper(paperId) {
        try {
            // This is a simplified version - in production, you'd want to track user votes
            const { result: paper } = await ApiService.makeRequest('read', 'papers', null, { _id: paperId });
            await ApiService.makeRequest('update', 'papers', {
                ...paper,
                upvotes: (paper.upvotes || 0) + 1
            });
            await this.loadPapers();
        } catch (error) {
            ErrorHandler.showError('Failed to upvote paper');
        }
    }
};

// Swiper initialization
const initSwiper = () => {
    return new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    });
};

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modules
    ChatModule.init();
    PaperModule.init();
    initSwiper();
    
    // Set up chat polling
    setInterval(() => {
        if (ChatModule.visible) {
            ChatModule.loadMessages();
        }
    }, CONFIG.CHAT_REFRESH_INTERVAL);
    
    // Prevent zooming on scroll (accessibility consideration)
    document.body.addEventListener('wheel', e => {
        if (!e.ctrlKey) return;
        e.preventDefault();
    }, { passive: false });
});

// Export modules for global access (needed for onclick handlers in HTML)
window.ChatModule = ChatModule;
window.PaperModule = PaperModule; 