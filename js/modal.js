const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  modal: document.querySelector("[data-backdrop]"),
  checkbox_button: document.querySelector("[checkbox-button]"),
  button: document.querySelector("[button]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.checkbox_button.addEventListener("click", toggleButton);

function toggleButton() {
  refs.button.classList.toggle("is-hidden");
}
function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}
