const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", function()  {
        const value = button.innerText;
        if (value === "C") {
            currentInput = "";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput);
            } catch {
                currentInput = "Error";
            }
        } else{
            currentInput += value;
        }
        screen.innerText = currentInput;
    });
});
