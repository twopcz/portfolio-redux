(this["webpackJsonpportfolio-redux"]=this["webpackJsonpportfolio-redux"]||[]).push([[0],{41:function(e,t,a){e.exports=a(68)},46:function(e,t,a){},47:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(46),a(15)),s=a(10),i=(a(47),a(16));var m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center scroll-up py-2"},r.a.createElement(i.Link,{to:"top",spy:!0,smooth:!0,offset:-136,duration:500,key:"about-link"},r.a.createElement("i",{className:"fas fa-angle-double-up"}))),r.a.createElement("footer",{className:"footer text-center",id:"copyright-container"},r.a.createElement("div",null,r.a.createElement("span",null,"copyright \xa9 2020 ",r.a.createElement("b",null,"|")," handcrafted by ",r.a.createElement("b",null,"me")))))},p=(a(57),a(72)),u=(a(58),a(70)),d=a(71);var h=function(){return r.a.createElement(u.a,{id:"intro",className:"mt-5 py-3 d-flex flex-column h-100"},r.a.createElement(d.a,{className:"my-auto px-5"},r.a.createElement("h1",{className:"display-3 pt-5"},"JUSTIN LE")),r.a.createElement(d.a,{className:"px-5"},r.a.createElement("p",{className:"lead"},"full stack dev based in"," ",r.a.createElement("span",{id:"city"},"seattle, washington")," with a passion for creation & design")))};a(59);var g=function(e){return r.a.createElement(u.a,{className:"justify-content-center py-3",id:e.id},r.a.createElement("div",{className:"text-center py-3 projects-heading text-dark"},e.heading),r.a.createElement(d.a,{md:12},r.a.createElement(u.a,{className:"justify-content-center"},r.a.createElement(d.a,{md:8},r.a.createElement("p",{className:"text-center"},e.body),r.a.createElement("div",{className:"text-center"},e.links)))))};a(60);var f=function(e){return r.a.createElement("div",{className:"justify-content-center",id:e.rowID},r.a.createElement(p.a,{className:"d-flex flex-column flex-md-row"},e.projects.map((function(e,t){return r.a.createElement(d.a,{key:"project-column-".concat(t)},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"project-container"},r.a.createElement("img",{className:"img-fluid",src:e.image,alt:e.alt}),r.a.createElement("div",{className:"project-titles text-center"},e.title))))}))))},E=[{title:"ORDER UP",link:"https://order-up-jkrtr.herokuapp.com/",image:"https://github.com/twopcz/portfolio-redux/blob/update/src/assets/images/ou-ss.png?raw=true",alt:"project-1"},{title:"SNEAKER STORE CRM",link:"https://agile-headland-04774.herokuapp.com/",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/crm-ss.png?raw=true",alt:"project-2"},{title:"CUTIE BURGER",link:"https://cutie-burger.herokuapp.com/",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cb-ss.png?raw=true",alt:"project-3"}],b=[{title:"EMPLOYEE DIRECTORY",link:"https://github.com/twopcz/Employee-Directory",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ed-ss.png?raw=true",alt:"project-4"},{title:"BUDGET TRACKER",link:"https://justin-budget-tracker.herokuapp.com/",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/bt-ss.png?raw=true",alt:"project-5"},{title:"TEAM SUMMARY GENERATOR",link:"https://github.com/twopcz/Team-Summary-Generator",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cli-ss.png?raw=true",alt:"project-6"}];var k=function(){return r.a.createElement(u.a,{className:"Projects d-flex flex-column",id:"projects"},r.a.createElement("div",{className:"text-center py-3",id:"projects-header"},r.a.createElement("a",{href:"#/projects",className:"text-dark projects-heading"},"projects"),r.a.createElement("div",null,r.a.createElement("small",null,"(click 'projects' for more details)"))),r.a.createElement(f,{projects:E,rowID:"projects-top"}),r.a.createElement(f,{projects:b,rowID:"projects-bottom"}))};var w=function(){var e={heading:"about",id:"about",body:"Born and raised in Seattle, WA, I have always had a penchant for building and creating things. Endlessly curious about how things functioned, disassembling and reconstructing everything I could get my hands on was more than just a phase. That later evolved into a hobby centered around computers/technology and becoming a developer was the next logical transition. I really enjoy designing/creating things that look great and function well from the ground up. When I am not on the computer, I enjoy taking photos, playing sports or working on cars."},t={heading:r.a.createElement("a",{href:"mailto:me@justinle.page",target:"_blank",rel:"noopener noreferrer",className:"text-dark"},"contact"),id:"contact",body:"Let's build something together. Get in touch with me via e-mail by clicking 'contact,' or tap in up top to see my GitHub, LinkedIn, and digital resume."};return r.a.createElement(p.a,{fluid:!0,className:"pt-5 pt-md-0"},r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(g,e),r.a.createElement(g,t))},y=(a(61),a(35));function v(e){return r.a.createElement(d.a,null,r.a.createElement("ul",{className:e.ul},e.links.map((function(t,a){return"home"===t.page?r.a.createElement(y.LinkContainer,{to:t.link,key:"nav-link-".concat(a)},r.a.createElement("li",{className:e.li,key:"".concat(a,"-li")},r.a.createElement("a",{href:t.link,title:t.title},t.page))):r.a.createElement("li",{className:e.li,key:"".concat(a,"-li")},r.a.createElement(i.Link,{to:t.page,spy:!0,smooth:!0,offset:-136,duration:500,key:"about-link"},t.page))}))))}var j=a(73);a(65);var N=function(){return r.a.createElement(d.a,{md:4},r.a.createElement("div",{className:"text-center text-md-left"},r.a.createElement(j.a.Brand,{className:"text-center rounded-circle mx-0",href:"/",title:"Home",id:"logo-name"},"JL")))};var x=function(e){return r.a.createElement(d.a,null,r.a.createElement("ul",{className:e.ul},e.links.map((function(t,a){return r.a.createElement("li",{className:e.li,key:"".concat(a,"-li")},r.a.createElement("a",{href:t.link,title:t.title,target:"_blank",rel:"noopener noreferrer"},t.page))}))))},R=[{page:r.a.createElement("i",{className:"fab fa-github"}),link:"https://github.com/twopcz",title:"GitHub"},{page:r.a.createElement("i",{className:"fab fa-linkedin"}),link:"https://www.linkedin.com/in/itsjustinle/",title:"LinkedIn"},{page:r.a.createElement("i",{className:"fas fa-file"}),link:"https://resume.justinle.page",title:"R\xe9sum\xe9"}];var T=function(e){return r.a.createElement(j.a,{fixed:"top",className:"shadow",id:"top-nav"},r.a.createElement("div",{className:"d-flex flex-sm-row flex-column w-100 justify-content-between"},r.a.createElement(N,null),r.a.createElement(v,{ul:"nav justify-content-center font-weight-bold",li:"nav-link",links:e.pages}),r.a.createElement(x,{ul:"nav justify-content-center float-md-right",li:"nav-link",links:R})))};var M=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(T,{pages:[{page:"about"},{page:"projects"},{page:"contact"}]}),r.a.createElement(w,null))};a(66);function z(){Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{pages:[{page:"home",link:"/",title:"Home Page"}]}),r.a.createElement(p.a,{fluid:!0,className:"pt-md-5 project-page"},r.a.createElement(u.a,{className:"justify-content-center py-3"},r.a.createElement("div",{className:"project-heading"},"project details")),[{name:"ORDER UP",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ou-ss-2.png?raw=true",link:"https://order-up-jkrtr.herokuapp.com/",repo:"https://github.com/twopcz/order-up",tech:"MongoDB, Express, React and Node",description:"A Restaurant Management System (RMS) that allows the admin to manage the inventory, employees and their shifts, table reservations, and food order tickets. It also incorporates user authentication and permission restrictions for specific routes in the web app. Developed as a Final Project with four other student from the University of Washington Coding Bootcamp."},{name:"SNEAKER STORE",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/jlr-ss-2.png?raw=true",link:"http://jlr-sneaker-crm.herokuapp.com/",repo:"https://github.com/twopcz/jlr-sneaker-crm",tech:"MySQL, Express, React.JS, and Node",description:"A Customer Relationship Management (CRM) system for a Sneaker Store. This CRM presents visual data with Chart.js, includes inventory/vendor management, user authentication, and generates reports. Developed during my classes at the Univeristy of Washington Coding Bootcamp in collaboration with two other students. This project was built prior to being taught React in class as our group decided to tackle self-learning as an additional challenge."},{name:"CUTIE BURGER",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/cb-ss-2.png?raw=true",link:"https://cutie-burger.herokuapp.com/",repo:"https://github.com/twopcz/Burger",tech:"MySQL, Express, Node, and Handlebars",description:"A web application that allows the user to create a list of burgers that they would like to eat. The application demonstates usage of the MVC (Model-View-Controller) design pattern, along with a self-created ORM (Object-Relational-Mapping) to improve altering/readability of the code. It also demonstrates all of the CRUD (Create, Read, master, and Delete) operations."},{name:"EMPLOYEE DIRECTORY",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/ed-ss-2.png?raw=true",repo:"https://github.com/twopcz/Employee-Directory",tech:"React and Node",description:"An employee directory with data generated from an API call to randomuser.me. The data is displayed in a table that can be sorted and filtered by name, phone, email and birthday."},{name:"BUDGET TRACKER",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/bt-ss-2.png?raw=true",link:"https://justin-budget-tracker.herokuapp.com/",repo:"https://github.com/twopcz/Budget-Tracker",tech:"MongoDB, Express and Node",description:"A budget tracker application used to help the user visualize their spending habits. The web application can also be installed as a PWA (Progessive Web App) for online/offline use, so that the user can master their budget if they are not able to be connected to the internet."},{name:"TEAM SUMMARY GENERATOR",image:"https://github.com/twopcz/portfolio-redux/blob/master/src/assets/images/tsg-ss-2.png?raw=true",repo:"https://github.com/twopcz/Team-Summary-Generator",tech:"Node",description:"This application creates a .html file based on the user's input via the command line. The web page displays the team's composition made up of the manager, the engineers, and the interns with their relevant information in an easily digestable format."}].map((function(e,t){return r.a.createElement(u.a,{className:"justify-content-center",key:"project-row-".concat(t)},r.a.createElement(d.a,{md:10,className:"d-flex flex-column flex-md-row py-2",key:"project-container-".concat(t)},r.a.createElement(d.a,{key:"project-pic-".concat(t)},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"img-fluid project-container",src:e.image,alt:"".concat(e.name,"-screenshot")}))),r.a.createElement(d.a,{className:"my-auto",key:"project-desc-".concat(t)},r.a.createElement("div",null,r.a.createElement("h2",{className:"project-heading"},e.name)),r.a.createElement("div",null,r.a.createElement("small",{className:"text-muted"},e.tech)),r.a.createElement("div",null,r.a.createElement("p",null,e.description)),r.a.createElement("div",null,r.a.createElement("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer",className:"badge badge-secondary"},"Repository")))))}))))}var A=function(){return r.a.createElement(l.HashRouter,{basename:"/"},r.a.createElement("div",{className:"App",id:"top"},r.a.createElement(s.g,null,r.a.createElement(s.d,{exact:!0,path:"/",component:M}),r.a.createElement(s.d,{path:"/projects",component:z})),r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.18234a59.chunk.js.map