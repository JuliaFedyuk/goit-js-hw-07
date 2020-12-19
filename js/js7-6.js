const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  if (event.target.value.length !== +inputRef.dataset.length) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
}
