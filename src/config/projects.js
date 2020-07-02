const tags = {
    development : "Development",
    website : "Website",
    research : "Research",
    article : "Article",
    paper : "Paper",
    mobile : "Mobile app",
    hodp : "Harvard Open Data Project", 
    hpr : "Harvard Political Review",
}
const projects = [
    { 
        title : "Understanding Economics Website",
        date : "Spring 2020",
        url : "https://understandingeconomics.org/",
        repo : "https://github.com/Understanding-Economics/Understanding-Economics.github.io",
        description: "Website to display survey response data for a research project by Professor Stefanie Stantcheva.",
        tags : [tags.research, tags.development, tags.website]
    },
    {
        title: "HODP Website",
        date : "2018 - 2020",
        url: "http://hodp.org/",
        repo: "https://github.com/Understanding-Economics/Understanding-Economics.github.io",
        description: "Website for the Harvard Open Data Project. I helped transition the website to a Flask backend and developed the authentication system for HODP members.",
        tags : [tags.hodp, tags.development, tags.website]
    },
    { 
        title : "Harvard in the Age of COVID-19",
        date : "July 2020",
        url: "https://medium.com/harvard-open-data-project/harvard-in-the-age-of-covid-19-1b06e6501335",
        repo: "https://github.com/TheKeveloper/HODP-COVID",
        description: "Analysis of HODP survey data on student response to COVID-19 throughout the Spring 2020 semester at Harvard.",
        tags : [tags.hodp, tags.article]
    },
    {
        title: "Do Police Protests Work?",
        date : "June 2020",
        url : "https://medium.com/harvard-open-data-project/do-police-protests-work-718a8f91dffd",
        description: "Article analyzing whether BLM protests in 2014-2015 decreased the number of killings by police in subsequent dates.", 
        tags : [tags.hodp, tags.article]
    }, 
    {
        title: "Bill cosponsorships, legislative relationships, and the revolving door",
        date: "Spring 2020", 
        url : "https://github.com/TheKeveloper/ECON-1425-Project/blob/master/econ1425_paper.pdf",
        description : "My paper for ECON 1425: Political Economics. In this paper, I examine empirically the buliding of legislative relationships in the U.S. Congress through bill cosponsorships. I find that more prestigious legislators have more cospnosors per bill, and that those who cosponsor more often are more likely to become lobbyists after leaving Congress.",
        tags : [tags.paper, tags.research]
    },
    {
        title: "The Queerness of Queerness",
        date: "Fall 2019",
        url: "https://github.com/TheKeveloper/The-Queerness-of-Queerness-Paper/blob/master/main.pdf",
        description: "My paper for PHIL 173: Metaethics, critiquing J.L. Mackie's anti-realist argument from Queerness.",
        tags : [tags.paper]
    },
    { 
        title : "Our UC prediction got dunked on. Here’s why.",
        date : "Nov. 2019",
        url : "https://medium.com/harvard-open-data-project/our-uc-prediction-got-dunked-on-heres-why-ed936bf5c33e",
        description : "Analysis of why the HODP 2019 UC Presidential election predictions were wrong.",
        tags : [tags.hodp, tags.article]
    },
    {
        title : "Your 2019 Harvard UC President will be…",
        date : "Nov. 2019", 
        url: "https://medium.com/harvard-open-data-project/your-2019-harvard-uc-president-will-be-96675eb9a2c4",
        description: "Our (failed) prediction of the 2019 Harvard UC Presidential election.",
        tags : [tags.hodp, tags.article]
    },
    {
        title: "POLL: Harvard students sharply divided on Crimson-ICE controversy",
        date : "Nov. 2019",
        url: "https://medium.com/harvard-open-data-project/poll-harvard-students-sharply-divided-on-crimson-ice-controversy-a67161e84bb9",
        description: "Article examining results of a survey we took of students regarding the Harvard Crimson-ICE controversy.",
        tags : [tags.hodp, tags.article]
    },
    {
        title: "Harvard Student Opinion on the Second Democratic Debate",
        date: "Sept. 2019",
        url : "https://medium.com/harvard-open-data-project/harvard-student-opinion-on-the-second-democratic-debate-6a2818506b01",
        description: "Article analyzing how the second Democratic Debate of 2019 affected opinions of Harvard students regarding the candidates",
        tags : [tags.hodp, tags.article], 
    },
    {
        title: "Youtube-Politik",
        date : "Feb. 2019",
        url: "https://harvardpolitics.com/culture/youtube-politik/",
        description: "Article investigating the conflict between online content creators and YouTube, particularly regarding the demonetization of certain content on the platform.",
        tags: [tags.hpr, tags.article]
    },
    {
        title: "Single Gender Social Organizations and Safety",
        date: "Jan. 2019",
        url: "https://medium.com/harvard-open-data-project/single-gender-social-organizations-and-safety-dab70a37450a",
        description: "Article analyzing how the prevalence of Greek organizations on college campuses is correlated with the overall incidence of sexual assault.",
        tags : [tags.hodp, tags.article]

    },
    {
        title: "Effects of Recruitment Methods on Survey Response",
        date: "Fall 2018",
        url: "https://github.com/TheKeveloper/PSY-15-Final-Project/blob/master/main.pdf",
        description: "My paper for PSY 15: Social Psychology, where I conduct an experiment on whether monetary or altruistic incentives are more effective at obtaining survey responses",
        tags : [tags.paper, tags.research]
    }, 
    {
        title: "How Diverse Are Harvard Employees?: A Study of Gender and Race",
        date: "July 2018",
        url: "https://harvardpolitics.com/harvard/hodp-faculty-diversity/",
        description: "Article analyzing the racial and gender diversity of Harvard faculty over time.",
        tags: [tags.hodp, tags.article]
    }, 
    {
        title: "Blocked: The Technicalities of Blockchain",
        date: "June 2018",
        url: "https://harvardpolitics.com/world/blocked-the-technicalities-of-blockchain/",
        description: "Article examining the potential pitfalls of Blockchain technology from a technical perspective.",
        tags: [tags.article, tags.hpr]
    },
    {
        title: "Politechs: Interview with Adam Connor",
        date: "May 2018",
        url: "https://harvardpolitics.com/interviews/adam-conner/",
        description: "My interview with then IOP Fellow Adam Connor on the role of technology in politics",
        tags: [tags.article, tags.hpr]
    }, 
    {
        title: "QAnalytic",
        date: "2018",
        url : "http://qanalytic.com/",
        repo: "https://github.com/TheKeveloper/QAnalytics-PHP",
        description: "Website for viewing cross-time Harvard course evaluations data. Written with a PHP backend.",
        tags : [tags.development, tags.website]
    },
    {
        title: "iTorsion",
        date: "2017",
        url: "https://apps.apple.com/us/app/itorsion/id1358552637",
        repo: "https://github.com/TheKeveloper/iTorsion",
        description: "iOS app developed with Dr. Mike Lee of the University of Minnesota to help diagnose occular torsion in patients.",
        tags : [tags.mobile, tags.development]
    }
];

export {projects, tags}