//URL do servidor 
//Endereço do servidro que esta rodando no compiuter 
const API_URL = 'http://localhost:3001/usuarios';

//Elementos container 
const userCardsContainer = document.getElementById('user-cards-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListUsers')

//Elementos do modal 
const editModal = document.getElementById('editModal')
const editUserForm = document.getElementById('editUserForm')
const CancelEdit = document.getElementById('btnCancelEdit')
const editIdIput = document.getElementById('editId')
const editNameInput = document.getElementById('editName')
const editAgeInput = document.getElementById('editAge')

//Funções
// Funções que faz requisição de usuários da api
function fetchAndRenderUsers() {
    fetch(API_URL)
        .then(response => response.json())
        .then(users => renderUsers(users))
        .catch(error => {
            console.error('Erro ao buscar usuários', error);
            userCardsContainer.innerHTML = `<p>Erro ao carregar usuários</p>`
        })
}

//Função para adicionar usuário
function addUser(userData){
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response.json())
    .then(() => {
        addUserForm.reset();
        fetchAndRenderUsers();
    })
}