# 🌸 Customer Complaint Form – Validation Project

This project was developed as part of the FreeCodeCamp curriculum.  
The HTML and CSS were provided by the exercise, while all JavaScript validation logic was implemented by me.

## Project Overview
The goal of this project is to build a fully validated customer complaint form with dynamic feedback. Each form field must follow specific validation rules, and the form should prevent submission if any requirement is not met.

## Features
- Real-time validation on input change  
- Custom validation rules for:
  - Full name (not empty)
  - Email format
  - Order number (must start with **2024** and contain 10 digits)
  - Product code with pattern **XX##-X###-XX#**
  - Quantity (positive integer)
  - Complaints group (at least one checkbox selected)
  - Complaint description (minimum 20 characters if “Other” is selected)
  - Solutions group (one radio option must be selected)
  - Solution description (minimum 20 characters if “Other” is selected)
- Border color updates to indicate valid/invalid fields  
- Validation before form submission  
- Modular and readable validation functions  

## 🧠 What I Learned
- How to structure modular validation logic in JavaScript  
- How to use regular expressions for advanced patterns  
- DOM manipulation and event listeners  
- Conditional form validation based on user selections  
- Building accessible and user-friendly form feedback  

## 🗂 Files Included
- **index.html** – Form structure (provided by FreeCodeCamp)
- **styles.css** – Styling (provided by FreeCodeCamp)
- **script.js** – All validation logic written by me
- **README.md** – Project documentation

## 🚀 How to Use
1. Clone or download the repository  
2. Open `index.html` in your browser  
3. Fill out the form to test validation functionality  

## 📌 Notes
Although the layout was provided by the course, the logic behind validation, field interaction, and the overall JavaScript implementation is entirely my work.

This project helped me strengthen my understanding of JavaScript, user input handling, and real-world form validation scenarios.

---
