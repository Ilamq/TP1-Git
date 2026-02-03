# TP1 - Node.js Web Application

## Project Description

<<<<<<< HEAD
This is a simple Node.js web application that serves a dynamic web interface and provides RESTful API endpoints. The application demonstrates basic server setup with Express.js, static file serving, and API route handling. (Edited on main branch to simulate a conflicting change.)
=======
This is a simple Node.js web application that serves a dynamic web interface and provides RESTful API endpoints. The application demonstrates basic server setup with Express.js, static file serving, and API route handling. (Edited on develop branch to simulate a conflicting change.)
>>>>>>> develop

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - Client-side interactivity
- **JSON** - Data interchange format

## Installation Instructions

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\PC-IL\Desktop\TP1  Git"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

4. **Access the application:**
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage Information

### Main Features

- **Home Page** - Interactive web interface with styling
- **API Endpoint** - `/api/hello` endpoint that returns JSON data
- **Fetch Integration** - Client-side JavaScript that communicates with the API

### How to Use

1. Open the application in your browser at `http://localhost:3000`
2. Click the button on the page to fetch data from the `/api/hello` endpoint
3. The response will be displayed in the response section below the button
4. Check the browser console for any debugging information

## Project Structure

```
â”œâ”€â”€ server.js              # Main Node.js Express server
â”œâ”€â”€ package.json           # Project dependencies and metadata
â”œâ”€â”€ .gitignore             # Git ignore rules
â”œâ”€â”€ README.md              # Project documentation
â””â”€â”€ public/
    â”œâ”€â”€ index.html         # HTML markup
    â”œâ”€â”€ style.css          # CSS styling
    â””â”€â”€ script.js          # Client-side JavaScript
```

## Author

**Ilamq**

## Deliverables Checklist

- [x] Express.js server setup and configuration
- [x] Static file serving from `/public` directory
- [x] HTML file with responsive structure
- [x] CSS styling with modern design
- [x] JavaScript client for API interaction
- [x] RESTful API endpoint (`/api/hello`)
- [x] Error handling in frontend and backend
- [x] .gitignore file for Node.js projects
- [x] Complete README documentation
- [x] Project organized with proper directory structure

## License

This project is provided as-is for educational purposes.
