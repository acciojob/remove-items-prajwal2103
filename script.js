let btn=document.querySelector("input");
btn.addEventListener("click",remove);
function remove(){
    let select = document.getElementById("colorSelect");
    // Get the selected option's index
    let selectedIndex = select.selectedIndex;
    let selectedOption = select.options[selectedIndex];
    selectedOption.remove();
}
