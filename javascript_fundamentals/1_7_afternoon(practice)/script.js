document.addEventListener("DOMContentLoaded", function () {
  console.log("Running");
  // Part 1: Change Text on Button Click
  const btnText = document.getElementById("changeTextBtn");
  const text = document.getElementById("textDisplay");
  btnText.addEventListener("click", handleChangeText);
  // Part 2: Toggle Background Color on Button Click
  const btnToggle = document.getElementById("toggleHighlightBtn");
  const box = document.querySelector(".box");
  btnToggle.addEventListener("click", handleToggleBackground);

  // Part 3: add new type value input to itemList
  const itemList = document.getElementById("itemList");
  const btnAddItem = document.getElementById("addItemBtn");
  btnAddItem.addEventListener("click", handleAddItem);

  // Part 4: delete li when click its button
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  const deleteList = document.getElementById("deleteList");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const itemDelete = event.target.parentElement;
      deleteList.removeChild(itemDelete);
    });
  });

  // Part 5: change image source on img tag when click button
  const btnChangeImage = document.getElementById("changeImageBtn");
  const imageChange = document.getElementById("imageDisplay");
  btnChangeImage.addEventListener("click", handleChangeImage);

  // Part 6: get value from input tag and display it in alert
  const btnGetInputValue = document.getElementById("submitUsername");
  btnGetInputValue.addEventListener("click", handleGetInputValue);

  // Part 7: get buttons
  const btnColors = document.querySelectorAll(".colorBtn");
  console.log("BtnColor", btnColors);
  btnColors.forEach((event) => {
    event.addEventListener("click", handleChangeColor);
  });

  // Part 10: get Element input email
  const emailInput = document.getElementById("email");
  const validateBtn = document.getElementById("validateBtn");
  const errorEmail = document.querySelector(".email-error");
  validateBtn.addEventListener("click", handleSubmitForm);

  // Part 11: toggle section
  const toggleSectionBtn = document.getElementById("hideParaBtn");
  const toggleSection = document.querySelector(".infoPara");
  toggleSectionBtn.addEventListener("click", handleTogglePara);

  // Part 12: display greeting text
  const greetingText = document.getElementById("greetingText");
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12) {
    greetingText.textContent = "Good Morning!";
  } else if (hours < 18) {
    greetingText.textContent = "Good Afternoon!";
  } else {
    greetingText.textContent = "Good Evening!";
  }

  // Part 13: form with input validation
  const formSubmit = document.getElementById("form-submit");
  const nameError = document.getElementById("name-error");

  formSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() === "") {
      nameError.textContent = "Name is required";
      nameError.style.display = "block";
    } else {
      nameError.style.display = "none";
      alert("Form submitted successfully!");
    }
  });

  // Part 14: After first click, disable button
  const disableButton = document.getElementById("onceBtn");
  disableButton.addEventListener("click", () => {
    alert("Button clicked!"); // Show alert on first click
    disableButton.disabled = true; // Disable the button after first click
  });

  // Part 15: count text in textarea, check length and display it
  const textarea = document.getElementById("bioInput");
  const countDisplay = document.getElementById("charCount");
  textarea.addEventListener("input", () => {
    const textLength = textarea.value.length;
    countDisplay.textContent = `Characters: ${textLength}`;
    if (textLength > 200) {
      countDisplay.style.color = "red"; // Change color to red if over limit
    } else {
      countDisplay.style.color = "black"; // Reset color if within limit
    }
  });

  // Part 16: Add Colored Border on Click
  const borderButtons = document.getElementById("addBoxBtn");
  const borderBox = document.querySelector(".boxContainer");
  borderButtons.addEventListener("click", (event) => {
    borderBox.style.border = `2px solid red`; // Apply border color
  });

  // Part 17: Strike through Text on Click
  const todo_lists = document.querySelectorAll("#todo-list > li");
  todo_lists.forEach((todo) => {
    todo.addEventListener("click", (event) => {
      const target = event.target;
      console.log("Target", target);
      target.classList.toggle("strike"); // Toggle strikethrough class
    });
  });

  // Part 18: Show password
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";
  });

  // Part 19: Checkbox count
  const checkboxes = document.querySelectorAll(".optionBox");
  const checkedCountEl = document.getElementById("checkedCount");

  function updateCheckedCount() {
    const checkedCount = Array.from(checkboxes).filter(
      (checkbox) => checkbox.checked
    ).length;
    checkedCountEl.textContent = `Checked Count: ${checkedCount}`;
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", updateCheckedCount);
  });

  updateCheckedCount();

  const mainPhoto = document.getElementById("mainPhoto");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainPhoto.src = thumb.src;
    });
  });

  // Practice calculator
  const numbers = document.querySelectorAll(".grid_content");
  const btnContainer = document.querySelectorAll(".btn_container > button");
  const submitCalculator = document.getElementById("submit");
  const clearCalculator = document.getElementById("clear");

  submitCalculator.addEventListener("click", calculator);
  clearCalculator.addEventListener("click", clearInput);

  function handleChangeText() {
    text.textContent = "Hello, JavaScript";
  }

  function handleToggleBackground() {
    box.classList.toggle("highlight");
  }

  function handleAddItem() {
    // get value from input tag
    const inputValue = document.getElementById("itemInput").value;
    const newItem = document.createElement("li");
    newItem.textContent = inputValue;
    itemList.appendChild(newItem);
    // clear input field
    document.getElementById("itemInput").value = "";
  }

  function handleChangeImage() {
    // add image source to input tag
    imageChange.src =
      "https://picsum.photos/200/300?random=" +
      Math.floor(Math.random() * 1000);
  }

  function handleGetInputValue() {
    // get value from input tag
    const inputValue = document.getElementById("usernameInput").value;
    // display it in alert
    alert("Username: " + inputValue);
  }

  function handleChangeColor(event) {
    // check content if include Red, green or blue
    console.log(event);
    const content = event.target.textContent.toLowerCase();
    if (content.includes("red")) {
      alert("Content:" + content);
    } else if (content.includes("green")) {
      alert("Content:" + content);
    } else if (content.includes("blue")) {
      alert("Content:" + content);
    }
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clockDisplay").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  startTime();

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function handleSubmitForm() {
    // Validate email format
    const valueEmail = emailInput.value;
    if (validateEmail(valueEmail)) {
      errorEmail.style.display = "none";
      // If valid, display success message
      alert("Email is valid: " + valueEmail);
    } else {
      errorEmail.style.display = "block";
    }
  }

  function handleTogglePara() {
    // Toggle the visibility of the paragraph element
    if (toggleSection.style.display === "none") {
      toggleSection.style.display = "block";
    } else {
      toggleSection.style.display = "none";
    }
  }
  // implement logic calculator
  let currentInput = "";
  let currentOperator = "";
  let previousInput = "";

  numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
      console.log(event.target.textContent);
      const value = event.target.textContent;
      currentInput += value;
      document.getElementById("display").value = currentInput;
    });
  });

  btnContainer.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const operation = event.target.textContent;
      if (currentInput == "") return;
      if (previousInput != "") {
        calculator();
      }
      currentOperator = operation;
      previousInput = currentInput;
      currentInput = "";
      document.getElementById(
        "display"
      ).value = `${previousInput} ${currentOperator}`;
    });
  });

  function calculator() {
    if (previousInput == "" || currentOperator == "") return;
    let result;
    let prev = parseInt(previousInput);
    let current = parseInt(currentInput);

    switch (currentOperator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        console.log(result);
        break;
      case "/":
        if (current === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = prev / current;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    currentOperator = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
  }

  function clearInput() {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    document.getElementById("display").value = "";
  }

  // Form
  const form = document.getElementById("registrationForm");
  const bioTextarea = document.getElementById("bio");
  const bioCount = document.getElementById("bio-count");

  // Character counter for bio
  bioTextarea.addEventListener("input", function () {
    const count = this.value.length;
    bioCount.textContent = `${count}/300`;
  });

  // Form submission validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Full Name
    const fullname = document.getElementById("fullname");
    if (!fullname.value.trim()) {
      showError("fullname", "Full name is required");
      isValid = false;
    } else if (fullname.value.trim().length < 2) {
      showError("fullname", "Full name must be at least 2 characters");
      isValid = false;
    }

    console.log("Fullname valid", isValid);

    // Validate Email
    const email = document.getElementById("emailForm");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError("email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
    }

    console.log("Email valid", isValid);

    // Validate Password
    const password = document.getElementById("password");
    if (!password.value) {
      showError("password", "Password is required");
      isValid = false;
    } else if (password.value.length < 8) {
      showError("password", "Password must be at least 8 characters");
      isValid = false;
    }

    console.log("Password valid", isValid);

    // Validate Confirm Password
    const confirmPassword = document.getElementById("confirmPassword");
    if (!confirmPassword.value) {
      showError("confirmPassword", "Please confirm your password");
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      showError("confirmPassword", "Passwords do not match");
      isValid = false;
    }

    console.log("ConfirmPassword", isValid);

    // Validate Phone
    const phone = document.getElementById("phone");
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!phone.value.trim()) {
      showError("phone", "Phone number is required");
      isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
      showError("phone", "Please enter a valid phone number");
      isValid = false;
    }

    console.log("Phone", isValid);

    // Validate Gender
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const genderSelected = Array.from(genderRadios).some(
      (radio) => radio.checked
    );
    if (!genderSelected) {
      showError("gender", "Please select a gender");
      isValid = false;
    }

    console.log("Gender", isValid);

    // Validate Date of Birth
    const dob = document.getElementById("dob");
    if (!dob.value) {
      showError("dob", "Date of birth is required");
      isValid = false;
    } else {
      const birthDate = new Date(dob.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 13) {
        showError("dob", "You must be at least 13 years old");
        isValid = false;
      }
    }

    console.log("Dob", isValid);

    // Validate Country
    const country = document.getElementById("country");
    if (!country.value) {
      showError("country", "Please select a country");
      isValid = false;
    }

    console.log("country", isValid);

    // Validate Hobbies
    const hobbiesCheckboxes = document.querySelectorAll(
      'input[name="hobbies"]'
    );
    const hobbiesSelected = Array.from(hobbiesCheckboxes).some(
      (checkbox) => checkbox.checked
    );
    if (!hobbiesSelected) {
      showError("hobbies", "Please select at least one hobby");
      isValid = false;
    }

    console.log("hobby", isValid);

    // Validate Profile Picture (optional but if selected, validate file type)
    const profilePicture = document.getElementById("profilePicture");
    if (profilePicture.files.length > 0) {
      const file = profilePicture.files[0];
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        showError(
          "profilePicture",
          "Please select a valid image file (JPG, JPEG, PNG)"
        );
        isValid = false;
      }
    }
    console.log("Valid", isValid);

    if (isValid) {
      alert("Form submitted successfully!");
      // You can process the form data here
      console.log("Form is valid and ready to submit");
    }
  });

  function showError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    const inputElement =
      document.getElementById(fieldName) ||
      document.querySelector(`input[name="${fieldName}"]`) ||
      document.querySelector(`select[name="${fieldName}"]`);

    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }

    if (inputElement) {
      inputElement.classList.add("error");
    } else {
      // For radio buttons and checkboxes
      const groupElements = document.querySelectorAll(
        `input[name="${fieldName}"]`
      );
      groupElements.forEach((element) => element.classList.add("error"));
    }
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    const inputElements = document.querySelectorAll("input, select, textarea");

    errorMessages.forEach((error) => {
      error.textContent = "";
      error.style.display = "none";
    });

    inputElements.forEach((input) => {
      input.classList.remove("error");
    });
  }

  // Real-time validation on blur
  const requiredFields = [
    "fullname",
    "emailForm",
    "password",
    "confirmPassword",
    "phone",
    "dob",
    "country",
  ];

  requiredFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener("blur", function () {
        validateField(fieldId);
      });
    }
  });

  function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(
      `${fieldId.replace("Form", "")}-error`
    );

    if (!field || !errorElement) return;

    let isValid = true;
    let message = "";

    switch (fieldId) {
      case "fullname":
        if (!field.value.trim()) {
          message = "Full name is required";
          isValid = false;
        } else if (field.value.trim().length < 2) {
          message = "Full name must be at least 2 characters";
          isValid = false;
        }
        break;

      case "emailForm":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!field.value.trim()) {
          message = "Email is required";
          isValid = false;
        } else if (!emailRegex.test(field.value)) {
          message = "Please enter a valid email address";
          isValid = false;
        }
        break;

      case "password":
        if (!field.value) {
          message = "Password is required";
          isValid = false;
        } else if (field.value.length < 8) {
          message = "Password must be at least 8 characters";
          isValid = false;
        }
        break;

      case "confirmPassword":
        const password = document.getElementById("password");
        if (!field.value) {
          message = "Please confirm your password";
          isValid = false;
        } else if (password.value !== field.value) {
          message = "Passwords do not match";
          isValid = false;
        }
        break;

      case "phone":
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!field.value.trim()) {
          message = "Phone number is required";
          isValid = false;
        } else if (!phoneRegex.test(field.value)) {
          message = "Please enter a valid phone number";
          isValid = false;
        }
        break;

      case "dob":
        if (!field.value) {
          message = "Date of birth is required";
          isValid = false;
        } else {
          const birthDate = new Date(field.value);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          if (age < 13) {
            message = "You must be at least 13 years old";
            isValid = false;
          }
        }
        break;

      case "country":
        if (!field.value) {
          message = "Please select a country";
          isValid = false;
        }
        break;
    }

    if (isValid) {
      field.classList.remove("error");
      errorElement.textContent = "";
      errorElement.style.display = "none";
    } else {
      field.classList.add("error");
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  }
});
