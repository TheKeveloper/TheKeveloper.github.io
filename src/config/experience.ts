const tags: Record<string, string> = {
  internship: "Internship",
  academic: "Academic",
  extracurricular: "Extracurricular",
  tech: "Tech",
  finance: "Finance",
  leadership: "Leadership",
  political: "Political",
  fulltime: "Full time",
};

export interface RoleData {
  title: string;
  start: string;
  /** When the role ended. Omit for ongoing roles (displayed as "Present"). */
  end?: string;
  description: string;
  accomplishments?: string[];
}

export interface ExperienceData {
  title: string;
  url?: string;
  tags: string[];
  /** Ordered most recent first. */
  roles: RoleData[];
}

export function formatDateRange(start: string, end?: string): string {
  if (end === undefined) {
    return `${start} – Present`;
  }
  if (end === start) {
    return start;
  }
  return `${start} – ${end}`;
}

const experiences: ExperienceData[] = [
  {
    title: "Palantir Technologies",
    url: "https://www.palantir.com/",
    tags: [tags.fulltime, tags.leadership, tags.internship, tags.tech],
    roles: [
      {
        title: "Technical Lead",
        start: "2021",
        description:
          "Backend lead for the Simulation and Unmanned Systems team.",
      },
      {
        title: "Software Engineering Intern",
        start: "Summer 2020",
        end: "Summer 2020",
        description:
          "Worked on the Gotham Workbench team, improving the build system and developer tools.",
        accomplishments: [
          "Automated scaling of AWS server allocations, reducing costs by an estimated $8,000 per month.",
          "Reduced runtime of the test data ingestion system by ~4x by improving concurrency and speeding up database transactions.",
          "Created dashboards to analyze problems with failing builds and to identify non-deterministic tests.",
          "Enabled workflow management integration and build metadata through commit messages.",
        ],
      },
    ],
  },
  {
    title: "Bridgewater Associates",
    url: "https://www.bridgewater.com/",
    tags: [tags.internship, tags.finance],
    roles: [
      {
        title: "Investment Associate Intern",
        start: "July 2020",
        end: "August 2020",
        description:
          "Participated in the Bridgewater Investment Associates internship program.",
      },
    ],
  },
  {
    title: "Harvard Open Data Project",
    url: "http://hodp.org",
    tags: [tags.extracurricular, tags.leadership, tags.tech],
    roles: [
      {
        title: "President",
        start: "2019",
        end: "2020",
        description:
          "Led the Harvard Open Data Project during my year as President.",
        accomplishments: [
          "Expanded the club from 10 active members to over 30 active members.",
          "Launched several new initiatives, including a survey group, an automated data scraping system, a wiki, and a predictions game.",
          "Reorganized the board to better distribute work and instituted new project management systems to ensure work was completed.",
          "Initiated the corporate sponsorships program, raising thousands of dollars to fund HODP projects and infrastructure.",
        ],
      },
      {
        title: "Board Member",
        start: "2018",
        end: "2019",
        description:
          "Served on the board of the Harvard Open Data Project before becoming President.",
      },
    ],
  },
  {
    title: "Harvard Department of Economics",
    tags: [tags.academic],
    roles: [
      {
        title: "Research Assistant",
        start: "Fall 2019",
        description:
          "Research assistant to Professors Stefanie Stantcheva and Alberto Alesina.",
        accomplishments: [
          "For Professor Stantcheva, created a website and helped create and analyze a survey.",
          "For Professor Alesina, reviewed math for a political economy paper and helped debug R code for a statistical analysis.",
        ],
      },
    ],
  },
  {
    title: "ECON 1011A: Microeconomic Theory, Advanced",
    tags: [tags.academic],
    roles: [
      {
        title: "Course Assistant",
        start: "Fall 2019",
        description:
          "Helped teach the advanced microeconomic theory course by answering student questions, reviewing assignments, and holding office hours.",
      },
    ],
  },
  {
    title: "Harvard Decision Science Lab",
    url: "http://decisionlab.harvard.edu/",
    tags: [tags.academic],
    roles: [
      {
        title: "Research Assistant",
        start: "Fall 2018",
        end: "Fall 2018",
        description:
          "Helped test new psychology experiments and offered feedback to researchers.",
        accomplishments: [
          "Helped run the lab, including making improvements to the finance tracking system on the lab website.",
        ],
      },
    ],
  },
  {
    title: "Allianz Life Insurance Company of North America",
    url: "https://www.allianzlife.com/",
    tags: [tags.internship, tags.tech],
    roles: [
      {
        title: "IT Intern",
        start: "Summer 2018",
        end: "Summer 2018",
        description: "Named the intern of the year out of 60+ interns.",
        accomplishments: [
          "Developed a proposal to implement an API for external data access that won the intern proposal competition and was slated to be implemented.",
          "Created web apps for easily executing SQL queries and for automatically entering test data using Selenium.",
        ],
      },
    ],
  },
  {
    title: "McCollum for Congress",
    url: "https://www.mccollumforcongress.com/",
    tags: [tags.internship, tags.political],
    roles: [
      {
        title: "Field Fellow",
        start: "Summer 2016",
        end: "Summer 2016",
        description:
          "Worked as a Field Fellow for the re-election campaign of Congresswoman Betty McCollum (MN-04).",
        accomplishments: [
          "Made phone calls and door knocked on behalf of the campaign.",
          "Analyzed precinct-level primary election results to better target campaign resources during the general election.",
        ],
      },
    ],
  },
];

export { experiences, tags };
