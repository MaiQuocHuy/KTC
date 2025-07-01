// Simple Dashboard Application
class Dashboard {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    this.currentFilter = "all";
    this.editType = null;
    this.editId = null;
    this.noteColors = [
      "note-color-1",
      "note-color-2",
      "note-color-3",
      "note-color-4",
      "note-color-5",
      "note-color-6",
    ];

    this.init();
  }

  init() {
    this.setupEvents();
    this.initTheme();
    this.startClock();
    this.updateGreeting();
    this.renderTodos();
    this.renderNotes();
    this.updateStats();
  }

  // Setup Event Listeners
  setupEvents() {
    // Theme toggle
    document.getElementById("themeToggle").onclick = () => this.toggleTheme();

    // Todo events
    document.getElementById("addTodoBtn").onclick = () => this.addTodo();
    document.getElementById("todoInput").onkeypress = (e) => {
      if (e.key === "Enter") this.addTodo();
    };

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.onclick = (e) => this.setFilter(e.target.dataset.filter);
    });

    // Note events
    document.getElementById("addNoteBtn").onclick = () => this.addNote();
    document.getElementById("noteInput").onkeypress = (e) => {
      if (e.key === "Enter" && e.ctrlKey) this.addNote();
    };

    // Modal events
    document.getElementById("closeModal").onclick = () => this.closeModal();
    document.getElementById("cancelEdit").onclick = () => this.closeModal();
    document.getElementById("saveEdit").onclick = () => this.saveEdit();

    // Close modal on background click
    document.getElementById("editModal").onclick = (e) => {
      if (e.target.id === "editModal") this.closeModal();
    };

    // Keyboard shortcuts
    document.onkeydown = (e) => this.handleKeys(e);
  }

  // Theme Management
  initTheme() {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
    this.updateThemeIcon(theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateThemeIcon(newTheme);
  }

  updateThemeIcon(theme) {
    document.getElementById("themeToggle").textContent =
      theme === "dark" ? "☀️" : "🌙";
  }

  // Clock and Greeting
  startClock() {
    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      document.getElementById("clock").textContent = time;
    };

    updateClock();
    setInterval(updateClock, 1000);
  }

  updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "🌅 Good Morning!";
    } else if (hour < 17) {
      greeting = "☀️ Good Afternoon!";
    } else if (hour < 21) {
      greeting = "🌆 Good Evening!";
    } else {
      greeting = "🌙 Good Night!";
    }

    document.getElementById("greeting").textContent = greeting;
  }

  // Todo Management
  addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    const error = document.getElementById("todoError");

    // Clear error
    error.textContent = "";

    // Validate
    if (!text) {
      this.showError("todoError", "Please enter a task!");
      input.focus();
      return;
    }

    if (text.length > 100) {
      this.showError("todoError", "Task must be less than 100 characters!");
      return;
    }

    // Create todo
    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.todos.unshift(todo);
    this.saveTodos();
    this.renderTodos();
    this.updateStats();

    // Clear input
    input.value = "";
  }

  toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
      this.renderTodos();
      this.updateStats();
    }
  }

  deleteTodo(id) {
    if (confirm("Delete this task?")) {
      this.todos = this.todos.filter((t) => t.id !== id);
      this.saveTodos();
      this.renderTodos();
      this.updateStats();
    }
  }

  editTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      this.openModal("todo", id, todo.text);
    }
  }

  setFilter(filter) {
    this.currentFilter = filter;

    // Update buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    this.renderTodos();
  }

  getFilteredTodos() {
    if (this.currentFilter === "completed") {
      return this.todos.filter((todo) => todo.completed);
    } else if (this.currentFilter === "incomplete") {
      return this.todos.filter((todo) => !todo.completed);
    } else {
      return this.todos;
    }
  }

  renderTodos() {
    const list = document.getElementById("todoList");
    const todos = this.getFilteredTodos();

    if (todos.length === 0) {
      list.innerHTML = `
        <li class="todo-item" style="justify-content: center; color: var(--text-muted); font-style: italic;">
          ${
            this.currentFilter === "all"
              ? "No tasks yet. Add one above!"
              : `No ${this.currentFilter} tasks.`
          }
        </li>
      `;
      return;
    }

    list.innerHTML = todos
      .map(
        (todo) => `
      <li class="todo-item ${todo.completed ? "completed" : ""}" data-id="${
          todo.id
        }">
        <input 
          type="checkbox" 
          class="todo-checkbox" 
          ${todo.completed ? "checked" : ""}
          onchange="dashboard.toggleTodo(${todo.id})"
        >
        <span class="todo-text">${this.escapeHtml(todo.text)}</span>
        <div class="todo-actions">
          <button class="edit-btn" onclick="dashboard.editTodo(${
            todo.id
          })">Edit</button>
          <button class="delete-btn" onclick="dashboard.deleteTodo(${
            todo.id
          })">Delete</button>
        </div>
      </li>
    `
      )
      .join("");
  }

  // Notes Management
  addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();
    const error = document.getElementById("noteError");

    // Clear error
    error.textContent = "";

    // Validate
    if (!text) {
      this.showError("noteError", "Please enter a note!");
      input.focus();
      return;
    }

    if (text.length > 200) {
      this.showError("noteError", "Note must be less than 200 characters!");
      return;
    }

    // Create note
    const note = {
      id: Date.now(),
      text: text,
      color: this.getRandomColor(),
      createdAt: new Date().toISOString(),
    };

    this.notes.unshift(note);
    this.saveNotes();
    this.renderNotes();
    this.updateStats();

    // Clear input
    input.value = "";
  }

  deleteNote(id) {
    if (confirm("Delete this note?")) {
      this.notes = this.notes.filter((n) => n.id !== id);
      this.saveNotes();
      this.renderNotes();
      this.updateStats();
    }
  }

  editNote(id) {
    const note = this.notes.find((n) => n.id === id);
    if (note) {
      this.openModal("note", id, note.text);
    }
  }

  getRandomColor() {
    return this.noteColors[Math.floor(Math.random() * this.noteColors.length)];
  }

  renderNotes() {
    const grid = document.getElementById("notesGrid");

    if (this.notes.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); font-style: italic; padding: 2rem;">
          No notes yet. Create your first note above!
        </div>
      `;
      return;
    }

    grid.innerHTML = this.notes
      .map(
        (note) => `
      <div class="note-item ${note.color}" data-id="${note.id}">
        <div class="note-text">${this.escapeHtml(note.text).replace(
          /\n/g,
          "<br>"
        )}</div>
        <div class="note-actions">
          <button class="note-edit-btn" onclick="dashboard.editNote(${
            note.id
          })">Edit</button>
          <button class="note-delete-btn" onclick="dashboard.deleteNote(${
            note.id
          })">Delete</button>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Modal Management
  openModal(type, id, text) {
    this.editType = type;
    this.editId = id;

    const modal = document.getElementById("editModal");
    const title = document.getElementById("modalTitle");
    const textarea = document.getElementById("editTextarea");

    title.textContent = type === "todo" ? "Edit Task" : "Edit Note";
    textarea.value = text;
    textarea.focus();

    modal.classList.add("active");
  }

  closeModal() {
    const modal = document.getElementById("editModal");
    modal.classList.remove("active");

    this.editType = null;
    this.editId = null;
  }

  saveEdit() {
    const textarea = document.getElementById("editTextarea");
    const newText = textarea.value.trim();

    if (!newText) {
      alert("Please enter some text!");
      textarea.focus();
      return;
    }

    if (this.editType === "todo") {
      if (newText.length > 100) {
        alert("Task must be less than 100 characters!");
        return;
      }
      const todo = this.todos.find((t) => t.id === this.editId);
      if (todo) {
        todo.text = newText;
        this.saveTodos();
        this.renderTodos();
      }
    } else if (this.editType === "note") {
      if (newText.length > 200) {
        alert("Note must be less than 200 characters!");
        return;
      }
      const note = this.notes.find((n) => n.id === this.editId);
      if (note) {
        note.text = newText;
        this.saveNotes();
        this.renderNotes();
      }
    }

    this.closeModal();
  }

  // Utility Functions
  showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    setTimeout(() => {
      element.textContent = "";
    }, 3000);
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  updateStats() {
    // Todo stats
    const total = this.todos.length;
    const completed = this.todos.filter((t) => t.completed).length;
    const todoCount = document.getElementById("todoCount");

    if (total === 0) {
      todoCount.textContent = "0 tasks";
    } else {
      todoCount.textContent = `${total} total, ${completed} completed`;
    }

    // Note stats
    const noteTotal = this.notes.length;
    const noteCount = document.getElementById("noteCount");
    noteCount.textContent = `${noteTotal} note${noteTotal !== 1 ? "s" : ""}`;
  }

  // Keyboard Shortcuts
  handleKeys(e) {
    // Close modal with Escape
    if (e.key === "Escape") {
      this.closeModal();
    }

    // Focus todo input with Ctrl+T
    if ((e.ctrlKey || e.metaKey) && e.key === "t") {
      e.preventDefault();
      document.getElementById("todoInput").focus();
    }

    // Focus note input with Ctrl+N
    if ((e.ctrlKey || e.metaKey) && e.key === "n") {
      e.preventDefault();
      document.getElementById("noteInput").focus();
    }

    // Toggle theme with Ctrl+D
    if ((e.ctrlKey || e.metaKey) && e.key === "d") {
      e.preventDefault();
      this.toggleTheme();
    }
  }

  // Data Storage
  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  saveNotes() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  // Export Data (Bonus)
  exportData() {
    const data = {
      todos: this.todos,
      notes: this.notes,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dashboard-backup-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.todos && data.notes) {
          if (confirm("This will replace all current data. Continue?")) {
            this.todos = data.todos;
            this.notes = data.notes;
            this.saveTodos();
            this.saveNotes();
            this.renderTodos();
            this.renderNotes();
            this.updateStats();
            alert("Data imported successfully!");
          }
        } else {
          alert("Invalid backup file format!");
        }
      } catch (error) {
        alert("Error reading backup file!");
      }
    };
    reader.readAsText(file);
  }

  clearAllData() {
    if (confirm("Delete ALL tasks and notes? This cannot be undone!")) {
      this.todos = [];
      this.notes = [];
      this.saveTodos();
      this.saveNotes();
      this.renderTodos();
      this.renderNotes();
      this.updateStats();
      alert("All data cleared!");
    }
  }
}

// Initialize the dashboard when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.dashboard = new Dashboard();
});
