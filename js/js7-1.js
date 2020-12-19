const itemsRef = document.querySelectorAll("li.item");
console.log(`в списке ${itemsRef.length} категории`);

itemsRef.forEach((item) => {
  const heading = item.querySelector("h2");
  console.log("Категория:", heading.textContent);
  const list = item.querySelectorAll("ul li");
  console.log("Количество элементов:", list.length);
});
