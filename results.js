// Simulated data
const partyData = [
  { name: "Party A", seats: 230, color: "#007bff" },
  { name: "Party B", seats: 160, color: "#28a745" },
  { name: "Party C", seats: 80, color: "#ffc107" },
];

const winnerData = [
  { constituency: "Mumbai South", candidate: "Rahul Mehta", party: "Party A", votes: 235679 },
  { constituency: "Delhi Central", candidate: "Asha Verma", party: "Party B", votes: 192304 },
  { constituency: "Kolkata North", candidate: "Rajiv Banerjee", party: "Party C", votes: 210871 },
];

// Load party results
const partyContainer = document.getElementById("party-results");
partyData.forEach(party => {
  const row = document.createElement("div");
  row.className = "party-row";

  const name = document.createElement("div");
  name.className = "party-name";
  name.textContent = `${party.name} – ${party.seats} seats`;

  const progress = document.createElement("div");
  progress.className = "progress";

  const bar = document.createElement("div");
  bar.className = "progress-bar";
  bar.style.width = `${party.seats / 5}%`;
  bar.style.backgroundColor = party.color;
  bar.textContent = `${party.seats}`;

  progress.appendChild(bar);
  row.appendChild(name);
  row.appendChild(progress);

  partyContainer.appendChild(row);
});

// Load winners
const winnerList = document.getElementById("winner-list");
winnerData.forEach(winner => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${winner.constituency}</td>
    <td>${winner.candidate}</td>
    <td>${winner.party}</td>
    <td>${winner.votes.toLocaleString()}</td>
  `;
  winnerList.appendChild(row);
});
