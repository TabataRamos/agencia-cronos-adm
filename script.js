'use strict'

//Modal - Abrir e Fechar 

function abrirModal() {
    document.getElementById('modal').style.visibility = "visible";
}

function fecharModal() {
    clearFields()
    document.getElementById('modal').style.visibility = "hidden";
}


// CRUD - CREATE READ UPDATE DELETE

//CREATE

const updateCurso = (index, curso) => {
    const dbCurso = readCurso()
    dbCurso[index] = curso
    setLocalStorage(dbCurso)
}

const readCurso = () => getLocalStorage()

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_curso')) ?? []
const setLocalStorage = (dbCurso) => localStorage.setItem("db_curso", JSON.stringify(dbCurso));

function createCurso(curso) {
    const dbCurso = getLocalStorage()
    dbCurso.push(curso)
    setLocalStorage(dbCurso)
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const saveCurso = () => {
    if (isValidFields()) {
        const curso = {
            nome: document.getElementById('nome').value,
            descricao: document.getElementById('descricao').value,
            imagem: img.src
        }
        createCurso(curso)
        updateTable()
        fecharModal()
    }
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity
}

//capturar imagem
const inputFile = document.querySelector('#imagem');
const img = document.createElement('img');

inputFile.addEventListener('change', (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    img.src = url;
})

const createRow = (curso) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${curso.nome}</td>
    <td><img class="img-fluid" src="${curso.imagem}" alt="Ilustração"></td>
    <td>${curso.descricao}</td>
    <td>


    </td>
    `
    const BotaoEditar = function(){
        const botaoEdita = document.createElement('button')
        botaoEdita.innerText = "Editar"
        botaoEdita.classList.add("btn1")
        //botaoDeleta.addEventListener('click', funcaoEditar)
    
        return botaoEdita
    }
    const BotaoDeleta = function(){
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = "Excluir"
        botaoDeleta.classList.add("btn2")
        botaoDeleta.addEventListener('click', funcaoDeletar)
    
        return botaoDeleta
    }
    const funcaoDeletar = function(evento){
        const botaoDeleta = evento.target
        const tarefaDeletada = botaoDeleta.parentElement
        tarefaDeletada.remove()
    }
    newRow.appendChild(BotaoEditar())
    newRow.appendChild(BotaoDeleta())
    document.querySelector('#tableCurso>#corpo').appendChild(newRow)
}


const clearTable = () => {
    let rows = document.querySelectorAll('#tableCurso>#corpo tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbCurso = readCurso()
    clearTable()
    dbCurso.forEach(createRow)
}

//Evento

document.getElementById('salvar').addEventListener('click', saveCurso)
