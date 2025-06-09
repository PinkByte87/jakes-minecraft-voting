function vote() {
  const playerName = document.getElementById("player-name").value.trim();
  const msgEl = document.getElementById("vote-msg");

  if (!playerName) {
    msgEl.textContent = "⚠️ Please enter your Minecraft username.";
    msgEl.style.color = "orange";
    return;
  }

  // Placeholder for real API call (e.g., Google Apps Script or database)
  msgEl.textContent = `✅ Thanks for voting for Mineveil, ${playerName}!`;
  msgEl.style.color = "lime";
}
