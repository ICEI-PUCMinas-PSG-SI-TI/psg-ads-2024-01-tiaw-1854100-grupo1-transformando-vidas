const nome = document.querySelector("#nome")
const cpf = document.querySelector("#cpf")
const email = document.querySelector("#email")
const TempoAtuacao = document.querySelector("#TempoAtuacao")
const senha = document.querySelector("#senha")
const nova_senha = document.querySelector("#nova-senha")
const botao_salvar = document.querySelector("#botao")


let url_professor = 'http://localhost:3000/professores'

const usuario  = "2225" 


botao_salvar.addEventListener("click", (e) =>{
    e.preventDefault()
    for( let i = 0;i<professor.length;i++){
        if (usuario==professor[i].id){
            if(senha.value!="")
                if(senha.value!=professor[i].senha){
                    alert("A senha esta incorreta")
                }
                else{
                    if(nome.value!=""){
                        professor[i].nome=nome.value
                        axios.put(`${url_professor}/${usuario}`,professor[i])
                    }
                    if(cpf.value!=""){
                        professor[i].cpf=cpf.value
                        axios.put(`${url_professor}/${usuario}`,professor[i])
                    }
                    if(email.value!=""){
                        professor[i].email=email.value
                        axios.put(`${url_professor}/${usuario}`,professor[i])
                    }
                    if(nova_senha.value!=""){
                        professor[i].senha=nova_senha.value
                        axios.put(`${url_professor}/${usuario}`,professor[i])
                    }
                    if(TempoAtuacao.value!=""){
                        professor[i].tempoAtuacao=TempoAtuacao.value
                        axios.put(`${url_professor}/${usuario}`,professor[i])
                    }
                }
                
            else{
                alert("Digite a senha ")
            }
        }
    }
})

let professor

async function resgataDados(){
    const resposta  = await axios.get(url_professor)
    professor = resposta.data
   
}
resgataDados()
