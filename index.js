
window.addEventListener("load", () => {


    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {

            if (button.value === "=") {
                calculate();
            }
            else if (button.value === "ac") {
                document.getElementById("screen-input").value = "";
            }

            else {
                document.getElementById("screen-input").value += button.value;
            }

        });

    });



});

function calculate() {
    try {
        document.getElementById("screen-input").value = eval(document.getElementById("screen-input").value);
    }
    catch (e) {
        console.log('Error')
    }

}


