document.getElementById('btnenvio').addEventListener('click', function(event) {
       
    const params = new URLSearchParams(window.location.search);
    const cursoId = params.get('id');
    let cursos = JSON.parse(localStorage.getItem('cursos'));
    
    const curso = cursos.find(c => c.id == cursoId);

    



    
    curso.nome =  document.getElementById('idnome').value;
    curso.conteudo =  document.getElementById('idlang').value;
    curso.link = document.getElementById('idnome').value;
    curso.link = document.getElementById('idlink').value;
    curso.descricao = document.getElementById('iddesc').value;
    

    if (curso.nome && curso.conteudo && curso.link && curso.descricao && curso.link.startsWith("https://www.") || curso.link.startsWith("https://") || curso.link.startsWith("www.") ){
        localStorage.setItem('cursos', JSON.stringify(cursos));

     alert('Curso salvo com sucesso!');
     window.location.href = 'listacursos.html';
    
}
else {
    alert('Formulario incorreto! (confira se o link informado é valido e se todos os campos foram preenchidos)');

}});
