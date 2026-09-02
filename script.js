document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.menu-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Добавляем класс взрыва
      this.classList.add('exploding');
      setTimeout(() => {
        this.classList.remove('exploding');
        // Переход на страницу (стандартный переход по ссылке)
      }, 400);
    });
  });
});
