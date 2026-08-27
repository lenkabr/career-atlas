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
      <nav class="chapter-index" aria-label="Ecosystems and integrations chapters">
        <a href="#ecosystem-zero"><span>01</span>Built from zero</a>
        <a href="#technology-partnerships"><span>02</span>Partner portfolio</a>
        <a href="#strategic-integration"><span>03</span>Strategic integration</a>
        <a href="#integration-prioritization"><span>04</span>Prioritization</a>
        <a href="#ecosystem-growth"><span>05</span>Adoption & growth</a>
      </nav>
      <article class="ecosystem-chapter ecosystem-opening" id="ecosystem-zero">
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

      <article class="ecosystem-chapter ecosystem-partnerships" id="technology-partnerships">
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

      <article class="ecosystem-chapter ecosystem-strategic-case" id="strategic-integration">
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

      <article class="ecosystem-chapter ecosystem-prioritization" id="integration-prioritization">
        ${chapterHeader(prioritization.number, prioritization.title, prioritization.intro)}
        <p class="roadmap-equation">${esc(prioritization.equation)}</p>
        <div class="decision-signals" role="list" aria-label="Integration prioritization signals">
          ${prioritization.signals.map((signal, index) => `
            <div role="listitem"><span>0${index + 1}</span><p>${esc(signal)}</p></div>
          `).join("")}
        </div>
      </article>

      <article class="ecosystem-chapter ecosystem-growth" id="ecosystem-growth">
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

export function renderProductStory(story) {
  const { marketplace, voiceReporting, aiVoiceAgent, pattern } = story;
  return `
    <div class="product-story">
      <nav class="chapter-index chapter-index-products" aria-label="Products I Owned chapters">
        <a href="#marketplace-product"><span>01</span>Marketplace UX</a>
        <a href="#voice-reporting-product"><span>02</span>Voice Reporting</a>
        <a href="#ai-voice-agent"><span>03</span>AI Voice Agent</a>
        <a href="#product-ownership-model"><span>04</span>Ownership model</a>
      </nav>
      <article class="product-chapter product-marketplace" id="marketplace-product">
        ${chapterHeader(marketplace.number, marketplace.title, marketplace.intro)}
        <div class="product-split">
          <div class="marketplace-ui" aria-label="Conceptual integration marketplace interface">
            <div class="marketplace-toolbar"><span>INTEGRATIONS</span><span class="marketplace-search">Search the marketplace</span></div>
            <div class="marketplace-categories"><span>All</span><span>Customer support</span><span>HR & people</span><span>Productivity</span></div>
            <div class="marketplace-cards">
              <div><i></i><strong>Available integration</strong><small>What it does · setup · requirements</small></div>
              <div><i></i><strong>Available integration</strong><small>Use case · value · connection path</small></div>
              <div class="marketplace-request"><i></i><strong>Request an integration</strong><small>Demand becomes a roadmap signal</small></div>
            </div>
          </div>
          <div class="product-copy">
            <p>${esc(marketplace.detail)}</p>
            <ul class="product-questions">${marketplace.questions.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
            <p class="product-collaboration">${esc(marketplace.collaboration)}</p>
          </div>
        </div>
      </article>

      <article class="product-chapter product-voice" id="voice-reporting-product">
        ${chapterHeader(voiceReporting.number, voiceReporting.title, voiceReporting.intro)}
        <div class="voice-flow" aria-label="Voice Reporting product workflow">
          <div class="voice-call"><span class="voice-pulse" aria-hidden="true"></span><strong>VOICE</strong><small>Core reporting channel</small></div>
          <div class="voice-route" aria-hidden="true"></div>
          <div class="voice-workflow">
            ${voiceReporting.stages.map((stage, index) => `<span><b>${String(index + 1).padStart(2, "0")}</b>${esc(stage)}</span>`).join("")}
          </div>
        </div>
        <div class="product-detail-row">
          <p>${esc(voiceReporting.detail)}</p>
          <div class="product-balance" aria-label="Product considerations">${voiceReporting.balance.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
        </div>
      </article>

      <article class="product-chapter product-ai" id="ai-voice-agent">
        <p class="ai-statement">${esc(aiVoiceAgent.statement)}</p>
        ${chapterHeader(aiVoiceAgent.number, aiVoiceAgent.title, aiVoiceAgent.intro)}
        <div class="ai-product-visual">
          <div class="ai-conversation" aria-label="Conceptual AI Voice Agent interaction">
            <div class="ai-status"><span></span> AI VOICE AGENT · LIVE</div>
            <p class="ai-user">Customer speaks</p>
            <div class="ai-wave" aria-hidden="true">||||||||||||||||</div>
            <p class="ai-agent">Agent understands context, responds and follows the designed workflow.</p>
            <div class="ai-review"><span>QUALITY CHECK</span><span>GUARDRAILS</span><span>HUMAN JUDGMENT</span></div>
          </div>
          <ol class="ai-journey">${aiVoiceAgent.stages.map((stage, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${esc(stage)}</li>`).join("")}</ol>
        </div>
        <div class="ai-detail">
          <p>${esc(aiVoiceAgent.detail)}</p>
          <div class="ai-principles">${aiVoiceAgent.principles.map((item) => `<span>${esc(item)}</span>`).join("")}</div>
        </div>
      </article>

      <article class="product-chapter product-pattern" id="product-ownership-model">
        ${chapterHeader(pattern.number, pattern.title, "Different product contexts, one repeatable approach to ownership.")}
        <ol class="ownership-model">${pattern.stages.map((stage, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span>${esc(stage)}</li>`).join("")}</ol>
      </article>
      <p class="product-closing">${esc(pattern.closing)}</p>
    </div>`;
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
