import "./styles/style.css";
import header from "./components/header";
import home from "./pages/home";
import footer from "./components/footer";

const content = document.querySelector("#content");

content.innerHTML = `
${header()}
${home()}
${footer()}
`;
