const dropDownBtn = document.getElementById("dropDownBtn");
const dropDownContent = document.getElementById("dropDownBtn__content");
const contentInner = document.getElementById("content_inner");
const symPlus = document.getElementById("fa-plus")
const symMinus = document.getElementById("fa-minus")

let isOpen = true;
let totalheight = contentInner.offsetHeight + 20;
dropDownBtn.addEventListener("click", (event) => {
  event.preventDefault();
  isOpen = !isOpen;
  if (isOpen) {
    dropDownContent.style.height = "0px";
    dropDownContent.style.paddingTop = "0px";
    dropDownContent.style.paddingBottom = "0px";
    symPlus.style.removeProperty("display");
    symMinus.style.display = 'none';
  } else {
    dropDownContent.style.height = totalheight + "px";
    dropDownContent.style.removeProperty("padding-top");
    dropDownContent.style.removeProperty("padding-bottom");
    symMinus.style.removeProperty("display");
    symPlus.style.display = 'none';
  }
});
