const notesContainer = document.getElementById('notes-container');
const addNoteButton = document.getElementById('add-note');
const themeToggleButton = document.getElementById('theme-toggle');

// Load notes from localStorage
const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesContainer.innerHTML = '';
  notes.forEach((note) =>
    createNoteElement(note.text, note.color, note.textColor, note.isBold, note.isItalic, note.isUnderlined, note.fontSize, note.fontFamily)
  );
};

// Save notes to localStorage
const saveNotes = () => {
  const notes = Array.from(document.querySelectorAll('.note textarea')).map((textarea) => ({
    text: textarea.value,
    color: textarea.closest('.note').style.backgroundColor,
    textColor: textarea.style.color,
    isBold: textarea.style.fontWeight === 'bold',
    isItalic: textarea.style.fontStyle === 'italic',
    isUnderlined: textarea.style.textDecoration === 'underline',
    fontSize: textarea.style.fontSize,
    fontFamily: textarea.style.fontFamily
  }));
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Create a new note
const createNoteElement = (text = '', color = '#fff', textColor = '#000', isBold = false, isItalic = false, isUnderlined = false, fontSize = '16px', fontFamily = 'Arial') => {
  const note = document.createElement('div');
  note.classList.add('note');
  note.style.backgroundColor = color;

  note.innerHTML = `
    <div class="note-options">
      <button class="color-picker-emoji">🎨</button>
      <button class="text-color-picker-emoji">🖍️</button>
      <button class="bold-btn">B</button>
      <button class="italic-btn">I</button>
      <button class="underline-btn">U</button>
      <button class="increase-font-size">A+</button>
      <button class="decrease-font-size">A-</button>
      <div class="font-family-dropdown font-family-picker">
        <select class="font-family-select">
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Roboto">Roboto</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Open Sans">Open Sans</option>
        </select>
      </div>
    </div>
    <textarea
      style="color: ${textColor}; font-weight: ${isBold ? 'bold' : 'normal'}; font-style: ${isItalic ? 'italic' : 'normal'}; text-decoration: ${isUnderlined ? 'underline' : 'none'}; font-size: ${fontSize}; font-family: ${fontFamily};">
      ${text}
    </textarea>
    <div class="actions">
      <button class="edit-note">Edit</button>
      <button class="save-note" style="display: none;">Save</button>
      <button class="delete-note">Delete</button>
    </div>
  `;

  const textarea = note.querySelector('textarea');
  const colorPickerEmoji = note.querySelector('.color-picker-emoji');
  const textColorPickerEmoji = note.querySelector('.text-color-picker-emoji');
  const boldBtn = note.querySelector('.bold-btn');
  const italicBtn = note.querySelector('.italic-btn');
  const underlineBtn = note.querySelector('.underline-btn');
  const deleteBtn = note.querySelector('.delete-note');
  const editBtn = note.querySelector('.edit-note');
  const saveBtn = note.querySelector('.save-note');
  const increaseFontSizeBtn = note.querySelector('.increase-font-size');
  const decreaseFontSizeBtn = note.querySelector('.decrease-font-size');
  const fontFamilyPickerBtn = note.querySelector('.font-family-picker');
  const fontFamilyDropdown = note.querySelector('.font-family-dropdown');
  const fontFamilySelect = note.querySelector('.font-family-select');

  // Toggle Font Family Dropdown
  fontFamilyPickerBtn.addEventListener('click', () => {
    fontFamilyDropdown.classList.toggle('show');
  });

  // Apply selected font family
  fontFamilySelect.addEventListener('change', (e) => {
    textarea.style.fontFamily = e.target.value;
    saveNotes();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!fontFamilyPickerBtn.contains(e.target) && !fontFamilyDropdown.contains(e.target)) {
      fontFamilyDropdown.classList.remove('show');
    }
  });

  // Bold Button
  boldBtn.addEventListener('click', () => {
    textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
    saveNotes();
  });

  // Italic Button
  italicBtn.addEventListener('click', () => {
    textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
    saveNotes();
  });

  // Underline Button
  underlineBtn.addEventListener('click', () => {
    textarea.style.textDecoration = textarea.style.textDecoration === 'underline' ? 'none' : 'underline';
    saveNotes();
  });

  // Increase Font Size
  increaseFontSizeBtn.addEventListener('click', () => {
    let currentFontSize = parseInt(textarea.style.fontSize);
    currentFontSize += 2; // Increase by 2px
    textarea.style.fontSize = currentFontSize + 'px';
    saveNotes();
  });

  // Decrease Font Size
  decreaseFontSizeBtn.addEventListener('click', () => {
    let currentFontSize = parseInt(textarea.style.fontSize);
    if (currentFontSize > 8) { // Prevent font size from going below 8px
      currentFontSize -= 2; // Decrease by 2px
      textarea.style.fontSize = currentFontSize + 'px';
      saveNotes();
    }const notesContainer = document.getElementById('notes-container');
    const addNoteButton = document.getElementById('add-note');
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Load notes from localStorage
    const loadNotes = () => {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      notesContainer.innerHTML = '';
      notes.forEach((note) =>
        createNoteElement(note.text, note.color, note.textColor, note.isBold, note.isItalic, note.isUnderlined, note.fontSize, note.fontFamily)
      );
    };
    
    // Save notes to localStorage
    const saveNotes = () => {
      const notes = Array.from(document.querySelectorAll('.note textarea')).map((textarea) => ({
        text: textarea.value,
        color: textarea.closest('.note').style.backgroundColor,
        textColor: textarea.style.color,
        isBold: textarea.style.fontWeight === 'bold',
        isItalic: textarea.style.fontStyle === 'italic',
        isUnderlined: textarea.style.textDecoration === 'underline',
        fontSize: textarea.style.fontSize,
        fontFamily: textarea.style.fontFamily
      }));
      localStorage.setItem('notes', JSON.stringify(notes));
    };
    
    // Create a new note
    const createNoteElement = (text = '', color = '#fff', textColor = '#000', isBold = false, isItalic = false, isUnderlined = false, fontSize = '16px', fontFamily = 'Arial') => {
      const note = document.createElement('div');
      note.classList.add('note');
      note.style.backgroundColor = color;
    
      note.innerHTML = `
        <div class="note-options">
          <button class="color-picker-emoji">🎨</button>
          <button class="text-color-picker-emoji">🖍️</button>
          <button class="bold-btn">B</button>
          <button class="italic-btn">I</button>
          <button class="underline-btn">U</button>
          <button class="increase-font-size">A+</button>
          <button class="decrease-font-size">A-</button>
          <div class="font-family-dropdown font-family-picker">
            <select class="font-family-select">
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Verdana">Verdana</option>
              <option value="Roboto">Roboto</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
              <option value="Open Sans">Open Sans</option>
            </select>
          </div>
        </div>
        <textarea
          style="color: ${textColor}; font-weight: ${isBold ? 'bold' : 'normal'}; font-style: ${isItalic ? 'italic' : 'normal'}; text-decoration: ${isUnderlined ? 'underline' : 'none'}; font-size: ${fontSize}; font-family: ${fontFamily};">
          ${text}
        </textarea>
        <div class="actions">
          <button class="edit-note">Edit</button>
          <button class="save-note" style="display: none;">Save</button>
          <button class="delete-note">Delete</button>
        </div>
      `;
    
      const textarea = note.querySelector('textarea');
      const colorPickerEmoji = note.querySelector('.color-picker-emoji');
      const textColorPickerEmoji = note.querySelector('.text-color-picker-emoji');
      const boldBtn = note.querySelector('.bold-btn');
      const italicBtn = note.querySelector('.italic-btn');
      const underlineBtn = note.querySelector('.underline-btn');
      const deleteBtn = note.querySelector('.delete-note');
      const editBtn = note.querySelector('.edit-note');
      const saveBtn = note.querySelector('.save-note');
      const increaseFontSizeBtn = note.querySelector('.increase-font-size');
      const decreaseFontSizeBtn = note.querySelector('.decrease-font-size');
      const fontFamilyPickerBtn = note.querySelector('.font-family-picker');
      const fontFamilyDropdown = note.querySelector('.font-family-dropdown');
      const fontFamilySelect = note.querySelector('.font-family-select');
    
      // Toggle Font Family Dropdown
      fontFamilyPickerBtn.addEventListener('click', () => {
        fontFamilyDropdown.classList.toggle('show');
      });
    
      // Apply selected font family
      fontFamilySelect.addEventListener('change', (e) => {
        textarea.style.fontFamily = e.target.value;
        saveNotes();
      });
    
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!fontFamilyPickerBtn.contains(e.target) && !fontFamilyDropdown.contains(e.target)) {
          fontFamilyDropdown.classList.remove('show');
        }
      });
    
      // Bold Button
      boldBtn.addEventListener('click', () => {
        textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
        saveNotes();
      });
    
      // Italic Button
      italicBtn.addEventListener('click', () => {
        textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
        saveNotes();
      });
    
      // Underline Button
      underlineBtn.addEventListener('click', () => {
        textarea.style.textDecoration = textarea.style.textDecoration === 'underline' ? 'none' : 'underline';
        saveNotes();
      });
    
      // Increase Font Size
      increaseFontSizeBtn.addEventListener('click', () => {
        let currentFontSize = parseInt(textarea.style.fontSize);
        currentFontSize += 2; // Increase by 2px
        textarea.style.fontSize = currentFontSize + 'px';
        saveNotes();
      });
    
      // Decrease Font Size
      decreaseFontSizeBtn.addEventListener('click', () => {
        let currentFontSize = parseInt(textarea.style.fontSize);
        if (currentFontSize > 8) { // Prevent font size from going below 8px
          currentFontSize -= 2; // Decrease by 2px
          textarea.style.fontSize = currentFontSize + 'px';
          saveNotes();
        }
      });
    
      // Color Picker (Background Color)
      colorPickerEmoji.addEventListener('click', () => {
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.value = note.style.backgroundColor;
    
        colorPicker.addEventListener('input', (e) => {
          note.style.backgroundColor = e.target.value;
          saveNotes();
        });
    
        colorPicker.click();
      });
    
      // Text Color Picker
      textColorPickerEmoji.addEventListener('click', () => {
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.value = textarea.style.color;
    
        colorPicker.addEventListener('input', (e) => {
          textarea.style.color = e.target.value;
          saveNotes();
        });
    
        colorPicker.click();
      });
    
      // Edit Note
      editBtn.addEventListener('click', () => {
        textarea.disabled = false;
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
      });
    
      // Save Note
      saveBtn.addEventListener('click', () => {
        textarea.disabled = true;
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline-block';
        saveNotes();
      });
    
      // Delete Note
      deleteBtn.addEventListener('click', () => {
        note.remove();
        saveNotes();
      });
    
      // Save Notes on Input
      textarea.addEventListener('input', saveNotes);
    
      notesContainer.appendChild(note);
    };
    
    // Add New Note
    addNoteButton.addEventListener('click', () => createNoteElement());
    
    // Load Notes when the page loads
    window.addEventListener('load', loadNotes);
    
    // Light/Dark Mode toggle logic
    const loadTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.querySelector('header').classList.add(savedTheme);
      } else {
        // Default to light mode
        document.body.classList.add('light-mode');
        document.querySelector('header').classList.add('light-mode');
      }
    };
    
    themeToggleButton.addEventListener('click', () => {
      if (document.body.classList.contains('light-mode')) {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.querySelector('header').classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelector('header').classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
      }
    });
    
    // Load theme on page load
    window.addEventListener('load', loadTheme);
    
  });

  // Color Picker (Background Color)
  colorPickerEmoji.addEventListener('click', () => {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = note.style.backgroundColor;

    colorPicker.addEventListener('input', (e) => {
      note.style.backgroundColor = e.target.value;
      saveNotes();
    });

    colorPicker.click();
  });

  // Text Color Picker
  textColorPickerEmoji.addEventListener('click', () => {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = textarea.style.color;

    colorPicker.addEventListener('input', (e) => {
      textarea.style.color = e.target.value;
      saveNotes();
    });

    colorPicker.click();
  });

  // Edit Note
  editBtn.addEventListener('click', () => {
    textarea.disabled = false;
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
  });

  // Save Note
  saveBtn.addEventListener('click', () => {
    textarea.disabled = true;
    saveBtn.style.display = 'none';
    editBtn.style.display = 'inline-block';
    saveNotes();
  });

  // Delete Note
  deleteBtn.addEventListener('click', () => {
    note.remove();
    saveNotes();
  });

  // Save Notes on Input
  textarea.addEventListener('input', saveNotes);

  notesContainer.appendChild(note);
};

// Add New Note
addNoteButton.addEventListener('click', () => createNoteElement());

// Load Notes when the page loads
window.addEventListener('load', loadNotes);

// Light/Dark Mode toggle logic
const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    document.querySelector('header').classList.add(savedTheme);
  } else {
    // Default to light mode
    document.body.classList.add('light-mode');
    document.querySelector('header').classList.add('light-mode');
  }
};

themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    // Switch to dark mode
    document.body.classList.remove('light-mode');
    document.querySelector('header').classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    // Switch to light mode
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.querySelector('header').classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});

// Load theme on page load
window.addEventListener('load', loadTheme);
