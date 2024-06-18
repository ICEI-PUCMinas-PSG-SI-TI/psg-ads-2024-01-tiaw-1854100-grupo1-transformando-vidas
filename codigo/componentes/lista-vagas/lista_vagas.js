const btnSubmit = document.querySelector('#btn-submit')
const inputPesquisa = document.querySelector('#input-pesquisa')
const containerVagas = document.querySelector('.container-card-vagas')

const urlParams = new URLSearchParams(window.location.search)
const type = urlParams.get('type')

const id = urlParams.get('id')

const linkCriar = document.querySelector('#link-criar-vaga')

if (type == 'empresa'){
  linkCriar.setAttribute('href', `../upload-vagas/upload_vagas.html?type=${type}&id=${id}`)
} else {
  linkCriar.addEventListener('click', (e) => {
    e.preventDefault()

    alert('Este recurso está disponível apenas para empresas.')
  })
}


const url = 'http://localhost:3000/vagas'

let vagas = []

const carregaVagas = async () => {
  const response = await axios.get(url)
  vagas = response.data
  console.log(vagas)
  for (vaga of vagas){
    setVaga(vaga)
  }  
}

let vagasFiltradas = []

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    containerVagas.innerHTML = ''
    vagasFiltradas = vagas.filter((vaga) => 
      vaga['titulo'].toLowerCase().includes(inputPesquisa.value.toLowerCase())
    )

    vagasFiltradas.forEach((vaga) => setVaga(vaga))
})

const btnAcesso = () => {
  const btn = document.createElement('a')
  btn.classList.add('btn-acesso')
  btn.setAttribute('href', `../candidatar-vaga/candidata_vaga.html${window.location.search}&idVaga=${vaga.id}`)
  btn.innerText = 'Ir para vaga'
  return btn
}

const setVaga = (vaga) => {
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


    const btn = btnAcesso()
    

    div.appendChild(h5)
    div.appendChild(p)
    divInfo.appendChild(pEmp)
    divInfo.appendChild(pSal)
    divInfo.appendChild(pReq)
    div.appendChild(divInfo)
    div.appendChild(btn)
    containerVagas.appendChild(div)
} 

carregaVagas()

