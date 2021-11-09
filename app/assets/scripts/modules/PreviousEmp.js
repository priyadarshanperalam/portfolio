class PreviousEmp {
  constructor() {
    this.data = [
      {
        position: "UI Lead/ COO",
        firm: "Onepixlab Technologies",
        term: "2020 - Present",
        imgSrc: "opl.svg",
      },
      {
        position: "Assistant Consultant",
        firm: "TCS",
        term: "2014 - 2020",
        imgSrc: "tcs.svg",
      },
      {
        position: "UI Developer",
        firm: "MarketXpander",
        term: "2014 - 2014",
        imgSrc: "mx.svg",
      },
      {
        position: "Web Developer",
        firm: "Pinaka Informatics",
        term: "2012 - 2014",
        imgSrc: "pinaka.svg",
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
              `<li>
								<h3>${item.position}</h3>
								<div class="generic-text-style__previous-emp__image"><img src="assets/images/companies/${item.imgSrc}"></div>
								<p>${item.firm}</p>
								<span>${item.term}</span>
							</li>`
          )
          .join("")}
			</ul>`
    );
  }
}

export default PreviousEmp;
