document.addEventListener('DOMContentLoaded', function (){
    const urlParams = new URLSearchParams(window.location.search)
    const idVaga = urlParams.get('idVaga')
    const idEmp = urlParams.get('id')
    const urlVagas = 'http://localhost:3000/vagas'
    const urlEmpresas = 'http://localhost:3000/empresas'

    const containerEdit = document.querySelector('.container-edit')
    const inputEmpresa = document.querySelector('#empresa')
    const inputTitulo = document.querySelector('#titulo')
    const inputDescricao = document.querySelector('#descricao')
    const inputJornada = document.querySelector('#jornada')
    const selectRegime = document.querySelector('#regime')
    const inputRequisitos = document.querySelector('#requisitos')
    const inputDesejavel = document.querySelector('#desejavel')
    const inputSalario = document.querySelector('#salario')
    const btnEdit = document.querySelector('#btn-edit')
    const btnDelete = document.querySelector('#btn-delete')

    let vagas = []
    let vaga

    async function carregaVagas(){
        const response = await axios.get(urlVagas)
        vagas = response.data
        getVaga()
        console.log(vaga)
        if (vaga) {
            inputEmpresa.value = vaga.empresa || ''
            inputTitulo.value = vaga.titulo || ''
            inputDescricao.value = vaga.descricao || ''
            inputJornada.value = vaga.jornada || ''
            selectRegime.value = vaga.regime || ''
            inputRequisitos.value = vaga.requisitos || ''
            inputDesejavel.value = vaga.desejavel || ''
            inputSalario.value = vaga.salario || ''
        }
    }

    btnEdit.addEventListener('click', (e) => {
        e.preventDefault()
        editaVaga(vaga)
    })

    btnDelete.addEventListener('click', (e) => {
        e.preventDefault()
        const opcao = confirm('Deseja realmente excluir essa vaga?')
        if (opcao){
            excluiVaga(vaga)
            alert('Vaga excluída com sucesso.')
            location.href = `minhas_vagas.html?type=empresa&id${idEmp}`
        }
    })

    function getVaga() {
        for (let i = 0; i < vagas.length; i++){
            if (vagas[i].id == idVaga){
                vaga = vagas[i]
                return
            }
        }
    }

    async function editaVaga(vaga){
        if (vaga) {
            vaga.empresa = inputEmpresa.value
            vaga.titulo = inputTitulo.value
            vaga.descricao = inputDescricao.value
            vaga.jornada = inputJornada.value
            vaga.regime = selectRegime.value
            vaga.requisitos = inputRequisitos.value
            vaga.desejavel = inputDesejavel.value
            vaga.salario = inputSalario.value
            await axios.put(`${urlVagas}/${vaga.id}`, vaga)
        }
    }

    async function excluiVaga(vaga){
        await axios.delete(`${urlVagas}/${vaga.id}`)
        const response = axios.get(`${urlEmpresas}/${idEmp}`)
        console.log(response.data)
        await axios.delete(`${urlEmpresas}/${idEmp}/vagas/${vaga.id}`)
    }

    carregaVagas()

})
