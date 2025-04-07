document.addEventListener("DOMContentLoaded", function () {
    // Particle Background Effect
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.8, "random": true },
            "size": { "value": 2, "random": true },
            "move": { "enable": true, "speed": 0.5, "random": true }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });
});

// Select elements
let nameInput = document.querySelector("#nameInput");
let heading = document.querySelector("#heading");
let okButton = document.querySelector("#okButton");
let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTask");
let taskList = document.querySelector("#tasklist ol");
let nameInputContainer = document.querySelector("#nameInputContainer");

// Change heading when name is entered
okButton.addEventListener("click", function() {
    if (nameInput.value.trim() !== "") {
        heading.innerText = `${nameInput.value}'s To-Do List`;
        nameInputContainer.style.display = "none"; // Hide input field
    }
});

// Add event listener for task input
addTaskButton.addEventListener("click", function() {
    let taskValue = taskInput.value.trim();
    
    if (taskValue !== "") {
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `<b>${taskValue}</b>`;

        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-danger");
        btn.innerText = "Delete";

        li.appendChild(btn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Event listener for deleting tasks
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});
