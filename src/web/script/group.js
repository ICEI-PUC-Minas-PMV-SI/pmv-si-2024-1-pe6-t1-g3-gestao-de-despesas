$(document).ready(function () {
    getGroups();
    getUsers();
});

function cadastrarGrupo() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var nome = $('#nomeGrupo').val();

    var data = {
        nameGroup: nome,
        ownerId: 1
    }

    const apiUrl = 'http://localhost:5286/api/Groups';

    $.ajax({
        url: apiUrl,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log('Grupo cadastrado com sucesso:', response);
            alert('Grupo cadastrado com sucesso!');
            window.location.href = './grupo.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao cadastrar grupo:', textStatus, errorThrown);
            alert('Erro ao cadastrar grupo: ' + textStatus);
        }
    });
}

function getGroups() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var apiUrl = 'http://localhost:5286/api/Groups';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log('Grupos obtidos com sucesso:', response);

            var grupoList = $('#grupo-list');
            grupoList.empty();

            response.forEach(function (grupo) {
                var grupoRow = `
                    <tr>
                        <td>${grupo.nameGroup}</td>
                        <td>
                            <a href="./adicionarPessoaGrupo.html?idGrupo=${grupo.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                </svg>
                            </a>
                        </td>
                        <td>
                            <a href="./editarGrupo.html?id=${grupo.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteGroup(${grupo.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </a>
                        </td>
                    </tr>
                `;
                grupoList.append(grupoRow);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter grupos:', textStatus, errorThrown);
        }
    });
}

function deleteGroup(id) {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var apiUrl = `http://localhost:5286/api/Groups/${id}`;

    $.ajax({
        url: apiUrl,
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify({ id: id }),
        success: function (response) {
            console.log('Grupo deletado com sucesso:', response);
            alert('Grupo deletado com sucesso')
            window.location.href = './grupo.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao deletar grupo:', textStatus, errorThrown);
            alert('Erro ao deletar grupo')
            window.location.href = './grupo.html';
        }
    });
}

function getUsers() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }
    var id_grupo = getIdGroupByURL();

    var apiUrl = 'http://localhost:5286/api/Users';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            var resultadoTbody = $('#user-list');
            resultadoTbody.empty();

            response.forEach(function (user) {
                var userRow = `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.phoneNumber}</td>
                        <td><input type="checkbox" class="user-checkbox" data-user-id="${user.id}"></td>
                    </tr>
                `;
                resultadoTbody.append(userRow);
                $('#grupoId').val(id_grupo);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter usuários:', textStatus, errorThrown);
            var resultadoTbody = $('#user-list');
            resultadoTbody.empty();
            var errorElement = $('<tr><td colspan="4">Erro ao obter usuários: ' + textStatus + '</td></tr>');
            resultadoTbody.append(errorElement);
        }
    });
}

function addUserToGroup() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var groupId = $('#grupoId').val();
    var selectedUsers = [];

    $('.user-checkbox:checked').each(function () {
        selectedUsers.push($(this).data('user-id'));
    });

    if (selectedUsers.length === 0) {
        alert('Nenhum usuário selecionado.');
        return;
    }

    var apiUrlTemplate = `http://localhost:5286/api/Groups/${groupId}/users/1/friend/{userId}`;

    selectedUsers.forEach(function(userId) {
        var apiUrl = apiUrlTemplate.replace('{userId}', userId);

        $.ajax({
            url: apiUrl,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            success: function (response) {
                console.log(`Usuário ${userId} adicionado ao grupo com sucesso:`, response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error(`Erro ao adicionar usuário ${userId} ao grupo:`, textStatus, errorThrown);
            }
        });
    });

    alert('Usuários adicionados ao grupo com sucesso');
    window.location.href = './grupo.html';
}

function getIdGroupByURL() {
    var url = new URL(window.location.href);
    var idDoGrupo = url.searchParams.get("idGrupo");
    return idDoGrupo;
}