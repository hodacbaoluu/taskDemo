let giaoLopButton = document.getElementsByClassName("btn-giaoLop");
for(let i = 0; i<giaoLopButton.length; i++){   
    giaoLopButton[i].addEventListener("mouseover", () => {
        giaoLopButton[i].getElementsByClassName("chevrons")[0].style.display = "block";
    });
    giaoLopButton[i].addEventListener("mouseleave", () => {
        giaoLopButton[i].getElementsByClassName("chevrons")[0].style.display = "none";
    });
}