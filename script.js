let color1 = document.querySelector(".color1");
let body = document.getElementById("gradient")

const setBackground = () => {
body.style.background = color1.value;
}



color1.addEventListener("input", setBackground);
