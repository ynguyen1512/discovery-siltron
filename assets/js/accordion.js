document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const icon = button.querySelector('i');

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.display = 'flex';
        } else {
            accordionContent.style.display = 'none';
        }
    });
});