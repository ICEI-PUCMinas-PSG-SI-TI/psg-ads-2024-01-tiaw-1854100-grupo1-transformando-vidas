const a_botao = document.querySelector("#a-botao")
const p_botao = document.querySelector("#p-botao")
const e_botao = document.querySelector("#e-botao")

// capturando o formulario do aluno
const aluno = document.querySelector("#f-aluno")

// criando as variaveis que irão receber meu input do aluno
const a_nome = document.querySelector("#a-nome")
const a_cpf = document.querySelector("#a-cpf")
const l_cpf = document.querySelector("#l-cpf")
const a_email = document.querySelector("#a-email")
const renda = document.querySelector("#renda")
const renda_minima = document.querySelector("#renda-minima")
const a_senha = document.querySelector("#a-senha")
const bot = document.querySelector("#botao")
const form = document.querySelector("#formulario")

// receberão os inputs adicionais do professor e da empresa
const l_professor = document.querySelector("#l-professor")
const l_empresa = document.querySelector("#l-empresa")
const cnpj = document.querySelector("#cnpj")
const a_projetos = document.querySelector("#a-projetos")

let stat=0
// evento  de inicial do formulario
window.addEventListener("load",(e)=>{
    e.preventDefault
    l_professor.setAttribute("class","sem-formulario")
    cnpj.setAttribute("class","sem-formulario")
    a_projetos.setAttribute("class","sem-formulario")
    a_botao.style.color="#3e66f2"
    return
})
// evontos do formulario dinamico 
// alterna os labels se for ( professor , aluno ou emopresa)
p_botao.addEventListener("click",(e)=>{
    e.preventDefault()
    l_professor.setAttribute("class","com-formulario")
    renda_minima.setAttribute("class","sem-formulario")
    cnpj.setAttribute("class","sem-formulario")
    l_cpf.setAttribute("class","com-formulario")
    a_projetos.setAttribute("class","sem-formulario")
    a_botao.style.color="#000"
    e_botao.style.color="#000"
    p_botao.style.color="#3e66f2"
    stat= 1
})
a_botao.addEventListener("click",(e)=>{
    e.preventDefault()
    l_professor.setAttribute("class","sem-formulario")
    renda_minima.setAttribute("class","com-formulario")
    cnpj.setAttribute("class","sem-formulario")
    l_cpf.setAttribute("class","com-formulario")
    a_projetos.setAttribute("class","sem-formulario")
    e_botao.style.color="#000"
    p_botao.style.color="#000"
    a_botao.style.color="#3e66f2"
    stat = 0
})
e_botao.addEventListener("click",(e)=>{
    e.preventDefault()
    l_professor.setAttribute("class","sem-formulario")
    renda_minima.setAttribute("class","sem-formulario")
    cnpj.setAttribute("class","com-formulario")
    l_cpf.setAttribute("class","sem-formulario")
    a_projetos.setAttribute("class","com-formulario")
    a_botao.style.color="#000"
    p_botao.style.color="#000"
    e_botao.style.color="#3e66f2"
    stat = 2

})



// criando a função que cria meu objeto aluno e salva as informações após o click no botão cadastrar
function criarAluno(){
    
    let aluno={
        nome: a_nome.value,
        cpf:a_cpf.value,
        email:a_email.value,
        salario: renda.value ,
        senha:a_senha.value,
        tipo: 'Aluno',
        cursos: [],
        seguidores: [],
        seguindo: []
    }
    return aluno;
}

function criaProfessor(){
    let professor={

        nome: a_nome.value,
        cpf:a_cpf.value,
        email:a_email.value,
        tempoAtuacao: renda.value ,
        senha:a_senha.value,
        tipo: 'Professor',
        descricao:"",
        cursos: [],
        seguidores: [],
        seguindo: []
    }
    return professor
}

function criaEmpresa(){
    let empresa={
        nome: a_nome.value,
        cnpj:a_cpf.value,
        email:a_email.value,
        areaProjetos: renda.value ,
        senha:a_senha.value,
        tipo: 'Empresa',
        vagas: [],
        seguidores: [],
        seguindo: []
    }
    return empresa
}

// criando uma função para cadastrar alunos 
let url_aluno = 'http://localhost:3000/alunos'
let url_professor = 'http://localhost:3000/professores'
let url_empresa = 'http://localhost:3000/empresas'

// criando um evento após o click no botão cadastrar ** o metodo addEventListener aceita o evento de stopin e a cunção que sera chamada
bot.addEventListener("click", (e) => {
    e.preventDefault()
    if(!a_nome.value || !a_cpf.value|| !a_email.value || !renda.value||!a_senha.value){
        alert("Todos os campos devem estar preenchidos")
        return
    }
    if (stat==0){
        let aluno = criarAluno()
        axios.post(url_aluno,aluno)
        location.href = `../login/login.html`
    }

    else if(stat == 1){
        let professor = criaProfessor()
        axios.post(url_professor,professor)
        location.href = `../login/login.html`
    }
    else if(stat == 2){
        let empresa = criaEmpresa()
        axios.post(url_empresa,empresa)
        location.href = '../login/login.html'
    }
})













