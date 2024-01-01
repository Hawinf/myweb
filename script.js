window.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.querySelector('.menu');
    const sidebar = document.querySelector('.menu-sidebar')
    const overlay = document.querySelector('.overlay')

    menu.addEventListener('click', () => {
        sidebar.classList.add('aktif')
        overlay.classList.add('on')
    })

    const close = document.querySelector('.logo-top1')
    close.addEventListener('click', ()=> {
        sidebar.classList.remove('aktif')
        overlay.classList.remove('on')
    })
})

