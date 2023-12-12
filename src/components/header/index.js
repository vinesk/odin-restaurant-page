import "./index.css";
import loadHome from "../home";
import loadMenu from "../menu";

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
  <a href="#">
    <h1>Odin Pizza</h1>
  </a>
  <nav class="nav">
    <a id="home" href="#">Accueil</a>
    <a id="menu" href="#">Menu</a>
  </nav>`;

  return header;
};

export default createHeader;
