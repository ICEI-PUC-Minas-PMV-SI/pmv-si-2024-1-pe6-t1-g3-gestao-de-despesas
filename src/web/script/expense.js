$(document).ready(function () {
    getGroups();
    getExpenses();
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

function addExpense() {
    var token = getToken();
    var apiUrl = 'http://localhost:5286/api/Expenses';
    var valueExpense = ($('#valor').val());
    var date = $('#data').val();
    var description = $('#descricao').val();
    var groupId = $('#inputGrupo').val();

    if (!valueExpense || !date || !description || !groupId) {
        console.error('Por favor, preencha todos os campos.');
        return;
    }

    var data = {
        valueExpense: valueExpense,
        date: date,
        description: description,
        groupId: groupId
    };

    $.ajax({
        url: apiUrl,
        method: 'POST',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: JSON.stringify(data),
        success: function (response) {
            console.log('Despesa adicionada com sucesso:', response);
            alert('Despesa adicionada com sucesso')
            window.location.href = './despesas.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao adicionar despesa:', textStatus, errorThrown);
        }
    });
}

function getExpenses() {
    var token = getToken();
    var apiUrl = 'http://localhost:5286/api/Expenses';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log('Despesas obtidas com sucesso:', response);

            var expenseList = $('#expense-list');
            expenseList.empty();

            response.forEach(function (expense) {
                var expenseRow = `
                    <tr>
                        <td>R$ ${expense.valueExpense}</td>
                        <td>${expense.description}</td>
                        <td>${new Date(expense.date).toLocaleDateString()}</td>
                        <td>
                            <a href="./editarDespesa.html?id=${expense.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteExpense(${expense.id})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </a>
                        </td>
                        <td>
                            <a href="./quitarDespesa.html?idGrupo=${expense.groupId}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                                </svg>
                            </a>
                        </td>
                    </tr>
                `;
                expenseList.append(expenseRow);
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter despesas:', textStatus, errorThrown);
        }
    });
}

function deleteExpense(id) {
    var token = getToken();
    var apiUrl = 'http://localhost:5286/api/Expenses/' + id;

    $.ajax({
        url: apiUrl,
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function (response) {
            console.log('Despesa deletada com sucesso:', response);
            alert('Despesa deletada com sucesso');
            window.location.href = './despesas.html';
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Erro ao deletar despesa:', textStatus, errorThrown);
            alert('Erro ao deletar despesa');
            window.location.href = './despesas.html';
        }
    });
}
