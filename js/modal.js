(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    checkedTerms: document.querySelector("#terms:checked"),
    checkMarkWrapper: document.querySelector(".checkbox-icon"),
    checkMarkSVG: document.querySelector(".checkbox-icon svg"),
    unCheckMarkIcon: document.querySelector(".unchecked-box"),
    termsLabel: document.querySelector(".terms-label"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleCheckbox() {
    if (window.getComputedStyle(refs.unCheckMarkIcon).display != "none") {
      console.log("Element is hidden.");
      refs.unCheckMarkIcon.style.display = "none";
      refs.checkMarkSVG.style.display = "block";
    } else {
      console.log("Element is visible.");
      refs.unCheckMarkIcon.style.display = "block";
      refs.checkMarkSVG.style.display = "none";
    }
  }

  refs.checkMarkWrapper.onclick = () => toggleCheckbox();
  refs.termsLabel.onclick = () => toggleCheckbox();
})();
