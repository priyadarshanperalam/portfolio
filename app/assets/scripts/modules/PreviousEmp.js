class PreviousEmp {
  constructor() {
    this.data = [
      {
        position: "UI Lead/ COO",
        firm: "Onepixlab Technologies",
        term: "2019 - Present",
      },
      { position: "Assistant Consultant", firm: "TCS", term: "2020 - Present" },
      { position: "UI Developer", firm: "MarketXpander", term: "2014 - 2014" },
      {
        position: "Web Developer",
        firm: "Pinaka Informatics",
        term: "2012 - 2014",
      },
    ];
    this.contentArea = document.querySelector(".page-section__previous-emp");
    this.injectHtml();
  }

  injectHtml() {
    console.log("ites heree");
    this.contentArea.insertAdjacentHTML(
      "beforeend",
      `<ul class="generic-text-style__previous-emp">
				${this.data
          .map(
            (item) =>
              `<li><h3>${item.position}</h3><p>${item.firm}</p><span>${item.term}</span></li>`
          )
          .join("")}
			</ul>`
    );
  }
}

export default PreviousEmp;
