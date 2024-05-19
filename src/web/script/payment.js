$(document).ready(function () {
    getIdGroupByURL();
    getExpenses();
    getUsers();
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

function getIdGroupByURL() {
    var url = new URL(window.location.href);
    var idGroup = url.searchParams.get("idGrupo");
    $('#idGroup').val(idGroup);
    return idGroup;
}

function getExpenses() {
    var token = getToken();
    var idDoGrupo = getIdGroupByURL();

    if (!idDoGrupo) {
        console.error('ID do grupo não encontrado na URL.');
        return;
    }

    var apiUrl = `http://localhost:5286/api/Groups/${idDoGrupo}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            $('#expenses-select').empty();
            $('#expenses-select').append($('<option>', {
                value: '',
                text: 'Choose...'
            }));

            var expenses = response.expenses

            expenses.forEach(function (expense) {
                var dividedValue = (expense.valueExpense / response.friends.length).toFixed(2);
                $('#expenses-select').append($('<option>', {
                    value: expense.id,
                    // text: `${expense.description} - R$ ${expense.valueExpense.toFixed(2)}}`
                    text: `${expense.description} - Valor por pessoa R$ ${dividedValue}`
                }));
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter detalhes do grupo:', textStatus, errorThrown);
            alert('Erro ao obter detalhes do grupo');
        }
    });
}

function getUsers() {
    var token = getToken();
    var idDoGrupo = getIdGroupByURL();

    if (!idDoGrupo) {
        console.error('ID do grupo não encontrado na URL.');
        return;
    }

    var apiUrl = `http://localhost:5286/api/Groups/${idDoGrupo}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            $('#user-select').empty();
            $('#user-select').append($('<option>', {
                value: '',
                text: 'Choose...'
            }));

            var friends = response.friends

            friends.forEach(function (friend) {
                $('#user-select').append($('<option>', {
                    value: friend.id,
                    text: friend.name
                }));
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter detalhes dos integrantes:', textStatus, errorThrown);
            alert('Erro ao obter detalhes do grupo');
        }
    });
}

function makePayment() {
    var selectedOptionText = $('#expenses-select option:selected').text();
    var valor = selectedOptionText.split('R$')[1].trim();
    var status = true;
    var idDespesa = $('#expenses-select').val();
    var idUser = $('#user-select').val();

    var pagamento = {
        valuePayment: parseFloat(valor),
        paymentStatus: status,
        expenseId: parseInt(idDespesa),
        userId: parseInt(idUser)
    };
    var jsonData = JSON.stringify(pagamento);

    var token = getToken();

    $.ajax({
        url: 'http://localhost:5286/api/Payments',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: jsonData,
        success: function(response) {
            console.log('Dívida quitada com sucesso!', response);
            alert('Quitado com sucesso!');
            window.location.href = './despesas.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao quitar a dívida:', textStatus, errorThrown);
            alert('Erro ao quitar a dívida');
            window.location.href = './despesas.html';
        }
    });

}
