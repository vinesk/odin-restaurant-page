import "./index.css";
import icon from "./img/icon-pizza.png";

const menu = () => {
  let pizzas = "";
  const pizza = `
  <article class="pizza">
    <img class="img" src="${icon}" alt="Diavoletto" />
    <h3 class="name">Diavoletto</h3>
    <p class="price">15€</p>
    <p class="description">
      Coulis de tomates BIO Mariapina, mozzarella, Spianata (saucisson
      piquant de Calabre)
    </p>
  </article>`;
  for (let i = 0; i < 10; i++) {
    pizzas += pizza;
  }

  return `
  <main class="menu">
    <h2 class="title">Nos pizzas</h2>
    <section class="pizzas">
      ${pizzas}
    </section>
  </main>`;
};

export default menu;
