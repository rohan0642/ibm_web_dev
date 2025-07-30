// function updateCandidate() {
//   const partyDropdown = document.getElementById("party");
//   const candidateName = partyDropdown.value;
//   document.getElementById("candidateName").value = candidateName;
// }

// function toggleSubmit() {
//   const checkbox = document.getElementById("declarationCheckbox");
//   const submitBtn = document.getElementById("submitBtn");
//   submitBtn.disabled = !checkbox.checked;
// }

// function submitVote() {
//   const declaration = document.getElementById("declarationCheckbox").checked;

//   if (!declaration) {
//     alert("⚠️ Please confirm the declaration before submitting your vote.");
//     return;
//   }

//   // Save selections
//   localStorage.setItem("constituency", document.getElementById("constituency").value);
//   localStorage.setItem("party", document.getElementById("party").selectedOptions[0].text);
//   localStorage.setItem("candidate", document.getElementById("candidateName").value);

//   // Redirect
//   window.location.href = "confirm.html";
// }



// ✅ Voting Functionality
// ✅ Voting Logic
function updateCandidate() {
  const partyDropdown = document.getElementById("party");
  const candidateName = partyDropdown.value;
  document.getElementById("candidateName").value = candidateName;
}

function toggleSubmit() {
  const checkbox = document.getElementById("declarationCheckbox");
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = !checkbox.checked;
}

function submitVote() {
  const declaration = document.getElementById("declarationCheckbox").checked;

  if (!declaration) {
    alert("⚠️ Please confirm the declaration before submitting your vote.");
    return;
  }

  localStorage.setItem("constituency", document.getElementById("constituency").value);
  localStorage.setItem("party", document.getElementById("party").selectedOptions[0].text);
  localStorage.setItem("candidate", document.getElementById("candidateName").value);

  window.location.href = "confirm.html";
}

// ✅ Profile dropdown (click-based toggle)
document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.querySelector('.profile-icon');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  profileIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent bubbling
    dropdownMenu.classList.toggle('show');
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });
});
