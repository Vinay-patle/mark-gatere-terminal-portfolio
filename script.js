document.addEventListener('DOMContentLoaded', function() {
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const cursor = document.getElementById('cursor');
    const timestamp = document.getElementById('timestamp');
    const commandItems = document.querySelectorAll('.command-item');
    
    let commandHistory = [];
    let historyIndex = -1;
    let isProcessing = false;

    // Initialize terminal
    function initTerminal() {
        updateTimestamp();
        setInterval(updateTimestamp, 1000);
        
        // Display welcome message
        displayWelcomeMessage();
        
        // Focus input
        terminalInput.focus();
        
        // Add click handlers for command bar
        commandItems.forEach(item => {
            item.addEventListener('click', function() {
                const command = this.textContent;
                terminalInput.value = command;
                executeCommand(command);
            });
        });
    }

    function displayWelcomeMessage() {
        const welcomeText = `gatere@portfolio:~$ welcome

Hi, I'm Mark Gatere, a Software & AI Engineer.

Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.

gatere@portfolio:~$ `;
        
        appendOutput(welcomeText, 'output-text');
    }

    function updateTimestamp() {
        const now = new Date();
        const timeString = now.toLocaleDateString() + ', ' + now.toLocaleTimeString();
        timestamp.textContent = timeString;
    }

    function appendOutput(text, className = 'output-text') {
        const outputDiv = document.createElement('div');
        outputDiv.className = `output-line ${className} fade-in`;
        outputDiv.textContent = text;
        terminalOutput.appendChild(outputDiv);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function executeCommand(command) {
        if (isProcessing) return;
        
        const cmd = command.trim().toLowerCase();
        if (!cmd) return;

        isProcessing = true;
        
        // Echo command
        appendOutput(`gatere@portfolio:~$ ${command}`, 'command-echo');
        
        // Add to history
        if (commandHistory[commandHistory.length - 1] !== command) {
            commandHistory.push(command);
        }
        historyIndex = commandHistory.length;

        // Process command
        setTimeout(() => {
            processCommand(cmd);
            isProcessing = false;
            terminalInput.value = '';
        }, 100);
    }

    function processCommand(cmd) {
        switch (cmd) {
            case 'help':
                showHelp();
                break;
            case 'about':
                showAbout();
                break;
            case 'projects':
                showProjects();
                break;
            case 'skills':
                showSkills();
                break;
            case 'experience':
                showExperience();
                break;
            case 'contact':
                showContact();
                break;
            case 'education':
                showEducation();
                break;
            case 'certifications':
                showCertifications();
                break;
            case 'leadership':
                showLeadership();
                break;
            case 'sudo':
                showSudo();
                break;
            case 'clear':
                clearTerminal();
                break;
            case 'welcome':
                displayWelcomeMessage();
                break;
            default:
                showError(cmd);
        }
        
        // Add prompt for next command
        setTimeout(() => {
            appendOutput('gatere@portfolio:~$ ', 'command-echo');
        }, 200);
    }

    function showHelp() {
        const helpText = `Available commands:

help          - Show this help message
about         - Learn more about me
projects      - View my projects
skills        - See my technical skills
experience    - View my work experience
contact       - Get my contact information
education     - See my educational background
certifications- View my certifications
leadership    - See my leadership experience
sudo          - Restricted access
clear         - Clear the terminal
welcome       - Show welcome message

Type any command to get started!`;
        
        appendOutput(helpText, 'output-text');
    }

    function showAbout() {
        const aboutText = `About Mark Gatere
================

Hi! I'm Mark Gatere, a passionate Software & AI Engineer with expertise in 
building innovative solutions and interactive systems.

I specialize in:
• Full-stack web development
• Artificial Intelligence and Machine Learning
• Interactive user interfaces
• Modern web technologies

I love creating engaging digital experiences that combine technical excellence
with creative design. This interactive terminal portfolio is just one example
of how I like to push the boundaries of traditional web interfaces.

When I'm not coding, you can find me exploring new technologies, contributing
to open-source projects, or sharing knowledge with the developer community.`;
        
        appendOutput(aboutText, 'output-text');
    }

    function showProjects() {
        const projectsText = `My Projects
===========

🚀 Interactive Terminal Portfolio
   A unique portfolio website built as an interactive terminal interface
   Technologies: HTML5, CSS3, JavaScript, 3D CSS transforms

🤖 AI-Powered Chat Interface
   Intelligent chatbot with natural language processing capabilities
   Technologies: Python, TensorFlow, React, Node.js

🌐 Full-Stack Web Applications
   Various web applications with modern architectures
   Technologies: React, Node.js, MongoDB, Express

📱 Mobile-First Responsive Designs
   Mobile-optimized applications with seamless user experiences
   Technologies: React Native, Flutter, Progressive Web Apps

🔧 Open Source Contributions
   Active contributor to various open-source projects
   Focus: Developer tools, UI libraries, AI frameworks

For more details about specific projects, feel free to contact me!`;
        
        appendOutput(projectsText, 'output-text');
    }

    function showSkills() {
        const skillsText = `Technical Skills
===============

Programming Languages:
• JavaScript (ES6+)     ████████████████████ 100%
• Python               ████████████████████ 100%
• TypeScript           ██████████████████   90%
• Java                 ████████████████     80%
• C++                  ██████████████       70%

Frontend Technologies:
• React/Next.js        ████████████████████ 100%
• HTML5/CSS3           ████████████████████ 100%
• Vue.js               ██████████████████   90%
• Angular              ████████████████     80%

Backend Technologies:
• Node.js              ████████████████████ 100%
• Express.js           ████████████████████ 100%
• Django/Flask         ██████████████████   90%
• MongoDB/PostgreSQL   ██████████████████   90%

AI/ML Technologies:
• TensorFlow           ██████████████████   90%
• PyTorch              ████████████████     80%
• Scikit-learn         ██████████████████   90%
• Natural Language Processing  ████████████ 75%

Tools & Platforms:
• Git/GitHub           ████████████████████ 100%
• Docker               ██████████████████   90%
• AWS/Cloud Services   ████████████████     80%
• Linux/Unix           ██████████████████   90%`;
        
        appendOutput(skillsText, 'output-text');
    }

    function showExperience() {
        const experienceText = `Work Experience
===============

Senior Software & AI Engineer | TechCorp Inc.
2022 - Present
• Led development of AI-powered applications serving 100K+ users
• Architected scalable microservices using Node.js and Python
• Implemented machine learning models for predictive analytics
• Mentored junior developers and conducted code reviews

Full-Stack Developer | InnovateLab
2020 - 2022
• Developed responsive web applications using React and Node.js
• Collaborated with UX/UI designers to create intuitive interfaces
• Optimized application performance resulting in 40% faster load times
• Integrated third-party APIs and payment processing systems

Software Developer | StartupXYZ
2019 - 2020
• Built MVP products from concept to deployment
• Worked in agile environment with rapid iteration cycles
• Developed mobile-first applications with React Native
• Participated in product planning and technical decision making

Freelance Developer
2018 - 2019
• Delivered custom web solutions for various clients
• Specialized in e-commerce and business automation tools
• Managed full project lifecycle from requirements to deployment
• Built long-term client relationships through quality delivery`;
        
        appendOutput(experienceText, 'output-text');
    }

    function showContact() {
        const contactText = `Contact Information
==================

📧 Email: mark.gatere@example.com
🌐 Website: https://gateremark.me
💼 LinkedIn: linkedin.com/in/markgatere
🐙 GitHub: github.com/markgatere
🐦 Twitter: @markgatere

📍 Location: Available for remote work worldwide
🕒 Timezone: UTC+3 (EAT)

💬 Preferred contact method: Email
⚡ Response time: Usually within 24 hours

Feel free to reach out for:
• Collaboration opportunities
• Technical discussions
• Project consultations
• Speaking engagements
• Open source contributions

I'm always excited to connect with fellow developers and discuss
innovative projects!`;
        
        appendOutput(contactText, 'output-text');
    }

    function showEducation() {
        const educationText = `Education
=========

🎓 Master of Science in Computer Science
   University of Technology | 2018 - 2020
   Specialization: Artificial Intelligence & Machine Learning
   GPA: 3.8/4.0
   
   Relevant Coursework:
   • Advanced Algorithms and Data Structures
   • Machine Learning and Neural Networks
   • Computer Vision and Image Processing
   • Natural Language Processing
   • Distributed Systems

🎓 Bachelor of Science in Software Engineering
   Tech University | 2014 - 2018
   Magna Cum Laude
   GPA: 3.7/4.0
   
   Relevant Coursework:
   • Software Design and Architecture
   • Database Systems
   • Web Development
   • Mobile Application Development
   • Software Testing and Quality Assurance

📚 Continuous Learning:
   • Online courses in emerging technologies
   • Regular attendance at tech conferences
   • Active participation in developer communities
   • Self-directed learning in AI/ML advancements`;
        
        appendOutput(educationText, 'output-text');
    }

    function showCertifications() {
        const certificationsText = `Certifications
==============

🏆 AWS Certified Solutions Architect - Professional
   Amazon Web Services | 2023
   Credential ID: AWS-PSA-2023-MG001

🏆 Google Cloud Professional Developer
   Google Cloud Platform | 2022
   Credential ID: GCP-PD-2022-MG002

🏆 Microsoft Azure AI Engineer Associate
   Microsoft | 2022
   Credential ID: AZ-AI-2022-MG003

🏆 TensorFlow Developer Certificate
   TensorFlow | 2021
   Credential ID: TF-DEV-2021-MG004

🏆 Certified Kubernetes Administrator (CKA)
   Cloud Native Computing Foundation | 2021
   Credential ID: CKA-2021-MG005

🏆 MongoDB Certified Developer
   MongoDB University | 2020
   Credential ID: MDB-DEV-2020-MG006

🏆 React Developer Certification
   Meta (Facebook) | 2020
   Credential ID: META-REACT-2020-MG007

📈 Continuous Certification:
   I regularly update my certifications to stay current with
   evolving technologies and industry best practices.`;
        
        appendOutput(certificationsText, 'output-text');
    }

    function showLeadership() {
        const leadershipText = `Leadership Experience
===================

👥 Technical Team Lead | TechCorp Inc.
   2022 - Present
   • Leading a team of 8 developers across multiple projects
   • Established coding standards and development workflows
   • Implemented agile methodologies improving delivery by 30%
   • Conducted technical interviews and onboarding processes

🎯 Project Manager | InnovateLab
   2021 - 2022
   • Managed cross-functional teams of 12+ members
   • Coordinated product launches with marketing and sales teams
   • Implemented project tracking systems and KPI dashboards
   • Successfully delivered 15+ projects on time and within budget

🌟 Open Source Maintainer
   2020 - Present
   • Maintaining popular JavaScript libraries with 10K+ stars
   • Managing community contributions and code reviews
   • Organizing virtual meetups and coding workshops
   • Mentoring new contributors to open source projects

🎤 Conference Speaker & Workshop Leader
   2019 - Present
   • Delivered 20+ technical talks at conferences and meetups
   • Conducted workshops on modern web development
   • Created educational content reaching 50K+ developers
   • Organized local developer community events

🏆 Achievements:
   • "Outstanding Leadership Award" - TechCorp Inc. (2023)
   • "Community Builder of the Year" - DevCommunity (2022)
   • "Innovation Champion" - InnovateLab (2021)`;
        
        appendOutput(leadershipText, 'output-text');
    }

    function showSudo() {
        const sudoText = `[sudo] password for gatere: 

Sorry, access denied. You don't have administrative privileges on this system.

This is a read-only portfolio terminal. For administrative access or 
collaboration opportunities, please use the 'contact' command to get in touch!

🔒 Security note: This terminal is for demonstration purposes only.
    No actual system access is provided through this interface.`;
        
        appendOutput(sudoText, 'error-text');
    }

    function clearTerminal() {
        terminalOutput.innerHTML = '';
    }

    function showError(cmd) {
        const errorText = `Command not found: ${cmd}

Type 'help' to see available commands.

Did you mean one of these?
• help     - Show available commands
• about    - Learn more about me
• projects - View my projects
• contact  - Get contact information`;
        
        appendOutput(errorText, 'error-text');
    }

    // Event listeners
    terminalInput.addEventListener('keydown', function(e) {
        if (isProcessing) {
            e.preventDefault();
            return;
        }

        if (e.key === 'Enter') {
            e.preventDefault();
            const command = this.value.trim();
            if (command) {
                executeCommand(command);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Simple tab completion
            const input = this.value.toLowerCase();
            const commands = ['help', 'about', 'projects', 'skills', 'experience', 'contact', 'education', 'certifications', 'leadership', 'sudo', 'clear', 'welcome'];
            const matches = commands.filter(cmd => cmd.startsWith(input));
            if (matches.length === 1) {
                this.value = matches[0];
            }
        }
    });

    // Keep input focused
    document.addEventListener('click', function() {
        terminalInput.focus();
    });

    // Prevent context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Initialize
    initTerminal();
});
