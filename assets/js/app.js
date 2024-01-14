function htmlEncode(payload) {
    var element = document.createElement("div");
    element.innerText = element.textContent = payload;
    payload = element.innerHTML;
    return payload;
}

function convertChar(string, from, to) {
    return string.replace(from, to);
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".calculator > .items > button");
    const operations = ["clear", "CE", "=", "+", "-", "*", "/"];
    let counted = false;

    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            if (operations.includes(event.target.value)) {
                counted = false;
            }

            if (counted === true) {
                input.innerHTML = "";
            }

            if (
                convertChar(event.target.value, "/", "÷") ===
                    input.innerHTML[input.innerHTML.length - 1] &&
                operations.includes(event.target.value)
            ) {
                //
            } else {
                if (event.target.value === "=") {
                    const expression = convertChar(
                        input.innerHTML,
                        "÷",
                        "/"
                    ).replace(/[\.,](?![0-9])/g, "");
                    input.innerHTML = eval(expression);
                    counted = true;
                } else if (event.target.value === "clear") {
                    input.innerHTML = "";
                } else if (event.target.value === "CE") {
                    input.innerHTML = input.innerHTML.substring(
                        0,
                        input.innerHTML.length - 1
                    );
                } else {
                    input.innerHTML += convertChar(
                        event.target.value,
                        "/",
                        "÷"
                    );
                }
            }
        });
    });
});
