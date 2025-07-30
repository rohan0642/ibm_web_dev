document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("🎉 Your Voter Signup Form has been submitted successfully!");

  // You can add logic here to send data to a server if needed.
  this.reset();
});
