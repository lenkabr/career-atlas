export const portfolio = {
  hero: {
    eyebrow: "Lenka Brozmanova · Career Atlas",
    title: "Building products, partnerships & integrations that create real business impact.",
    intro:
      "I build across product, technology and partnerships — from core product areas and AI-powered products to complex integrations and strategic technology partnerships with market-leading companies. I take ideas from discovery through delivery and adoption, with a focus on measurable customer value and business growth.",
    primaryCta: { label: "Explore my work", target: "#atlas" },
    secondaryCta: { label: "Contact me", target: "#contact" },
  },

  profile: {
    name: "Lenka Brozmanova",
    role: "Product Management · Technology Partnerships · Ecosystem Strategy · Product Integrations & APIs",
    summary:
      "9+ years building products, integrations, and technology ecosystems at the intersection of customer needs, technology, and business growth. I’ve owned integrations end-to-end and built business-oriented product partnerships that generated new revenue and brought new customers into the business. My experience spans APIs and technical integrations, core product areas such as voice reporting, and AI-powered products — from discovery and technical evaluation through development, launch, adoption, and optimization. I’ve also led a team and bring hands-on experience in product positioning and product marketing, giving me a strong understanding of what it takes not only to build the right product, but to successfully bring it to market. Throughout my career, I’ve worked across Engineering, Product, Sales, Customer Success, Marketing, and leadership, and I see strong cross-functional collaboration as fundamental to building products that customers adopt and businesses can grow around.",
    email: "mailto:brozmanova.lenk@gmail.com",
    linkedin: "https://www.linkedin.com/in/lenka-brozmanov%C3%A1-20b255a5",
    github: "https://github.com/lenkabr",
    photo: "./public/lenka-brozmanova.png",
    photoAlt: "Illustrated portrait of Lenka Brozmanova",
  },

  atlas: [
    {
      id: "ecosystems",
      index: "01",
      title: "Ecosystems & Integrations",
      description:
        "Integration strategy, strategic technology partnerships, APIs and the ecosystems and operating systems behind them.",
      target: "#ecosystems-integrations",
    },
    {
      id: "products",
      index: "02",
      title: "Products I Owned",
      description:
        "Core product areas and AI-powered products — from discovery and technical evaluation through delivery, launch and adoption.",
      target: "#products-owned",
    },
    {
      id: "ways-of-working",
      index: "03",
      title: "How I Work",
      description:
        "The principles I use to connect customer value, business impact and technical execution.",
      target: "#how-i-work",
    },
  ],

  ecosystemStory: {
    opening: {
      number: "01",
      title: "Building ecosystems from zero",
      intro:
        "I have built technology partnership and integration ecosystems from scratch at two different SaaS companies — turning customer demand into repeatable product and commercial channels.",
      outcomes: [
        { value: "0 → 1", label: "Built from zero — twice" },
        { value: "~60%", label: "of revenue from technology partnerships & integrations in one ecosystem" },
        { value: "~$30k", label: "in new business in the final quarter — about 3× the previous best" },
      ],
      paragraphs: [
        "At the first company, technology partnerships and integrations grew into a major commercial channel, contributing approximately 60% of revenue.",
        "At the second, I again started from essentially zero and built the strategy, partner network, integration portfolio, operating processes, GTM motions, attribution and growth engine. The ecosystem was gaining its first meaningful commercial traction. In my final quarter, it generated approximately $30k in new business — around 3× the previous best quarter — with the growth engine only beginning to take hold.",
        "This was not simply partner relationship management. It meant understanding customer technology stacks and integration demand, identifying opportunities, building business cases, prioritizing integrations, working with Engineering, launching partnerships, enabling Sales and Customer Experience, driving adoption, co-selling and measuring commercial performance.",
      ],
    },
    partnerships: {
      number: "02",
      title: "Strategic technology partnerships",
      intro:
        "I’ve worked directly with major SaaS and technology companies across integrations, marketplace presence, joint GTM, co-marketing, referrals and co-selling, technical collaboration and ongoing ecosystem development.",
      label: "Selected technology companies I’ve worked with",
      companies: [
        { name: "Zendesk", logo: "./public/logos/zendesk.svg" },
        { name: "Front", logo: "./public/logos/front.svg" },
        { name: "Help Scout", logo: "./public/logos/help-scout.svg" },
        { name: "Freshworks", logo: "./public/logos/freshworks.svg" },
        { name: "Paylocity", logo: "./public/logos/paylocity.svg" },
        { name: "BambooHR", logo: "./public/logos/bamboohr.svg" },
        { name: "Rippling", logo: "./public/logos/rippling.svg" },
        { name: "Microsoft", logo: "./public/logos/microsoft.svg" },
        { name: "ADP", logo: "./public/logos/adp.svg" },
        { name: "Intercom", logo: "./public/logos/intercom.svg" },
        { name: "Salesforce", logo: "./public/logos/salesforce.svg" },
      ],
      note: "Selected relationships shown as evidence of experience; no endorsement is implied.",
    },
    strategicCase: {
      number: "03",
      title: "Turning a difficult integration into a strategic partnership",
      intro:
        "A strategically important, market-leading technology company initially showed little engagement despite strong customer demand for the integration.",
      steps: [
        "Customer and commercial signals",
        "Evidence-backed business case",
        "Technical and commercial alignment",
        "Integration development",
        "Partnership activation",
      ],
      detail:
        "I identified the opportunity, built the business case, continued developing the relationship and aligned technical and commercial requirements. The integration was complex and took significant time to bring together, requiring persistence across technical, commercial and organizational dependencies.",
      outcome:
        "By launch, the dynamic had changed: the partner was actively engaged and eager to launch, market and co-sell the combined solution.",
      lesson:
        "Customer evidence + business case + technical execution + relationship building can turn an initially unavailable integration into a strategic growth opportunity.",
    },
    prioritization: {
      number: "04",
      title: "Prioritizing what deserves to be built",
      intro:
        "I don’t prioritize integrations simply because a partner asks or one customer requests them. I combine evidence to allocate Engineering resources where they can create the most value.",
      equation: "Integration roadmap = customer value × business impact × strategic fit × technical feasibility",
      signals: [
        "Customer integration requests",
        "Customer technology-stack data",
        "Prospect, Sales and CX signals",
        "Potential customer and revenue impact",
        "Strategic partner value",
        "Technical feasibility and development cost",
        "Adoption potential",
        "Broader ecosystem fit",
      ],
    },
    growth: {
      number: "05",
      title: "Launch is where ecosystem growth starts",
      intro:
        "Shipping the integration is the midpoint. Adoption, distribution and revenue determine whether the ecosystem actually works.",
      groups: [
        {
          label: "Enable & distribute",
          items: ["Partner and internal enablement", "Marketplace listings", "Integration pages and documentation", "Customer activation and request follow-up"],
        },
        {
          label: "Create demand",
          items: ["Joint GTM and co-marketing", "Referrals and co-selling", "Partner-sourced and partner-influenced pipeline", "Direct marketplace lead tracking"],
        },
        {
          label: "Measure & optimize",
          items: ["Direct and indirect attribution", "Integration adoption and usage", "Pipeline forecasting", "Partner performance and ROI", "Invest, expand or deprioritize"],
        },
      ],
    },
    closing:
      "I treat integrations as products and partnerships as growth systems — combining customer demand, technical execution and commercial strategy to build ecosystems that create measurable business value.",
  },

  productStory: {
    marketplace: {
      number: "01",
      title: "Making integrations discoverable and usable",
      intro:
        "I worked on customer-facing marketplaces and app stores, and on the in-product experience through which customers discover, understand and access integrations.",
      questions: [
        "How should customers discover and navigate integrations?",
        "How should integrations be categorized and presented?",
        "What does a customer need to know before connecting?",
        "How should available and requested integrations work together?",
      ],
      detail:
        "The product challenge was to make the ecosystem feel like part of the product—not a separate directory. That meant connecting customer demand and roadmap decisions with clear discovery, useful information and a path toward adoption.",
      collaboration: "Product · Engineering · CX · Marketing · Partnerships",
    },
    voiceReporting: {
      number: "02",
      title: "Owning Voice Reporting as a core product channel",
      intro:
        "At FaceUp, I owned Voice Reporting as a core reporting channel within the product—not as an isolated feature.",
      stages: ["Discovery", "Requirements", "Prioritization", "UX & workflows", "Engineering", "Testing", "Launch", "Feedback", "Iteration"],
      detail:
        "I worked across the full product cycle: understanding customer and user needs, shaping workflows, prioritizing improvements, collaborating directly with Engineering and other teams, testing functionality, launching changes, collecting feedback and continuing to improve the experience.",
      balance: ["User needs", "Product usability", "Technical constraints", "Business priorities"],
    },
    aiVoiceAgent: {
      number: "03",
      title: "Building an AI Voice Agent from absolute zero",
      statement: "From blank page to shipped AI product.",
      intro:
        "I took an AI-powered Voice Agent from the earliest concept through customer launch rather than inheriting an existing product.",
      stages: [
        "Customer problem & opportunity",
        "Discovery & use-case definition",
        "Technology & solution evaluation",
        "Workflow design",
        "AI prompting & behavior design",
        "Prototyping & experimentation",
        "Engineering collaboration",
        "Testing, quality & edge cases",
        "Legal & launch readiness",
        "Enablement & customer launch",
        "Adoption, feedback & iteration",
      ],
      detail:
        "Building an AI product required more than adding an AI interface. I had to determine where AI genuinely improved the experience, design how the agent should behave, evaluate unpredictable outputs, define appropriate guardrails and retain human judgment over what was shipped.",
      principles: ["Useful, not decorative", "Designed behavior", "Tested uncertainty", "Explicit guardrails", "Human judgment"],
    },
    pattern: {
      number: "04",
      title: "The product pattern across all three",
      stages: ["Understand the problem", "Validate the opportunity", "Define the experience", "Align business & technical constraints", "Build with Engineering", "Test", "Launch", "Measure", "Improve"],
      closing:
        "Different products, same ownership model: understand the real problem, make the trade-offs, work closely with Engineering, ship, learn from usage and keep improving.",
    },
  },

  partnerGroups: [
    {
      label: "Technology partners",
      description: "Companies with which I built or managed technical integrations.",
      items: ["[Technology partner]", "[Technology partner]", "[Technology partner]"],
    },
    {
      label: "Platforms",
      description: "Platforms and ecosystems where integrations, listings or joint solutions lived.",
      items: ["[Platform]", "[Platform]", "[Platform]"],
    },
    {
      label: "Customers",
      description: "Customer contexts that shaped integration priorities and product decisions.",
      items: ["[Customer type]", "[Customer type]"],
    },
    {
      label: "Commercial partners",
      description: "Reseller, referral or go-to-market partner relationships.",
      items: ["[Reseller / referral partner]", "[Partner type]"],
    },
    {
      label: "Internal teams",
      description: "Functions I regularly translated between to get outcomes shipped.",
      items: ["Product", "Engineering", "Customer Success", "Sales"],
    },
  ],

  principles: [
    "Own the outcome end to end",
    "Bridge technical decisions and business outcomes",
    "Prioritize integrations & features by customer value and business impact",
    "Treat launch as the midpoint, not the finish line",
    "Build scalable systems instead of repeatedly solving the same problem",
  ],
};
