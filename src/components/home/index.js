import "./index.css";

const createHome = () => {
  const home = document.createElement("section");
  home.classList.add("home");
  home.innerHTML = `
    <h2 class="title">Bienvenue chez Odin Pizza</h2>
    <p class="subtitle">Venez découvrir toutes nos pizzas</p>
    <button class="btn">Découvrir</button>`;

  return home;
};

const loadHome = () => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createHome());
};

export default loadHome;
