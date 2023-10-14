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
    bullitDscr = document.querySelector('.bullit__descr'),
    headerBtn = document.getElementById('headerBtn'),
    footerBtn = document.getElementById('footerBtn'),
    modalOver = document.querySelector('.shell'),
    modalClose = document.querySelector('.modal__close'),
    thanksClose = document.querySelector('.thanks__close'),
    basket = document.querySelector('.basket'),
    //Div внутри корзины в который добавляем товар(wrapper)
    basketWrapper = document.querySelector('.basket__wrapper');


    

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

bullitBtn.addEventListener('click', function () {
    if (bullitImg.classList.contains('bullit-active')) {
        bullitDscr.classList.add('bullit-active'),
        bullitImg.classList.remove('bullit-active')
    } else {
        bullitImg.classList.add('bullit-active'),
        bullitDscr.classList.remove('bullit-active')
    }
});

////////////////////////Кнопка смены дисплеев в секции Card//////////////////////////////////////

window.addEventListener('click', function(event) {
    let cardMain,
        cardAdd;

    if (event.target.dataset.action === 'cardSwipe') {

         //находим обертку карты(родителя)
        const cardWrapper = event.target.closest('.card__item');
        
        cardMain = cardWrapper.querySelector('.card__item-main'),
        cardAdd = cardWrapper.querySelector('.card__item-additional');

        if (cardMain.classList.contains('card-active')) {
            cardAdd.classList.add('card-active'),
            cardMain.classList.remove('card-active')
        } else {
            cardMain.classList.add('card-active'),
            cardAdd.classList.remove('card-active')
        }
    };
});


//для айфонов//
// window.addEventListener('touchstart', function(event) {
//     let cardMain,
//         cardAdd;

//     if (event.target.dataset.action === 'cardSwipe') {

//          //находим обертку карты(родителя)
//         const cardWrapper = event.target.closest('.card__item');
        
//         cardMain = cardWrapper.querySelector('.card__item-main'),
//         cardAdd = cardWrapper.querySelector('.card__item-additional');

//         if (cardMain.classList.contains('card-active')) {
//             cardAdd.classList.add('card-active'),
//             cardMain.classList.remove('card-active')
//         } else {
//             cardMain.classList.add('card-active'),
//             cardAdd.classList.remove('card-active')
//         }
//     };
// });





///////////////////////////Модальное окно с заявкой/////////////////////////////////////////////

headerBtn.addEventListener('click', function() {
    modalOver.classList.add('shell_active')
});

footerBtn.addEventListener('click', function() {
    modalOver.classList.add('shell_active')
});

modalClose.addEventListener('click', function() {
    modalOver.classList.remove('shell_active')
});

thanksClose.addEventListener('click', function() {
    $('.thanks, #thanks').fadeOut('slow');
});


//////////////////////////Отправка формы//////////////////////////////////////////////
$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            dara: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#modal, #basket').fadeOut();
            $('.thanks, #thanks').fadeIn('slow');
            
            $('form').trigger('reset');
        });
        return false;
    });
});


//////////////////////////Section Shop////////////////////////////////////////////////
//Счетчик//

window.addEventListener('click', function(event) {

    ///объявляем переменную для счетчика
    let counter;


     //проверяем клик строго по кнопкам плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //находим обертку счетчика
        const counterWrapper = event.target.closest('.counter');

        //находим div с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    };
    
    //является ли элемент по которому мы кликнули кнопкой плюс
    if (event.target.dataset.action === 'plus') {

        //при клике на кнопку плюс, увеличиваем счетчик на 1
        counter.innerText = ++counter.innerText;
    }


    //является ли элемент по которому мы кликнули кнопкой минус
    if (event.target.dataset.action === 'minus') {

        //если число счетчика > 1, то уменьшаем на 1...
        if (parseInt(counter.innerText) > 1) {

            counter.innerText = --counter.innerText;

            //Проверка на товар который находится в корзине
        } else if (event.target.closest('.basket__wrapper') && parseInt(counter.innerText) === 1) {
            //Удаление товара из корзины
            event.target.closest('.basket__item').remove();
        }

    }
});

//Для айфона используем touchstart///

// window.addEventListener('touchstart', function(event) {

//     let counter;

//      //проверяем клик строго по кнопкам плюс или минус
//     if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
//         //находим обертку счетчика
//         const counterWrapper = event.target.closest('.counter');

//         //находим div с числом счетчика
//         counter = counterWrapper.querySelector('[data-counter]');
//     };
    


//     //является ли элемент по которому мы кликнули кнопкой плюс
//     if (event.target.dataset.action === 'plus') {

//         //при клике на кнопку плюс, увеличиваем счетчик на 1
//         counter.innerText = ++counter.innerText;
//     }


//     //является ли элемент по которому мы кликнули кнопкой минус
//     if (event.target.dataset.action === 'minus') {

//         //если число счетчика > 1, то уменьшаем на 1...
//         if (parseInt(counter.innerText) > 1) {
//             counter.innerText = --counter.innerText;
//         }
//     }
// });




//Добавление в корзину//
    
    //Отслеживание клика на странице
window.addEventListener('click', function (event) {

    //Проверяем что клик совершен по кнопке "Buy Now"
    if (event.target.hasAttribute('data-cart')) {
        
        //Находим карточку товара внутри которой был совершен клик
        const card = event.target.closest('.shop__item');


        //собираем данные с этого товара
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.shop__item-img').getAttribute('src'),
            title: card.querySelector('.shop__item-portal').innerText,
            description: card.querySelector('.shop__item-descr').innerText,
            price: card.querySelector('.shop__item-price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        // Проверить, есть ли такой товар уже в корзине
        const itemInBasket = basketWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        //Если товар есть в корзине
        
        if (itemInBasket) {

            counterEl = itemInBasket.querySelector('[data-counter]');
            counterEl.innerHTML = parseInt(counterEl.innerHTML) + parseInt(productInfo.counter);

        } else {

            const cartItemHtml = `<div class="basket__item" data-id="${productInfo.id}">
                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}" class="basket__item-img">
                                    <div class="basket__item-title">
                                        ${productInfo.title}
                                    </div>
                                    <p class="basket__item-descr">
                                        ${productInfo.description}
                                    </p>
                                    <div class="basket__item-calculator">
                                        <div class="counter">
                                            <div class="counter__control" onclick="" data-action="minus">-</div>
                                            <div class="counter__current" data-counter="">${productInfo.counter}</div>
                                            <div class="counter__control" onclick="" data-action="plus">+</div>
                                        </div>
                                        <p class="basket__item-price">
                                            ${productInfo.price}
                                        </p>
                                    </div>
                                </div>`;

            //Отобразим товар в корзине

            basketWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
        }
    }
});



//Вызов Корзинны с иконки Basket///

window.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'basketCall') {
        basket.classList.add('basket_active')
    }

});
    //Закрыть корзину
window.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'basketClose') {
        basket.classList.remove('basket_active')
    }
});


// window.addEventListener('touchstart', function(event) {
//     if (event.target.dataset.action === 'basketClose') {
//         basket.classList.remove('basket_active')
//     }
// });




