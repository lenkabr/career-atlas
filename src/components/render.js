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

const chapterHeader = (number, title, intro) => `
  <header class="ecosystem-chapter-header">
    <p class="ecosystem-chapter-number">${esc(number)}</p>
    <div>
      <h3>${esc(title)}</h3>
      <p>${esc(intro)}</p>
    </div>
  </header>
`;

export function renderEcosystemStory(story) {
  const { opening, partnerships, strategicCase, prioritization, growth } = story;

  return `
    <div class="ecosystem-story">
      <article class="ecosystem-chapter ecosystem-opening">
        ${chapterHeader(opening.number, opening.title, opening.intro)}
        <div class="ecosystem-outcomes" aria-label="Selected ecosystem outcomes">
          ${opening.outcomes.map((outcome) => `
            <div class="ecosystem-outcome">
              <strong>${esc(outcome.value)}</strong>
              <span>${esc(outcome.label)}</span>
            </div>
          `).join("")}
        </div>
        <div class="ecosystem-narrative">
          ${opening.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </div>
      </article>

      <article class="ecosystem-chapter ecosystem-partnerships">
        ${chapterHeader(partnerships.number, partnerships.title, partnerships.intro)}
        <p class="ecosystem-evidence-label">${esc(partnerships.label)}</p>
        <div class="company-wall" role="list" aria-label="${esc(partnerships.label)}">
          ${partnerships.companies
            .map(
              (company) => `
                <div class="company-logo" role="listitem">
                  <img src="${esc(company.logo)}" alt="" aria-hidden="true" loading="lazy" />
                  <span>${esc(company.name)}</span>
                </div>`,
            )
            .join("")}
        </div>
        <p class="ecosystem-note">${esc(partnerships.note)}</p>
      </article>

      <article class="ecosystem-chapter ecosystem-strategic-case">
        ${chapterHeader(strategicCase.number, strategicCase.title, strategicCase.intro)}
        <ol class="partnership-path">
          ${strategicCase.steps.map((step, index) => `
            <li><span>0${index + 1}</span>${esc(step)}</li>
          `).join("")}
        </ol>
        <div class="strategic-case-copy">
          <p>${esc(strategicCase.detail)}</p>
          <p class="strategic-case-outcome">${esc(strategicCase.outcome)}</p>
        </div>
        <p class="ecosystem-equation">${esc(strategicCase.lesson)}</p>
      </article>

      <article class="ecosystem-chapter ecosystem-prioritization">
        ${chapterHeader(prioritization.number, prioritization.title, prioritization.intro)}
        <p class="roadmap-equation">${esc(prioritization.equation)}</p>
        <div class="decision-signals" role="list" aria-label="Integration prioritization signals">
          ${prioritization.signals.map((signal, index) => `
            <div role="listitem"><span>0${index + 1}</span><p>${esc(signal)}</p></div>
          `).join("")}
        </div>
      </article>

      <article class="ecosystem-chapter ecosystem-growth">
        ${chapterHeader(growth.number, growth.title, growth.intro)}
        <div class="growth-system">
          ${growth.groups.map((group) => `
            <section>
              <h4>${esc(group.label)}</h4>
              <ul>${group.items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
            </section>
          `).join("")}
        </div>
      </article>

      <p class="ecosystem-closing">${esc(story.closing)}</p>
    </div>
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
