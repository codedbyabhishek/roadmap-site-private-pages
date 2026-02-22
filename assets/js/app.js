(function wireActions() {
  const logout = document.getElementById("logout");
  if (!logout) return;

  logout.addEventListener("click", () => {
    window.roadmapAuth.clearSession();
    window.location.href = "./login.html";
  });
})();
