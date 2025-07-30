const updatesBox = document.getElementById("updates-box");

const sampleUpdates = [
  "Voting has started in Mumbai constituency.",
  "Over 60% voter turnout recorded in West Bengal by 1 PM.",
  "Polling booths in Delhi are seeing long queues of young voters.",
  "Prime Minister casts vote in Ahmedabad.",
  "Election Commission reports smooth operations nationwide.",
  "Heavy turnout expected in urban regions post-lunch.",
  "Live counting results will begin at 8 AM on May 2, 2025.",
  "VVPAT slips are being used for verification at all booths.",
  "Security tightened in sensitive zones across UP and Bihar.",
  "EC helpline number 1950 active for voter complaints."
];

function addRandomUpdate() {
  const updateText = sampleUpdates[Math.floor(Math.random() * sampleUpdates.length)];
  const updateDiv = document.createElement("div");
  updateDiv.className = "update";
  updateDiv.textContent = `🕒 ${new Date().toLocaleTimeString()} – ${updateText}`;
  updatesBox.prepend(updateDiv); // Newest on top
}

// Optional: Auto-add updates every 10 seconds
setInterval(addRandomUpdate, 10000);
