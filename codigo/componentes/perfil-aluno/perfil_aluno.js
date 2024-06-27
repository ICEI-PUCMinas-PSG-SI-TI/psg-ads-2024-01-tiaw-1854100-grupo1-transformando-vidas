const containerDados = document.querySelector('.container')
document.addEventListener("DOMContentLoaded", function() {
    const urlAlunos = 'http://localhost:3000/alunos'
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    const idProfile = urlParams.get('idProfile')
    const type = urlParams.get('type')
    const cardsContainer = document.getElementById('cards-container');

    let user
    let cursos

    let userLogado

    if (type == 'aluno'){
        async function loadAlunos() {
            const response = await axios.get(`http://localhost:3000/alunos/${id}`)

            userLogado = response.data 
        }

        loadAlunos()
    } else if (type == 'empresa'){
        async function loadEmpresas() {
            const response = await axios.get(`http://localhost:3000/empresas/${id}`)

            userLogado = response.data 
        }
        loadEmpresas()
    } else {
        async function loadProfessores() {
            const response = await axios.get(`http://localhost:3000/professores/${id}`)

            userLogado = response.data 
        }
        loadProfessores()
    }

    async function loadUser() {
       if (!idProfile){
        const response = await axios.get(`${urlAlunos}/${id}`)
        user = response.data
       } else if (id == idProfile){
        const response = await axios.get(`${urlAlunos}/${id}`)
        user = response.data
       } else {
        const response = await axios.get(`${urlAlunos}/${idProfile}`)
        user = response.data
       }
       cursos = user.cursos
       loadCursos()
       setDados(user)
    }

    loadUser()

    let btnSeguir

    function setDados(obj){
        const modal = document.querySelector('.modal')
        modal.innerHTML = `
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Seguidores de ${obj.nome}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                </div>
            </div>
            </div>
        `
        const corpoModal = document.querySelector('.modal-body')
        for (seguidor of obj['seguidores']){
            corpoModal.innerHTML += `
                <p>${seguidor.nome}</p>
            `
        }

        const div = document.createElement('div')
        if (id != idProfile){
            div.innerHTML = `
            <div class="foto-perfil">
                <img src="../../assets/img/avatar-do-usuario.png" alt="foto de perfil">
                <p><a href="edicao_perfil.html">Editar Perfil</a></p>
            </div>

            <div class="perfil">
                <h3>${obj.nome}</h3>
                <p>Data de nascimento: ${obj.data_nascimento || ''}</p>
                <p>Localidade: ${obj.localidade || ''}</p>
                <p class="desc">Descrição: ${obj.sobre || 'Ainda não há descrição'}</p>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalExemplo">
                    
                    Seguidores: ${obj.seguidores.length}
                </button>
                <button class="seguir">
                    <img src="../../assets/img/seguidores.png"/>
                    Seguir
                </button>
                
            </div>
            </div>`
        } else {
            div.innerHTML = `
            <div class="foto-perfil">
                <img src="../../assets/img/avatar-do-usuario.png" alt="foto de perfil">
                <p><a href="edicao_perfil.html">Editar Perfil</a></p>
            </div>

            <div class="perfil">
                <h3>${obj.nome}</h3>
                <p>Data de nascimento: ${obj.dia}/${obj.mes}/${obj.ano}</p>
                <p>Localidade: ${obj.local}</p>
                <p class="desc">Descrição: ${obj.sobre}</p>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modalExemplo">
                    
                    Seguidores: ${obj.seguidores.length}
                </button>
                
            </div>
            </div>`
        }
        
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
            await axios.put(`${urlAlunos}/${id}`, user)
            desc.innerText += `${user.sobre}`
        })

        btnSeguir = document.querySelector('.seguir')

        btnSeguir.addEventListener('click', () => {
            
        })
    }

    async function loadCursos(){
        cursos?.forEach(curso => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h4>${curso.nome}</h4>
                <p>${curso.descricao}</p>
                <a href="../detalhes-curso/detalhes_curso.html?${urlParams}&idCurso=${curso.id}" target="_blank">Ver detalhes</a>
            `;
            cardsContainer.appendChild(card);
        });
    } 

    document.addEventListener('click', (e) => {
        const element = e.target

        if (element.classList.contains('seguir')){
            user.seguidores.push(userLogado)

            axios.put(`${urlAlunos}/${idProfile}`, user)
        }
    })
});