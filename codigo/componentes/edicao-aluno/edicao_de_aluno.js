const nome = document.querySelector("#nome")
const cpf = document.querySelector("#cpf")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const nova_senha = document.querySelector("#nova-senha")
const botao_salvar = document.querySelector("#botao")


let url_aluno = 'http://localhost:3000/alunos'

const usuario  = "47da" 

console.log(bem_vindo)
botao_salvar.addEventListener("click", (e) =>{
    e.preventDefault()
    for( let i = 0;i<alunos.length;i++){
        if (usuario==alunos[i].id){
            if(senha.value!="")
                if(senha.value!=alunos[i].senha){
                    alert("A senha esta incorreta")
                }
                else{
                    if(nome.value!=""){
                        alunos[i].nome=nome.value
                        axios.put(`${url_aluno}/${usuario}`,alunos[i])
                    }
                    if(cpf.value!=""){
                        alunos[i].cpf=cpf.value
                        axios.put(`${url_aluno}/${usuario}`,alunos[i])
                    }
                    if(email.value!=""){
                        alunos[i].email=email.value
                        axios.put(`${url_aluno}/${usuario}`,alunos[i])
                    }
                    if(nova_senha.value!=""){
                        alunos[i].senha=nova_senha.value
                        axios.put(`${url_aluno}/${usuario}`,alunos[i])
                    }
                }
                
            else{
                alert("Digite a senha ")
            }
        }
    }
})

let alunos

async function resgataDados(){
    const resposta  = await axios.get(url_aluno)
    alunos = resposta.data
   
}
resgataDados()
