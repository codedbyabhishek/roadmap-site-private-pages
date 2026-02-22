(function renderCityPlanner() {
  if (!window.CITY_PLAN) return;

  const data = window.CITY_PLAN;
  const title = document.getElementById("city-title");
  const subtitle = document.getElementById("city-subtitle");
  const select = document.getElementById("city-select");
  const cards = document.getElementById("scenario-cards");
  const table = document.getElementById("breakeven-table");
  const notes = document.getElementById("city-notes");

  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;
  if (!select || !cards || !table || !notes) return;

  (data.cities || []).forEach((city, idx) => {
    const option = document.createElement("option");
    option.value = city.id;
    option.textContent = city.label;
    if (idx === 0) option.selected = true;
    select.appendChild(option);
  });

  function renderCity(cityId) {
    const city = (data.cities || []).find((x) => x.id === cityId) || data.cities[0];
    if (!city) return;

    cards.innerHTML = "";
    table.innerHTML = "";
    notes.innerHTML = "";

    (city.scenarios || []).forEach((s) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${s.name} Scenario</h3>
        <p class="metric">${s.total}</p>
        <p>${s.notes}</p>
      `;
      cards.appendChild(card);
    });

    (city.breakeven || []).forEach((rowData) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${rowData.unit}</td>
        <td>${rowData.low}</td>
        <td>${rowData.base}</td>
        <td>${rowData.high}</td>
        <td>${rowData.driver}</td>
      `;
      table.appendChild(tr);
    });

    (city.notes || []).forEach((note) => {
      const li = document.createElement("li");
      li.textContent = note;
      notes.appendChild(li);
    });
  }

  select.addEventListener("change", (event) => {
    renderCity(event.target.value);
  });

  renderCity(select.value);
})();
