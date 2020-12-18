const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listLink = document.querySelector("#ingredients");
const liRef = ingredients.map((ingredient) => {
  const makeLi = document.createElement("li");
  makeLi.textContent = ingredient;
  return makeLi;
});

listLink.append(...liRef);
