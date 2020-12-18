const decrBtnRef = document.querySelector(".decr-btn");
const valueRef = document.querySelector("#value");
const incrBtnRef = document.querySelector(".incr-btn");

let counterValue = 0;

const printValue = (counterValue) => {
  valueRef.textContent = `${counterValue}`;
};

decrBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  printValue(counterValue);
});

incrBtnRef.addEventListener("click", () => {
  counterValue += 1;
  printValue(counterValue);
});
