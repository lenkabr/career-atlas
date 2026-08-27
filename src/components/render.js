const esc = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

export function renderAtlas(items) {
  return `
    <div class="atlas-shell" role="list" aria-label="Career Atlas territories">
      <div class="atlas-route" aria-hidden="true"></div>
      ${items.map((item) => `
        <a class="territory" href="${esc(item.target)}" role="listitem" data-territory="${esc(item.id)}">
          <span class="territory-dot" aria-hidden="true"></span>
          <span class="territory-index">${esc(item.index)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
          <span class="territory-link">Enter territory <span aria-hidden="true">↘</span></span>
        </a>
      `).join("")}
    </div>
  `;
}

export function renderCaseStudy(study) {
  return `
    <article class="case-study" id="${esc(study.id)}">
      <header class="case-header">
        <div>
          <p class="kicker">Case study ${esc(study.number)} · ${esc(study.label)}</p>
          <h3>${esc(study.title)}</h3>
        </div>
        <p class="case-lede">${esc(study.lede)}</p>
      </header>
      <div class="case-grid">
        ${study.facts.map((fact, index) => `
          <section class="case-fact ${index === 0 ? "case-fact-featured" : ""}">
            <p class="fact-label">${esc(fact.label)}</p>
            <p>${esc(fact.value)}</p>
          </section>
        `).join("")}
      </div>
    </article>
  `;
}

export function renderPartnerGroups(groups) {
  return `
    <div class="partner-grid">
      ${groups.map((group) => `
        <section class="partner-group">
          <div class="partner-group-copy">
            <h3>${esc(group.label)}</h3>
            <p>${esc(group.description)}</p>
          </div>
          <div class="partner-chips">
            ${group.items.map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

export function renderPrinciples(principles) {
  return `
    <ol class="principles-list">
      ${principles.map((principle, index) => `
        <li>
          <span>0${index + 1}</span>
          <p>${esc(principle)}</p>
        </li>
      `).join("")}
    </ol>
  `;
}
