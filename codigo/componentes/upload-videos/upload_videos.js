const urlP = new URLSearchParams(window.location.search)

const id = urlP.get('id')

let professor

async function loadProfessor(){

    let urlProfessores = 'http://localhost:3000/professores'
    const response = await axios.get(`${urlProfessores}/${id}`)

    professor = response.data

    console.log(professor)
}

loadProfessor()


//PEGA O VALOR E CONFERE SE TODOS OS CAMPOS DO FORMULARIO FORAM PRENCHIDOS, DEPOIS SALVA ELES NO LOCAL STORAGE
//Ps: o JS dessa pagina só e "valido" para o uploadvideos.html, os outros respectivos JS estão no final dos outros html
document.getElementById('btnenvio').addEventListener('click', function(e) {
    e.preventDefault();

    
    
    let nome = document.getElementById('idnome').value;
    let conteudo = document.getElementById('idlang').value;
    let link = document.getElementById('idlink').value;
    let descricao = document.getElementById('iddesc').value;

    

    if (nome && conteudo && link && descricao && link.startsWith("https://www.") || link.startsWith("https://") || link.startsWith("www.") ){
    let curso = {
        professor: professor.nome,
        nome: nome,
        conteudo: conteudo,
        link: link,
        descricao: descricao
    };

    async function enviar(){
        let urlCursos = 'http://localhost:3000/cursos'

        const response = await fetch(urlCursos, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(curso)
        })

        if (!response.ok){
            alert('Falha ao criar curso!')
            return
        }

        alert('Criado com sucesso!')
        window.location.href = '../lista-curso/lista_cursos.html';
        
    }

    enviar()
    
    
}
else {
    alert('Formulario incorreto! (confira se o link informado é valido e se todos os campos foram preenchidos)');
    Location.reload(true);
}
});