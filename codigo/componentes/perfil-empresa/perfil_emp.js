const containerDados = document.querySelector('.container')
document.addEventListener("DOMContentLoaded", function() {
    const urlEmpresas = 'http://localhost:3000/empresas'
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    const cardsContainer = document.getElementById('cards-container');

    let user
    let vagas
    console.log(id)

    async function loadUser() {
       const response = await axios.get(`${urlEmpresas}/${id}`)
       user = response.data
       vagas = user.vagas
       loadVagas()
       setDados(user)
    }

    loadUser()

    function setDados(obj){
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="foto-perfil">
                <img src="/assets/img/avatar-do-usuario.png" alt="foto de perfil">
                <p><a href="edicao_de_empresa.html?type=empresa&id=${id}">Editar Perfil</a></p>
            </div>

            <div class="perfil">
                <h3>${obj.nome}</h3>
                <p>Ano de criação: ${obj.criacao}</p>
                <p>Ramo: ${obj.ramo}</p>
                <p>Localidade: ${obj.local}</p>
                <p class="desc">Descrição: ${obj.sobre}</p>
                
            </div>
            </div>`
        div.classList.add('container-dados-perfil')
        const sobre = document.createElement('div')
        sobre.innerHTML = `<div class="sobre-container">
                <div class="sobre">
                    <form class="form-sobre-mim">
                        <h3>Sobre mim</h3>
                        <textarea class="texto" placeholder="Digite algo sobre você para te conhecerem melhor."></textarea>
                        <button type="submit" class="btn-enviar">Enviar</button>
                    </form>
                </div>`
        containerDados.appendChild(div)
        containerDados.appendChild(sobre)

        const btnEnviar = document.querySelector('.btn-enviar')
        const texto = document.querySelector('.texto')
        const desc = document.querySelector('.desc')
        btnEnviar.addEventListener('click', async (e) => {
            e.preventDefault()
            user.sobre = texto.value    
            await axios.put(`${urlEmpresas}/${id}`, user)
            desc.innerText += `${user.sobre}`
        })
    }

    

    async function loadVagas(){
        vagas?.forEach(vaga => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h4>${vaga.titulo}</h4>
                <p>${vaga.descricao}</p>
                <a href="${vaga.link}" target="_blank">Ver detalhes</a>
            `;
            cardsContainer.appendChild(card);
        });
    } 
});