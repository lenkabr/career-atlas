import { portfolio } from "./data/portfolio.js?v=partner-growth-1";
import { renderAtlas, renderEcosystemStory, renderProductStory, renderPrinciples } from "./components/render.js?v=proof-1";

const { hero, profile, atlas, ecosystemStory, productStory, principles } = portfolio;

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Career Atlas home">
      <span class="brand-mark" aria-hidden="true">CA</span>
      <span>Career Atlas</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#atlas">Atlas overview</a>
      <a href="#ecosystems-integrations">Ecosystems & Integrations</a>
      <a href="#products-owned">Products</a>
      <a href="#how-i-work">How I Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero section" id="top">
      <div class="hero-copy reveal">
        <p class="eyebrow">${hero.eyebrow}</p>
        <p class="hero-focus">${hero.focus}</p>
        <h1>${hero.title}</h1>
        <p class="hero-intro">${hero.intro}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${hero.primaryCta.target}">${hero.primaryCta.label}</a>
          <a class="button button-secondary" href="${hero.secondaryCta.target}">${hero.secondaryCta.label}</a>
        </div>
        <div class="hero-evidence" aria-label="Career evidence at a glance">
          ${hero.evidence.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}
        </div>
      </div>
      <aside class="hero-signal reveal" aria-label="Career positioning summary">
        <svg class="impact-map" viewBox="0 0 420 420" role="img" aria-labelledby="impact-map-title impact-map-desc">
          <title id="impact-map-title">Four disciplines connected through business impact</title>
          <desc id="impact-map-desc">Product, technology, customers and partners connect to each other and meet at business impact.</desc>
          <g class="impact-connections">
            <path d="M210 54 Q330 70 366 210 Q330 350 210 366 Q90 350 54 210 Q90 70 210 54Z" />
            <path d="M210 86 L210 203 M334 210 L217 210 M210 334 L210 217 M86 210 L203 210" />
            <path d="M210 86 Q280 120 334 210 M334 210 Q278 286 210 334 M210 334 Q136 282 86 210 M86 210 Q140 126 210 86" />
          </g>
          <g class="impact-node impact-node-product">
            <circle cx="210" cy="54" r="42" />
            <text x="210" y="58">PRODUCT</text>
          </g>
          <g class="impact-node impact-node-technology">
            <circle cx="366" cy="210" r="42" />
            <text x="366" y="214">TECHNOLOGY</text>
          </g>
          <g class="impact-node impact-node-customers">
            <circle cx="210" cy="366" r="42" />
            <text x="210" y="370">CUSTOMERS</text>
          </g>
          <g class="impact-node impact-node-partners">
            <circle cx="54" cy="210" r="42" />
            <text x="54" y="214">PARTNERS</text>
          </g>
          <g class="impact-target" aria-hidden="true">
            <circle class="impact-target-outer" cx="210" cy="210" r="30" />
            <circle class="impact-target-middle" cx="210" cy="210" r="20" />
            <circle class="impact-target-core" cx="210" cy="210" r="9" />
          </g>
          <g class="impact-outcome">
            <text class="impact-label" x="210" y="257">BUSINESS IMPACT</text>
            <line class="impact-label-accent" x1="177" y1="265" x2="243" y2="265" />
          </g>
        </svg>
      </aside>
    </section>

    <section class="section atlas-section" id="atlas">
      <div class="section-heading reveal">
        <p class="kicker">The atlas</p>
        <h2>Three territories. One connected career.</h2>
        <p>Choose a territory to move through the story. This is not a timeline — it is a view of the systems, products and decisions I’ve owned.</p>
      </div>
      <div class="reveal">${renderAtlas(atlas)}</div>
    </section>

    <section class="section story-section" id="ecosystems-integrations">
      <div class="section-heading reveal">
        <p class="kicker">Territory 01</p>
        <h2>Ecosystems & Integrations</h2>
        <div class="section-intro"><p>Building technology partnerships and integrations that connect customer needs, product strategy, technical execution and business growth.</p><a href="#atlas">Back to atlas ↑</a></div>
      </div>
      <div>${renderEcosystemStory(ecosystemStory)}</div>
    </section>

    <section class="section story-section" id="products-owned">
      <div class="section-heading reveal">
        <p class="kicker">Territory 02</p>
        <h2>Products I Owned</h2>
        <div class="section-intro"><p>Customer-facing product areas and AI products owned from discovery through delivery, launch and iteration.</p><a href="#atlas">Back to atlas ↑</a></div>
      </div>
      <div>${renderProductStory(productStory)}</div>
    </section>

    <section class="section principles-section" id="how-i-work">
      <div class="section-heading reveal">
        <p class="kicker">Territory 03</p>
        <h2>How I work</h2>
        <p>Five principles that guide how I make decisions when the work spans technical, product and commercial boundaries.</p>
      </div>
      <div class="reveal">${renderPrinciples(principles)}</div>
    </section>

    <section class="section about-section" id="contact">
      <div class="profile-frame reveal">
        <img src="${profile.photo}" alt="${profile.photoAlt}" />
      </div>
      <div class="about-copy reveal">
        <p class="kicker">About & contact</p>
        <h2>${profile.name}</h2>
        <p class="role">${profile.role}</p>
        <p>${profile.summary}</p>
        <div class="contact-actions">
          <a class="button button-primary" href="${profile.email}">Email me</a>
          <a class="text-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a class="text-link" href="${profile.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>Career Atlas · Built as an interactive product story.</p>
    <a href="#top">Back to top ↑</a>
  </footer>
`;

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add("is-visible");
});

const navigationLinks = [...document.querySelectorAll('.site-header nav a')];
const navigationTargets = navigationLinks
  .map((link) => ({ link, target: document.querySelector(link.getAttribute("href")) }))
  .filter((item) => item.target);

if ("IntersectionObserver" in window) {
  const navigationObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach((link) => link.removeAttribute("aria-current"));
    const active = navigationTargets.find((item) => item.target === visible.target);
    active?.link.setAttribute("aria-current", "location");
  }, { rootMargin: "-20% 0px -65%", threshold: [0, .1, .3] });
  navigationTargets.forEach((item) => navigationObserver.observe(item.target));
}
