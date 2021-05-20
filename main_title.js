export default function main_title(textas) {
  const h1 = document.createElement("h1");
  h1.className = "main-title";
  h1.textContent = textas;
  document.body.insertAdjacentElement("afterbegin", h1);
}
