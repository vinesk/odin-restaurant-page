import "./styles/style.css";
import header from "./components/header";
import home from "./pages/home";
import menu from "./pages/menu";
import contact from "./pages/contact";
import footer from "./components/footer";

const content = document.querySelector("#content");

content.innerHTML = `
  ${header()}
  ${menu()}
  ${footer()}`;
