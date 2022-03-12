var btns = document.querySelectorAll('.faq-toggle')
var x = document.querySelector('.faq')

btns.forEach( btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})




