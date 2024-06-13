const empresa = document.querySelector('#empresa')
const titulo = document.querySelector('#titulo')
const descricao = document.querySelector('#descricao')
const jornada = document.querySelector('#jornada')
const requisitos = document.querySelector('#requisitos')
const desejavel = document.querySelector('#desejavel')
const salario = document.querySelector('#salario')
const regime = document.querySelector('#regime')
const btnAdd = document.querySelector('#btn-add')

const urlVagas = 'http://localhost:3000/vagas'
const urlEmpresas = 'http://localhost:3000/empresas'

const urlParams = new URLSearchParams(window.location.search)
const idEmp = urlParams.get('id')

let emp = {}

async function setEmp(){
    const response = await axios.get(`${urlEmpresas}/${idEmp}`)
    emp = response.data
    console.log(emp)
}

setEmp()

const listaVagas = []



btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    if (!titulo.value || !descricao.value || !jornada.value || !requisitos.value || !desejavel.value || !salario.value){
        alert('Preencha todos os campos obrigatórios')
        return
    }
    const vaga = criaVaga()
    listaVagas.push(vaga)
    emp['vagas'].push(vaga)
    salvaLista()
})

function criaVaga(){
    return {
        titulo: titulo.value,
        descricao: descricao.value,
        jornada: jornada.value,
        requisitos: requisitos.value,
        desejavel: desejavel.value,
        salario: salario.value,
        regime: regime.value,
        empresa: empresa.value,
        candidatos: []
    }
}

async function salvaLista(){
    // Realizando a inserção de cada vaga no servidor
    for (const vaga of listaVagas){
        await axios.post(urlVagas, vaga)
        await axios.put(`${urlEmpresas}/${idEmp}`, emp)
    }
}