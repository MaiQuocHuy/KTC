# 📝 Simple To-Do & Notes Dashboard

A clean, responsive web application built with vanilla HTML, CSS, and JavaScript that combines task management and note-taking functionality with a simple, intuitive interface.

![Dashboard Preview](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Features

### ✅ **To-Do List Management**

- ➕ Add new tasks with input validation
- ✅ Mark tasks as complete/incomplete
- 🗑️ Delete tasks with confirmation
- ✏️ Edit existing tasks
- 🔍 Filter tasks (All, Completed, Incomplete)
- 📊 Real-time task statistics

### 📌 **Sticky Notes**

- 📝 Create colorful sticky notes
- 🎨 Random color assignment from preset palette
- ✏️ Edit notes inline
- 🗑️ Delete notes with confirmation
- 📱 Responsive grid layout

### 🎨 **Theme Management**

- 🌙 Dark mode toggle
- ☀️ Light mode (default)
- 💾 Persistent theme preference
- 🎯 Smooth transitions between themes

### ⏰ **Live Dashboard Elements**

- 🕐 Real-time clock display
- 🌅 Dynamic greeting based on time of day
- 📱 Responsive design for all devices

### 💾 **Data Persistence**

- 📂 Local storage integration
- 🔄 Auto-save functionality
- 💿 Data export/import (bonus feature)
- 🗑️ Clear all data option

### ⌨️ **Keyboard Shortcuts**

- `Ctrl/Cmd + T` - Focus on todo input
- `Ctrl/Cmd + N` - Focus on note input
- `Ctrl/Cmd + D` - Toggle theme
- `Escape` - Close modal
- `Enter` - Add todo
- `Ctrl + Enter` - Add note

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or frameworks required!

### Installation

1. Clone or download the project files
2. Ensure all files are in the same directory:
   ```
   project-folder/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```
3. Open `index.html` in your web browser
4. Start organizing your tasks and notes!

### File Structure

```
📁 To-Do & Notes Dashboard/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styling and theme management
├── ⚡ script.js           # Application logic and functionality
└── 📖 README.md           # Project documentation
```

## 🎯 Usage Guide

### Adding Tasks

1. Type your task in the "Add a new task..." input field
2. Click "Add Task" or press `Enter`
3. Your task appears in the list below

### Managing Tasks

- **Complete:** Click the checkbox next to any task
- **Edit:** Click the "✏️ Edit" button to modify task text
- **Delete:** Click the "🗑️ Delete" button to remove a task
- **Filter:** Use the filter buttons to view All, Completed, or Incomplete tasks

### Creating Notes

1. Type your note in the textarea (supports multi-line text)
2. Click "Add Note" or press `Ctrl + Enter`
3. Your note appears as a colored sticky note

### Managing Notes

- **Edit:** Click the "✏️" button on any note
- **Delete:** Click the "🗑️" button to remove a note
- **Colors:** Notes automatically get random colors from a preset palette

### Theme Switching

- Click the 🌙/☀️ button in the header to toggle between light and dark themes
- Your preference is automatically saved

## 🛠️ Technical Implementation

### Simple Architecture

The application uses a **straightforward class-based design** with:

- **Dashboard Class**: Main application controller
- **Simple event handling**: Direct event assignment
- **Clean code structure**: Easy to read and understand

### Key Technologies

- **HTML5**: Simple semantic markup
- **CSS3**:
  - CSS Variables for theming
  - CSS Grid and Flexbox for layouts
  - Clean, simple styling
- **JavaScript ES6**:
  - Simple class structure
  - Basic event handling
  - Local Storage API

### Data Structure

```javascript
// Todo Structure
{
    id: Number,           // Unique timestamp-based ID
    text: String,         // Task description
    completed: Boolean,   // Completion status
    createdAt: String     // ISO timestamp
}

// Note Structure
{
    id: Number,           // Unique timestamp-based ID
    text: String,         // Note content
    color: String,        // CSS class for color
    createdAt: String     // ISO timestamp
}
```

### Local Storage Schema

```javascript
// Stored data keys
localStorage.setItem("todos", JSON.stringify(todosArray));
localStorage.setItem("notes", JSON.stringify(notesArray));
localStorage.setItem("theme", "light" | "dark");
localStorage.setItem("hasVisited", "true");
```

## 🎨 Customization

### Adding New Note Colors

To add more note colors, edit the CSS and JavaScript:

**CSS** (`style.css`):

```css
.note-color-7 {
  background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

**JavaScript** (`script.js`):

```javascript
this.noteColors = [...existing colors..., 'note-color-7'];
```

### Modifying Themes

Themes are controlled by CSS custom properties in `:root` and `[data-theme="dark"]`:

```css
:root {
  --primary-color: #your-primary-color;
  --bg-primary: #your-background-color;
  /* ... other variables */
}
```

### Changing Validation Rules

Modify the validation in the `addTodo()` and `addNote()` methods:

```javascript
// Example: Change max task length
if (text.length > 200) {
  // Changed from 100
  this.showError("todoError", "Task must be less than 200 characters!");
  return;
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints at:

- **Desktop**: 1200px+ (Two-column grid)
- **Tablet**: 768px-1199px (Two-column grid, adjusted spacing)
- **Mobile**: 480px-767px (Single column, stacked layout)
- **Small Mobile**: <480px (Optimized for small screens)

### Mobile-Specific Features

- Collapsible header elements
- Touch-friendly button sizes
- Optimized modal sizing
- Accessible form controls

## 🔧 Browser Compatibility

| Browser           | Minimum Version | Notes                   |
| ----------------- | --------------- | ----------------------- |
| Chrome            | 60+             | Full support            |
| Firefox           | 55+             | Full support            |
| Safari            | 12+             | Full support            |
| Edge              | 79+             | Full support            |
| Internet Explorer | Not supported   | Uses modern JS features |

### Required Features

- CSS Custom Properties
- ES6 Classes
- Template Literals
- Local Storage API
- CSS Grid and Flexbox

## 🚨 Error Handling

The application includes comprehensive error handling:

### Input Validation

- ❌ Empty input prevention
- ❌ Maximum length enforcement
- ❌ Whitespace-only input rejection

### User Feedback

- ✅ Success indicators (green border flash)
- ❌ Error messages with auto-clear
- ⚠️ Confirmation dialogs for destructive actions

### Data Safety

- 💾 Automatic local storage saves
- 🔄 Data validation on load
- 🛡️ HTML escaping for XSS prevention

## 🎁 Bonus Features

### 1. Data Export/Import

```javascript
// Export your data
dashboard.exportData(); // Downloads JSON backup

// Import data (add file input to HTML)
dashboard.importData(file); // Restores from JSON backup
```

### 2. Sample Data

- First-time visitors get sample tasks and notes
- Demonstrates all features immediately
- Can be skipped if desired

### 3. Keyboard Shortcuts

Full keyboard navigation support for power users

### 4. Advanced Filtering

- Real-time task statistics
- Visual completion indicators
- Filter state persistence

## 🐛 Troubleshooting

### Common Issues

**Tasks/Notes not saving:**

- Check if localStorage is enabled in your browser
- Ensure you're not in private/incognito mode

**Theme not switching:**

- Check browser console for JavaScript errors
- Verify CSS custom properties support

**Layout issues on mobile:**

- Clear browser cache
- Check if device supports CSS Grid

### Debug Mode

To enable debug logging, add this to the browser console:

```javascript
localStorage.setItem("debug", "true");
```

## 🔮 Future Enhancements

Potential improvements for future versions:

- 🔍 Search functionality for tasks and notes
- 📅 Due dates and reminders
- 🏷️ Categories and tags
- 👥 Sharing capabilities
- 📊 Analytics and productivity insights
- 🔄 Sync across devices
- 📱 Progressive Web App (PWA) support
- 🎯 Drag and drop reordering

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 👨‍💻 Author

Created as a JavaScript fundamentals project demonstrating:

- DOM manipulation
- Event handling
- Local storage
- Modern CSS techniques
- Responsive design
- Accessibility best practices

## 🤝 Contributing

Feel free to fork this project and submit improvements! Areas for contribution:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ♿ Accessibility improvements

---

**Built with ❤️ using Vanilla JavaScript - No frameworks required!** 🚀
