document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('burger-button').addEventListener('click', function(){
        document.querySelector('body').classList.toggle('no_scroll')
        document.querySelector('header').classList.toggle('open')
    })
})