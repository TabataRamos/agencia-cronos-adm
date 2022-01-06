'use strict';

//Modal - Abrir e Fechar

export function abrirModal() {
	document.getElementById('modal').style.visibility = 'visible';
}

export function fecharModal() {
	clearFields();
	document.getElementById('modal').style.visibility = 'hidden';
}

// CRUD - CREATE READ UPDATE DELETE

//UPDATE
const updateCurso = (index, curso) => {
	const dbCurso = readCurso();
	dbCurso[index] = curso;
	setLocalStorage(dbCurso);
};

//READ
const readCurso = () => getLocalStorage();

//Cria e lê itens no Local Storage
const getLocalStorage = () =>
	JSON.parse(localStorage.getItem('db_curso')) ?? [];
const setLocalStorage = (dbCurso) =>
	localStorage.setItem('db_curso', JSON.stringify(dbCurso));

//CREATE
function createCurso(curso) {
	const dbCurso = getLocalStorage();
	dbCurso.push(curso);
	setLocalStorage(dbCurso);
}

//Limpa todos os campos do form
const clearFields = () => {
	const fields = document.querySelectorAll('.modal-field');
	fields.forEach((field) => (field.value = ''));
};

let img = '';

const saveCurso = () => {
	if (isValidFields()) {
		const curso = {
			nome: document.getElementById('nome').value,
			descricao: document.getElementById('descricao').value,
			imagem: img,
		};
		const index = document.getElementById('nome').dataset.index;
		if (index == 'new') {
			createCurso(curso);
			updateTable();
			fecharModal();
		} else {
			updateCurso(index, curso);
			updateTable();
			fecharModal();
		}
	}
};

const isValidFields = () => {
	return document.getElementById('form').reportValidity();
};

const createRow = (curso, index) => {
	const newRow = document.createElement('tr');
	newRow.innerHTML = `
    <td>${curso.nome}</td>
    <td><img class="img-fluid" src="${curso.imagem}" alt="Ilustração"></td>
    <td>${curso.descricao}</td>
    `;

	const tdBtn = document.createElement('td');

	const BotaoEditar = function () {
		const botaoEdita = document.createElement('button');
		botaoEdita.innerText = 'Editar';
		botaoEdita.classList.add('btn1', 'b', 'btn', 'btn-secondary', 'm-1');
		botaoEdita.setAttribute('id', `edit-${index}`);
		//botaoDeleta.addEventListener('click', funcaoEditar)

		return botaoEdita;
	};
	const BotaoDeleta = function () {
		const botaoDeleta = document.createElement('button');
		botaoDeleta.innerText = 'Excluir';
		botaoDeleta.classList.add('btn2', 'btn', 'btn-danger', 'm-1');
		botaoDeleta.addEventListener('click', funcaoDeletar);

		return botaoDeleta;
	};

	//DELETE
	const funcaoDeletar = function () {
		const tarefaDeletada = tdBtn.parentElement;
		tarefaDeletada.remove();
	};
	tdBtn.appendChild(BotaoEditar());
	tdBtn.appendChild(BotaoDeleta());
	newRow.appendChild(tdBtn);
	document.querySelector('#tableCurso>#corpo').appendChild(newRow);
};

const clearTable = () => {
	let rows = document.querySelectorAll('#tableCurso>#corpo tr');
	rows.forEach((row) => row.parentNode.removeChild(row));
};

const updateTable = () => {
	const dbCurso = readCurso();
	clearTable();
	dbCurso.forEach(createRow);
};

const fillFields = (curso) => {
	document.getElementById('nome').value = curso.nome;
	document.getElementById('descricao').value = curso.descricao;
	document.getElementById('nome').dataset.index = curso.index;
};

const editAction = (index) => {
	const curso = readCurso()[index];
	curso.index = index;
	fillFields(curso);
	abrirModal();
};

const editCurso = (event) => {
	if (event.target.className == 'btn1 b btn btn-secondary m-1') {
		const [edit, index] = event.target.id.split('-');

		editAction(index);
	}
};

//Evento

window.onload = function () {
	document.getElementById('salvar').addEventListener('click', saveCurso);
	document
		.querySelector('#tableCurso>#corpo')
		.addEventListener('click', editCurso);

	const inputFile = document.querySelector('#imagem');

	inputFile.addEventListener('change', (evento) => {
		const url = URL.createObjectURL(evento.target.files[0]);
		img = url;
	});

	const excluir1 = document.querySelector('#botao-linha1');
	excluir1.addEventListener('click', function () {
		const deletaTr1 = document.querySelector('#tr1');
		deletaTr1.remove();
	});

	const excluir2 = document.querySelector('#botao-linha2');
	excluir2.addEventListener('click', function () {
		const deletaTr2 = document.querySelector('#tr2');
		deletaTr2.remove();
	});

	const excluir3 = document.querySelector('#botao-linha3');
	excluir3.addEventListener('click', function () {
		const deletaTr3 = document.querySelector('#tr3');
		deletaTr3.remove();
	});
};
