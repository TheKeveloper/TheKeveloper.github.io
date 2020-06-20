(this["webpackJsonpkevin-bi"]=this["webpackJsonpkevin-bi"]||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),s=a(6),c=a(7),l=a(9),u=a(8),d=(a(37),a(38),a(19)),m=a(3),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",style:{textAlign:"center"}},r.a.createElement("h1",null,"Kevin Bi"))}}]),a}(r.a.PureComponent),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.title?r.a.createElement("div",{className:"row"},r.a.createElement("h3",null,this.props.title)):null,r.a.createElement("div",{className:"row"},this.props.children))}}]),a}(r.a.PureComponent),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(h,{title:"Hi"},r.a.createElement("p",null,"I'm Kevin. I'm from Minnesota and I'm a member of the Harvard College Class of 2021. I'm studying Applied Mathematics with a focus in Economics. I was the President of the ",r.a.createElement("a",{href:"http://hodp.org",target:"_blank"},"Harvard College Open Data Project")," from 2019-2020. My academic interests include: microeconomic theory, game theory, real analysis, and statistics. See the ",r.a.createElement(d.b,{exact:!0,to:"/projects"},"Projects")," page for things that I've worked on or am currently working on.")))}}]),a}(r.a.PureComponent),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"container",style:{overflow:"hidden",flexGrow:1,position:"relative"}},r.a.createElement("div",{style:{marginTop:10,marginBottom:10,paddingTop:10,paddingBottom:10,display:"block",height:void 0,flex:1,overflowY:"auto"}},this.props.items.map((function(e){return r.a.createElement("div",{className:"list-item",style:{marginTop:10,marginBottom:10}},e)}))))}}]),a}(r.a.PureComponent),v={development:"Development",website:"Website",research:"Research",hodp:"Harvard Open Data Project",article:"Article"},f=[{title:"Understanding Economics Website",date:"Spring 2020",url:"https://understandingeconomics.org/",repo:"https://github.com/Understanding-Economics/Understanding-Economics.github.io",description:"Website to display survey response data for a research project by Professor Stefanie Stantcheva.",tags:[v.research,v.development,v.website]},{title:"HODP Website",date:"2018 - 2020",url:"http://hodp.org/",repo:"https://github.com/Understanding-Economics/Understanding-Economics.github.io",description:"Website for the Harvard Open Data Project. I helped transition the website to a Flask backend and developed the authentication system for HODP members",tags:[v.hodp,v.development,v.website]},{title:"Do Police Protests Work?",date:"June 2020",url:"https://medium.com/harvard-open-data-project/do-police-protests-work-718a8f91dffd",description:"Article analyzing whether BLM protests in 2014-2015 decreased the number of killings by police in subsequent dates.",tags:[v.hodp,v.article]},{title:"Our UC prediction got dunked on. Here\u2019s why.",date:"Nov. 2019",url:"https://medium.com/harvard-open-data-project/our-uc-prediction-got-dunked-on-heres-why-ed936bf5c33e",description:"Analysis of why the HODP 2019 UC Presidential election predictions were wrong.",tags:[v.hodp,v.article]},{title:"QAnalytic",date:"2018",url:"http://qanalytic.com/",repo:"https://github.com/TheKeveloper/QAnalytics-PHP",description:"Website for viewing cross-time Harvard course evaluations data. Written with a PHP backend.",tags:[v.development,v.website]}],y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{className:"card h-100",style:{borderRadius:10,borderColor:"grey",borderWidth:3,padding:10,fontSize:"12pt"}},r.a.createElement("span",null,r.a.createElement("strong",{style:{fontSize:"14pt"}},e.url?r.a.createElement("a",{href:e.url,target:"_blank"},e.title):e.title)," ",r.a.createElement("span",null,e.repo?r.a.createElement("a",{href:e.repo,target:"_blank"},"(GitHub)"):null),r.a.createElement("span",{style:{float:"right",marginRight:30}},e.date)),e.subtitle?r.a.createElement("span",null,r.a.createElement("i",null,e.subtitle)):null,r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.description}}),r.a.createElement("div",{className:"tags",style:{display:"flex",marginTop:10}},e.tags.sort().map((function(e){return r.a.createElement("div",{className:"card h-100",style:{fontSize:"10pt",color:"grey",marginRight:5,padding:2}},e)}))))}}]),a}(r.a.PureComponent),E=a(31),j=a(30),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={selectedTags:[]},e.handleChange=function(t){console.log(t),t?e.setState({selectedTags:t.map((function(e){return e.value}))}):e.setState({selectedTags:[]})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=Object(j.a)(),a=this.props.items.filter((function(t){return e.state.selectedTags.reduce((function(e,a){return e&&-1!=t.tags.indexOf(a)}),!0)}));return r.a.createElement("div",{className:"ItemDisplay"},r.a.createElement(E.a,{isMulti:!0,closeMenuOnSelect:!1,name:"tags",options:Object.values(this.props.tags).map((function(e){return{value:e,label:e}})),className:"basic-multi-select",classNamePrefix:"select",components:t,onChange:this.handleChange.bind(this),placeholder:"Filter tags..."}),r.a.createElement(b,{items:a.map((function(e){return r.a.createElement(y,{item:e})}))}))}}]),a}(r.a.PureComponent),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProjectsPage"},r.a.createElement("h3",{style:{textAlign:"center",marginTop:20,marginBottom:20}},"Projects"),r.a.createElement(O,{tags:v,items:f}))}}]),a}(r.a.PureComponent),w={internship:"Internship",academic:"Academic",extracurricular:"Extracurricular",tech:"Tech",leadership:"Leadership"},k=[{title:"Harvard Open Data Project",date:"2018 - 2020",subtitle:"President, Board Member",url:"http://hodp.org",description:"I was the President of the Harvard Open Data Project. I helped expand the club from 10 active members to over 30 active members during my year as President. I launched several new initiatives, including a survey group, an automated data scraping system, a Wiki, and a Predictions game. I also reorganized the board to better distribute work and instituted new project management systems to ensure that worked was completed. Finally, I initiated our corporate sponsorships program,raising thousands of dollars to fund HODP projects and infrastructure.",tags:[w.extracurricular,w.leadership,w.tech]},{title:"Economics Research Assistant",date:"Fall 2019 - Current",description:"Worked as a research assistant to Professor Stefanie Stantcheva and Alberto Alesina. For Professor Stantcheva, I created a website and helped create/analyze a survey. For Professor Alesina, I helped review math for a political economy paper and helped debug R code for a statistical analysis.",tags:[w.academic]},{title:"Palantir Technologies",url:"https://www.palantir.com/",date:"Summer 2020",subtitle:"Software Engineering Intern",description:"I worked as a software engineering intern at Palantir technologies. I worked on the Gotham Workbench team, which involved improving the build system and dev tools. Some of the projects I worked on include:\n        \n        <ul>\n            <li>Automated scaling of AWS server allocations, reducing costs by an estimated $8,000 per month.</li>\n            <li>Reducing runtime of test data ingestion system by ~4x by improving concurrency and speeding up database transactions.</li>\n            <li>Create dashboards to analyze problems with failing builds and to identify non-deterministic tests.</li>\n            <li>Enable workflow management integration and build metadata through commit messages.</li>\n        </ul>\n        ",tags:[w.internship,w.tech]}],C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ExperiencePage"},r.a.createElement("div",{className:"ProjectsPage"},r.a.createElement("h3",{style:{textAlign:"center",marginTop:20,marginBottom:20}},"Projects"),r.a.createElement(O,{tags:w,items:k})))}}]),a}(r.a.PureComponent),I=[{title:"Home",route:"/",component:function(){return r.a.createElement(g,null)}},{title:"Projects",route:"/projects",component:function(){return r.a.createElement(P,null)}},{title:"Experience",route:"/experience",component:function(){return r.a.createElement(C,null)}}],x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},I.map((function(e){return r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{exact:!0,className:"nav-link",activeClassName:"nav-active",to:e.route},e.title))})))))}}]),a}(r.a.PureComponent),N=(a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",{className:"App container"},r.a.createElement(p,null),r.a.createElement(x,null),r.a.createElement("div",{className:"container content-container",style:{marginTop:10}},r.a.createElement(m.c,null,I.map((function(e){return r.a.createElement(m.a,{exact:!0,path:e.route,component:e.component})}))))))}}]),a}(n.Component));a(45);o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.610fc0bd.chunk.js.map