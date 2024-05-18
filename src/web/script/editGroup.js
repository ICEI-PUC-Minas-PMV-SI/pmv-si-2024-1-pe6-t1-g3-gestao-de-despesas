$(document).ready(function () {
    getIdGroupByURL();
    getGroupInfo();
    getUserByGroup();
});

function getIdGroupByURL() {
    var url = new URL(window.location.href);
    var idDoGrupo = url.searchParams.get("id");
    return idDoGrupo;
}

function getGroupInfo() {

    var idDoGrupo = getIdGroupByURL();

    if (!idDoGrupo) {
        console.error("ID do grupo não encontrado na URL.");
        return;
    }

    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    $.ajax({
        url: 'http://localhost:5286/api/Groups/' + idDoGrupo,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            $('#nomeGrupo').val(response.nameGroup);
            $('#idGrupo').val(response.id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter informações do grupo:', textStatus, errorThrown);
        }
    });
}

function editGroup() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var nome = $('#nomeGrupo').val();
    var id = $('#idGrupo').val();


    var apiUrl = `http://localhost:5286/api/Groups/${id}`;

    var data = {
        nameGroup: nome
    };

    $.ajax({
        url: apiUrl,
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (response) {
            console.log('Grupo editado com sucesso:', response);
            alert('Grupo editado com sucesso!');
            window.location.href = './grupo.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao editar grupo:', textStatus, errorThrown);
        }
    });
}

function getUserByGroup() {
    var idDoGrupo = getIdGroupByURL();

    if (!idDoGrupo) {
        console.error("ID do grupo não encontrado na URL.");
        return;
    }

    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    $.ajax({
        url: 'http://localhost:5286/api/Groups/' + idDoGrupo,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log(response.friends);

            var friendsTbody = $('#friends-tbody');
            friendsTbody.empty();

            response.friends.forEach(function(friend) {
                var friendRow = `
                    <tr>
                        <td>${friend.name}</td>
                        <td>${friend.email}</td>
                        <td>${friend.phoneNumber}</td>
                        <td>
                            <a href="#" onclick="deleteUserGroup(${friend.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </a>
                        </td>
                    </tr>
                `;
                friendsTbody.append(friendRow);
            });

            $('.delete-friend').on('click', function() {
                var friendId = $(this).data('friend-id');
                deleteFriendFromGroup(idDoGrupo, friendId);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter informações do grupo:', textStatus, errorThrown);
        }
    });
}


function deleteUserGroup(friendId) {
    var token = localStorage.getItem('token');
    
    if (!token) {
        console.error('Token de autenticação não encontrado.');
        return;
    }

    var groupId = $('#idGrupo').val();

    $.ajax({
        url: `http://localhost:5286/api/Groups/${groupId}/users/1/friend/${friendId}`,
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function(response) {
            console.log('Amigo removido do grupo com sucesso:', response);
            alert('Amigo removido do grupo com sucesso');
            window.location.href = './grupo.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao remover amigo do grupo:', textStatus, errorThrown);
            alert('Erro ao remover amigo do grupo');
            window.location.href = './grupo.html';
        }
    });
}
