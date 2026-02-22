(function renderScalePlan() {
  if (!window.SCALE_PLAN) return;

  const data = window.SCALE_PLAN;
  const title = document.getElementById("scale-title");
  const subtitle = document.getElementById("scale-subtitle");
  const capitalCards = document.getElementById("capital-cards");
  const targets = document.getElementById("profit-targets");
  const phases = document.getElementById("execution-phases");
  const team = document.getElementById("team-plan");
  const gates = document.getElementById("risk-gates");

  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;

  (data.capital || []).forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="metric">${item.amount}</p>
      <p>${item.note}</p>
    `;
    if (capitalCards) capitalCards.appendChild(card);
  });

  (data.targets || []).forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.unit}</td>
      <td>${item.month3}</td>
      <td>${item.month6}</td>
      <td>${item.month12}</td>
      <td>${item.kpi}</td>
    `;
    if (targets) targets.appendChild(row);
  });

  (data.phases || []).forEach((step) => {
    const block = document.createElement("article");
    block.className = "milestone";
    block.innerHTML = `
      <strong>${step.week}</strong> - ${step.focus}
      <p>Deliverable: ${step.output}</p>
    `;
    if (phases) phases.appendChild(block);
  });

  (data.team || []).forEach((member) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${member.name}</h3>
      <span class="badge progress">${member.status}</span>
      <ul>
        ${(member.items || []).map((x) => `<li>${x}</li>`).join("")}
      </ul>
    `;
    if (team) team.appendChild(card);
  });

  (data.gates || []).forEach((rule) => {
    const li = document.createElement("li");
    li.textContent = rule;
    if (gates) gates.appendChild(li);
  });
})();
