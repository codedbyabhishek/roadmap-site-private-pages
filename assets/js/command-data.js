window.COMMAND_CENTER = {
  title: "Business Command Center",
  subtitle: "Track monthly performance and get automatic risk alerts for every income engine",
  units: [
    {
      id: "trading",
      name: "Trading",
      revenueTarget: 20000,
      marginTarget: 35,
      riskThreshold: 6,
      fields: [
        { key: "revenue", label: "Monthly Revenue ($)", type: "number", defaultValue: 12000 },
        { key: "margin", label: "Net Margin (%)", type: "number", defaultValue: 28 },
        { key: "risk", label: "Drawdown (%)", type: "number", defaultValue: 4 }
      ]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      revenueTarget: 45000,
      marginTarget: 18,
      riskThreshold: 35,
      fields: [
        { key: "revenue", label: "Monthly Revenue ($)", type: "number", defaultValue: 22000 },
        { key: "margin", label: "Net Margin (%)", type: "number", defaultValue: 13 },
        { key: "risk", label: "Food Cost (%)", type: "number", defaultValue: 33 }
      ]
    },
    {
      id: "hotel",
      name: "Hotel/Homestay",
      revenueTarget: 28000,
      marginTarget: 22,
      riskThreshold: 60,
      fields: [
        { key: "revenue", label: "Monthly Revenue ($)", type: "number", defaultValue: 15000 },
        { key: "margin", label: "Net Margin (%)", type: "number", defaultValue: 17 },
        { key: "risk", label: "Occupancy (%)", type: "number", defaultValue: 54 }
      ]
    },
    {
      id: "farming",
      name: "Farming",
      revenueTarget: 14000,
      marginTarget: 20,
      riskThreshold: 70,
      fields: [
        { key: "revenue", label: "Monthly Revenue ($)", type: "number", defaultValue: 6500 },
        { key: "margin", label: "Net Margin (%)", type: "number", defaultValue: 15 },
        { key: "risk", label: "Yield Target Hit (%)", type: "number", defaultValue: 68 }
      ]
    },
    {
      id: "digital",
      name: "Mentorship + Digital",
      revenueTarget: 12000,
      marginTarget: 45,
      riskThreshold: 4,
      fields: [
        { key: "revenue", label: "Monthly Revenue ($)", type: "number", defaultValue: 5000 },
        { key: "margin", label: "Net Margin (%)", type: "number", defaultValue: 39 },
        { key: "risk", label: "Churn (%)", type: "number", defaultValue: 6 }
      ]
    }
  ]
};
