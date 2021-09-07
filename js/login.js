let input = document.querySelectorAll("input")
console.log(input);
let btn1 = document.querySelector(".btn1");
btn1.onclick = function() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value != "") { location.replace("../index.html"); } else {}
    }
}