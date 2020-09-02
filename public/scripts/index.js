const searchPoints = document.getElementById('pesquisar-pontos')
const modal = document.getElementById('modal')
const exitModal = document.getElementById('fechar-modal')

searchPoints.addEventListener("click", () => {
    modal.classList.remove("hide");
});

exitModal.addEventListener("click", () => {
    modal.classList.add("hide");
});
