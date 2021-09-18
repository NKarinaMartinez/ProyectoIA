let botonpress = document.querySelector('.btn');

        botonpress.addEventListener('click', ()=>{
            document.body.classList.toggle('dark');
            botonpress.classList.toggle('active');
        })