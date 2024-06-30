const urlAlunos = 'http://localhost:3000/alunos'
const urlEmpresas = 'http://localhost:3000/empresas'
const urlProfessores = 'http://localhost:3000/professores'
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const idProfile = urlParams.get('idProfile')
const type = urlParams.get('type')
const typeProfile = urlParams.get('typeProfile')
const container = document.querySelector('.container-perfil')
const modal = document.querySelector('.modal-body')
console.log(container)

let perfil

let cursos

let vagas

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

async function getPerfil(){
    if (typeProfile == 'Aluno'){
        await fetch(`http://localhost:3000/alunos/${idProfile}`)
        .then((response) =>{ 
            return response.json()
        })
        .then((response) => {
            perfil = response
            cursos = perfil.cursos

            const nomeDoPerfil = document.querySelector('.perfil-nome')
            nomeDoPerfil.innerText = perfil.nome

            const bio = document.querySelector('.perfil-bio')
            bio.innerText = perfil.sobre || 'Ainda não possui descrição'

            container.innerHTML += `
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Seguidores: ${perfil.seguidores.length}
            </button>
            `
            perfil.seguidores?.forEach((seguidor) => {
                modal.innerHTML += `
                    <p>${seguidor.nome}</p>
                `
            })

            loadCursos()
        })
    } else if (typeProfile == 'Professor'){
        await fetch(`http://localhost:3000/professores/${idProfile}`)
        .then((response) =>{ 
            return response.json()
        })
        .then((response) => {
            perfil = response
            cursos = perfil.cursos

            const nomeDoPerfil = document.querySelector('.perfil-nome')
            nomeDoPerfil.innerText = perfil.nome

            const bio = document.querySelector('.perfil-bio')
            bio.innerText = perfil.sobre || 'Ainda não possui descrição'

            container.innerHTML += `
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Seguidores: ${perfil.seguidores.length}
            </button>
            `
            perfil.seguidores?.forEach((seguidor) => {
                modal.innerHTML += `
                    <p>${seguidor.nome}</p>
                `
            })

            loadCursos()
        })
    } else{
        await fetch(`http://localhost:3000/empresas/${idProfile}`)
        .then((response) =>{ 
            return response.json()
        })
        .then((response) => {
            perfil = response
            vagas = perfil.vagas

            const nomeDoPerfil = document.querySelector('.perfil-nome')
            nomeDoPerfil.innerText = perfil.nome

            const bio = document.querySelector('.perfil-bio')
            bio.innerText = perfil.sobre || 'Ainda não possui descrição'

            container.innerHTML += `
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Seguidores: ${perfil.seguidores.length}
            </button>
            `
            perfil.seguidores?.forEach((seguidor) => {
                modal.innerHTML += `
                    <p>${seguidor.nome}</p>
                `
            })

            loadVagas()

        })
    }
    
}

getPerfil()


const cardsContainer = document.getElementById('cards-container')

async function loadCursos(){
    cursos?.forEach(curso => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h4 class="card-title">${curso.nome}</h4>
                <p>${curso.descricao}</p>
                <a href="../detalhes-curso/detalhes_curso.html?${urlParams}&idCurso=${curso.id}" target="_blank" class="btn btn-primary btn-ver-curso">Ver detalhes</a>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

async function loadVagas(){
    vagas?.forEach(vaga => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <h4>${vaga.titulo}</h4>
            <p>${vaga.descricao}</p>
            <a href="../candidatar-vaga/candidata_vaga.html?id=${id}&type=${type}&idVaga=${vaga.id}" target="_blank" class="btn btn-primary btn-ver-curso">Candidatar</a>
        `;
        cardsContainer.appendChild(card);
    });
}


const tituloDinamico = document.querySelector('.title-section')

if (typeProfile == 'Aluno'){
    tituloDinamico.innerText = 'Cursos assistidos:'
} else if (typeProfile == 'Professor'){
    tituloDinamico.innerText = 'Cursos postados:'
} else {
    tituloDinamico.innerText = 'Vagas postadas:'
}

document.addEventListener('click', (e) => {
    const element = e.target

    if (element.classList.contains('seguir')){
        perfil.seguidores.push(userLogado)

        if (typeProfile == 'Aluno'){
            axios.put(`${urlAlunos}/${idProfile}`, perfil)
        } else if (typeProfile == 'Professor'){
            axios.put(`${urlProfessores}/${idProfile}`, perfil)
        } else{
            axios.put(`${urlEmpresas}/${idProfile}`, perfil)
        }

        
    }
})