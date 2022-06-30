  let burgerli = document.getElementById('burger-li');
  let burger = document.getElementById('burger-block');
  let trigger = $('#hamburger'),
        isClosed = true;
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');

  $('document').ready(function () {
    trigger = $('#hamburger'),
        isClosed = true;
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        console.log(burger);
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        burger.classList.remove('burger-close');
        burger.classList.add('burger-active');
        
        
        isClosed = false;
      } else {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        burger.classList.remove('burger-active');
        burger.classList.add('burger-close');
        isClosed = true;
      }
    }

  });

  burgerli.onclick=()=>{
      trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        burger.classList.remove('burger-active');
        burger.classList.add('burger-close');
        isClosed = true;
  }