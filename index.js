const button = document.querySelector("#share-button");
const wrapper = document.querySelector(".share-links__wrapper");

button.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
