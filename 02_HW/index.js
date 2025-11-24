document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalc").addEventListener("click", calculate);
});

function calculate() {

    const txt1 = document.getElementById("txt1");
    const txt2 = document.getElementById("txt2");

    const valid1 = validateInput(txt1);
    const valid2 = validateInput(txt2);

    if (!valid1 || !valid2) {
        document.getElementById("lblRes").innerText = "ERROR";
        return; // stop calculation
    }

    const num1 = parseFloat(txt1.value);
    const num2 = parseFloat(txt2.value);
    const op = document.getElementById("ddlOp").value;

    let res, symbol;

    switch (op) {
        case "add": res = num1 + num2; symbol = "+"; break;
        case "sub": res = num1 - num2; symbol = "-"; break;
        case "mul": res = num1 * num2; symbol = "*"; break;
        case "div": res = num2 !== 0 ? num1 / num2 : "ERR"; symbol = "/"; break;
    }

    document.getElementById("lblRes").innerText = res;

    // write to logs
    const ta = document.getElementById("output");
    ta.value += `${num1} ${symbol} ${num2} = ${res}\n`;
}

function validateInput(inputElem) {
    const value = inputElem.value.trim();

    if (!isNaN(value) && value !== "") {
        inputElem.classList.remove("is-invalid");
        inputElem.classList.add("is-valid");
        return true;
    } else {
        inputElem.classList.remove("is-valid");
        inputElem.classList.add("is-invalid");
        return false;
    }
}

