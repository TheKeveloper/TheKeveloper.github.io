const tags = {
    development : "Development",
    website : "Website",
    research : "Research",
    hodp : "Harvard Open Data Project", 
    article : "Article"
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
        description: "Website for the Harvard Open Data Project. I helped transition the website to a Flask backend and developed the authentication system for HODP members",
        tags : [tags.hodp, tags.development, tags.website]
    },
    {
        title: "Do Police Protests Work?",
        date : "June 2020",
        url : "https://medium.com/harvard-open-data-project/do-police-protests-work-718a8f91dffd",
        description: "Article analyzing whether BLM protests in 2014-2015 decreased the number of killings by police in subsequent dates.", 
        tags : [tags.hodp, tags.article]
    }, 
    { 
        title : "Our UC prediction got dunked on. Here’s why.",
        date : "Nov. 2019",
        url : "https://medium.com/harvard-open-data-project/our-uc-prediction-got-dunked-on-heres-why-ed936bf5c33e",
        description : "Analysis of why the HODP 2019 UC Presidential election predictions were wrong.",
        tags : [tags.hodp, tags.article]
    },
    {
        title: "QAnalytic",
        date: "2018",
        url : "http://qanalytic.com/",
        repo: "https://github.com/TheKeveloper/QAnalytics-PHP",
        description: "Website for viewing cross-time Harvard course evaluations data. Written with a PHP backend.",
        tags : [tags.development, tags.website]
    }
];

export {projects, tags}