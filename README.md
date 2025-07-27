# Mark Gatere - Interactive Terminal Portfolio

A clone of the interactive terminal-style portfolio website from https://gateremark.me/

## Overview

This project recreates an interactive "AI powered" portfolio terminal interface where users can type commands to navigate through different sections of Mark Gatere's portfolio. The design mimics a command-line interface with a modern, clean aesthetic.

## Features

- **Interactive Terminal Interface**: Real-time command processing with terminal-style output
- **3D Interactive Header**: CSS 3D transforms on the "Mark Gatere" title
- **Command Bar**: Clickable command shortcuts at the top
- **Multiple Commands**: help, about, projects, skills, experience, contact, education, certifications, leadership, sudo, clear, welcome
- **Command History**: Navigate previous commands using up/down arrow keys
- **Tab Completion**: Basic tab completion for commands
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Timestamp**: Live updating timestamp display

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with 3D transforms and animations
- **JavaScript**: Interactive functionality and command processing
- **Google Fonts**: JetBrains Mono for authentic terminal typography

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── script.js           # Interactive terminal functionality
└── README.md           # Project documentation
```

## Available Commands

- `help` - Show available commands
- `about` - Learn more about Mark Gatere
- `projects` - View projects portfolio
- `skills` - See technical skills with progress bars
- `experience` - View work experience timeline
- `contact` - Get contact information
- `education` - See educational background
- `certifications` - View professional certifications
- `leadership` - See leadership experience
- `sudo` - Restricted access (demo)
- `clear` - Clear the terminal screen
- `welcome` - Show welcome message

## How to Run

### Option 1: Direct File Access
Open `index.html` directly in your web browser.

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then visit http://localhost:8000
```

## Usage

1. **Type Commands**: Click in the terminal area and type any available command
2. **Click Command Bar**: Click on any command in the top command bar for quick access
3. **Command History**: Use up/down arrow keys to navigate command history
4. **Tab Completion**: Press Tab to auto-complete commands
5. **Clear Screen**: Use the `clear` command to reset the terminal

## Design Features

- **Terminal Aesthetic**: Authentic command-line interface design
- **Neon Green Text**: Classic terminal green (#39ff14) on black background
- **Blinking Cursor**: Animated cursor for authentic terminal feel
- **Smooth Animations**: Fade-in effects for new content
- **3D Header Effect**: Interactive 3D transform on hover
- **Responsive Layout**: Mobile-friendly responsive design

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Performance

- Lightweight vanilla JavaScript implementation
- No external dependencies except Google Fonts
- Fast loading and responsive interactions
- Optimized for smooth animations

## Customization

The portfolio content can be easily customized by modifying the command functions in `script.js`. Each command has its own function that returns formatted text content.

## License

This is a portfolio clone project for educational purposes.
