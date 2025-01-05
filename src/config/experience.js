const tags = {
  internship: "Internship",
  academic: "Academic",
  extracurricular: "Extracurricular",
  tech: "Tech",
  finance: "Finance",
  leadership: "Leadership",
  political: "Political",
  fulltime: "Full time",
};

const experiences = [
  {
    title: "Palantir Technologies",
    date: "2021-Current",
    url: "https://www.palantir.com/",
    subtitle: "Technical Lead",
    description: "Backend lead for the Simulation and Unmanned Systems team.",
    tags: [tags.fulltime, tags.leadership],
  },
  {
    title: "Bridgewater Associates",
    date: "July-August 2020",
    url: "https://www.bridgewater.com/",
    subtitle: "Investment Associate Intern",
    description:
      "Participating in the Bridgwater Investment Associates internship program starting July 2020.",
    tags: [tags.internship, tags.finance],
  },
  {
    title: "Harvard Open Data Project",
    date: "2018 - 2020",
    subtitle: "President, Board Member",
    url: "http://hodp.org",
    description:
      "I was the President of the Harvard Open Data Project. I helped expand the club from 10 active members to over 30 active members during my year as President. I launched several new initiatives, including a survey group, an automated data scraping system, a Wiki, and a Predictions game. I also reorganized the board to better distribute work and instituted new project management systems to ensure that worked was completed. Finally, I initiated our corporate sponsorships program,raising thousands of dollars to fund HODP projects and infrastructure.",
    tags: [tags.extracurricular, tags.leadership, tags.tech],
  },
  {
    title: "Economics Research Assistant",
    date: "Fall 2019 - Current",
    description:
      "Worked as a research assistant to Professor Stefanie Stantcheva and Alberto Alesina. For Professor Stantcheva, I created a website and helped create/analyze a survey. For Professor Alesina, I helped review math for a political economy paper and helped debug R code for a statistical analysis.",
    tags: [tags.academic],
  },
  {
    title: "ECON 1011A Course Assistant",
    date: "Fall 2019 - Current",
    subtitle: "Microeconomic Theory: Advanced",
    description:
      "Helped teach the advanced microeconomic course by answering student questions, reviewing assignments, and holding office hours.",
    tags: [tags.academic],
  },
  {
    title: "Palantir Technologies",
    url: "https://www.palantir.com/",
    date: "Summer 2020",
    subtitle: "Software Engineering Intern",
    description: `I worked as a software engineering intern at Palantir technologies. I worked on the Gotham Workbench team, which involved improving the build system and dev tools. Some of the projects I worked on include:
        
        <ul>
            <li>Automated scaling of AWS server allocations, reducing costs by an estimated $8,000 per month.</li>
            <li>Reducing runtime of test data ingestion system by ~4x by improving concurrency and speeding up database transactions.</li>
            <li>Create dashboards to analyze problems with failing builds and to identify non-deterministic tests.</li>
            <li>Enable workflow management integration and build metadata through commit messages.</li>
        </ul>
        `,
    tags: [tags.internship, tags.tech],
  },
  {
    title: "Harvard Decision Science Lab",
    subtitle: "Research Assistant",
    url: "http://decisionlab.harvard.edu/",
    date: "Fall 2018",
    description:
      "Worked as a Research Assistant at the Harvard Decision Science Lab. I helped test out new psychology experiments and offered feedback to researchers. I also helped run the lab, including by making improvements to the finance tracking system on the website",
    tags: [tags.academic],
  },
  {
    title: "Allianz Life Insurancy Company of North America",
    url: "https://www.allianzlife.com/",
    subtitle: "IT Intern",
    date: "Summer 2018",
    description:
      "Was named the intern of the year out of 60+ interns. Developed a proposal to implement an API for external data access that won proposal competition and was slated to be implemented. Created web apps for easily executing SQL queries and for automatically entering test data using Selenium. ",
    tags: [tags.internship, tags.tech],
  },
  {
    title: "McCollum for Congress",
    url: "https://www.mccollumforcongress.com/",
    subtitle: "Field Fellow",
    date: "Summer 2016",
    description:
      "Workd as a Field Fellow for the campaign of Congresswoman Betty McCollumn (MN-4). Made phone calls and door knocked on behalf of the campaign. Also helped analyze precinct-level primary election results to better target campaign resources during the general election.",
    tags: [tags.internship, tags.political],
  },
];

export { experiences, tags };
