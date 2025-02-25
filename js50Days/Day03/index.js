document.addEventListener('DOMContentLoaded', () => {
    const open = document.querySelector('.open-btn');
    const close = document.querySelector('.close-btn');
    const container = document.querySelector('.container');

    open.addEventListener('click', () => {
        container.classList.add('show-nav');
    })
    close.addEventListener('click', () => {
      container.classList.remove('show-nav');
    });
})
