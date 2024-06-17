/*
Este JS Global segue o mesmo conceito o CSS Global, 
por hora ele só serve para exportar o header e o footer
para todas as paginas, caso seja necessario adicionar
mais alguma função que se repita em multiplas paginas, 
certifique que não quebrar a porra toda.

obrigado.
 */

document.addEventListener('DOMContentLoaded', () => {
    const urlP = new URLSearchParams(window.location.search)
    const typeLogin = urlP.get('type')
    const idUser = urlP.get('id')

    const header = document.querySelector('.cabecalho')

    header.innerHTML = 
    `
        <div class="logo">
            <p class="logo-texto mb-0">
                #EDUCA
            </p>
            <p class="logo-texto mb-0">
                &lt;/WEB&gt;
            </p>
        </div>

        <nav class="nav d-flex  justify-content-center gap-4">
            <div>
                <a href="../../componentes/pagina-inicial/pagina_inicial.html?type=${typeLogin}&id=${idUser}" class="nav-item">Página Inicial</a>
            </div>
            <div>
                <a href="../../componentes/lista-curso/lista_cursos.html?type=${typeLogin}&id=${idUser}" class="nav-item">Cursos</a>
            </div>
            <div>
                <a href="../../componentes/lista-vagas/lista_vagas.html?type=${typeLogin}&id=${idUser}" class="nav-item">Vagas</a>
            </div>
            <div>
                <a href="" class="nav-item">Sobre nós</a>
            </div>
        </nav>

        <button class="entrar d-flex justify-content-center align-items-center p-3 gap-1">
            Conta
        </button>
    `

    const footer = document.querySelector('.footer')
    footer.innerHTML = 
    `
        <div class="footer-social">
            <a>Desenvolvido pelo Grupo1</a>
            <a href="#"><img src="../../assets/img/icons8-instagram-24.png"></a>
            <a href="#"><img src="../../assets/img/icons8-github-24.png" alt="Git Hub"></a>
        </div>
    `
})

