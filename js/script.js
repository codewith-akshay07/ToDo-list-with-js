//initilizing the veriables


let inputBox = document.getElementById("inputbox")
let listContainer = document.getElementById("list-container")
let btn = document.getElementById("btn2")

// function to add list
btn.addEventListener("click", function () {
    if (inputBox.value === '') {
        alert("You must Add something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
})
 // adding funcrion to check task or delete task

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Adding function to save data to the localStorge

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Adding function to show the task after refresh or close the browser

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();