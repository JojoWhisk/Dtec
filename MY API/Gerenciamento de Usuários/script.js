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
const btnCancelEdit = document.getElementById('btnCancelEdit')
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
function addUser(userData) {
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
        .catch(error => console.error("Erro ao adicionar usuário", error))
}

//Função para Editar o usuário
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            editModal.style.display = 'none';
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao editar usuário", error))

}

//Função para deletar o usuário 
function deleteUser(userId) {
    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao excluir o usuário", error))
}

//Função para criar os cards na tela 
function renderUsers(users) {
    userCardsContainer.innerHTML = '';

    if (users.leight === 0) {
        userCardsContainer.innerHTML = `<p>Nenhum Usuário Cadastrado</p>`;
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
        <div class="user-info">
           <p><strong>ID:</strong>${user.id}</p>
           <p><strong>Name:</strong>${user.nome}</p>
           <p><strong>Idade:</strong>${user.idade}</p>
        </div>
        <div class="card-buttons">
           <button class="btn-edit">Editar<button>   
           <button class="btn-delete">Excluir<button>
        </div>   

        `;

        const editBtn = userCard.querySelector('.btn-edit')
        const deleteBtn = userCard.querySelector('.btn-delete')

        editBtn.addEventListener('click', () => {
            editIdIput.value = user.id;
            editNameInput.value = user.nome;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex'
        })

        deleteBtn.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja excluir o usuário${user.id}`)) {
                deleteUser(user.id);
            }
        })

        userCardsContainer.appendChild(userCard)
    })

}

btnListUsers.addEventListener('click', fetchAndRenderUsers);
addUserForm.addEventListener('submit', (e) => {
    e.preventDefault;

    const newUserName = document.getElementById('addName').value;
    const newUserAge = parseInt(document.getElementById('addAge').value)

    addUser({nome: newUserName, idade: newUserAge})
});

editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = editIdIput.value;
    const newName = editNameInput.value;
    const newAge = parseInt(editAgeInput.value);
    
    editUser(userId, {nome: newName, idade: newAge});
})

btnCancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none'
})

window.addEventListener('click' , (e) => {
    if(e.target === editModal){
        editModal.style.display = 'none';
    }

});

//Carregar os usuários 
fetchAndRenderUsers();