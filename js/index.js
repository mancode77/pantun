const buttonAdd = document.getElementById("button-add-pantun");
const containerFormAddPantun = document.querySelector(
  ".container-form-add-pantun"
);
const formAddPantun = document.querySelector(".form-add-pantun");

buttonAdd.addEventListener("click", function () {
  formAddPantun.classList.add("display-block-form-add-pantun");
  containerFormAddPantun.classList.add(
    "display-flex-container-form-add-pantun"
  );
});

buttonAdd.removeEventListener("click", function () {
  formAddPantun.classList.add("display-block-form-add-pantun");
});

const closeFormAddPantun = document.querySelector(".close-form-add-pantun");

closeFormAddPantun.addEventListener("click", function () {
  formAddPantun.classList.remove("display-block-form-add-pantun");
  containerFormAddPantun.classList.remove(
    "display-flex-container-form-add-pantun"
  );
});

closeFormAddPantun.removeEventListener("click", function () {
  formAddPantun.classList.remove("display-block-form-add-pantun");
  containerFormAddPantun.classList.remove(
    "display-flex-container-form-add-pantun"
  );
});

const buttonAddPantun = document.querySelector(".buat");

const cards = document.querySelector(".cards");

buttonAddPantun.addEventListener("click", function (event) {
  event.preventDefault();

  if (buttonAddPantun.value === "4") {
    const author = formAddPantun.elements.author.value;
    const bait1 = formAddPantun.elements.bait1.value;
    const bait2 = formAddPantun.elements.bait2.value;
    const bait3 = formAddPantun.elements.bait3.value;
    const bait4 = formAddPantun.elements.bait4.value;

    /*html*/
    const newCard = `
      <span class="jumlah-bait">pantun 4 bait</span>
      <span class="author"> Author: ${author} </span>
      <div class="content">
        <div class="bait">
          <span>"</span>
          <p>${bait1}</p>
        </div>
        <div class="bait">
          <span>"</span>
          <p>${bait2}</p>
        </div>
        <div class="bait">
          <span>"</span>
          <p>${bait3}</p>
        </div>
        <div class="bait">
          <span>"</span>
          <p>${bait4}</p>
        </div>
      </div>`;

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = newCard;

    const fisrtElement = cards.children[0];

    cards.insertBefore(card, fisrtElement);

    formAddPantun.classList.remove("display-block-form-add-pantun");
    containerFormAddPantun.classList.remove(
      "display-flex-container-form-add-pantun"
    );
  } else {
    const author = formAddPantun.elements.author.value;
    const bait1 = formAddPantun.elements.bait1.value;
    const bait2 = formAddPantun.elements.bait2.value;

    /*html*/
    const newCard = `
      <span class="jumlah-bait">pantun 2 bait</span>
      <span class="author"> Author: ${author} </span>
      <div class="content">
        <div class="bait">
          <span>"</span>
          <p>${bait1}</p>
        </div>
        <div class="bait">
          <span>"</span>
          <p>${bait2}</p>
        </div>
      </div>`;

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = newCard;

    const fisrtElement = cards.children[0];

    cards.insertBefore(card, fisrtElement);

    formAddPantun.classList.remove("display-block-form-add-pantun");
    containerFormAddPantun.classList.remove(
      "display-flex-container-form-add-pantun"
    );
  }
});
