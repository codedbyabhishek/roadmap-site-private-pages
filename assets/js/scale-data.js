window.SCALE_PLAN = {
  title: "Full Scale Network Plan",
  subtitle: "Target model combining trading, restaurant, hotel, farming, and education income",
  capital: [
    {
      name: "Trading Capital",
      amount: "$120,000",
      note: "Own + prop accounts, risk systems, research tools"
    },
    {
      name: "Restaurant Setup",
      amount: "$85,000",
      note: "Lease deposit, kitchen setup, licenses, launch marketing"
    },
    {
      name: "Hotel / Homestay Setup",
      amount: "$140,000",
      note: "Property setup, furnishing, booking stack, staff"
    },
    {
      name: "Farming Base",
      amount: "$60,000",
      note: "Land prep/lease, irrigation, inputs, distribution"
    },
    {
      name: "Digital + Media Systems",
      amount: "$15,000",
      note: "Brand, website funnel, content setup, automation"
    },
    {
      name: "Reserve Buffer",
      amount: "$80,000",
      note: "Emergency runway and working capital"
    }
  ],
  targets: [
    {
      unit: "Trading",
      month3: "$8k",
      month6: "$12k",
      month12: "$20k",
      kpi: "Net % return with max drawdown <= 6%"
    },
    {
      unit: "Restaurant",
      month3: "$4k",
      month6: "$9k",
      month12: "$15k",
      kpi: "Food cost <= 32%, repeat customer rate"
    },
    {
      unit: "Hotel/Homestay",
      month3: "$3k",
      month6: "$7k",
      month12: "$13k",
      kpi: "Occupancy >= 65%, RevPAR growth"
    },
    {
      unit: "Farming",
      month3: "$1k",
      month6: "$4k",
      month12: "$8k",
      kpi: "Yield per acre and buyer contracts"
    },
    {
      unit: "Mentorship + Digital",
      month3: "$2k",
      month6: "$6k",
      month12: "$12k",
      kpi: "Subscriber retention and offer conversion"
    }
  ],
  phases: [
    {
      week: "Phase 1 (Month 1-3)",
      focus: "Proof and pilot",
      output: "Trading consistency, one restaurant pilot, first homestay listing, crop plan finalized"
    },
    {
      week: "Phase 2 (Month 4-6)",
      focus: "Stabilize operations",
      output: "Restaurant SOPs, occupancy engine, farm distribution contracts, paid education beta"
    },
    {
      week: "Phase 3 (Month 7-9)",
      focus: "Cross-business integration",
      output: "Farm-to-restaurant supply, guest dining packages, bundled premium programs"
    },
    {
      week: "Phase 4 (Month 10-12)",
      focus: "Scale with management",
      output: "Team-led ops, second unit planning, financing readiness, expansion dashboard"
    }
  ],
  team: [
    {
      name: "COO / Operations Manager",
      status: "Hire by Month 4",
      items: ["Daily KPI review", "Vendor control", "Unit-level profitability"]
    },
    {
      name: "Restaurant Head",
      status: "Hire by Month 2",
      items: ["Kitchen standards", "Menu margin tracking", "Service quality"]
    },
    {
      name: "Hospitality Manager",
      status: "Hire by Month 3",
      items: ["Occupancy optimization", "Guest experience", "Partnerships"]
    },
    {
      name: "Farm Operations Lead",
      status: "Hire by Month 2",
      items: ["Crop cycle", "Input cost control", "Market dispatch"]
    },
    {
      name: "Content + Sales Assistant",
      status: "Hire by Month 5",
      items: ["Lead funnel", "Content ops", "Client onboarding"]
    }
  ],
  gates: [
    "No expansion if trading drawdown exceeds threshold for 2 consecutive months.",
    "Open next business unit only after current unit hits positive cash flow for 3 months.",
    "Keep minimum 6 months operating reserve before second location or new property.",
    "Use monthly MIS dashboard across all units before any capex decision.",
    "Quarterly legal/compliance/tax review for trading + hospitality + farming entities."
  ]
};
