// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    showScreen('mainScreen');

    document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });
    document.getElementById(screenId).classList.add('active');
    document.getElementById(screenId).style.display = 'block';
}