window.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.querySelector('.menu');
    const sidebar = document.querySelector('.menu-sidebar')

    menu.addEventListener('click', () => {
        sidebar.classList.add('aktif')
    })

    const close = document.querySelector('.logo-top1')
    close.addEventListener('click', ()=> {
        sidebar.classList.remove('aktif')
    })
})