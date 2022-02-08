// Full screen 

const getView = ()=>{

};

document.querySelector('[ad-full]')
    .addEventListener('click', function(){
        const view = document.querySelector('[ad-view]');
        view.classList.add('ad-view--full');
        this.style.display = 'none';
        const close = document.querySelector('[ad-close]');
        close.style.display = '';
    });

document.querySelector('[ad-close]')
    .addEventListener('click', function(){
        const view = document.querySelector('[ad-view]');
        view.classList.remove('ad-view--full');
        this.style.display = 'none';
        const close = document.querySelector('[ad-full]');
        close.style.display = '';
    });
    