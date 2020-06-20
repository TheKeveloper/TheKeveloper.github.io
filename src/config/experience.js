const tags = {
    internship : "Internship",
    academic : "Academic",
    extracurricular : "Extracurricular",
    tech : "Tech",
    leadership : "Leadership"
};

const experiences = [
    {
        title: "Harvard Open Data Project",
        date: "2018 - 2020",
        subtitle: "President, Board Member",
        url: "http://hodp.org",
        description: "I was the President of the Harvard Open Data Project. I helped expand the club from 10 active members to over 30 active members during my year as President. I launched several new initiatives, including a survey group, an automated data scraping system, a Wiki, and a Predictions game. I also reorganized the board to better distribute work and instituted new project management systems to ensure that worked was completed. Finally, I initiated our corporate sponsorships program,raising thousands of dollars to fund HODP projects and infrastructure.",
        tags: [tags.extracurricular, tags.leadership, tags.tech]
    },
    {
        title: "Economics Research Assistant",
        date: "Fall 2019 - Current",
        description: "Worked as a research assistant to Professor Stefanie Stantcheva and Alberto Alesina. For Professor Stantcheva, I created a website and helped create/analyze a survey. For Professor Alesina, I helped review math for a political economy paper and helped debug R code for a statistical analysis.",
        tags: [tags.academic]
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
        tags : [tags.internship, tags.tech]
    },
];

export {tags, experiences};