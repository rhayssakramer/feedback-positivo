// Lógica para envio do formulário
document.getElementById("feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const itemName = document.getElementById("item-name").value;
  const serviceLocation = document.getElementById("service-location").value;

  alert(`Obrigado por enviar seu feedback sobre ${itemName} no local ${serviceLocation}!`);
});

const stars = document.querySelectorAll('.star');
        const ratingText = document.getElementById('rating');
        let selectedRating = 0; // Armazena a avaliação selecionada

        stars.forEach(star => {
            star.addEventListener('click', function () {
                selectedRating = this.getAttribute('data-value'); // Define a avaliação selecionada
                updateStars(selectedRating); // Atualiza as estrelas com base na seleção
            });

            star.addEventListener('mouseover', function () {
                const hoverValue = this.getAttribute('data-value');
                updateStars(hoverValue, true); // Mostra o estado hover
            });

            star.addEventListener('mouseout', function () {
                updateStars(selectedRating); // Restaura para o estado selecionado
            });
        });

        // Botão para limpar o formulário
document.getElementById("clear-form").addEventListener("click", () => {
  const form = document.getElementById("feedback-form");
  form.reset();

  // Remover seleção das estrelas
  selectedRating = 0;
  stars.forEach((s) => s.classList.remove("selected"));
  stars.forEach((s) => (s.style.color = "#ccc"));

  alert("Formulário limpo com sucesso!");
});

        function updateStars(rating = 0, isHover = false) {
            stars.forEach(star => {
                const value = star.getAttribute('data-value');
                if (value <= rating) {
                    star.src = "/images/star-on.png"; // Troca para estrela preenchida
                } else {
                    star.src = "/images/star-off.png"; // Troca para estrela vazia
                }
            });
}
        
const profileIcon = document.getElementById('profile-icon');
        const profileMenu = document.getElementById('profile-menu');
        const usernameSpan = document.getElementById('username');

        // Defina o nome do usuário cadastrado (exemplo dinâmico)
        const username = "João Silva"; // Substitua com o nome real do usuário
        usernameSpan.textContent = username;

        // Alternar a exibição do menu quando o ícone for clicado
        profileIcon.addEventListener('click', () => {
            const isVisible = profileMenu.style.display === 'block';
            profileMenu.style.display = isVisible ? 'none' : 'block';
        });

        // Fechar o menu se clicar fora dele
        document.addEventListener('click', (event) => {
            if (!profileMenu.contains(event.target) && event.target !== profileIcon) {
                profileMenu.style.display = 'none';
            }
        });