// Task 1: Verification Log
console.log("Status Manager Started");
// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const endTimerButton = document.getElementById("endtimer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
function highlightListItems() {
  const items = document.querySelectorAll("li");
  // Original method
  // items.forEach(function (item) {
  //   item.style.color = "blue";
  // });

  // alternative method:
  for (let listItem of items) {
    listItem.setAttribute("style", "color: blue");
  }
}

highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Task 8: helper that appends a timestamp span to statusOutput
function createTimestamp() {
  const span = document.createElement("span");
  span.innerHTML = new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Tasks 5, 6, 7, 8
function toggleStatus(e) {
  e.preventDefault();
  statusOutput.classList.toggle("hidden");

  if (!statusOutput.classList.contains("hidden")) {
    // Task 7: status is now visible
    mainTitle.style.backgroundColor = "yellow";
    // Task 8: append timestamp every time it becomes visible
    createTimestamp();
  } else {
    // Task 7: status is now hidden
    mainTitle.style.backgroundColor = "";
  }
}

toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
let isFlashing = false;

function startFlashing() {
  // Original Method:
  // intervalId = setInterval(function () {
  //   controlPanel.classList.toggle("hidden");
  // }, 500);

  // Alternative Method:
  if (isFlashing == true) {
    return;
  } else {
    isFlashing = true;
    Flash();
  }
}

function Flash() {
  setTimeout(() => {
    controlPanel.classList.toggle("hidden");
    intervalId = setTimeout(Flash, 500);
  }, 500);
}

function stopFlashing() {
  clearTimeout(intervalId);
  intervalId = null;
  isFlashing = false;
  controlPanel.classList.remove("hidden");
}

timerButton.addEventListener("click", startFlashing);
//Extra Credit:
endTimerButton.addEventListener("click", stopFlashing);
