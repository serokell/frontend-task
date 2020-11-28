//site.js by Paul Frank

document.addEventListener("DOMContentLoaded", () => {
	console.log('ready');
    const burgerMenu = document.querySelector('.hamburger');
    const modalMenu = document.querySelector('.modal');
    const modalClose = modalMenu.querySelector('.modal-close');

    //form inputs
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-2');
    const textArea = document.querySelector('#input-textarea');

    const submitButton = document.querySelector('.is-info');


    burgerMenu.addEventListener('click', function() {
        modalMenu.classList.add('active');
    });

    modalClose.addEventListener('click', function() {
        modalMenu.classList.remove('active');
    });

    submitButton.addEventListener('click', function(){
        console.log(input1.value+'\n'+input2.value+'\n'+textArea.value);
    });
});
