import "./index.css";
import iconPizza from "./img/icon-pizza.png";

const createMenu = () => {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  menu.innerHTML = `
    <h2>Notre menu</h2>`;

  for (let i = 0; i < 3; i++) {
    const pizza = document.createElement("div");
    pizza.classList.add("pizza");
    pizza.innerHTML = `
      <img class="icon" src="${iconPizza}" alt="Pizza">
      <h4 class="title">Diavoletto</h4>
      <p class="description">Coulis de tomates bio mariapina, mozzarella, spianata (saucisson piquant de Calabre)</p>
      <span class="price">15€</span>`;
    menu.appendChild(pizza);
  }

  return menu;
};

const loadMenu = () => {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.appendChild(createMenu());
};

export default loadMenu;
