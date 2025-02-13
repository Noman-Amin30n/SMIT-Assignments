const more =document.getElementById("More");
const angle = document.querySelector("#More i");
const text = document.querySelector("#More span");

const hamburger = document.getElementById("Hamburger");
const mainLeft = document.querySelector(".main-left");
const mainRight = document.querySelector(".main-right")

hamburger.addEventListener("click", () => {
    mainLeft.classList.toggle("Toggle-main-left");
    if (mainLeft.classList.contains("Toggle-main-left")) {
        mainRight.style.marginLeft = "16px";
    } else {
        mainRight.style.marginLeft = "0px";
    }
});

angle.style.transition = "0.2s";
text.style.display = "inline-block";

more.addEventListener("click", () => {
    angle.classList.toggle("fa-rotate-180");
    if (angle.classList.contains("fa-rotate-180")) {
        text.textContent = "Less";
    } else {
        text.textContent = "More";
    }
});

