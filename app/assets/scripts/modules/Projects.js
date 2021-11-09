class Projects {
  constructor() {
    this.data = [
      {title:"E-commerce Web Application (Bicycle shop)", timeline:"Onepixlab, May 2021 - Present", desc:"One place to connect all the bicycle shops (Base location - Japan). Application has multiple users including retail shops, rental shops, wholesale shops, bikers, bike service centers, bike agents etc. It has an e-commerce portal with inventory management for managing the stocks.", tech:"React-Redux (Web application), Flutter (Cross Platform Mobile Application), Node, NPM, Express, Webpack, Docker, PostgresQL, AWS, Adobe XD, GIT, Jira, Confluence, JUnit, Java and Maven and related technologies"},
      {title:"MyAppetit (Social media mobila application)", timeline:"Onepixlab, Nov 2020 - May 2021", desc:"The application is a social media platform to connect restaurants, foodies, and everything related to FOOD. Restaurants can create their account, add their special dishes and endorse them. Likewise foodie can share their experience on dishes, they can share different recipes etc.", tech:"Flutter, PostgresQL, Docker, Jira, Confluence, JUnit, Java and Maven"},
      {title:"Umamill (E-Commerce grocery shop)", timeline:"Onepixlab, Nov 2020 - May 2021", desc:"Umamill is an e-commerce platform for buying and selling groceries and related products. The user types include restaurants, agents and grocery stores. Restaurants can order samples from agents or grocery stores to test the quality and market. After that they can order in bulk for selling. Agents can list and publish their products to invite orders from restaurants or other agents.", tech:"React, Redux, Less, Sass, Ajax, Node, NPM, Express, webpack, Java and Maven, GIT, Jira, Confluence, Slack, JUnit, MySql, Docker and related technologies"},
      {title:"Root Cause Analysis Web app", timeline:"TCS, Apple(Client), Aug 2018 - Mar 2020", desc:"Apple Inc. in-house application for IS&T to help Global Business Intelligence. It is used to generate consolidated reports of Apple gadgets. Reports accessibility is controlled and managed by the application. Different varieties of filters and combinations are provided for optimizing the relateds data.", tech:"Javascript, React, Flux, HTML5, CSS3, Ag-Grid, JQuery, Less, Sass, Node, NPM, Express, Python, Webpack, Babel, Ajax, Kafka, graphQL, Oracle, Radar, Karma, Jasmin, JUnit, Apple internal portals and other related technologies"},
      {title:"Field Situation Analysis", timeline:"TCS, Apple(Client), May 2018 - Mar 2020", desc:"Centralized performance analysis application used by Apple Inc higher management for monitoring the key performance indicators(KPI) and alarms. It is used for the generation of a variety of charts and maps. Different varieties of filters and combinations are provided for optimizing the related performance data.", tech:"Angular JS, JQuery, HTML5, CSS3, LESS, Adobe Photoshop, Ajax, Node, NPM, Express, Gulp, Bower, GIT , Web-ex, Jenkins, Radar, Karma, Jasmin, JUnit, Apple internal portals and other related technologies"},
      {title:"GBI Portal Enhancement and Revamp", timeline:"TCS, Apple(Client), Jan 2016 - Mar 2017", desc:"GBI Help is an online information portal that provides users with support documentation across multiple GBI business units. The Global Business Intelligence (GBI) team supports various functional groups with processes and technologies for better decision-making. ies to the decision-makers and end users through a broad range of applications and technologies that gather, store, analyze and provide access to information that helps the business make informed decisions.", tech:"JavaScript, HTML5, CSS3, AngularJs, Bootstrap, jQuery, ExtJs, Ajax, GIT, SVN, Sublime, Omnigraffle, Keynote, Jenkins, Radar, NPM, Express, NodeJs"},
      {title:"Cube Builder (Liger Phase 2)", timeline:"TCS, Apple(Client), Feb 2015 - Aug 2015", desc:"Enhancement of the existing Liger Metadata application. Liger Metadata is the Metadata Management System for Apple. It contains various modules involving Cube builder, which manages the metadata cubes, Areas module that manages the business areas, Aggregates that is used for finding the tables as master or base, Dimensions & Measures, Hierarchies etc.", tech:"JavaScript, HTML5, CSS3, Reviz js, React js, Kube.css, LESS, Bootstrap, Ajax, Radar, GIT, Eclipse, Node, NPM"},
      {title:"Liger - Cube Metadata Generator", timeline:"CS, Apple(Client), Jul 2014 - Jan 2015", desc:"Liger Metadata is the Metadata Management System for Apple. It contains various modules involving Cube builder, which manages the metadata cubes, Areas module that manages the business areas, Aggregates that is used for finding the tables as master or base, Dimensions & Measures, Hierarchies etc.", tech:"JavaScript, HTML5, CSS3, Reviz js, React js, Kube.css, LESS, Bootstrap, Ajax, Radar, GIT, Eclipse, Node, NPM"},
      {title:"Lead tracking and Marketing Web app", timeline:"MarketXpander, Apr 2014 - Jun 2014", desc:"Leadsquared.com, is a marketing and sales automation software, which enables the customers to track their leads for business purposes, helps the users to create landing pages to capture their leads, to create responsive and innovative email campaigns to nurture the leads, identifies the captured leads who are likely to buy, helps to improve the marketing campaigns of the customers.", tech:"Javascript, HTML5, CSS3, Bootstrap Js, Foundation Js, JQuery UI, Kube css, Ajax, Node, NPM, Gulp, Babel, Selenium, Visual Studio, Phonegap, GIT"},
      {title:"Online Auction and e-commerce Web app", timeline:"Pinaka Informatics, Mar 2013 - Apr 2014", desc:"Connecting all Co-operative Societies in rural areas of Karnataka State, India. The main aim of the project is to connect the un structured societies in the state and make them use the advantages of online publicity and marketing of their products.", tech:"HTML5, CSS3, Javascript, Java, J2EE, jQuery, Kube.css, Jboss, Struts, JSP, Servlets, Ajax, Node, MySQL, Workbench"},
      {title:"Centralized Public Distribution System", timeline:"Pinaka Informatics, Sep 2011 - Dec 2012", desc:"Centralized Public Distribution System (Stock & inventory management). The objective is to develop a complete centralized public distribution system. The system is divided into different user levels and functional levels.", tech:"HTML, CSS, Javascript, Java, J2EE, jQuery, Jboss, Struts, JSP, Servlets, Ajax, MySQL, Workbench"},
    ];
    this.contentArea = document.querySelector(".page-section__projects");
    this.injectHtml();
  }

  injectHtml() {
		console.log("ites heree");
    this.contentArea.insertAdjacentHTML(
      'beforeend',
      `<div class="wrapper">
        <h2>PROJECTS</h2>
        <ul class="generic-text-style__projects">
					${this.data.map(item => `<li>
						<h3>${item.title}</h3>
						<p>[ ${item.timeline} ]</p>
						<div>
							<p><i>Description:</i> ${item.desc}</p>
							<p>
								<i>Technologies and Tools:</i> 
								${item.tech.split(',').map(e => `<span class="color-tag color-tag__${e.trim().toLowerCase()}">${e}</span>`).join('')}
							</p>
						</div>
					</li>`).join('')}
        </ul>
      </div>`
    );
  }
}

export default Projects;
