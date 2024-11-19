// Simulação de banco de dados
const users = [];

// Registro
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    users.push({ name, email, password });
    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'login.html';
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login realizado com sucesso!');
        window.location.href = 'profile.html';
    } else {
        alert('E-mail ou senha inválidos.');
    }
});

// Perfil
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('userName')?.innerText = `Nome: ${loggedInUser.name}`;
        document.getElementById('userEmail')?.innerText = `E-mail: ${loggedInUser.email}`;
    }
});

// Feedback
document.getElementById('feedbackForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = document.getElementById('company').value;
    const feedback = document.getElementById('feedback').value;

    alert(`Feedback enviado para ${company}:\n"${feedback}"`);
    document.getElementById('feedbackForm').reset();
});

// Mostrar informações do usuário ao entrar
document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('userName').innerText = loggedInUser.name;
        document.getElementById('userFullName').innerText = loggedInUser.name;
        document.getElementById('userEmail').innerText = loggedInUser.email;
    } else {
        alert('Você precisa fazer login!');
        window.location.href = 'login.html';
    }
});

// Abrir menu de feedback
function openFeedbackMenu(companyName) {
    document.getElementById('feedbackTitle').innerText = `Enviar Feedback para ${companyName}`;
    document.getElementById('feedbackMenu').classList.remove('hidden');
}

// Fechar menu de feedback
function closeFeedbackMenu() {
    document.getElementById('feedbackMenu').classList.add('hidden');
}

// Enviar feedback
document.getElementById('feedbackForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    const companyName = document.getElementById('feedbackTitle').innerText.split('para ')[1];

    alert(`Feedback enviado para ${companyName}:\n"${feedback}"`);
    closeFeedbackMenu();
    document.getElementById('feedbackForm').reset();
});
