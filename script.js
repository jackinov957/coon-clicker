let coons = 0; // Total number of coons
let cursors = 0; // Number of cursors
let coonsPerSecond = 0.1; // Coons generated per second by each cursor

// Update the displayed coon count
function updateCoonCount() {
    document.getElementById("coon-count").innerText = `Coons: ${coons.toFixed(1)}`;
}

// Update the displayed cursor count
function updateCursorCount() {
    document.getElementById("cursor-count").innerText = `Cursors: ${cursors} (${(cursors * coonsPerSecond).toFixed(1)} coons per second)`;
}

// Function for clicking the Skibidi Coon image
function clickCoon() {
    coons += 1;
    updateCoonCount();
}

// Function to buy a cursor
function buyCursor() {
    if (coons >= 10) {
        coons -= 10;
        cursors += 1;
        updateCoonCount();
        updateCursorCount();
    } else {
        alert("Not enough coons to buy a cursor!");
    }
}

// Function to automatically add coons based on the number of cursors
function generateCoons() {
    coons += cursors * coonsPerSecond;
    updateCoonCount();
}

// Start generating coons every second
setInterval(generateCoons, 1000);

// Initialize the counts on page load
updateCoonCount();
updateCursorCount();
