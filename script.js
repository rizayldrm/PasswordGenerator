var lenghtI = document.getElementsByClassName("lenght")[0];
var lenghtIDisplay = document.getElementsByClassName("lenght-display")[0];
var textBox = document.getElementsByClassName("textbox")[0];
var passwordMenu = document.querySelector(".passwords");
var passwordMenuBtnI = document.querySelector(".passwords-btn i");
var passwordList = document.getElementById("password-list");

updateLengthDisplay();

function savePassword(password) {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwords.push(password);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    displayPasswords();
}

function displayPasswords() {
    let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    passwordList.innerHTML = "";
    passwords.forEach(password => {
        let li = document.createElement("li");
        li.textContent = password;
        passwordList.appendChild(li);
    });
}

function generatePass(e) {
    var numbers = document.getElementsByName("numbers")[0].checked,
        symbols = document.getElementsByName("symbols")[0].checked,
        bigLetters = document.getElementsByName("bigletters")[0].checked;
    smallLetters = document.getElementsByName("smallletters")[0].checked;

    var chars = "";

    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()-_=+[{]}|;:,<.>/?\|";
    if (bigLetters) chars += "ABCDEFGHIJKLMNOPRSTUVYZXQW";
    if (smallLetters) chars += "abcdefghijklmnoprstuvyzxqw";

    e.preventDefault();

    var newPass = "";

    for (var i = 0; i < lenghtI.value; i++) {
        newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    textBox.value = newPass;
}

function updateLengthDisplay() {
    lenghtIDisplay.innerHTML = lenghtI.value;
}

function passwordsClear() {
    localStorage.removeItem("passwords");
    displayPasswords();
    isPasswordsTrue();
}

function displayPasswordMenu() {
    passwordMenu.classList.toggle("hide");
    passwordMenuBtnI.classList.toggle("fa-eye");
    passwordMenuBtnI.classList.toggle("fa-eye-slash");
}

function isPasswordsTrue() {
    if (!passwordList.innerHTML) {
        let emptyText = document.createElement("li");
        emptyText.setAttribute("class", "empty-text text-muted");
        emptyText.innerText = "Kayıtlı Şifre Bulunamadı";
        passwordList.appendChild(emptyText);
    }
}

displayPasswords();
isPasswordsTrue();
