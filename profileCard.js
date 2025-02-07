
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    // Extracts HH:MM:SS
    utcTimeElement.textContent = utcTime;
}

// Update the time every second 
setInterval(updateUTCTime, 1000);

// Inital call to set the time immediately
updateUTCTime();