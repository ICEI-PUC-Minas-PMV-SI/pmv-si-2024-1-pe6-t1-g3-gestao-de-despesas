$(document).ready(function () {
    getExpenseInfo();
    getGroups();
});

function getToken() {
    var token = localStorage.getItem('token');

    if (!token) {
        console.error('Token de autenticação não encontrado.');

        if (window.location.pathname !== '/views/login.html' && window.location.pathname !== '/views/cadastrarUsuario.html') {
            window.location.href = './login.html';
        }

        return null;
    }

    return token;
}

function getIdExpenseByURL() {
    var url = new URL(window.location.href);
    var idExpese = url.searchParams.get("id");
    return idExpese;
}

function getExpenseInfo() {
    var idExpense = getIdExpenseByURL();

    if (!idExpense) {
        console.error("ID da despesa não encontrado na URL.");
        return;
    }

    var token = getToken();

    var apiUrl = 'http://localhost:5286/api/Expenses/' + idExpense;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log('Informações da despesa obtidas com sucesso:', response);

            $('#idDespesa').val(response.id);
            $('#valor').val(response.valueExpense);
            $('#descricao').val(response.description);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter informações da despesa:', textStatus, errorThrown);
        }
    });
}

function getGroups() {
    var token = getToken();
    var apiUrl = 'http://localhost:5286/api/Groups';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            $('#inputGrupo').empty();
            $('#inputGrupo').append($('<option>', {
                value: '',
                text: 'Choose...'
            }));
            response.forEach(function (group) {
                $('#inputGrupo').append($('<option>', {
                    value: group.id,
                    text: group.nameGroup
                }));
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter grupos:', textStatus, errorThrown);
        }
    });
}

function editExpense() {
    var token = getToken();
    var idDespesa = $('#idDespesa').val();
    var valor = $('#valor').val();
    var data = $('#data').val();
    var descricao = $('#descricao').val();
    var inputGrupo = $('#inputGrupo').val();

    var apiUrl = 'http://localhost:5286/api/Expenses/' + idDespesa;

    var data = {
        id: idDespesa,
        valueExpense: valor,
        date: data,
        description: descricao,
        groupId: inputGrupo,
    }

    $.ajax({
        url: apiUrl,
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (response) {
            console.log('Despesa editada com sucesso:', response);
            alert('Despesa editada com sucesso')
            window.location.href = './despesas.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao editar despesa:', textStatus, errorThrown);
            alert('Erro ao editar despesa')
            window.location.href = './despesas.html';
        }
    });
}

