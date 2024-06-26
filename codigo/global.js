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

        <nav class="nav d-flex  justify-content-center gap-4 align-items-center">
            <div>
                <a href="../../componentes/social/social.html?type=${typeLogin}&id=${idUser}" class="nav-item">Página Inicial</a>
            </div>
            <div>
                <a href="../../componentes/lista-curso/lista_cursos.html?type=${typeLogin}&id=${idUser}" class="nav-item">Cursos</a>
            </div>
            <div>
                <a href="../../componentes/lista-vagas/lista_vagas.html?type=${typeLogin}&id=${idUser}" class="nav-item">Vagas</a>
            </div>
            <div>
                <a href="../../componentes/sobre/sobre.html" class="nav-item">Sobre nós</a>
            </div>

        </nav>

        

        <a class="entrar btn d-flex justify-content-center align-items-center p-3 gap-1">
            Conta
        </a>
    `
    const inputPesquisaPerfil = document.querySelector('#input-pesquisa-perfil')

    const formPesquisaPerfil = document.querySelector('form')

    const btnConta = document.querySelector('.entrar')

    if (typeLogin == 'aluno'){
        btnConta.setAttribute('href', `../perfil-aluno/perfil_aluno.html?${urlP}`)
    } else if (typeLogin == 'professor'){
        btnConta.setAttribute('href', `../perfil-professor/perfil_professor.html?${urlP}&idProfile=${urlP.get('id')}`)
    } else if (typeLogin == 'empresa'){
        btnConta.setAttribute('href', `../perfil-empresa/perfil_empresa.html?${urlP}&idProfile=${urlP.get('id')}`)
    }

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

