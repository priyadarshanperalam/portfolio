class TechAndSkills {
  constructor() {
    this.data = [
      {
        desc: "High team spirit and excellent team player",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "Conceptual skills: Javascript, Data-structures, OOP, HTML, CSS",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "Languages and frameworks: React, Angular, jQuery, NodeJs, Less, Sass",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "Project Management skills: Agile (Scrum and Kanban),  Waterfall",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "IDE:  VSCode, WebStorm, Eclipse, Intellij",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "Database experiences: MongoDB, PostgreSQL, PLSQL",
        imgSrc: "assets/images/tech/1",
      },
      {
        desc: "Tools:  GIT, JIRA, Docker, Adobe XD, OmniGraffle, OmniPlan, Slack",
        imgSrc: "assets/images/tech/1",
      },
    ];
    this.techData = [
      { title: "JS", imgSrc: "assets/images/techs/js.png" },
      { title: "HTML5", imgSrc: "assets/images/techs/html5.png" },
      { title: "CSS", imgSrc: "assets/images/techs/css.png" },
      { title: "React", imgSrc: "assets/images/techs/react.png" },
      { title: "Angular", imgSrc: "assets/images/techs/angular.png" },
      { title: "JQuery", imgSrc: "assets/images/techs/jquery.png" },
      { title: "Bootstrap", imgSrc: "assets/images/techs/bootstrap.png" },
      { title: "AWS", imgSrc: "assets/images/techs/aws.png" },
      { title: "Babel", imgSrc: "assets/images/techs/babel.png" },
      { title: "Bitbucket", imgSrc: "assets/images/techs/bitbucket.png" },
      { title: "D3", imgSrc: "assets/images/techs/d3.png" },
      { title: "Docker", imgSrc: "assets/images/techs/docker.png" },
      { title: "Flutter", imgSrc: "assets/images/techs/flutter.png" },
      { title: "Github", imgSrc: "assets/images/techs/github.png" },
      { title: "Gitlab", imgSrc: "assets/images/techs/gitlab.png" },
      { title: "Jira", imgSrc: "assets/images/techs/jira.png" },
      { title: "MongoDB", imgSrc: "assets/images/techs/mongodb.png" },
      { title: "Node", imgSrc: "assets/images/techs/nodeJs.png" },
      { title: "Photoshop", imgSrc: "assets/images/techs/photoshop.png" },
      { title: "Redux", imgSrc: "assets/images/techs/redux.png" },
      { title: "Webpack", imgSrc: "assets/images/techs/webpack.png" }
    ];
    this.contentArea = document.querySelector(".page-section__tech");
    this.injectHtml();
  }

  injectHtml() {
    console.log("ites heree");
    this.contentArea.insertAdjacentHTML(
      "beforeend",
      `<div class="wrapper">
        <h2>TECHNOLOGIES AND SKILLS</h2>
        <ul class="generic-text-style__tech">
					${this.techData.map((item) => `<li><span>${item.title}</span><img src="${item.imgSrc}"></li>`).join("")}
        </ul>
      </div>`
    );
  }
}

export default TechAndSkills;
