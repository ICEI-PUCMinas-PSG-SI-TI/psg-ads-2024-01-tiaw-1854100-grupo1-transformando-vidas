// Selecionando elementos no DOM
const inputEmail = document.querySelector('#login-email')
const inputSenha = document.querySelector('#login-senha')
const selectTipo = document.querySelector('#select-tipo-login')
const btnLogin = document.querySelector('#btn-login')

let userId
let urlParam

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    if(logar()){
        location.href = `pagina_inicial.html?${urlParam}`
    }
    else{
        alert('Email e/ou senha incorretos!')
    }
})

const alunos = [
    {
        id: 1,
        email: 'aluno1@gmail.com',
        senha: '123'
    },
    {
        id: 2,
        email: 'aluno2@gmail.com',
        senha: '123'
    },
]

const professores = [
    {
        id: 3,
        email: 'prof1@gmail.com',
        senha: '123'
    },
    {
        id: 4,
        email: 'prof2@gmail.com',
        senha: '123'
    }
]

const empresas = [
    {
        id: 5,
        email: 'emp1@gmail.com',
        senha: '123'
    },
    {
        id: 6,
        email: 'emp2@gmail.com',
        senha: '123'
    }
]

function logar(){
        if (selectTipo.value == 'aluno'){
            for (let aluno of alunos){
                if (aluno.email == inputEmail.value && aluno.senha == inputSenha.value){
                    userId = aluno.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }  
                else
                    return false
            }
        } else if (selectTipo.value == 'professor'){
            for (let professor of professores){
                if (professor.email == inputEmail.value && professor.senha == inputSenha.value){
                    userId = professor.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }
                else
                    return false
            }
        } else{
            for (let empresa of empresas){
                if (empresa.email == inputEmail.value && empresa.senha == inputSenha.value){
                    userId = empresa.id
                    urlParam = `type=${selectTipo.value}&id=${userId}`
                    return true
                }
                else
                    return false
            }
        }
}