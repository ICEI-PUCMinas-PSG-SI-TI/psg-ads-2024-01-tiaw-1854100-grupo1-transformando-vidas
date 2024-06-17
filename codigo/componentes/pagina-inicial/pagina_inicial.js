const urlParams = new URLSearchParams(window.location.search)
const type = urlParams.get('type')

const btnVagas = document.querySelector('#link-para-vagas')
btnVagas.setAttribute('href', `../lista-vagas/lista_vagas.html${window.location.search}`)

const btnCursos = document.querySelector('#link-para-cursos')
btnCursos.setAttribute('href', `lista_cursos.html${window.location.search}`)

if (type == 'empresa'){
    const btnConta = document.querySelector('#link-para-conta')
    btnConta.setAttribute('href', `perfil_emp.html${window.location.search}`)
} else if (type == 'aluno'){
    const btnConta = document.querySelector('#link-para-conta')
    btnConta.setAttribute('href', `perfil_aluno.html${window.location.search}`)
} else {
    const btnConta = document.querySelector('#link-para-conta')
    btnConta.setAttribute('href', `perfil_prof.html${window.location.search}`)
}

