(function renderRoadmap() {
  if (!window.ROADMAP) return;

  const data = window.ROADMAP;
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const tracks = document.getElementById("tracks");
  const milestones = document.getElementById("milestones");
  const resources = document.getElementById("resources");

  title.textContent = data.title;
  subtitle.textContent = data.subtitle;

  data.tracks.forEach((track) => {
    const article = document.createElement("article");
    article.className = "card";

    const badgeType =
      track.status === "Done"
        ? "done"
        : track.status === "In Progress"
          ? "progress"
          : "todo";

    article.innerHTML = `
      <h3>${track.name}</h3>
      <span class="badge ${badgeType}">${track.status}</span>
      <ul>
        ${track.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;

    tracks.appendChild(article);
  });

  data.milestones.forEach((step) => {
    const block = document.createElement("article");
    block.className = "milestone";
    block.innerHTML = `
      <strong>${step.week}</strong> - ${step.focus}
      <p>Deliverable: ${step.output}</p>
    `;
    milestones.appendChild(block);
  });

  data.resources.forEach((resource) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = resource.href;
    a.textContent = resource.label;
    a.target = "_blank";
    a.rel = "noreferrer";
    li.appendChild(a);
    resources.appendChild(li);
  });
})();

(function wireActions() {
  const logout = document.getElementById("logout");
  if (!logout) return;

  logout.addEventListener("click", () => {
    window.roadmapAuth.clearSession();
    window.location.href = "./login.html";
  });
})();
