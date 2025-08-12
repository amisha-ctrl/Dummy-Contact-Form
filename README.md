# Form Validation with DOM Manipulation

This project demonstrates a simple contact form with client-side validation using **JavaScript** and **DOM manipulation**.

## Features
- Validates **Name** (only letters and spaces allowed).
- Validates **Email** using regex.
- Displays **inline error messages** with styled backgrounds.
- Prevents form submission if inputs are invalid.
- Shows a **success message** on valid submission (without actually sending data).
- Clears input fields and resets button after sending.

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)

## How to Use
1. Fill out the form fields (Name, Email, Message).
2. If invalid, styled error messages appear below inputs.
3. If valid, a success message replaces the send button temporarily.

## Validation Rules
- **Name**: Only alphabets and spaces allowed.
- **Email**: Must be a valid format (example: `user@example.com`).
- **Message**: Cannot be empty.
