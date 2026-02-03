let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Get history from localStorage or empty array
// let history = JSON.parse(localStorage.getItem("history")) || [];

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        // CLEAR
        if (value === "C") {
            currentInput = "";
            display.value = "";
        }

        // EQUAL
        else if (value === "=") {
            try {
                let result = eval(currentInput);
                display.value = result;

                // Save to history
                // history.push(currentInput + " = " + result);
                // localStorage.setItem("history", JSON.stringify(history));

                // currentInput = result.toString();
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }

        // PERCENT
        else if (value === "%") {
            currentInput = currentInput / 100;
            display.value = currentInput;
        }

        // NORMAL BUTTONS
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
