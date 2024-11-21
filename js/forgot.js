document.getElementById("reset-password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
  
    if (email) {
      alert(`Um link de recuperação foi enviado para o e-mail: ${email}`);
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  });
  