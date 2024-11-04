document.addEventListener('DOMContentLoaded', () =>{
    let dockerBtn = document.getElementById('docker-btn');
    let nbuLogo = document.querySelector('.img-logo');

    dockerBtn.addEventListener('click', () => {
        if(dockerBtn.classList.contains('clikced')){
            dockerBtn.classList.remove('clikced');
            dockerBtn.innerHTML = 'Clikc the button to show the image'
            nbuLogo.style.display = 'none'
        }else{
            dockerBtn.classList.add('clikced')
            dockerBtn.innerHTML = 'Welcome to NBU'
            nbuLogo.style.display = 'block'
        }
    })
})
