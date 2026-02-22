(function commandCenter() {
  if (!window.COMMAND_CENTER) return;

  const STORAGE_KEY = "business_command_center_kpis";
  const data = window.COMMAND_CENTER;
  const title = document.getElementById("cc-title");
  const subtitle = document.getElementById("cc-subtitle");
  const formsRoot = document.getElementById("unit-forms");
  const alertsRoot = document.getElementById("alert-list");
  const queueRoot = document.getElementById("action-queue");
  const saveBtn = document.getElementById("save-kpis");
  const totalProfit = document.getElementById("total-profit");
  const overallStatus = document.getElementById("overall-status");

  if (!formsRoot || !alertsRoot || !queueRoot) return;
  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;

  function loadSaved() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveCurrent(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function toNumber(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function healthForUnit(unit, values) {
    const revenue = values.revenue;
    const margin = values.margin;
    const risk = values.risk;

    const revenueRatio = revenue / unit.revenueTarget;
    const marginRatio = margin / unit.marginTarget;

    let riskScore;
    if (unit.id === "hotel" || unit.id === "farming") {
      riskScore = risk >= unit.riskThreshold ? 1 : risk >= unit.riskThreshold - 10 ? 0.6 : 0.25;
    } else {
      riskScore = risk <= unit.riskThreshold ? 1 : risk <= unit.riskThreshold + 3 ? 0.6 : 0.25;
    }

    const score = revenueRatio * 0.5 + marginRatio * 0.3 + riskScore * 0.2;

    if (score >= 1) return { status: "GREEN", className: "status-green", score };
    if (score >= 0.75) return { status: "YELLOW", className: "status-amber", score };
    return { status: "RED", className: "status-red", score };
  }

  const saved = loadSaved();

  (data.units || []).forEach((unit) => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.unitId = unit.id;

    const fieldsHtml = unit.fields
      .map((field) => {
        const savedValue = saved?.[unit.id]?.[field.key];
        const value = savedValue ?? field.defaultValue;
        return `
          <label for="${unit.id}-${field.key}">${field.label}</label>
          <input id="${unit.id}-${field.key}" data-field="${field.key}" type="${field.type}" value="${value}" />
        `;
      })
      .join("");

    card.innerHTML = `
      <h3>${unit.name}</h3>
      <p class="helper">Targets: Revenue $${unit.revenueTarget.toLocaleString()}, Margin ${unit.marginTarget}%</p>
      <div class="unit-fields">${fieldsHtml}</div>
      <p>Health: <span class="status-pill status-amber unit-status">YELLOW</span></p>
    `;
    formsRoot.appendChild(card);
  });

  function readState() {
    const state = {};
    document.querySelectorAll("#unit-forms article.card").forEach((card) => {
      const unitId = card.dataset.unitId;
      const unitData = {};
      card.querySelectorAll("input[data-field]").forEach((input) => {
        unitData[input.dataset.field] = toNumber(input.value, 0);
      });
      state[unitId] = unitData;
    });
    return state;
  }

  function renderComputed() {
    const state = readState();
    alertsRoot.innerHTML = "";
    queueRoot.innerHTML = "";

    let total = 0;
    let redCount = 0;
    let yellowCount = 0;

    (data.units || []).forEach((unit) => {
      const values = state[unit.id] || {};
      const health = healthForUnit(unit, {
        revenue: toNumber(values.revenue, 0),
        margin: toNumber(values.margin, 0),
        risk: toNumber(values.risk, 0)
      });

      total += toNumber(values.revenue, 0);

      const unitCard = document.querySelector(`[data-unit-id="${unit.id}"]`);
      const unitStatus = unitCard?.querySelector(".unit-status");
      if (unitStatus) {
        unitStatus.textContent = health.status;
        unitStatus.className = `status-pill unit-status ${health.className}`;
      }

      const alert = document.createElement("article");
      alert.className = "milestone";
      alert.innerHTML = `
        <strong>${unit.name}</strong>
        <p>Status: <span class="status-pill ${health.className}">${health.status}</span>
        | Revenue: $${toNumber(values.revenue, 0).toLocaleString()} | Margin: ${toNumber(values.margin, 0)}%</p>
      `;
      alertsRoot.appendChild(alert);

      if (health.status === "RED") {
        redCount += 1;
        const li = document.createElement("li");
        li.textContent = `${unit.name}: immediate intervention required (cost, pricing, or risk control).`;
        queueRoot.appendChild(li);
      } else if (health.status === "YELLOW") {
        yellowCount += 1;
        const li = document.createElement("li");
        li.textContent = `${unit.name}: optimize before scaling (improve conversion/margin this month).`;
        queueRoot.appendChild(li);
      }
    });

    if (redCount === 0 && yellowCount === 0) {
      const li = document.createElement("li");
      li.textContent = "All units GREEN. Focus on SOP automation and expansion planning.";
      queueRoot.appendChild(li);
    }

    if (totalProfit) totalProfit.textContent = `$${Math.round(total).toLocaleString()}`;

    if (overallStatus) {
      if (redCount > 0) {
        overallStatus.textContent = "RED";
        overallStatus.className = "status-pill status-red";
      } else if (yellowCount > 0) {
        overallStatus.textContent = "YELLOW";
        overallStatus.className = "status-pill status-amber";
      } else {
        overallStatus.textContent = "GREEN";
        overallStatus.className = "status-pill status-green";
      }
    }

    return state;
  }

  formsRoot.addEventListener("input", () => {
    renderComputed();
  });

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const state = renderComputed();
      saveCurrent(state);
      saveBtn.textContent = "Saved";
      setTimeout(() => {
        saveBtn.textContent = "Save KPI Snapshot";
      }, 1200);
    });
  }

  renderComputed();
})();
