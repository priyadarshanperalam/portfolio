import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import TechAndSkills from "./modules/TechAndSkills";
import Projects from "./modules/Projects";
import PreviousEmp from "./modules/PreviousEmp";
// import ClientArea from "./modules/ClientArea";
// import MyReactComponent from "./modules/MyReactComponent"

//React related code goes here
import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render(<MyReactComponent />, document.querySelector('#my-react-example'));

// new ClientArea();
new TechAndSkills();
new Projects();
new StickyHeader();
new MobileMenu();
new PreviousEmp();

if (module.hot) {
  module.hot.accept();
}
