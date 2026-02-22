window.ROADMAP = {
  title: "Data Engineering Roadmap",
  subtitle: "Focused path to become deployment-ready in 16 weeks",
  tracks: [
    {
      name: "Python + SQL Core",
      status: "In Progress",
      items: ["Advanced SQL joins", "Window functions", "Pandas pipelines"]
    },
    {
      name: "ETL + Orchestration",
      status: "Not Started",
      items: ["Airflow basics", "Dag design", "Data quality checks"]
    },
    {
      name: "Cloud + Warehouse",
      status: "Not Started",
      items: ["AWS S3", "Redshift concepts", "Cost control"]
    },
    {
      name: "Projects + Interview",
      status: "Not Started",
      items: ["2 portfolio projects", "Case-study storytelling", "Mock interviews"]
    }
  ],
  milestones: [
    { week: "Week 1-4", focus: "SQL + Python depth", output: "Mini analytics pipeline" },
    { week: "Week 5-8", focus: "ETL and scheduling", output: "Airflow ETL on sample data" },
    { week: "Week 9-12", focus: "Cloud + warehouse", output: "S3 to warehouse load flow" },
    { week: "Week 13-16", focus: "Interview readiness", output: "Resume-ready end-to-end project" }
  ],
  resources: [
    { label: "Roadmap Kanban Template", href: "https://github.com" },
    { label: "SQL Practice", href: "https://leetcode.com/problemset/database/" },
    { label: "Airflow Docs", href: "https://airflow.apache.org/docs/" }
  ]
};
