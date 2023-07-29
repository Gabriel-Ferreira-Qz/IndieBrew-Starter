const navegacaoLista = document.querySelector(".navegacao");
const botaoHamburger = document.querySelector(".header-botao");

botaoHamburger.addEventListener("click", () => {
    const visualizacao = navegacaoLista.getAttribute('data-visilizacao');

    if (visualizacao === "false") {
        navegacaoLista.setAttribute('data-visilizacao', true);
        botaoHamburger.setAttribute('aria-expanded', true);

    } else if(visualizacao === "true") {
        navegacaoLista.setAttribute('data-visilizacao', false);
        botaoHamburger.setAttribute('aria-expanded', false);
    }
})
