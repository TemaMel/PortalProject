const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    video = document.querySelector('.header__buttons-watch'),
    closeVideo = document.querySelector('.overlay__close'),
    overlay = document.querySelector('.overlay'),
    illVideo = document.getElementById("illVideo"),
    illBtn = document.getElementById("illBtn"),
    bullitBtn = document.getElementById('bullitBtn'),
    bullitImg = document.querySelector('.bullit__img'),
    bullitDscr = document.querySelector('.bullit__descr');


hamburger.addEventListener('click', function() {
	menu.classList.add('active');
});

closeElem.addEventListener('click', function () {
    menu.classList.remove('active');
});

video.addEventListener('click', function() {
    overlay.classList.add('overlay_active');
});


closeVideo.addEventListener('click', function() {
    overlay.classList.remove('overlay_active');
});

////////Кнопка паузы в секции ILLustration///////////////////////////////////////
illBtn.addEventListener('click', function() {
    if (illVideo.paused) {
        illVideo.play();
        illBtn.innerHTML = "Pause";
    } else {
        illVideo.pause();
        illBtn.innerHTML = "Play";
    }
});


/////////////////////////////Кнопка смены дисплеев в секции Bullit//////////////////////////////

// bullitBtn.addEventListener('click', function() {
//     bullitImg.classList.add('bullit-disable'),
//     bullitDscr.classList.add('bullit-active')
// });

bullitBtn.addEventListener('click', function () {
    if (bullitImg.classList.contains('bullit-active')) {
        bullitDscr.classList.add('bullit-active'),
        bullitImg.classList.remove('bullit-active')
    } else {
        bullitImg.classList.add('bullit-active'),
        bullitDscr.classList.remove('bullit-active')
    }
});
