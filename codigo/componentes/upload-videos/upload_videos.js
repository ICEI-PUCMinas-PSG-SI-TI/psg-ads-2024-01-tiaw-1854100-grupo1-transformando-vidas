


//PEGA O VALOR E CONFERE SE TODOS OS CAMPOS DO FORMULARIO FORAM PRENCHIDOS, DEPOIS SALVA ELES NO LOCAL STORAGE
//Ps: o JS dessa pagina só e "valido" para o uploadvideos.html, os outros respectivos JS estão no final dos outros html
document.getElementById('btnenvio').addEventListener('click', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('idnome').value;
    let conteudo = document.getElementById('idlang').value;
    let link = document.getElementById('idlink').value;
    let descricao = document.getElementById('iddesc').value;
    let id = Date.now();

    if (nome && conteudo && link && descricao && link.startsWith("https://www.") || link.startsWith("https://") || link.startsWith("www.") ){
    let curso = {
        id: id,
        nome: nome,
        conteudo: conteudo,
        link: link,
        descricao: descricao
    };

    let cursos = JSON.parse(localStorage.getItem('cursos'));

    if (!cursos) {
        cursos = [];
    }
    
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
    
    alert('Curso salvo com sucesso!');
    window.location.href = 'listacursos.html';
}
else {
    alert('Formulario incorreto! (confira se o link informado é valido e se todos os campos foram preenchidos)');
    Location.reload(true);
}
});