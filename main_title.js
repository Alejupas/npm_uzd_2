function mainTitle(textas) {
  const h1 = document.createElement("h1");
  h1.className = "main-title";
  h1.textContent = textas;
  return h1;
}

export default mainTitle;
