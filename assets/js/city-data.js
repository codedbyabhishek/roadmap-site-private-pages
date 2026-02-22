window.CITY_PLAN = {
  title: "City Scenario Planner",
  subtitle: "Compare startup capital and break-even timelines for each city strategy",
  cities: [
    {
      id: "tier2_india",
      label: "Tier-2 India (low-cost growth)",
      scenarios: [
        { name: "Low", total: "$180k", notes: "Lean launch with rental assets and minimal headcount" },
        { name: "Base", total: "$260k", notes: "Balanced setup with stronger branding and operations" },
        { name: "High", total: "$340k", notes: "Premium setup with reserve-heavy capital structure" }
      ],
      breakeven: [
        { unit: "Trading", low: "2 months", base: "3 months", high: "4 months", driver: "Risk-adjusted win consistency" },
        { unit: "Restaurant", low: "8 months", base: "11 months", high: "14 months", driver: "Footfall and food cost control" },
        { unit: "Hotel/Homestay", low: "10 months", base: "14 months", high: "18 months", driver: "Occupancy and ADR" },
        { unit: "Farming", low: "9 months", base: "12 months", high: "16 months", driver: "Yield and contract buyers" },
        { unit: "Mentorship/Digital", low: "3 months", base: "5 months", high: "7 months", driver: "Audience conversion" }
      ],
      notes: [
        "Start restaurant and farming in parallel to create farm-to-kitchen margin advantage.",
        "Focus hotel model on weekends and event partnerships initially.",
        "Use trading gains as controlled expansion capital, not operating cash dependence."
      ]
    },
    {
      id: "metro_india",
      label: "Metro India (high-demand, high-cost)",
      scenarios: [
        { name: "Low", total: "$320k", notes: "Smaller footprint, strong digital-first launch" },
        { name: "Base", total: "$480k", notes: "Core premium positioning with full staffing" },
        { name: "High", total: "$650k", notes: "Aggressive brand + multi-location preparation" }
      ],
      breakeven: [
        { unit: "Trading", low: "2 months", base: "3 months", high: "4 months", driver: "Capital discipline" },
        { unit: "Restaurant", low: "11 months", base: "15 months", high: "20 months", driver: "Rent and repeat traffic" },
        { unit: "Hotel/Homestay", low: "12 months", base: "18 months", high: "24 months", driver: "Occupancy and OTA mix" },
        { unit: "Farming", low: "10 months", base: "14 months", high: "18 months", driver: "Supply logistics" },
        { unit: "Mentorship/Digital", low: "4 months", base: "6 months", high: "8 months", driver: "Lead acquisition cost" }
      ],
      notes: [
        "Prioritize premium restaurant model with strong delivery channel optimization.",
        "Run hospitality as boutique experience, not price-war inventory.",
        "Use farming as supply chain support and branded quality differentiator."
      ]
    },
    {
      id: "gulf_expansion",
      label: "Gulf Expansion (premium international)",
      scenarios: [
        { name: "Low", total: "$550k", notes: "Entry via partnerships and managed property contracts" },
        { name: "Base", total: "$780k", notes: "Balanced independent brand setup" },
        { name: "High", total: "$1.1M", notes: "Premium hospitality and multi-brand launch" }
      ],
      breakeven: [
        { unit: "Trading", low: "2 months", base: "3 months", high: "4 months", driver: "Cross-market portfolio control" },
        { unit: "Restaurant", low: "14 months", base: "20 months", high: "28 months", driver: "Lease + labor + premium demand" },
        { unit: "Hotel/Homestay", low: "15 months", base: "22 months", high: "30 months", driver: "Tourism cycles and positioning" },
        { unit: "Farming", low: "12 months", base: "18 months", high: "24 months", driver: "Import/dependency and climate control" },
        { unit: "Mentorship/Digital", low: "5 months", base: "7 months", high: "10 months", driver: "International audience trust" }
      ],
      notes: [
        "Enter with local partners for regulatory speed and operating reliability.",
        "Keep trading/legal entities ring-fenced from hospitality liabilities.",
        "Use premium service quality and bundled experiences as core moat."
      ]
    }
  ]
};
