// Toggle Dark/Light Mode
function toggleMode() {
  const body = document.body;
  const modeSwitch = document.getElementById("dark-mode-switch");
  const modeLabel = document.getElementById("mode-label");

  if (modeSwitch.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    modeLabel.innerText = "Dark Mode ON";
    document.querySelector("h1").style.color = "white";
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    modeLabel.innerText = "Dark Mode OFF";
    document.querySelector("h1").style.color = "black";
  }
}

// Display real-time clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const date = now.toLocaleDateString();
  document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} - ${date}`;
}

// Update the clock every second
setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call to display the time
