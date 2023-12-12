import "./styles/index.css";
import createHeader from "./components/header";
import createMain from "./components/main";
import createFooter from "./components/footer";
import loadHome from "./components/home";
import loadMenu from "./components/menu";

function initializeWebsite() {
  const content = document.querySelector("#content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();

  const links = document.querySelectorAll(".nav a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.target.id === "home" ? loadHome() : loadMenu();
    });
  });
}

initializeWebsite();
