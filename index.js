
// variable creation //
const outputElement = document.querySelector("#output");
const lengthControlElement = document.querySelector("#length");
const caseControlElement = document.querySelector("#mixedCases");
const buttonElement = document.querySelector("#btn-generate");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};



// password creation function
const createPassword = (length, mixedCases) => {
    event.preventDefault();
    
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_";
    let result = "";

    if (mixedCases) {
        let uppercaseValue = 0;

        for (let i = 0; i < length; i++) {
            if (i === uppercaseValue) {
                result += charset.charAt(getRandomInt(0, 52)).toUpperCase();
                uppercaseValue += 3;
            } else {
                result += charset.charAt(getRandomInt(0, 52));
            };
        };
    } else {
        for (let i = 0; i < length; i++) {
            result += charset.charAt(getRandomInt(0, 52))
        };
    };

    outputElement.innerText = result;
};

buttonElement.addEventListener("click", () => { createPassword(lengthControlElement.value, caseControlElement.checked); });
