let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');//seect all html element with the tag name button

let string = "";//to store a resullt
let arr = Array.from(buttons);//queryselector returns nodelist like array  but does not have a array method .this array.from(buttons) cnvert this node list  into regular javascript array

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);//calculate  mathematica expression
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);//this line removes the last charecter of the String
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});