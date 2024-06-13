   //PROCURA O ID DO CURSO E IMPRIME NO MAIN
   document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get('id');
    const cursos = JSON.parse(localStorage.getItem('cursos'));
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
});
