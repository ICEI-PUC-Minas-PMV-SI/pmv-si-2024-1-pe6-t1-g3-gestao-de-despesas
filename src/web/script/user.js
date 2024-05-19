$(document).ready(function() {
    getUsers();
    parseJwt();

})

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

function parseJwt() {
    // var token = localStorage.getItem('token');
    var token = getToken();
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    var user = JSON.parse(jsonPayload);
    console.log(user);
    localStorage.setItem('userInfo', user);
}

function cadastrarUsuario() {
    var nome = $('#nome').val();
    var telefone = $('#telefone').val();
    var email = $('#Email').val();
    var senha = $('#Password').val();

    if (!nome || !telefone || !email || !senha) {
        console.error('Por favor, preencha todos os campos.');
        return;
    }
    var data = {
        name: nome,
        email: email,
        password: senha,
        phoneNumber: telefone
    };
    var apiUrl = 'http://localhost:5286/api/Users/register'; 

    $.ajax({
        url: apiUrl,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            console.log('Usuário cadastrado com sucesso:', response);
            alert('Usuário cadastrado com sucesso!');
            window.location.href = './login.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao cadastrar usuário:', textStatus, errorThrown);
            alert('Erro ao cadastrar');
            window.location.href = './login.html';
        }
    });    
}

function login() {
    var email = $('#Email').val();
    var senha = $('#Password').val();

    var data = {
        email: email,
        password: senha
    }

    var apiUrl = 'http://localhost:5286/api/Users/login'; 

    $.ajax({
        url: apiUrl,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) { 
            localStorage.setItem('token', response.jwtToken);                        
            window.location.href = './home.html';
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao fazer login:', textStatus, errorThrown);         
            alert('Erro ao fazer login');
            window.location.href = './login.html';
        }
    });
}

function logout() {
    localStorage.removeItem('token');
    window.location.assign('./login.html');
}

function getUsers() {
    var token = getToken();
    var apiUrl = 'http://localhost:5286/api/Users';

    $.ajax({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        success: function(response) {
            var resultadoTbody = $('#resultado');
            resultadoTbody.empty();

            response.forEach(function(user) {
                var userRow = `
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.phoneNumber}</td>
                        <td>${user.email}</td>
                    </tr>
                `;
                resultadoTbody.append(userRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Erro ao obter usuários:', textStatus, errorThrown);
            var resultadoTbody = $('#resultado');
            resultadoTbody.empty();
            var errorElement = $('<tr><td colspan="5">Erro ao obter usuários: ' + textStatus + '</td></tr>');
            resultadoTbody.append(errorElement);
        }
    });
}
