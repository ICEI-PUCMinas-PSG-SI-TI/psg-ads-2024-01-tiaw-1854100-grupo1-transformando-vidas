document.addEventListener('DOMContentLoaded', function() {

    const urlCursos = 'http://localhost:3000/cursos'

    const todosCursos = document.querySelector('.todos-cursos')

    let cursos = []

    async function carregarCursos(){
        const response = await axios.get(urlCursos)

        cursos = response.data

        const params = new URLSearchParams(window.location.search);
        const cursoId = params.get('idCurso');
        const curso = cursos.find(c => c.id == cursoId);

        

        if (curso) {
            // document.getElementById('cursoNome').textContent = curso.nome;
            document.getElementById('cursoConteudo').textContent = curso.nome;
            document.getElementById('cursoLink').innerHTML = `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ejkb_YpuHWs?si=7fVGfFhzAAkgvuJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `;
            document.getElementById('cursoDescricao').textContent = curso.descricao;
        } else {
            document.body.innerHTML = '<h1>Curso não encontrado</h1>';
        }

        const btnConcluido = document.querySelector('.concluido')

        btnConcluido.addEventListener('click', async () => {
            const urlP = new URLSearchParams(window.location.search)

            const type = urlP.get('type')

            if (type == 'aluno'){
                await fetch(`http://localhost:3000/alunos/${urlP.get('id')}`)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    const aluno = response
                    aluno.cursos.push(curso)
                    axios.put(`http://localhost:3000/alunos/${urlP.get('id')}`, aluno)
                })
            }
        })
    }

    carregarCursos()


    
});
