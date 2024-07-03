// generator.js

function generate() {
    let dictionary = "";
    if (document.getElementById("lowercaseCb").checked) {
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (document.getElementById("uppercaseCb").checked) {
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (document.getElementById("digitsCb").checked) {
        dictionary += "1234567890";
    }
    if (document.getElementById("specialsCb").checked) {
        dictionary += "!@#$%^&*()_+-={}[];<>:";
    }
    const length = document.getElementById("lengthRange").value;

    if (length < 1 || dictionary.length === 0) {
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.getElementById("generatedPassword").value = password;
}

[...document.querySelectorAll('input[type="checkbox"], #generateBtn')].forEach((elem) => {
    elem.addEventListener("click", generate);
});

document.getElementById("lengthRange").addEventListener("input", (e) => {
    document.getElementById("lengthValue").innerText = e.target.value;
    generate();
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const pass = document.getElementById("generatedPassword").value;
    navigator.clipboard.writeText(pass).then(() => {
        document.getElementById("copyBtn").innerText = "Copied!";
        setTimeout(() => {
            document.getElementById("copyBtn").innerText = "Copy";
        }, 1000);
    });
});

generate();
