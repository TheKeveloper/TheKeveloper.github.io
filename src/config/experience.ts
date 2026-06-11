const tags: Record<string, string> = {
  internship: "Internship",
  academic: "Academic",
  extracurricular: "Extracurricular",
  tech: "Tech",
  finance: "Finance",
  leadership: "Leadership",
  political: "Political",
  fulltime: "Full time",
  startup: "Startup",
  ai: "AI",
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
    title: "Percival",
    tags: [tags.fulltime, tags.leadership, tags.startup, tags.ai, tags.tech],
    roles: [
      {
        title: "Cofounder and CEO",
        start: "Mar 2025",
        description:
          "Building AI products for human-in-the-loop robotic process automation and research workflows.",
        accomplishments: [
          "Launched a human-in-the-loop RPA platform and sold $24K ARR.",
          "Created an AI research assistant with 100+ installs.",
          "Raised $3M from Y Combinator and other investors.",
        ],
      },
    ],
  },
  {
    title: "Palantir Technologies",
    url: "https://www.palantir.com/",
    tags: [tags.fulltime, tags.leadership, tags.internship, tags.ai, tags.tech],
    roles: [
      {
        title: "Engineering Lead: Simulation and Unmanned Systems",
        start: "Aug 2023",
        end: "Mar 2025",
        description:
          "Led engineering for unmanned aerial systems products spanning video live streaming, mission simulation, and drone control.",
        accomplishments: [
          "Enabled high availability for a video live streaming service by migrating it to a multi-node containerized architecture.",
          "Reduced production incidents for the video live streaming service by 40%.",
          "Managed 6 direct reports.",
          "Made final hiring decisions for new grad and intern software engineering candidates as hiring manager.",
        ],
      },
      {
        title: "Backend Lead: Ground Control Station",
        start: "Jan 2023",
        end: "Aug 2023",
        description:
          "Led backend development for Palantir's first autonomous drone control system.",
        accomplishments: [
          "Implemented natural language drone control that was shown at AUSA 2023 and Davos 2024.",
        ],
      },
      {
        title: "Software Engineer: Video and Sensor Inference Platform",
        start: "Jul 2021",
        end: "Jan 2023",
        description:
          "Built video, sensor inference, and imagery pipelines for operational AI workflows.",
        accomplishments: [
          "Developed a system for automated sensor cueing based on computer vision detections in video feeds.",
          "Implemented a low-latency satellite imagery pipeline that reduced inference time from 90 minutes to 10 minutes.",
        ],
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
