// store valid results
let results = []; 

//results table
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter the first number:");
    if (x === null) break;

    let y = prompt("Enter the second number:");
    if (y === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        x = Number(x);
        y = Number(y);

        switch (operator) {
            case "+": result = x + y; break;
            case "-": result = x - y; break;
            case "*": result = x * y; break;
            case "/": result = (y !== 0) ? x / y : "Error: Division by zero"; break;
            case "%": result = (y !== 0) ? x % y : "Error: Modulus by zero"; break;
            default: result = "Error: Invalid operator";
        }

        if (typeof result === "number") {
            results.push(result);
        }
    }

    document.write(`<tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>`);
}

document.write("</table>");

// summary table
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`);
    document.write("</table>");
} else {
    document.write("<p>No valid results to summarize.</p>");
}
