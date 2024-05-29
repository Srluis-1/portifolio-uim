const botaoMostrarProjetos = document.querySelector('.btn')
const pojetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos()
    removerBotao()
})

function removerBotao() {
    botaoMostrarProjetos.classList.add('remover')
}

function mostrarMaisProjetos() {
    pojetosInativos.forEach(pojetosInativo => {
        pojetosInativo.classList.add('ativo')
    })
}
