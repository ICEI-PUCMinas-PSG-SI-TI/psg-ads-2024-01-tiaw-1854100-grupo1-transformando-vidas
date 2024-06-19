const formPesquisa = document.querySelector('form')
const inputPesquisa = document.querySelector('.input-form')

const urlParam = new URLSearchParams(window.location.search)

const urlAlunos = 'http://localhost:3000/alunos'
const urlProfessores = 'http://localhost:3000/professores'
const urlEmpresas = 'http://localhost:3000/empresas'

let profiles = []

async function loadProfiles(){

    const responseAl = await axios.get(urlAlunos)
    const alunos = responseAl.data 
    const responseProf = await axios.get(urlProfessores)
    const professores = responseProf.data
    const responseEmp = await axios.get(urlEmpresas)
    const empresas = responseEmp.data 

    profiles = profiles.concat(alunos.concat(professores.concat(empresas)))

    console.log(profiles)

    const container = document.querySelector('.container-perfis')

    profiles.forEach((profile) => {
        console.log(profile.type)
        container.innerHTML += 
        `
            <a href="../perfil-${profile['tipo']}/perfil_${profile['tipo']}.html?${urlParam}&idProfile=${profile.id}" class="link-para-perfil">
                <div class="container-perfil">
                    <h5>${profile.nome}</h5>
                    <p>Perfil: ${profile.tipo}</p>
                    <p class="desc-perfil">Descrição: ${profile.desc || ''}</p>
                </div>
            </a>
        `
    })
}

loadProfiles()