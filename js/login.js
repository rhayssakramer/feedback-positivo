document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.src = "/images/senha-visivel.png"; // Altere o ícone ao mostrar a senha
    } else {
      passwordField.type = "password";
      toggleIcon.src = "/images/senha-invisivel.png"; // Volte ao ícone padrão
    }
});
