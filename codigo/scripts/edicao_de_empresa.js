const nome = document.querySelector("#nome")
const cnpj = document.querySelector("#CNPJ")
const email = document.querySelector("#email")
const areaAtuacao = document.querySelector("#areaAtuacao")
const senha = document.querySelector("#senha")
const nova_senha = document.querySelector("#nova-senha")
const botao_salvar = document.querySelector("#botao")


let url_empresa = 'http://localhost:3000/empresas'

const usuario  = "a81a" 


botao_salvar.addEventListener("click", (e) =>{
    e.preventDefault()
    for( let i = 0;i<empresa.length;i++){
        if (usuario==empresa[i].id){
            if(senha.value!="")
                if(senha.value!=empresa[i].senha){
                    alert("A senha esta incorreta")
                }
                else{
                    if(nome.value!=""){
                        empresa[i].nome=nome.value
                        axios.put(`${url_empresa}/${usuario}`,empresa[i])
                    }
                    if(cnpj.value!=""){
                        empresa[i].cnpj=cnpj.value
                        axios.put(`${url_empresa}/${usuario}`,empresa[i])
                    }
                    if(email.value!=""){
                        empresa[i].email=email.value
                        axios.put(`${url_empresa}/${usuario}`,empresa[i])
                    }
                    if(nova_senha.value!=""){
                        empresa[i].senha=nova_senha.value
                        axios.put(`${url_empresa}/${usuario}`,empresa[i])
                    }
                    if(areaAtuacao.value!=""){
                        empresa[i].areaAtuacao=areaAtuacao.value
                        axios.put(`${url_empresa}/${usuario}`,empresa[i])
                    }
                }
                
            else{
                alert("Digite a senha ")
            }
        }
    }
})

let empresa

async function resgataDados(){
    const resposta  = await axios.get(url_empresa)
    empresa = resposta.data
   
}
resgataDados()
