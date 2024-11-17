document.addEventListener('DOMContentLoaded', () =>{
    let dockerBtn = document.getElementById('uni-btn');
    let nbuLogo = document.querySelector('.img-logo');

    dockerBtn.addEventListener('click', () => {
        if(dockerBtn.classList.contains('clikced')){
            dockerBtn.classList.remove('clikced');
            dockerBtn.innerHTML = 'Clikc the button to show the University'
            nbuLogo.style.display = 'none'
        }else{
            dockerBtn.classList.add('clikced')
            dockerBtn.innerHTML = 'Welcome to NBU'
            nbuLogo.style.display = 'block'
        }
    })
})
