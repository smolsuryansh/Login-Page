// const { express } = require("express")

const form = document.getElementById('form')
const userName = document.getElementById('firstname-input')
const email = document.getElementById('email-input')
const password = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    // e.preventDefault() // prevent submit

    let errors = []

    if(email) {
        // if we have email input then we are in the signup
        errors = getSignupFormErrors(userName.value, email.value, password.value, repeat_password_input.value)
    } else {
        // else we are in the login
        errors = getLoginFormErrors(email.value, password.value)
    }

    if(errors.length > 0) {
        // if errors exists
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }

})

function getSignupFormErrors(userName, email, password, repeatPassword) {
    let errors = []

    if (userName === "" || userName == null) {
        errors.push("Firstname is required")
        userName.parentElement.classList.add("incorrect")
    }

    if (email === "" || email == null) {
        errors.push("Email is required")
        email.parentElement.classList.add("incorrect")
    }

    if (password === "" || password == null) {
        errors.push("Password is required")
        password.parentElement.classList.add("incorrect")
    }

    if(password.length < 8) {
        errors.push("Password must have at least 8 characters")
        password.parentElement.classList.add("incorrect")
    }

    if(password !== repeatPassword) {
        errors.push("Password does not match repeated password")
        password.parentElement.classList.add("incorrect")
        repeat_password_input.parentElement.classList.add("incorrect")
    }

    return errors;
}

function getLoginFormErrors(userName, password) {
    let errors = []

    if (userName === "" || userName == null) {
        errors.push("Username is required")
        userName.parentElement.classList.add("incorrect")
    }

    if (password === "" || password == null) {
        errors.push("Password is required")
        password.parentElement.classList.add("incorrect")
    }

    return errors
}

const allInputs = [userName, email, password, repeat_password_input].filter(input => input != null) // filter to ensure no errors for login

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains("incorrect")) {
            input.parentElement.classList.remove("incorrect")
            error_message.innerText = ""
        }
    })
})