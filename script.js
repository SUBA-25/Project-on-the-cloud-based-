function updateWaterLevel() {
    let waterLevel = Math.floor(Math.random() * 101); // Simulating sensor data
    document.getElementById('water-percentage').innerText = waterLevel;
    let status = document.getElementById('water-status');
    let need = document.getElementById('waterNeed');
    
    if (waterLevel < 30) {
        status.innerText = "Low";
        status.style.color = "red";
        need.innerText = "Need Water"
        need.style.color = "red";
    } else if (waterLevel >= 25 && waterLevel <= 80) {
        status.innerText = "Normal";
        status.style.color = "Yellow";
        need.innerText = "No Need"
        need.style.color = "yellow";
    } else {
        status.innerText = "High";
        status.style.color = "orange";
        need.innerText = "Overflow-Risk"
        need.style.color = "Orange";
    }
}

setInterval(updateWaterLevel, 2000);