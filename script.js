document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Like') {
            button.textContent = 'Liked';
            button.style.color = 'red';
        } else {
            button.textContent = 'Like';
            button.style.color = '#606770';
        }
    });
});