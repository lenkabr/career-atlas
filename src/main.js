import { portfolio } from "./data/portfolio.js";
import { renderAtlas, renderCaseStudy, renderPartnerGroups, renderPrinciples } from "./components/render.js";

const { hero, profile, atlas, caseStudies, partnerGroups, principles } = portfolio;

const caseFor = (section) => caseStudies.filter((study) => study.section === section).map(renderCaseStudy).join("");

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Career Atlas home">
      <span class="brand-mark" aria-hidden="true">CA</span>
      <span>Career Atlas</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#atlas">Atlas</a>
      <a href="#case-studies">Work</a>
      <a href="#how-i-work">Principles</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero section" id="top">
      <div class="hero-copy reveal">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1>${hero.title}</h1>
        <p class="hero-intro">${hero.intro}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${hero.primaryCta.target}">${hero.primaryCta.label}</a>
          <a class="button button-secondary" href="${hero.secondaryCta.target}">${hero.secondaryCta.label}</a>
        </div>
      </div>
      <aside class="hero-signal reveal" aria-label="Career positioning summary">
        <div class="signal-orbit" aria-hidden="true">
          <span class="orbit orbit-a"></span>
          <span class="orbit orbit-b"></span>
          <span class="orbit-core"></span>
        </div>
        <p class="signal-label">Operating at the intersection of</p>
        <ul>
          <li>Product</li>
          <li>Technology</li>
          <li>Customers</li>
          <li>Partners</li>
        </ul>
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

    <section class="section story-section" id="case-studies">
      <div class="story-anchor" id="ecosystems-integrations"></div>
      <div class="section-heading reveal">
        <p class="kicker">Territory 01</p>
        <h2>Ecosystems & Integrations</h2>
        <p>Work that sits between customer demand, product strategy, engineering reality and external partner ecosystems.</p>
      </div>
      <div class="reveal">${caseFor("ecosystems-integrations")}</div>
    </section>

    <section class="section partners-section" aria-labelledby="partners-title">
      <div class="section-heading reveal">
        <p class="kicker">Partner & platform view</p>
        <h2 id="partners-title">The network around the product.</h2>
        <p>A flexible view of the companies, platforms, customers and teams involved in ecosystem work. Placeholder labels are intentionally explicit until verified names are added.</p>
      </div>
      <div class="reveal">${renderPartnerGroups(partnerGroups)}</div>
    </section>

    <section class="section story-section">
      <div class="story-anchor" id="products-owned"></div>
      <div class="section-heading reveal">
        <p class="kicker">Territory 02</p>
        <h2>Products I Owned</h2>
        <p>Examples where I owned the product problem and operating model, not only the partnership around it.</p>
      </div>
      <div class="reveal">${caseFor("products-owned")}</div>
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
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add("is-visible");
});
