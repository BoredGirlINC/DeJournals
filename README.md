# DeJournals - Decentralized Science Platform

DeJournals is a modern, decentralized platform for scientific research paper sharing and discussion. It aims to democratize access to scientific knowledge while ensuring credibility through community validation.

## Features

- **Decentralized Paper Storage**: Research papers are stored using IPFS, ensuring permanent and distributed access
- **Real-time Global Chat**: Connect with researchers worldwide through our integrated chat system
- **AI-Generated Summaries**: Automatic abstracts and briefs for research submissions
- **Transparent Peer Review**: Community-driven validation with upvotes and XP-based credibility tracking
- **Web3 Integration**: Decentralized user profiles and reputation tracking

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- A modern web browser
- API key for the DeJournals backend (for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dejournals.git
   cd dejournals
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root
   - Add your API key:
     ```
     DEJOURNALS_API_KEY=your_api_key_here
     ```
   - Note: Never commit the `.env` file to version control

4. Start a local development server:
   ```bash
   # If using Python
   python -m http.server 8000
   
   # If using Node.js
   npx serve
   ```

5. Open `http://localhost:8000` in your browser

## Usage

### Uploading a Paper

1. Click the "Upload Research" button in the navigation bar
2. Fill in the paper details:
   - Title
   - Abstract
   - PDF file
3. Submit the form

### Using the Chat

1. Click "Live Chat" in the navigation
2. Type your message in the input field
3. Press Enter or click the send button

### Browsing Papers

- View latest papers in the "Latest Research Papers" section
- Use upvotes to support valuable research
- Click on papers to view full details

## Project Structure

```
dejournals/
├── index.html          # Main HTML file
├── scripts/
│   └── main.js        # Modularized JavaScript code
├── .env               # Environment variables (not in version control)
├── .gitignore         # Git ignore rules
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Development

The project uses a modular JavaScript architecture with the following key components:

- `ChatModule`: Handles real-time chat functionality
- `PaperModule`: Manages paper uploads and display
- `ApiService`: Centralizes API communication
- `ErrorHandler`: Provides consistent error handling

### API Integration

The platform integrates with a MongoDB-based backend through a REST API. Key endpoints:

- `/messages`: Chat message management
- `/papers`: Research paper management

### Environment Variables

Required environment variables:

- `DEJOURNALS_API_KEY`: API key for backend access

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Security Considerations

- API keys are stored in environment variables
- File uploads are validated for type and size
- User input is sanitized before display
- CORS policies are enforced

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, reach out through:
- GitHub Issues
- Discord Community
- Email: support@dejournals.com
