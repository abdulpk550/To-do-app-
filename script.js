const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("addTast");
const list = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value == "") {
        alert("Field must be filled out");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.append(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
       
    }
    inputBox.value = "";
    saveData();
  

}
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();

    }
    
})
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}


function showData() {
    list.innerHTML = localStorage.getItem("data")
}
showData();