// 13N sukurti atskirame faile funkcija banner, kuri grazina i html
// sustilizuota banneri. css galite aprasyti css atskiram faile.
// banneryje yra antraste, paraste, mygtukas,
// extra, paspaudus mygtuka padaryti console log
function banner() {
  const bannerDiv = document.createElement("div");
  bannerDiv.className = "banner-div";
  document.body.insertAdjacentElement("beforeend", bannerDiv);
  const bannerHeading = document.createElement("h2");
  bannerHeading.className = "banner-heading";
  bannerHeading.textContent = "Check out our latest products";
  const bannerP = document.createElement("p");
  bannerP.className = "banner-paragraph";
  bannerP.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore quis provident?";
  const bannerBtn = document.createElement("button");
  bannerBtn.className = "banner-btn";
  bannerBtn.textContent = "Buy now";
  bannerDiv.append(bannerHeading, bannerP, bannerBtn);

  bannerBtn.addEventListener("click", () => {
    console.log("paspaudei banerio butona");
  });
}

export default banner;
