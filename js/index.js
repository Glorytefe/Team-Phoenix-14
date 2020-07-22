let collapse = document.getElementById('collapse');
    let button = document.getElementById('button');
    let imgs =  document.getElementById('img')
    let close = document.getElementById('close');
    let box = document.getElementById('collapse1');
    let section = document.getElementById('section');
    let content = document.getElementById('box-text')

    button.addEventListener('click', function(){
        if(collapse.style.display= 'none'){
            collapse.style.display='flex';
            // collapse.classList.add('flipInX')
            imgs.style.display='none';
            close.style.display='flex';
            section.style.backgroundColor='rgb(62, 145, 145)'
        }
    })

    close.addEventListener('click', function(){
        if (close.style.display='flex'){
            collapse.style.display='none'
            close.style.display='none';
            imgs.style.display='flex';
            section.style.backgroundColor='#000'
            // box.style.top = '15rem';
        }
    });

   box.addEventListener('click', function(){
    if (collapse.style.display='flex'){
        collapse.style.display='none';
        close.style.display='none';
        section.style.backgroundColor='#000'
        imgs.style.display='flex';
    }
    })
    // $(document).ready(function(){
    //     $('.toggle-collapse').click(function(){
    //         $('.navbar-collapse').toggleClass('collapse')
    //     })
    // })