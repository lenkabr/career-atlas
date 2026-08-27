export const portfolio = {
  hero: {
    eyebrow: "Lenka Brozmanova · Career Atlas",
    title: "Building products, partnerships, integrations & ecosystems that customers use and businesses grow from.",
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
        "Integration strategy, technical partnerships, platform relationships and the operating systems behind them.",
      target: "#ecosystems-integrations",
    },
    {
      id: "products",
      index: "02",
      title: "Products I Owned",
      description:
        "Product ownership beyond integrations — including Voice Reporting as a full reporting channel at FaceUp.",
      target: "#products-owned",
    },
    {
      id: "ways-of-working",
      index: "03",
      title: "How I Work",
      description:
        "The principles I use to connect customer value, commercial reality and technical execution.",
      target: "#how-i-work",
    },
  ],

  caseStudies: [
    {
      id: "integration-ecosystem",
      section: "ecosystems-integrations",
      number: "01",
      label: "Ecosystems & Integrations",
      title: "Building and growing an integration ecosystem",
      lede:
        "A case study about creating the product, partnership and operating foundations required to make integrations a repeatable growth capability rather than a collection of one-off projects.",
      facts: [
        { label: "Context", value: "[Add company stage, product context and starting point.]" },
        { label: "Problem", value: "[Describe the customer, product or commercial problem the ecosystem needed to solve.]" },
        { label: "My ownership", value: "[Describe the parts of strategy, discovery, delivery, partner management and operations you directly owned.]" },
        { label: "Users / personas", value: "[Add the customer and internal personas affected.]" },
        { label: "Teams & partners", value: "[Add relevant internal teams and external partner types. Do not add names until confirmed.]" },
        { label: "Approach", value: "[Describe how you prioritized opportunities, shaped integrations, coordinated delivery and created repeatable processes.]" },
        { label: "Decisions & trade-offs", value: "[Add 2–3 important decisions, constraints or trade-offs.]" },
        { label: "Outcome & evidence", value: "[Add verified adoption, pipeline, customer, revenue or operational evidence.]" },
        { label: "What I learned", value: "[Add the strongest lesson you would carry into the next ecosystem role.]" },
      ],
    },
    {
      id: "voice-reporting",
      section: "products-owned",
      number: "02",
      label: "Products I Owned",
      title: "Owning the Voice Reporting product at FaceUp",
      lede:
        "Voice Reporting was an entire reporting channel I owned as a product at FaceUp — requiring coordination across product, engineering, customer needs and operational delivery.",
      facts: [
        { label: "Context", value: "FaceUp — Voice Reporting product." },
        { label: "Problem", value: "[Add the specific user problem Voice Reporting was designed to solve.]" },
        { label: "My ownership", value: "Owned Voice Reporting as a product. [Add verified detail about discovery, roadmap, delivery and operations.]" },
        { label: "Users / personas", value: "[Add the primary buyer, admin and end-user personas.]" },
        { label: "Teams & partners", value: "[Add relevant FaceUp teams and external providers or partners only when verified.]" },
        { label: "Approach", value: "[Describe how you shaped the product, operating model and improvements.]" },
        { label: "Decisions & trade-offs", value: "[Add key product, UX, technical or operational trade-offs.]" },
        { label: "Outcome & evidence", value: "[Add verified adoption, customer, revenue, reliability or operational evidence.]" },
        { label: "What I learned", value: "[Add what this taught you about owning a product beyond integrations.]" },
      ],
    },
  ],

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
    "Translate between commercial and technical teams",
    "Prioritize integrations by customer and business value",
    "Treat launch as the midpoint, not the finish line",
    "Build scalable systems instead of repeatedly solving the same problem",
  ],
};
