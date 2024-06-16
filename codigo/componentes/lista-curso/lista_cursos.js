const urlCursos = 'http://localhost:3000/cursos'
const urlAlunos = 'http://localhost:3000/alunos'
const containerCursos = document.querySelector('.container-cursos')
const urlParams = new URLSearchParams(window.location.search)
const idAluno = urlParams.get('id')

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
async function setAluno(){
    const response = await axios.get(`${urlAlunos}/${idAluno}`)
    aluno = response.data
    console.log(aluno)
}

setAluno()

function setCurso(curso){
    const div = document.createElement('div')
    div.innerHTML = 
    `
        <div class="card d-flex flex-column flex-start border-dark mb-3" onclick="window.location.href='pagina-do-curso-1.html';" style="cursor: pointer;">
            <h5>
                ${curso.nome}
            </h5>
            <div className="info">
                <p>
                    ${curso.descricao}
                </p>
                <p class="professor">
                    Professor: ${curso.professor}
                </p>
            </div>
            <div className="container-btn d-flex justify-content-start">
                <button class="btn btn-acessar">
                    Acessar curso
                </button>   
            </div>
        </div>
    `
    containerCursos.appendChild(div)
    console.log(div)
}

function redirectToCurso2() {
    window.location.href = 'pagina-do-curso-2.html'; /*mudar link para o de lulu*/
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', redirectToCurso2);
    });
});


/*botão filtrar*/
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-button');
    const filtroOpcoes = document.getElementById('filtroOpcoes');

    filterButton.addEventListener('click', function() {
        if (filtroOpcoes.style.display === 'none' || filtroOpcoes.style.display === '') {
            filtroOpcoes.style.display = 'block';
        } else {
            filtroOpcoes.style.display = 'none';
        }
    });
});

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