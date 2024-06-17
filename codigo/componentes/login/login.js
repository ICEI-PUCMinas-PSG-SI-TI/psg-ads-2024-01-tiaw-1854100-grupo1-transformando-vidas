// Selecionando elementos no DOM
const inputEmail = document.querySelector('#login-email')
const inputSenha = document.querySelector('#login-senha')
const selectTipo = document.querySelector('#select-tipo-login')
const btnLogin = document.querySelector('#btn-login')

let userId
let urlParam

const urlAlunos = 'http://localhost:3000/alunos'
const urlProfessores = 'http://localhost:3000/professores'
const urlEmpresas = 'http://localhost:3000/empresas'

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    if(logar()){
        window.location.href = `../pagina-inicial/pagina_inicial.html?${urlParam}`
    }
    else{
        alert('Email e/ou senha incorretos!')
    }
})

let alunos = []
let professores = []
let empresas = []
const loadUsuarios = async () => {
    let response = await axios.get(urlAlunos)
    alunos = response.data
    console.log(alunos)
    response = await axios.get(urlProfessores)
    professores = response.data 
    response = await axios.get(urlEmpresas)
    empresas = response.data
}

loadUsuarios()

function logar(){
    console.log(alunos)
        if (selectTipo.value == 'aluno'){
            for (let aluno of alunos){
                if (aluno.email == inputEmail.value && aluno.senha == inputSenha.value){
                    userId = aluno.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }  
            }
        } else if (selectTipo.value == 'professor'){
            for (let professor of professores){
                if (professor.email == inputEmail.value && professor.senha == inputSenha.value){
                    userId = professor.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }
            }
        } else{
            for (let empresa of empresas){
                if (empresa.email == inputEmail.value && empresa.senha == inputSenha.value){
                    userId = empresa.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }
            }
        }
}