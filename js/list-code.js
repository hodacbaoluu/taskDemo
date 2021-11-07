let mslList = document.getElementsByClassName("list__code--item");
for(let i = 0; i<mslList.length; i++){   
    mslList[i].addEventListener("click", () => {
      for(let j = 0; j < mslList.length; j++){
          mslList[j].classList.remove("list__code--item--change-style");
      }
      mslList[i].classList.add("list__code--item--change-style");


      document.onkeydown = e => {
        let selectedElm = document.getElementsByClassName("list__code--item--change-style")[0];
        if (e.key === "ArrowDown") {
            selectedElm.classList.remove("list__code--item--change-style");
            nextElm = selectedElm.nextElementSibling.classList.add("list__code--item--change-style");
        }
        else if (e.key === "ArrowUp") {
            selectedElm.classList.remove("list__code--item--change-style");
            nextElm = selectedElm.previousElementSibling.classList.add("list__code--item--change-style");
        }
      };
   });
}
let sideBarList = document.getElementsByClassName("list__code")[0];
sideBarList.addEventListener("mouseleave", () => {
    document.onkeydown = null;
});