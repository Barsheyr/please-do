const allOption = document.getElementById("option-all");
const chekkAlls = document.querySelectorAll(".chek");


allOption.addEventListener("click", () => {
    if (allOption.checked == true) {
        chekkAlls.forEach((chekkAll) => {
            chekkAll.checked = true;
        });
    } else {
        chekkAlls.forEach((chekkAll) => {
            chekkAll.checked = false;
        });

    }

})