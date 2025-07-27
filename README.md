# 🎨 AI Color Palette Generator

A modern, interactive web application that generates beautiful color palettes using AI-powered suggestions or random generation. Built with vanilla JavaScript, HTML, and CSS, this tool helps designers and developers create cohesive color schemes for their projects.

![Color Palette Generator](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## ✨ Features

- **AI-Powered Generation**: Uses Google's Gemini API to generate contextually relevant color palettes based on your descriptions
- **Smart Fallback**: Automatically falls back to random color generation if AI is unavailable
- **Interactive UI**: Click on colors or copy buttons to copy hex codes to clipboard
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Animated copy confirmation with checkmark icons
- **Professional Labels**: Each color is labeled (Primary, Secondary, Accent, Background, Text) for design consistency
- **Modern Styling**: Clean, modern interface with hover effects and smooth transitions

## 🚀 Live Demo

Open `index.html` in your browser to see the application in action!

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Google Gemini API key (optional, for AI-powered generation)

## 🛠️ Installation & Setup

### Option 1: Quick Start (Random Generation Only)
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start generating random color palettes!

### Option 2: Full Setup with AI Features
1. Clone or download this repository
2. Get a Google Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
3. Open `script.js` and replace `YOUR_API_KEY` with your actual Gemini API key:
   ```javascript
   const GEMINI_API_KEY = "your_actual_api_key_here";
   ```
4. Open `index.html` in your web browser

## 🎯 How to Use

### Generating Palettes
1. **With AI (if configured)**: 
   - Type a description in the input field (e.g., "sunset colors", "ocean theme", "modern tech")
   - Click "Generate Palette" to get AI-suggested colors
   
2. **Random Generation**:
   - Leave the input field empty or type any text
   - Click "Generate Palette" to get random colors

### Copying Colors
- **Click the color swatch**: Copies the hex code to clipboard
- **Click the copy icon**: Copies the hex code to clipboard
- Visual feedback shows a green checkmark when copied successfully

## 🏗️ Project Structure

```
color-palette-generator/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality and API integration
├── LICENSE             # MIT License
└── README.md           # This file
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **Vanilla JavaScript**: ES6+ features, async/await, DOM manipulation
- **Google Gemini API**: AI-powered color generation
- **Font Awesome**: Icons for UI elements

### Key Features Implementation
- **Responsive Grid**: CSS Grid with `auto-fit` for adaptive layouts
- **Clipboard API**: Modern browser clipboard integration
- **Error Handling**: Graceful fallback when API is unavailable
- **Event Delegation**: Efficient event handling for dynamic content

### Browser Compatibility
- Chrome 66+
- Firefox 63+
- Safari 12+
- Edge 79+

## 🎨 Color Palette Structure

Each generated palette includes 5 colors with specific roles:
- **Primary**: Main brand color
- **Secondary**: Supporting color
- **Accent**: Highlight color for calls-to-action
- **Background**: Neutral background color
- **Text**: High-contrast text color

## 🔒 API Configuration

The application uses Google's Gemini API for intelligent color generation. To enable this feature:

1. Obtain an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Replace the placeholder in `script.js`:
   ```javascript
   const GEMINI_API_KEY = "your_api_key_here";
   ```

**Note**: The API key is stored in the frontend code for simplicity. For production use, consider implementing proper backend authentication.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pradyumna AJ**
- GitHub: [@your-username](https://github.com/your-username)

## 🙏 Acknowledgments

- Google Gemini API for AI-powered color generation
- Font Awesome for beautiful icons
- The open-source community for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure your API key is correctly configured (if using AI features)
3. Verify you're using a supported browser
4. Open an issue on GitHub for bugs or feature requests

---

**Happy designing! 🎨✨** 