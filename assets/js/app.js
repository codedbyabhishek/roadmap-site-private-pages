(function renderRoadmap() {
  if (!window.ROADMAP) return;

  const data = window.ROADMAP;
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const tracks = document.getElementById("tracks");
  const network = document.getElementById("network");
  const milestones = document.getElementById("milestones");
  const visuals = document.getElementById("visuals");
  const resources = document.getElementById("resources");
  const rules = document.getElementById("rules");

  if (title) title.textContent = data.title || "Business Network Blueprint";
  if (subtitle) subtitle.textContent = data.subtitle || "";

  (data.tracks || []).forEach((track) => {
    const article = document.createElement("article");
    article.className = "card";

    const badgeType =
      track.status === "Done" || track.status === "Active"
        ? "done"
        : track.status === "In Progress" || track.status === "Build"
          ? "progress"
          : "todo";

    article.innerHTML = `
      <h3>${track.name}</h3>
      <span class="badge ${badgeType}">${track.status}</span>
      <ul>
        ${(track.items || []).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;

    if (tracks) tracks.appendChild(article);
  });

  (data.network || []).forEach((node, idx) => {
    const article = document.createElement("article");
    article.className = `node ${idx === 0 ? "node-core" : ""}`;
    article.innerHTML = `
      <h3>${node.name}</h3>
      <span class="badge progress">${node.role}</span>
      <p>${node.note}</p>
    `;
    if (network) network.appendChild(article);
  });

  (data.milestones || []).forEach((step) => {
    const block = document.createElement("article");
    block.className = "milestone";
    block.innerHTML = `
      <strong>${step.week}</strong> - ${step.focus}
      <p>Deliverable: ${step.output}</p>
    `;
    if (milestones) milestones.appendChild(block);
  });

  (data.visuals || []).forEach((visual) => {
    const card = document.createElement("article");
    card.className = "visual-card";
    card.innerHTML = `
      <h3>${visual.name}</h3>
      <div class="visual-pair">
        <figure>
          <img src="${visual.floor}" alt="${visual.name} floor plan" loading="lazy" />
          <figcaption>Floor Plan</figcaption>
        </figure>
        <figure>
          <img src="${visual.concept}" alt="${visual.name} 3D concept" loading="lazy" />
          <figcaption>3D Concept</figcaption>
        </figure>
      </div>
    `;
    if (visuals) visuals.appendChild(card);
  });

  (data.resources || []).forEach((resource) => {
    const li = document.createElement("li");
    if (resource.href === "#") {
      li.textContent = resource.label;
    } else {
      const a = document.createElement("a");
      a.href = resource.href;
      a.textContent = resource.label;
      a.target = "_blank";
      a.rel = "noreferrer";
      li.appendChild(a);
    }
    if (resources) resources.appendChild(li);
  });

  (data.rules || []).forEach((rule) => {
    const li = document.createElement("li");
    li.textContent = rule;
    if (rules) rules.appendChild(li);
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
