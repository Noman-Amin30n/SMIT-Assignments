const more =document.getElementById("More");
const angle = document.querySelector("#More i");
const text = document.querySelector("#More span");

const hamburger = document.getElementById("Hamburger");
const mainLeft = document.querySelector(".main-left");
const mainRight = document.querySelector(".main-right")


if (window.innerWidth < 768) {
    mainLeft.classList.add("Toggle-main-left");
    mainRight.style.marginLeft = "16px";
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        mainLeft.classList.add("Toggle-main-left");
        mainRight.style.marginLeft = "16px";
    } else {
        mainLeft.classList.remove("Toggle-main-left");
        mainRight.style.marginLeft = "0px";
    }
});

hamburger.addEventListener("click", () => {
    mainLeft.classList.toggle("Toggle-main-left");
    if (mainLeft.classList.contains("Toggle-main-left")) {
        mainRight.style.marginLeft = "16px";
    } else {
        if(window.innerWidth > 768){
            mainRight.style.marginLeft = "0px";
        }
    }
});

angle.style.transition = "all 0.2s ease-in-out";
text.style.display = "inline-block";

more.addEventListener("click", () => {
    angle.classList.toggle("fa-rotate-180");
    if (angle.classList.contains("fa-rotate-180")) {
        text.textContent = "Less";
    } else {
        text.textContent = "More";
    }
});

const descriptions = document.querySelectorAll(".Description");

function isTextOverflowing(element) {
    return element.offsetWidth < element.scrollWidth;
}

function handleTextOverflow(element) {
    if (isTextOverflowing(element)) {
        element.classList.add("Text-exceed")
    }
}

descriptions.forEach(description => {
    handleTextOverflow(description);
});


