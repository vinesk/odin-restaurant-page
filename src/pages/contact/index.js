import "./index.css";

const contact = () => {
  return `
    <main class="contact">
      <h2 class="title">Nous contacter</h2>
      <form class="form" action="#" method="post">
        <label for="firstname">Prénom :</label>
        <input type="text" name="firstname" id="firstname" />
        <label for="lastname">Nom :</label>
        <input type="text" name="lastname" id="lastname" />
        <label for="comment">Commentaire :</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        <button class="btn btn-primary" type="submit">Envoyer</button>
      </form>
    </main>`;
};

export default contact;
