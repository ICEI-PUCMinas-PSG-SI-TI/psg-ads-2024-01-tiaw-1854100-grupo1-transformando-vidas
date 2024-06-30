const urlParams = new URLSearchParams(window.location.search)
const idVaga = urlParams.get('idVaga')
const idAluno = urlParams.get('id')
const urlVagas = 'http://localhost:3000/vagas'
const urlAlunos = 'http://localhost:3000/alunos'

const info = document.querySelector('.container-info-vaga')

let vagas = []
let vaga
let alunos = []
let aluno

const resgataVagas = async () => {
    const response = await axios.get(`${urlVagas}/${idVaga}`)
    vaga = response.data
    setInfo(vaga)
}

const resgataAlunos = async () => {
    const response = await axios.get(`${urlAlunos}/${idAluno}`)
    aluno = response.data
    console.log(aluno)
}



const setRequisitos = (vaga) => {
    return vaga.requisitos.split(',') 
}

const setDesejavel = (vaga) => {
    return vaga.desejavel.split(',')
}

const btnCandidatar = () => {
    const btn = document.createElement('button')
    btn.classList.add('btn-candidatar')
    btn.innerText = 'Candidatar 📩'
    return btn
}

const setInfo = (vaga) => {
    const div = document.createElement('div')
    div.classList.add('div-vaga')

    const h3 = document.createElement('h3')
    h3.classList.add('titulo-vaga')
    h3.innerText = `${vaga.titulo}`

    const p = document.createElement('p')
    p.classList.add('desc-vaga')
    p.innerHTML = `<strong>Descrição</strong>: ${vaga.descricao}`

    const pSal = document.createElement('p')
    pSal.innerHTML = `<strong>Salário:</strong> R$ ${(vaga.salario)}`
    const pEmp = document.createElement('p')
    pEmp.innerHTML = `<strong>Empresa:</strong> ${vaga.empresa}`
    const pReg = document.createElement('p')
    pReg.innerHTML = `<strong>Regime:</strong> ${vaga.regime}`
    const pJor = document.createElement('p')
    pJor.innerHTML = `<strong>Jornada:</strong> ${vaga.jornada}`

    const infos = document.createElement('div')
    infos.classList.add('sal-emp')  
    infos.appendChild(pSal)
    infos.appendChild(pEmp)
    infos.appendChild(pReg)
    infos.appendChild(pJor)

    const divRequisitos = document.createElement('div')
    divRequisitos.innerHTML = '<strong>Requisitos:</strong> '
    const listaRequisitos = document.createElement('ul')
    const requisitos = setRequisitos(vaga)

    for (req of requisitos){
        const item = document.createElement('li')
        item.innerText = req 
        listaRequisitos.appendChild(item)
    }

    divRequisitos.appendChild(listaRequisitos)

    const divDesejavel = document.createElement('div')
    divDesejavel.innerHTML = `<strong>Desejável:</strong>`
    const listaDesejavel = document.createElement('ul')
    const desejavel = setDesejavel(vaga)

    for (des of desejavel){
        const item = document.createElement('li')
        item.innerText = des 
        listaDesejavel.appendChild(item)
    }

    divDesejavel.appendChild(listaDesejavel)

    const btn = btnCandidatar()
    
    div.appendChild(h3)
    div.appendChild(p)
    div.appendChild(divRequisitos)
    div.appendChild(divDesejavel)
    div.appendChild(infos)
    div.appendChild(btn)
    info.appendChild(div)
}

const addCandidato = async (vaga, aluno) => {
    vaga.candidatos.push(aluno)
    await axios.put(`${urlVagas}/${idVaga}`, vaga)
}

document.addEventListener('click', (e) => {
    const element = e.target
    if (element.classList.contains('btn-candidatar')){
        addCandidato(vaga, aluno)
        alert('Candidatura enviada!')
    }
})

resgataVagas()
resgataAlunos()
