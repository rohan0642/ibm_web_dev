// ✅ Predefined credentials
const validUsername = "voter";
const validPassword = "1234";

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  if (username === validUsername && password === validPassword) {
    status.innerText = "✅ Login successful!";
    status.style.color = "green";

    // Save login session (optional)
    localStorage.setItem("voterLoggedIn", "true");

    // Redirect after short delay
    setTimeout(() => {
      window.location.href = "voter-dashboard.html";
    }, 1000);
  } else {
    status.innerText = "❌ Invalid Voter ID or Password!";
    status.style.color = "red";
  }
}
