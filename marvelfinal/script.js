
const seeMoreButtons = document.querySelectorAll('.see-more-btn');

seeMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const project = button.parentElement;
    const moreText = project.querySelector('.more-text');

    if (project.classList.contains('expanded')) {
      project.classList.remove('expanded');
      button.textContent = 'See more';
    } else {
      project.classList.add('expanded');
      button.textContent = 'See less';
    }
  });
});