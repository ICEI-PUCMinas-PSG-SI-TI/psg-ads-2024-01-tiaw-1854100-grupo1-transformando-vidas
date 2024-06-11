const containerVagas = document.querySelector('.container-card-vagas')

const urlEmpresas = 'http://localhost:3000/empresas'
const urlParams = new URLSearchParams(window.location.search)

const idEmp = urlParams.get('id')

let emp

async function setEmp(){
    const response = await axios.get(`${urlEmpresas}/${idEmp}`)
    emp = response.data

    console.log(emp)

    emp['vagas'].forEach((vaga) => {
        setCard(vaga)
    })
}

setEmp()

const resgataVagas = async () => {
    const response = await axios.get(urlVagas)
    vagas = response.data
    getVaga()
}

function btnEditar(vaga) {
    const btn = document.createElement('a')
    btn.classList.add('btn')
    btn.classList.add('btn-editar')
    btn.innerText = 'Editar Vaga'
    btn.setAttribute('href', `editar_vaga.html?id=${idEmp}&idVaga=${vaga.id}`)
    return btn
}


function setCard(vaga){
    const div = document.createElement('div')
    div.classList.add('card-vaga')

    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = vaga.titulo

    const p = document.createElement('p')
    p.classList.add('card-text')
    p.classList.add('desc-vaga')
    p.innerText = vaga.descricao

    const divInfo = document.createElement('div')
    div.classList.add('div-info')

    const pEmp = document.createElement('p')
    pEmp.classList.add('card-text')
    pEmp.classList.add('emp-vaga')
    pEmp.innerText = `Empresa: ${vaga.empresa}`

    const pSal = document.createElement('p')
    pSal.classList.add('card-text')
    pSal.classList.add('sal-vaga')
    pSal.innerText = `Salário: R$ ${vaga.salario}`

    const pReq = document.createElement('p')
    pReq.classList.add('card-text')
    pReq.classList.add('req-vaga')
    pReq.innerText = `Requisitos: R$ ${vaga.requisitos}`

    const divBtn = document.createElement('div')
    divBtn.classList.add('div-btn')
    divBtn.appendChild(btnEditar(vaga))

    

    div.appendChild(h5)
    div.appendChild(p)
    divInfo.appendChild(pEmp)
    divInfo.appendChild(pSal)
    divInfo.appendChild(pReq)
    div.appendChild(divInfo)
    div.appendChild(divBtn)
    containerVagas.appendChild(div)
}

