import "./index.css";

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
    <a href="https://github.com/vinesk" target="_blank">
      <i class = "fa-brands fa-github"></i>
      &nbsp;vinesk
    </a>`;

  return footer;
}

export default createFooter;
