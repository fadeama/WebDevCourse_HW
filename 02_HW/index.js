document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCalc").addEventListener("click", calculate);
});

function calculate() {

    const num1 = parseFloat(document.getElementById("txt1").value);
    const num2 = parseFloat(document.getElementById("txt2").value);
    const op = document.getElementById("ddlOp").value;

    let res, symbol;

    switch (op) {
        case "add": res = num1 + num2; symbol = "+"; break;
        case "sub": res = num1 - num2; symbol = "-"; break;
        case "mul": res = num1 * num2; symbol = "*"; break;
        case "div": res = num2 !== 0 ? num1 / num2 : "ERR"; symbol = "/"; break;
    }

    // Show result
    document.getElementById("lblRes").innerText = res;

    // ALWAYS add to logs
    const ta = document.getElementById("output");
    ta.value += `${num1} ${symbol} ${num2} = ${res}\n`;
}
