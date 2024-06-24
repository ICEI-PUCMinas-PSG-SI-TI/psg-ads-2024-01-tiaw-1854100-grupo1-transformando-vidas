const urlCursos = 'http://localhost:3000/cursos'
const urlAlunos = 'http://localhost:3000/alunos'
const urlEmpresas = 'http://localhost:3000/empresas'
const urlProfessores = 'http://localhost:3000/professores'
const containerCursos = document.querySelector('.container-cursos')
const urlParams = new URLSearchParams(window.location.search)

const type = urlParams.get('type')

let cursos
async function loadCursos(){
   const response = await axios.get(urlCursos)
   cursos = response.data
   console.log(cursos)
   for (curso of cursos){
    setCurso(curso)
   }
}

loadCursos()

let aluno
let professor 
let empresa
if (type == 'aluno'){
    const idAluno = urlParams.get('id')

    async function setAluno(){
        const response = await axios.get(`${urlAlunos}/${idAluno}`)
        aluno = response.data
        console.log(aluno)
    }
    
    setAluno()
} else if (type == 'professor'){
    const btnCriarCurso = document.querySelector('.btn-criar-curso')

    btnCriarCurso.style.display = 'inline-block'

    btnCriarCurso.setAttribute('href', `../upload-videos/upload_videos.html?${urlParams}`)

    const idProf = urlParams.get('id')

    async function setProf(){
        const response = await axios.get(`${urlProfessores}/${idProf}`)
        professor = response.data
        console.log(professor)
    }
    
    setProf()
} else {
    const idEmp = urlParams.get('id')

    async function setEmp(){
        const response = await axios.get(`${urlEmpresas}/${idEmp}`)
        empresa = response.data
        console.log(empresa)
    }
    
    setEmp()
}


function setCurso(curso){
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <div class="card d-flex flex-column flex-start mb-3" style="cursor: pointer;">
            <h5 class="mb-3">
                ${curso.nome}
            </h5>
            <div className="info">
                <p class="desc">
                    Descrição: ${curso.descricao}
                </p>
                <p class="professor">
                    Professor: ${curso.professor}
                </p>
            </div>
            <div className="container-btn d-flex justify-content-start">
                <a class="btn btn-acessar" href="../detalhes-curso/detalhes_curso.html?${urlParams}&idCurso=${curso.id}"/>
                    Acessar curso
                </a>   
            </div>
        </div>
    `
    containerCursos.appendChild(div)
}

/*react heart*/
function showAdditionalCourses() {
    const cardsadicionais = document.querySelectorAll('.additional-courses');
        cardsadicionais.forEach(course => {
        course.style.display = 'block';
    });
    const verMaisButton = document.querySelector('.vermais');
    verMaisButton.style.display = 'none';
}
function showAdditionalCourses() {
    const coursesWrapper = document.querySelectorAll('.courses-wrapper');
    coursesWrapper.forEach(wrapper => {
        wrapper.style.display = 'block';
    });
    const verMaisButton = document.querySelector('.vermais');
    verMaisButton.style.display = 'none';
}

/*vermais*/
const heartButtons = document.querySelectorAll('.heart-button');
heartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Curso favoritado com sucesso!');
    });
});

const formPesquisa = document.querySelector('.form-pesquisa-curso')

let cursosFiltados = []

const inputPesquisa = document.querySelector('#input-pesquisa')

formPesquisa.addEventListener('submit', (e) => {
    e.preventDefault()
    containerCursos.innerHTML = ''
    cursosFiltados = cursos.filter((curso) => 
      curso['nome'].toLowerCase().includes(inputPesquisa.value.toLowerCase())
    )

    cursosFiltados.forEach((curso) => setCurso(curso))
})