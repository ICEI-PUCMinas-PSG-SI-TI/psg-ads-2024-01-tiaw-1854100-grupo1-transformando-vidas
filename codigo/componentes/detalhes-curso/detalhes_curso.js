document.addEventListener('DOMContentLoaded', function() {

    const urlCursos = 'http://localhost:3000/cursos'

    let cursos = []

    async function carregarCursos(){
        const response = await axios.get(urlCursos)

        cursos = response.data

        console.log(cursos)

        const params = new URLSearchParams(window.location.search);
        const cursoId = params.get('idCurso');
        const curso = cursos.find(c => c.id == cursoId);

        if (curso) {
            document.getElementById('cursoNome').textContent = curso.nome;
            document.getElementById('cursoConteudo').textContent = curso.conteudo;
            document.getElementById('cursoLink').textContent = curso.link;
            document.getElementById('cursoLink').href = curso.link;
            document.getElementById('cursoDescricao').textContent = curso.descricao;
        } else {
            document.body.innerHTML = '<h1>Curso não encontrado</h1>';
        }
    }

    carregarCursos()

    
});
