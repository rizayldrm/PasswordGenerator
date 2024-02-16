var lenghtI = document.getElementsByClassName("lenght")[0]
var lenghtIDisplay = document.getElementsByClassName("lenght-display")[0]
var textBox = document.getElementsByClassName("textbox")[0]

updateLengthDisplay()

function savePassword(password) {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || []
    passwords.push(password)
    localStorage.setItem("passwords", JSON.stringify(passwords))
    displayPasswords()
}

function displayPasswords() {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || []
    let passwordList = document.getElementById("password-list")
    passwordList.innerHTML = ""
    passwords.forEach(password => {
        let li = document.createElement("li")
        li.textContent = password
        passwordList.appendChild(li)
    })
}

function generatePass(event) {
    var numbers = document.getElementsByName("numbers")[0].checked,
        symbols = document.getElementsByName("symbols")[0].checked,
        bigLetters = document.getElementsByName("bigletters")[0].checked

    var chars = "abcdefghijklmnoprstuvyzxqw"

    if (numbers) chars += "0123456789"
    if (symbols) chars += "!@#$%^&*()-_=+[{]}|;:,<.>/?"
    if (bigLetters) chars += "ABCDEFGHIJKLMNOPRSTUVYZXQW"

    event.preventDefault()

    var newPass = ""

    for (let i = 0; i < lenghtI.value; i++) {
        newPass += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    textBox.value = newPass
}

function updateLengthDisplay() {
    lenghtIDisplay.innerHTML = lenghtI.value
}

function passwordsClear(){
    localStorage.removeItem("passwords")
    displayPasswords()
}

updateLengthDisplay()
displayPasswords()
