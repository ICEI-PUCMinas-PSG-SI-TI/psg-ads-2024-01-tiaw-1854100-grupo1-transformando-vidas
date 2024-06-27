const urlAlunos = 'http://localhost:3000/alunos'
const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
const idProfile = urlParams.get('idProfile')
const type = urlParams.get('type')
const container = document.querySelector('.container-perfil')
const modal = document.querySelector('.modal-body')
console.log(container)

let perfil

let cursos

async function getPerfil(){
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
}

getPerfil()


const cardsContainer = document.getElementById('cards-container')

async function loadCursos(){
    cursos?.forEach(curso => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <h4>${curso.nome}</h4>
            <p>${curso.descricao}</p>
            <a href="../detalhes-curso/detalhes_curso.html?${urlParams}&idCurso=${curso.id}" target="_blank" class="btn btn-primary btn-ver-curso">Ver detalhes</a>
        `;
        cardsContainer.appendChild(card);
    });
}

