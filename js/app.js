(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// window.jQuery = require('jquery');
// var $ = require('jquery');
// var jQuery = require('jquery');
// require('./jquery.validate.js');



(function($) { 
  $.fn.animated = function(inEffect, outEffect) { 
   var jQueryObject = $(this); 
 
   jQueryObject.css("opacity", "0").addClass("animated"); 
 
 
   jQueryObject.waypoint(function(dir) { 
    if (dir === "down") { 
     jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
    } else { 
     jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
    }; 
   }, { 
    offset: "90%" 
   }); 
 
   jQueryObject.waypoint(function(dir) { 
    if (dir === "down") { 
     jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
    } else { 
     jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
    }; 
   }, { 
    offset: -$(window).height() 
   }); 
  }; 
 })(jQuery);

 //animate
$(function(){
  // <-------------------------- topline ---------------------->
  $(".topline__row-animate").animated("fadeInDown", "fadeOutUp");
  $(".topline__row-2").animated("fadeInDown", "fadeOutUp");
  // <-------------------------- /topline ---------------------->

  // <-------------------------- header ---------------------->
  $(".header__wrapper").animated("fadeInLeft", "fadeOutLeft");
  $(".header__right").animated("fadeInRight", "fadeOutRight");
  // <-------------------------- /header ---------------------->


 // <-------------------------- what ---------------------->
  $(".what__container").animated("fadeInUp", "fadeOutDown");
  $(".what__wrapper-item").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })

 // <-------------------------- /what ---------------------->

  // <-------------------------- offer ---------------------->
  $(".offer__container").animated("fadeInUp", "fadeOutDown");
  $(".offers").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })


 // <-------------------------- /offer ---------------------->

 // <-------------------------- akcija ---------------------->
  $(".akcija__row").animated("fadeInUp", "fadeOutDown");
  $(".akcija__icon").each(function(){
    $(this).animated("flipInY", "flipOutY");
  })


 // <-------------------------- /akcija ---------------------->
 $(".dohod__container").animated("fadeInUp", "fadeOutDown");


   // <-------------------------- work ---------------------->
   $(".work__container").animated("fadeInUp", "fadeOutDown");
  
    $(".work__card").each(function(){
      $(this).animated("fadeInUp", "fadeOutDown");
    })

  // <-------------------------- /work ---------------------->

   // <-------------------------- /otziv ---------------------->
   $(".otziv__container").animated("fadeInUp", "fadeOutDown");

  //  $(".card").animated("fadeInLeft", "fadeOutLeft");
  //  $(".otziv__block-caption").animated("fadeInRight", "fadeOutRight");

    // <-------------------------- /otziv ---------------------->

    // <-------------------------- vakansija ---------------------->
    $(".vakansija__container").animated("fadeInUp", "fadeOutDown");
  
    $(".vakansija__block .item").each(function(){
      $(this).animated("fadeInRight", "fadeOutRight");
    })
    // <-------------------------- /vakansija ---------------------->
    
  // <-------------------------- ecpv ---------------------->
  $(".section-ecpv__container").animated("fadeInUp", "fadeOutDown");
  
  $(".section-ecpv-bg__quest").each(function(){
    $(this).animated("fadeInUp", "fadeOutDown");
  })
  $(".section-ecpv .container").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })
  // <-------------------------- /ecpv ---------------------->

  // <-------------------------- blog ---------------------->
  $(".blog-bg__caption").animated("fadeInUp", "fadeOutDown");
  
  // $(".blogs__items").each(function(){
  //   $(this).animated("fadeInRight", "fadeOutRight");
  // })
  // <-------------------------- /blog ---------------------->

  // <-------------------------- about ---------------------->
  $(".about__container").animated("fadeInUp", "fadeOutDown");

  $(".about main p").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })

  $(".registration__block .item").each(function(){
    $(this).animated("flipInX", "fadeOutRight");
  })
  
  // <-------------------------- /about ---------------------->
  
  
// <-------------------------- section-135__container ---------------------->
$(".section-135__container").animated("fadeInUp", "fadeOutDown");
$(".block3 block3-requied-treb").animated("fadeInUp", "fadeOutDown");
$(".block3 block3-requied-pred").animated("fadeInUp", "fadeOutDown");

$(".blockItems .item").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})

$(".block2__item ").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})

$(".block3-requied-list__item").each(function(){
  $(this).animated("fadeInUp", "fadeOutDown");
})
// <-------------------------- /section-135__container ---------------------->

})

$(function(){
  let $page = $('html, body');
  let $modal = document.querySelector('.modal');

  $('a[href*="#"]').click(function() {
    if ( $modal.classList.contains('modal-active')) {
      $('.topline__burger-img').removeClass('topline__burger-img-active')
      $('.modal').removeClass('modal-active');
      $('.overlay').hide();
          $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        $('body').css('overflow','visible');
        
    } else {
        $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
     }
  });
})




//burger mobile
$(function(){
	$('.header-burger').click(function(){
		$('.header-menu').toggleClass('header-menu-active');

		$('.header-menu-active a').click(function(){
			$('.header-menu').removeClass('header-menu-active');
		})
	})
})


$(function(){
  if(document.querySelector(".akcija__img") != null) {
    //paralax
  function paralax(e) {
		let x = e.clientX/50;
		let y = e.clientY/50;
	
		 var layer = document.querySelector(".akcija__img");
		 layer.style.transform = "translate("+x+"px, "+y+"px)";
  }

	document.addEventListener('mousemove', paralax);
  }
})

$(function(){
  if(document.querySelector(".block4-wrapper__item-img img") != null) {
    //paralax
  function paralax(e) {
		let x = e.clientX/50;
		let y = e.clientY/50;
	
		 var layer = document.querySelector(".block4-wrapper__item-img img");
		 layer.style.transform = "translate("+x+"px, "+y+"px)";
  }

	document.addEventListener('mousemove', paralax);
  }
})
  
	
	//send mail
	// $( document ).ready(function() {
	// 	$(".footer-form").submit(function(e){
	// 			e.preventDefault();
	// 			sendAjaxForm('.footer-form', 'http://localhost:3000/mail.php');

	// 			function sendAjaxForm(ajax_form, url) {
	// 					$.ajax({
	// 							url:     url, //url страницы (send.php)
	// 							type:     "POST", //метод отправки
	// 							dataType: "html",
	// 							data: $(ajax_form).serialize(),  // Сеарилизуем объект
	// 							beforeSend: function(data) { // событие до отправки
	// 								$('.footer_btn').attr('disabled', 'disabled');						
	// 							},
	// 							success: function(response) { //Данные отправлены успешно
	// 									console.log(response);
	// 									result = $.parseJSON(response);
	// 									console.log(result);
	// 									$(".footer-form").trigger("reset");

	// 									$('.modal-head-name').html("Спасибо!");
	// 									$('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
	// 									$(".modal-overlay1").fadeIn();
	// 									$(".modal1").fadeIn();
	// 									$(".modal1").css({"transform" : "translateY(0%)"});
	// 									$("body").css({"overflow":"hidden"});
	// 									$('.workim__btn').removeAttr('disabled');
	// 							}
	// 					});
	// 			}
	// 	});
	// });

//gradient button hover
$(function(){
  let resizeReset = function() {
    w = canvasBody.width = window.innerWidth;
    h = canvasBody.height = window.innerHeight;
  }
  
  const opts = { 
    particleColor: "rgb(255,255,255)",
    lineColor: "rgb(255,255,255)",
    particleAmount: 30,
    defaultSpeed: 2,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 400,
  };
  
  window.addEventListener("resize", function(){
    deBouncer();
  });
  
  let deBouncer = function() {
      clearTimeout(tid);
      tid = setTimeout(function() {
          resizeReset();
      }, delay);
  };
  
  let checkDistance = function(x1, y1, x2, y2){ 
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  
  let linkPoints = function(point1, hubs){ 
    for (let i = 0; i < hubs.length; i++) {
      let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
      let opacity = 1 - distance / opts.linkRadius;
      if (opacity > 0) { 
        drawArea.lineWidth = 0.5;
        drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        drawArea.beginPath();
        drawArea.moveTo(point1.x, point1.y);
        drawArea.lineTo(hubs[i].x, hubs[i].y);
        drawArea.closePath();
        drawArea.stroke();
      }
    }
  }
  
  Particle = function(xPos, yPos){ 
    this.x = Math.random() * w; 
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
    this.directionAngle = Math.floor(Math.random() * 360); 
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed
    };
    this.update = function(){ 
      this.border(); 
      this.x += this.vector.x; 
      this.y += this.vector.y; 
    };
    this.border = function(){ 
      if (this.x >= w || this.x <= 0) { 
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) this.x = w;
      if (this.y > h) this.y = h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;	
    };
    this.draw = function(){ 
      drawArea.beginPath();
      drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      drawArea.closePath();
      drawArea.fillStyle = this.color;
      drawArea.fill();
    };
  };
  
  function setup(){ 
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++){
      particles.push( new Particle() );
    }
    window.requestAnimationFrame(loop);
  }
  
  function loop(){ 
    window.requestAnimationFrame(loop);
    drawArea.clearRect(0,0,w,h);
    for (let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].draw();
    }
    for (let i = 0; i < particles.length; i++){
      linkPoints(particles[i], particles);
    }
  }
  
  const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
  let delay = 200, tid,
  rgb = opts.lineColor.match(/\d+/g);
  resizeReset();
  setup();
})

// btn click in form
$(function(){
  $('.header__form-validation .header__formbtn').on('click', function() {
    $('.header__form-validation input[type="submit"]').click();
  }) 
})
$(function(){
  $('.modal__form-validation .header__formbtn').on('click', function() {
    $('.modal__form-validation input[type="submit"]').click();
  }) 
})
$(function(){
  $('.reviews__form-validation .header__formbtn').on('click', function() {
    $('.reviews__form-validation input[type="submit"]').click();
  }) 
})

//image photo show
$(function(){
	$('.card__border img').each((index,el) => {
		  $(el).click((e) => {
       //e.target.classList.add('active-photo');
        if (e.target.classList.contains('active-photo')) {
          console.log('yes');
          
        } else {
         
          //console.log('no');
         $('.card__border img').each(function(ind,el){
           el.classList.remove('active-photo');
           //console.log(el)
         })
         e.target.classList.add('active-photo');

         $('.otziv__block-photo img').attr('src',e.target.src);
         let name = e.target.nextElementSibling.children[0].innerHTML;
         let disc = e.target.nextElementSibling.children[1].innerHTML;
  
         $('.otziv__block-title').html(name);
                  
          function doHomework(callback) {
            $('.otziv__block-disc').hide(300);
            $('.otziv__block-title').hide(300);
            callback();
          }
  
          doHomework( function() {
            let maxLength = 150;
            if (disc.length > maxLength) {
              let str = disc.slice(0,maxLength);
              str+="...";
              $('.otziv__block-disc').show(500);
              $('.otziv__block-disc').html(str);
              $('.otziv__block-title').show(500);
            } 
            else {
              $('.otziv__block-disc').show(500);
              $('.otziv__block-disc').html(disc);
              $('.otziv__block-title').show(500);
            }
          });

        }
		 })
  })
 });

 $(function(){
  let maxLength = 150;
  let text =  document.querySelector('.otziv__block-disc').innerHTML;
  if (text.length > maxLength) {
    let str = text.slice(0,maxLength);
    str+="...";
    $('.otziv__block-disc').html(str);
  }
 })

 //скрыть часть новости блога
 $(function(){
   let textBlog = document.querySelectorAll('.blogs__items .disc-hide');
   //console.log(textBlog)
   textBlog.forEach((el) => {
    let maxLength = 250;
    
    let text = el.innerHTML;
    
     if (text.length > maxLength) {
      let str = el.innerHTML.slice(0,maxLength);
      str+="...";
      // console.log($(el));
      //console.log(this)
      $(el).html(str);
     }
   })
 })



 //скрыть показать описание
 $(function(){
   $('.block5__btn').click(function(){
     if ($('.block5__wrap').css('max-height') == '140px') {
       $('.block5__btn-text').html('Скрыть');
       $('.block5__btn-arr').css('transform','rotate(180deg)');
       $('.block5__wrap').css('max-height','5000px');
    
     } else {
      $('.block5__wrap').css('max-height','140px');
      $('.block5__btn-arr').css('transform','rotate(0deg)');
      $('.block5__btn-text').html('Подробнее');

      let $page = $('html, body');
      let target = document.querySelector('.block5');
      $page.animate({scrollTop: $(target).offset().top}, 1000);
           
     }
   })
 })





 //плавный скролл к тегу
// $(function(){
//   var $page = $('html, body');
//   $('a[href*="#"]').click(function() {
//       $page.animate({
//           scrollTop: $($.attr(this, 'href')).offset().top
//       }, 400);
//       return false;
//   });
// })

//carusel friend
$(function() {

  var owl = $(".owl-carousel-friend");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: false,
    dots:true,
    responsive:{
      0:{
          items:2,
          nav:false
      },
      768:{
          items:3,
          nav:false
      },
      1024:{
          items:4,
          nav:false,
          loop: false
      }
  }
  });
});

//arr in friend block section
$('.slick-prev').click(function(){
  $('.friend__items').slick('slickPrev');
})

$('.slick-next').click(function(){
  $('.friend__items').slick('slickNext');
})


//carusel blog
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel-blog");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: false,
    dots:true,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      690:{
          items:2,
          nav:false
      },
      1201:{
          items:3,
          nav:false,
          loop: false
      }
  }
    
  });
});



//btn burger
$(function(){
 

  $('.topline__burger-img').click(Modal)

  // $('.overlay').click(function(){
  //   if ( $('.modal-form-active').length > 0 ) {
  //     $('.modal-form').removeClass('modal-form-active');
  //     $('body').css({"overflow":"visible"});
  //     $('.overlay').hide();
      
  //   } else {
  //     Modal();
  //   }
  // }); 
  $('.overlay').click(Modal);
  $('.modal__close span').click(Modal);


  function Modal() {
    let modal = document.querySelector('.modal');
    if ( $('.topline__burger-img').hasClass('topline__burger-img-active')) {
     $('.topline__burger-img').removeClass('topline__burger-img-active') 
     $('.modal').removeClass('modal-active');
     $('body').css('overflow','visible');
     $('.overlay').hide();
    }  else {
     $('.topline__burger-img').addClass('topline__burger-img-active');
     $('.modal').addClass('modal-active');
     $('body').css('overflow','hidden');
     $('.overlay').show();
    } 
  }
})




$(function(){

  
  $('.modal__form-validation').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 12
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 2-х символов в поле 'Имя'"
      },
      phone: {
        required: "Поле 'Телефон' обязательно к заполнению",
        number: "Неверный номер",
        minlength: "В номере мало цифр",
        maxlength: "В номере много цифр",
      },
      email: {
        email: "Необходим формат адреса email" 
      }
    },
    submitHandler: function(form) {
      
      sendAjaxForm(form, 'mail.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                //console.log(data);
                //$(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  
                  result = $.parseJSON(response);
          
                  $(form).trigger("reset");


                  $('.modal-head-name').html("Спасибо!");
                  $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
                  $('.modal-head-distance').html("Напомните менеджеру про подарок");
                  $(".modal-overlay1").fadeIn();
                  $(".modal1").fadeIn();
                  $(".modal1").css({"transform" : "translateY(0%)"});
                  $("body").css({"overflow":"hidden"});
                  $('.modal-form').removeClass('modal-form-active');
              }
          });
      }
    }
  });

  $('.reviews__form-validation').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      textOtziv: {
        required: true,
        maxlength: 150,

      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 2-х символов в поле 'Имя'"
      },
      textOtziv: {
        required: "Поле обязательно к заполнению",
        maxlength: "Максимально 150 символов",
      }
    },
    submitHandler: function(form) {
      
      sendAjaxForm(form, 'reviews.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                //console.log(data);
                //$(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  
                  result = $.parseJSON(response);
          
                  $(form).trigger("reset");

                  $('.modal-form-reviews').removeClass('modal-form-reviews-active');
                  $('.modal-head-name').html("Спасибо!");
                  $('.modal-head-price').html("Ваш отзыв очень важен для нас");
                  $(".modal-overlay1").fadeIn();
                  $(".modal1").fadeIn();
                  $(".modal1").css({"transform" : "translateY(0%)"});
                  $("body").css({"overflow":"hidden"});
                  $('.modal-form').removeClass('modal-form-active');
              }
          });
      }
    }
  });


  $(function(){
    let inpHead = document.querySelector('.header__form-validation .telval');
    let inpModal = document.querySelector('.modal__form-validation .telval');
    let inpZayavka = document.querySelector('.zayavka-section__form-validation .telval');

    if (inpHead != null) {
      inpHead.addEventListener('keypress', e => {
        // Отменяем ввод не цифр
        if(!/\d/.test(e.key))
          e.preventDefault();
      });
    }

    if (inpModal != null) {
      inpModal.addEventListener('keypress', e => {
        // Отменяем ввод не цифр
        if(!/\d/.test(e.key))
          e.preventDefault();
      });
    }

    if (inpZayavka != null) {
      inpZayavka.addEventListener('keypress', e => {
        // Отменяем ввод не цифр
        if(!/\d/.test(e.key))
          e.preventDefault();
      });
     }
  })

  $('.header__form-validation').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 12
      },
      email: {
        email: true
      }
    },
    messages: {
      name: {
        required: "Поле 'Имя' обязательно к заполнению",
        minlength: "Введите не менее 2-х символов в поле 'Имя'"
      },
      phone: {
        required: "Поле 'Телефон' обязательно к заполнению",
        number: "Неверный номер",
        minlength: "В номере мало цифр",
        maxlength: "В номере много цифр",
      },
      email: {
        email: "Необходим формат адреса email" 
      }
    },
    submitHandler: function(form) {
      //http://localhost:3000/
      sendAjaxForm(form, 'mail.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                //console.log(data);
                //$(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  result = $.parseJSON(response);
                  $(form).trigger("reset");


                  $('.modal-head-name').html("Спасибо!");
                  $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
                  $('.modal-head-distance').html("Напомните менеджеру про подарок");
                  $(".modal-overlay1").fadeIn();
                  $(".modal1").fadeIn();
                  $(".modal1").css({"transform" : "translateY(0%)"});
                  $("body").css({"overflow":"hidden"});
                  // $('.workim__btn').removeAttr('disabled');
                  
              }
          });
      }
    }
  });

  $('.zayavka-section__form-validation').validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 12
      }
    },
    //messages: {
      // name: {
      //   required: "Поле 'Имя' обязательно к заполнению",
      //   minlength: "Введите не менее 2-х символов в поле 'Имя'"
      // },
      // phone: {
      //   required: "Поле 'Телефон' обязательно к заполнению",
      //   number: "Неверный номер",
      //   minlength: "Номер состоит из 9 чисел",
      //   maxlength: "Номер состоит из 9 чисел",
      // }
    //},
    submitHandler: function(form) {
      //http://localhost:3000/
      sendAjaxForm(form, 'mail.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                //console.log(data);
                //$(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  result = $.parseJSON(response);
                  $(form).trigger("reset");


                  $('.modal-head-name').html("Спасибо!");
                  $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
                  $('.modal-head-distance').html("Напомните менеджеру про подарок");
                  $(".modal-overlay1").fadeIn();
                  $(".modal1").fadeIn();
                  $(".modal1").css({"transform" : "translateY(0%)"});
                  $("body").css({"overflow":"hidden"});
                  // $('.workim__btn').removeAttr('disabled');
                  
              }
          });
      }
    }
  });

  // $('.header__form').submit(function(e){
  //   e.preventDefault();
  //   alert("Ok")
  // })
})

$(function(){
  $(".modal-overlay1, .close-modal1").on("click", function(){
    
    $(".modal-overlay1").fadeOut();
    $(".modal1").fadeOut();
    $(".modal1").css({"transform" : "translateY(300%)"});
    $("body").css({"overflow":"visible"});
})
})

$(function(){
  $('.akcija__link-green').click(function(){
    $('.modal-form').addClass('modal-form-active');
    $('body').css({"overflow":"hidden"});
    //$('.modal-form-overlay').show();
  })
  $('.modal-form-overlay').click(function(){
    $('body').css({"overflow":"visible"});
    $('.modal-form').removeClass('modal-form-active');
  })
})

//открытие/картытие модального окна отзывы
$(function(){
  $('.otziv__block__link').click(function(){
  
     $('.modal-form-reviews').addClass('modal-form-reviews-active');
     $('body').css({"overflow":"hidden"});
   
  })
  $('.modal-form-overlay').click(function(){
    $('body').css({"overflow":"visible"});
    $('.modal-form-reviews').removeClass('modal-form-reviews-active');
  })
})


$(function(){
  $('.block3-btn__btn-blue').click(function(){
    $('.modal-form').addClass('modal-form-active');
    $('body').css({"overflow":"hidden"});
  })

  $('.block3-btn__btn-green').click(function(){
    
    let attr = $(this).attr('href');
    if (attr == undefined) {
      $('.modal-form').addClass('modal-form-active');
      $('body').css({"overflow":"hidden"});
      
    } else {
      return;
    }

  })
})

//btn__up arrow
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".arrowup").fadeIn();
  } else {
    $(".arrowup").fadeOut();
  }
});
$(function ($) {
  $(".arrowup").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gcmVxdWlyZSgnLi9qcXVlcnkudmFsaWRhdGUuanMnKTtcclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCQpIHsgXHJcbiAgJC5mbi5hbmltYXRlZCA9IGZ1bmN0aW9uKGluRWZmZWN0LCBvdXRFZmZlY3QpIHsgXHJcbiAgIHZhciBqUXVlcnlPYmplY3QgPSAkKHRoaXMpOyBcclxuIFxyXG4gICBqUXVlcnlPYmplY3QuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKTsgXHJcbiBcclxuIFxyXG4gICBqUXVlcnlPYmplY3Qud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7IFxyXG4gICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhpbkVmZmVjdCkuYWRkQ2xhc3Mob3V0RWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9OyBcclxuICAgfSwgeyBcclxuICAgIG9mZnNldDogXCI5MCVcIiBcclxuICAgfSk7IFxyXG4gXHJcbiAgIGpRdWVyeU9iamVjdC53YXlwb2ludChmdW5jdGlvbihkaXIpIHsgXHJcbiAgICBpZiAoZGlyID09PSBcImRvd25cIikgeyBcclxuICAgICBqUXVlcnlPYmplY3QucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7IFxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH07IFxyXG4gICB9LCB7IFxyXG4gICAgb2Zmc2V0OiAtJCh3aW5kb3cpLmhlaWdodCgpIFxyXG4gICB9KTsgXHJcbiAgfTsgXHJcbiB9KShqUXVlcnkpO1xyXG5cclxuIC8vYW5pbWF0ZVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLnRvcGxpbmVfX3Jvdy1hbmltYXRlXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAkKFwiLnRvcGxpbmVfX3Jvdy0yXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3RvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuaGVhZGVyX193cmFwcGVyXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gICQoXCIuaGVhZGVyX19yaWdodFwiKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3aGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi53aGF0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gICQoXCIud2hhdF9fd3JhcHBlci1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5ZXCIsIFwiZmxpcE91dFlcIik7XHJcbiAgfSlcclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3doYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG9mZmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5vZmZlcl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAkKFwiLm9mZmVyc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gIH0pXHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb2ZmZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWtjaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ha2NpamFfX3Jvd1wiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgJChcIi5ha2NpamFfX2ljb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJbllcIiwgXCJmbGlwT3V0WVwiKTtcclxuICB9KVxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2FrY2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gJChcIi5kb2hvZF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLndvcmtfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLndvcmtfX2NhcmRcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAgIH0pXHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9vdHppdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLm90eml2X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuICAvLyAgJChcIi5jYXJkXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gIC8vICAkKFwiLm90eml2X19ibG9jay1jYXB0aW9uXCIpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcblxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9vdHppdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YWthbnNpamEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgICQoXCIudmFrYW5zaWphX19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICAgJChcIi52YWthbnNpamFfX2Jsb2NrIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gICAgfSlcclxuICAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvdmFrYW5zaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgICBcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZWNwdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuc2VjdGlvbi1lY3B2X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICQoXCIuc2VjdGlvbi1lY3B2LWJnX19xdWVzdFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICB9KVxyXG4gICQoXCIuc2VjdGlvbi1lY3B2IC5jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9lY3B2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBibG9nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ibG9nLWJnX19jYXB0aW9uXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICBcclxuICAvLyAkKFwiLmJsb2dzX19pdGVtc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgLy8gfSlcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2Jsb2cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFib3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5hYm91dF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcbiAgJChcIi5hYm91dCBtYWluIHBcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCIucmVnaXN0cmF0aW9uX19ibG9jayAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG4gIFxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvYWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICBcclxuICBcclxuLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlY3Rpb24tMTM1X19jb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuJChcIi5zZWN0aW9uLTEzNV9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuJChcIi5ibG9jazMgYmxvY2szLXJlcXVpZWQtdHJlYlwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiQoXCIuYmxvY2szIGJsb2NrMy1yZXF1aWVkLXByZWRcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuJChcIi5ibG9ja0l0ZW1zIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxufSlcclxuXHJcbiQoXCIuYmxvY2syX19pdGVtIFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbn0pXHJcblxyXG4kKFwiLmJsb2NrMy1yZXF1aWVkLWxpc3RfX2l0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG59KVxyXG4vLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3NlY3Rpb24tMTM1X19jb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgbGV0ICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gIGxldCAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuXHJcbiAgJCgnYVtocmVmKj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIGlmICggJG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJykpIHtcclxuICAgICAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5yZW1vdmVDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKVxyXG4gICAgICAkKCcubW9kYWwnKS5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICQoJy5vdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCd2aXNpYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgIH1cclxuICB9KTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcbi8vYnVyZ2VyIG1vYmlsZVxyXG4kKGZ1bmN0aW9uKCl7XHJcblx0JCgnLmhlYWRlci1idXJnZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0JCgnLmhlYWRlci1tZW51JykudG9nZ2xlQ2xhc3MoJ2hlYWRlci1tZW51LWFjdGl2ZScpO1xyXG5cclxuXHRcdCQoJy5oZWFkZXItbWVudS1hY3RpdmUgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5oZWFkZXItbWVudScpLnJlbW92ZUNsYXNzKCdoZWFkZXItbWVudS1hY3RpdmUnKTtcclxuXHRcdH0pXHJcblx0fSlcclxufSlcclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ha2NpamFfX2ltZ1wiKSAhPSBudWxsKSB7XHJcbiAgICAvL3BhcmFsYXhcclxuICBmdW5jdGlvbiBwYXJhbGF4KGUpIHtcclxuXHRcdGxldCB4ID0gZS5jbGllbnRYLzUwO1xyXG5cdFx0bGV0IHkgPSBlLmNsaWVudFkvNTA7XHJcblx0XHJcblx0XHQgdmFyIGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ha2NpamFfX2ltZ1wiKTtcclxuXHRcdCBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIit4K1wicHgsIFwiK3krXCJweClcIjtcclxuICB9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBhcmFsYXgpO1xyXG4gIH1cclxufSlcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrNC13cmFwcGVyX19pdGVtLWltZyBpbWdcIikgIT0gbnVsbCkge1xyXG4gICAgLy9wYXJhbGF4XHJcbiAgZnVuY3Rpb24gcGFyYWxheChlKSB7XHJcblx0XHRsZXQgeCA9IGUuY2xpZW50WC81MDtcclxuXHRcdGxldCB5ID0gZS5jbGllbnRZLzUwO1xyXG5cdFxyXG5cdFx0IHZhciBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2s0LXdyYXBwZXJfX2l0ZW0taW1nIGltZ1wiKTtcclxuXHRcdCBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIit4K1wicHgsIFwiK3krXCJweClcIjtcclxuICB9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBhcmFsYXgpO1xyXG4gIH1cclxufSlcclxuICBcclxuXHRcclxuXHQvL3NlbmQgbWFpbFxyXG5cdC8vICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0Ly8gXHQkKFwiLmZvb3Rlci1mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbihlKXtcclxuXHQvLyBcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Ly8gXHRcdFx0c2VuZEFqYXhGb3JtKCcuZm9vdGVyLWZvcm0nLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21haWwucGhwJyk7XHJcblxyXG5cdC8vIFx0XHRcdGZ1bmN0aW9uIHNlbmRBamF4Rm9ybShhamF4X2Zvcm0sIHVybCkge1xyXG5cdC8vIFx0XHRcdFx0XHQkLmFqYXgoe1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0dXJsOiAgICAgdXJsLCAvL3VybCDRgdGC0YDQsNC90LjRhtGLIChzZW5kLnBocClcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHR5cGU6ICAgICBcIlBPU1RcIiwgLy/QvNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuXHQvLyBcdFx0XHRcdFx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcclxuXHQvLyBcdFx0XHRcdFx0XHRcdGRhdGE6ICQoYWpheF9mb3JtKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbihkYXRhKSB7IC8vINGB0L7QsdGL0YLQuNC1INC00L4g0L7RgtC/0YDQsNCy0LrQuFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHQkKCcuZm9vdGVyX2J0bicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHRcdFx0XHRcdFx0XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHR9LFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0JChcIi5mb290ZXItZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoJy5tb2RhbC1oZWFkLW5hbWUnKS5odG1sKFwi0KHQv9Cw0YHQuNCx0L4hXCIpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoJy5tb2RhbC1oZWFkLXByaWNlJykuaHRtbChcItCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uXCIpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0JChcIi5tb2RhbDFcIikuZmFkZUluKCk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0JChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0JChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoJy53b3JraW1fX2J0bicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHR9XHJcblx0Ly8gXHRcdFx0XHRcdH0pO1xyXG5cdC8vIFx0XHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH0pO1xyXG5cclxuLy9ncmFkaWVudCBidXR0b24gaG92ZXJcclxuJChmdW5jdGlvbigpe1xyXG4gIGxldCByZXNpemVSZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdyA9IGNhbnZhc0JvZHkud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGggPSBjYW52YXNCb2R5LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgb3B0cyA9IHsgXHJcbiAgICBwYXJ0aWNsZUNvbG9yOiBcInJnYigyNTUsMjU1LDI1NSlcIixcclxuICAgIGxpbmVDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICBwYXJ0aWNsZUFtb3VudDogMzAsXHJcbiAgICBkZWZhdWx0U3BlZWQ6IDIsXHJcbiAgICB2YXJpYW50U3BlZWQ6IDEsXHJcbiAgICBkZWZhdWx0UmFkaXVzOiAyLFxyXG4gICAgdmFyaWFudFJhZGl1czogMixcclxuICAgIGxpbmtSYWRpdXM6IDQwMCxcclxuICB9O1xyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBkZUJvdW5jZXIoKTtcclxuICB9KTtcclxuICBcclxuICBsZXQgZGVCb3VuY2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aWQpO1xyXG4gICAgICB0aWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmVzaXplUmVzZXQoKTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gIH07XHJcbiAgXHJcbiAgbGV0IGNoZWNrRGlzdGFuY2UgPSBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mil7IFxyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBsaW5rUG9pbnRzID0gZnVuY3Rpb24ocG9pbnQxLCBodWJzKXsgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh1YnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gY2hlY2tEaXN0YW5jZShwb2ludDEueCwgcG9pbnQxLnksIGh1YnNbaV0ueCwgaHVic1tpXS55KTtcclxuICAgICAgbGV0IG9wYWNpdHkgPSAxIC0gZGlzdGFuY2UgLyBvcHRzLmxpbmtSYWRpdXM7XHJcbiAgICAgIGlmIChvcGFjaXR5ID4gMCkgeyBcclxuICAgICAgICBkcmF3QXJlYS5saW5lV2lkdGggPSAwLjU7XHJcbiAgICAgICAgZHJhd0FyZWEuc3Ryb2tlU3R5bGUgPSBgcmdiYSgke3JnYlswXX0sICR7cmdiWzFdfSwgJHtyZ2JbMl19LCAke29wYWNpdHl9KWA7XHJcbiAgICAgICAgZHJhd0FyZWEuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgZHJhd0FyZWEubW92ZVRvKHBvaW50MS54LCBwb2ludDEueSk7XHJcbiAgICAgICAgZHJhd0FyZWEubGluZVRvKGh1YnNbaV0ueCwgaHVic1tpXS55KTtcclxuICAgICAgICBkcmF3QXJlYS5jbG9zZVBhdGgoKTtcclxuICAgICAgICBkcmF3QXJlYS5zdHJva2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBQYXJ0aWNsZSA9IGZ1bmN0aW9uKHhQb3MsIHlQb3MpeyBcclxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB3OyBcclxuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiBoO1xyXG4gICAgdGhpcy5zcGVlZCA9IG9wdHMuZGVmYXVsdFNwZWVkICsgTWF0aC5yYW5kb20oKSAqIG9wdHMudmFyaWFudFNwZWVkOyBcclxuICAgIHRoaXMuZGlyZWN0aW9uQW5nbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApOyBcclxuICAgIHRoaXMuY29sb3IgPSBvcHRzLnBhcnRpY2xlQ29sb3I7XHJcbiAgICB0aGlzLnJhZGl1cyA9IG9wdHMuZGVmYXVsdFJhZGl1cyArIE1hdGgucmFuZG9tKCkgKiBvcHRzLiB2YXJpYW50UmFkaXVzOyBcclxuICAgIHRoaXMudmVjdG9yID0ge1xyXG4gICAgICB4OiBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbkFuZ2xlKSAqIHRoaXMuc3BlZWQsXHJcbiAgICAgIHk6IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uQW5nbGUpICogdGhpcy5zcGVlZFxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKXsgXHJcbiAgICAgIHRoaXMuYm9yZGVyKCk7IFxyXG4gICAgICB0aGlzLnggKz0gdGhpcy52ZWN0b3IueDsgXHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnZlY3Rvci55OyBcclxuICAgIH07XHJcbiAgICB0aGlzLmJvcmRlciA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICBpZiAodGhpcy54ID49IHcgfHwgdGhpcy54IDw9IDApIHsgXHJcbiAgICAgICAgdGhpcy52ZWN0b3IueCAqPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy55ID49IGggfHwgdGhpcy55IDw9IDApIHtcclxuICAgICAgICB0aGlzLnZlY3Rvci55ICo9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnggPiB3KSB0aGlzLnggPSB3O1xyXG4gICAgICBpZiAodGhpcy55ID4gaCkgdGhpcy55ID0gaDtcclxuICAgICAgaWYgKHRoaXMueCA8IDApIHRoaXMueCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLnkgPCAwKSB0aGlzLnkgPSAwO1x0XHJcbiAgICB9O1xyXG4gICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24oKXsgXHJcbiAgICAgIGRyYXdBcmVhLmJlZ2luUGF0aCgpO1xyXG4gICAgICBkcmF3QXJlYS5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJKjIpO1xyXG4gICAgICBkcmF3QXJlYS5jbG9zZVBhdGgoKTtcclxuICAgICAgZHJhd0FyZWEuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgZHJhd0FyZWEuZmlsbCgpO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldHVwKCl7IFxyXG4gICAgcGFydGljbGVzID0gW107XHJcbiAgICByZXNpemVSZXNldCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnBhcnRpY2xlQW1vdW50OyBpKyspe1xyXG4gICAgICBwYXJ0aWNsZXMucHVzaCggbmV3IFBhcnRpY2xlKCkgKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGxvb3AoKXsgXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgZHJhd0FyZWEuY2xlYXJSZWN0KDAsMCx3LGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBwYXJ0aWNsZXNbaV0udXBkYXRlKCk7XHJcbiAgICAgIHBhcnRpY2xlc1tpXS5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxpbmtQb2ludHMocGFydGljbGVzW2ldLCBwYXJ0aWNsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjb25zdCBjYW52YXNCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksXHJcbiAgZHJhd0FyZWEgPSBjYW52YXNCb2R5LmdldENvbnRleHQoXCIyZFwiKTtcclxuICBsZXQgZGVsYXkgPSAyMDAsIHRpZCxcclxuICByZ2IgPSBvcHRzLmxpbmVDb2xvci5tYXRjaCgvXFxkKy9nKTtcclxuICByZXNpemVSZXNldCgpO1xyXG4gIHNldHVwKCk7XHJcbn0pXHJcblxyXG4vLyBidG4gY2xpY2sgaW4gZm9ybVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmhlYWRlcl9fZm9ybS12YWxpZGF0aW9uIC5oZWFkZXJfX2Zvcm1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuY2xpY2soKTtcclxuICB9KSBcclxufSlcclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5tb2RhbF9fZm9ybS12YWxpZGF0aW9uIC5oZWFkZXJfX2Zvcm1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tb2RhbF9fZm9ybS12YWxpZGF0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpO1xyXG4gIH0pIFxyXG59KVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnJldmlld3NfX2Zvcm0tdmFsaWRhdGlvbiAuaGVhZGVyX19mb3JtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcucmV2aWV3c19fZm9ybS12YWxpZGF0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpO1xyXG4gIH0pIFxyXG59KVxyXG5cclxuLy9pbWFnZSBwaG90byBzaG93XHJcbiQoZnVuY3Rpb24oKXtcclxuXHQkKCcuY2FyZF9fYm9yZGVyIGltZycpLmVhY2goKGluZGV4LGVsKSA9PiB7XHJcblx0XHQgICQoZWwpLmNsaWNrKChlKSA9PiB7XHJcbiAgICAgICAvL2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1waG90bycpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1waG90bycpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzJyk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25vJyk7XHJcbiAgICAgICAgICQoJy5jYXJkX19ib3JkZXIgaW1nJykuZWFjaChmdW5jdGlvbihpbmQsZWwpe1xyXG4gICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1waG90bycpO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coZWwpXHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1waG90bycpO1xyXG5cclxuICAgICAgICAgJCgnLm90eml2X19ibG9jay1waG90byBpbWcnKS5hdHRyKCdzcmMnLGUudGFyZ2V0LnNyYyk7XHJcbiAgICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgbGV0IGRpc2MgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMV0uaW5uZXJIVE1MO1xyXG4gIFxyXG4gICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBmdW5jdGlvbiBkb0hvbWV3b3JrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmhpZGUoMzAwKTtcclxuICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLmhpZGUoMzAwKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIGRvSG9tZXdvcmsoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgbWF4TGVuZ3RoID0gMTUwO1xyXG4gICAgICAgICAgICBpZiAoZGlzYy5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgICBsZXQgc3RyID0gZGlzYy5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKHN0cik7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuc2hvdyg1MDApO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmh0bWwoZGlzYyk7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHRcdCB9KVxyXG4gIH0pXHJcbiB9KTtcclxuXHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgbGV0IG1heExlbmd0aCA9IDE1MDtcclxuICBsZXQgdGV4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5pbm5lckhUTUw7XHJcbiAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICBsZXQgc3RyID0gdGV4dC5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICBzdHIrPVwiLi4uXCI7XHJcbiAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKHN0cik7XHJcbiAgfVxyXG4gfSlcclxuXHJcbiAvL9GB0LrRgNGL0YLRjCDRh9Cw0YHRgtGMINC90L7QstC+0YHRgtC4INCx0LvQvtCz0LBcclxuICQoZnVuY3Rpb24oKXtcclxuICAgbGV0IHRleHRCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2dzX19pdGVtcyAuZGlzYy1oaWRlJyk7XHJcbiAgIC8vY29uc29sZS5sb2codGV4dEJsb2cpXHJcbiAgIHRleHRCbG9nLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBsZXQgbWF4TGVuZ3RoID0gMjUwO1xyXG4gICAgXHJcbiAgICBsZXQgdGV4dCA9IGVsLmlubmVySFRNTDtcclxuICAgIFxyXG4gICAgIGlmICh0ZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICBsZXQgc3RyID0gZWwuaW5uZXJIVE1MLnNsaWNlKDAsbWF4TGVuZ3RoKTtcclxuICAgICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygkKGVsKSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAgJChlbCkuaHRtbChzdHIpO1xyXG4gICAgIH1cclxuICAgfSlcclxuIH0pXHJcblxyXG5cclxuXHJcbiAvL9GB0LrRgNGL0YLRjCDQv9C+0LrQsNC30LDRgtGMINC+0L/QuNGB0LDQvdC40LVcclxuICQoZnVuY3Rpb24oKXtcclxuICAgJCgnLmJsb2NrNV9fYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICBpZiAoJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcpID09ICcxNDBweCcpIHtcclxuICAgICAgICQoJy5ibG9jazVfX2J0bi10ZXh0JykuaHRtbCgn0KHQutGA0YvRgtGMJyk7XHJcbiAgICAgICAkKCcuYmxvY2s1X19idG4tYXJyJykuY3NzKCd0cmFuc2Zvcm0nLCdyb3RhdGUoMTgwZGVnKScpO1xyXG4gICAgICAgJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcsJzUwMDBweCcpO1xyXG4gICAgXHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcsJzE0MHB4Jyk7XHJcbiAgICAgICQoJy5ibG9jazVfX2J0bi1hcnInKS5jc3MoJ3RyYW5zZm9ybScsJ3JvdGF0ZSgwZGVnKScpO1xyXG4gICAgICAkKCcuYmxvY2s1X19idG4tdGV4dCcpLmh0bWwoJ9Cf0L7QtNGA0L7QsdC90LXQtScpO1xyXG5cclxuICAgICAgbGV0ICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrNScpO1xyXG4gICAgICAkcGFnZS5hbmltYXRlKHtzY3JvbGxUb3A6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICAgICBcclxuICAgICB9XHJcbiAgIH0pXHJcbiB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAvL9C/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQuiDRgtC10LPRg1xyXG4vLyAkKGZ1bmN0aW9uKCl7XHJcbi8vICAgdmFyICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4vLyAgICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4vLyAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuLy8gICAgICAgfSwgNDAwKTtcclxuLy8gICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgIH0pO1xyXG4vLyB9KVxyXG5cclxuLy9jYXJ1c2VsIGZyaWVuZFxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgb3dsID0gJChcIi5vd2wtY2Fyb3VzZWwtZnJpZW5kXCIpO1xyXG4gIG93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogNCxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6dHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAwOntcclxuICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgNzY4OntcclxuICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgMTAyNDp7XHJcbiAgICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgbG9vcDogZmFsc2VcclxuICAgICAgfVxyXG4gIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vL2FyciBpbiBmcmllbmQgYmxvY2sgc2VjdGlvblxyXG4kKCcuc2xpY2stcHJldicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZyaWVuZF9faXRlbXMnKS5zbGljaygnc2xpY2tQcmV2Jyk7XHJcbn0pXHJcblxyXG4kKCcuc2xpY2stbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZyaWVuZF9faXRlbXMnKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbn0pXHJcblxyXG5cclxuLy9jYXJ1c2VsIGJsb2dcclxuJChmdW5jdGlvbigpIHtcclxuICAvLyBPd2wgQ2Fyb3VzZWxcclxuICB2YXIgb3dsID0gJChcIi5vd2wtY2Fyb3VzZWwtYmxvZ1wiKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOnRydWUsXHJcbiAgICByZXNwb25zaXZlOntcclxuICAgICAgMDp7XHJcbiAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDY5MDp7XHJcbiAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDE6e1xyXG4gICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgIH1cclxuICB9XHJcbiAgICBcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8vYnRuIGJ1cmdlclxyXG4kKGZ1bmN0aW9uKCl7XHJcbiBcclxuXHJcbiAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5jbGljayhNb2RhbClcclxuXHJcbiAgLy8gJCgnLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIC8vICAgaWYgKCAkKCcubW9kYWwtZm9ybS1hY3RpdmUnKS5sZW5ndGggPiAwICkge1xyXG4gIC8vICAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gIC8vICAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJ2aXNpYmxlXCJ9KTtcclxuICAvLyAgICAgJCgnLm92ZXJsYXknKS5oaWRlKCk7XHJcbiAgICAgIFxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgTW9kYWwoKTtcclxuICAvLyAgIH1cclxuICAvLyB9KTsgXHJcbiAgJCgnLm92ZXJsYXknKS5jbGljayhNb2RhbCk7XHJcbiAgJCgnLm1vZGFsX19jbG9zZSBzcGFuJykuY2xpY2soTW9kYWwpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gTW9kYWwoKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGlmICggJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5oYXNDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKSkge1xyXG4gICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykucmVtb3ZlQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJykgXHJcbiAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICQoJy5vdmVybGF5JykuaGlkZSgpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5hZGRDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKTtcclxuICAgICAkKCcubW9kYWwnKS5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxuICAgICAkKCcub3ZlcmxheScpLnNob3coKTtcclxuICAgIH0gXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBcclxuICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbicpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiA5LFxyXG4gICAgICAgIG1heGxlbmd0aDogMTJcclxuICAgICAgfSxcclxuICAgICAgZW1haWw6IHtcclxuICAgICAgICBlbWFpbDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQmNC80Y8nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgICBtaW5sZW5ndGg6IFwi0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDIt0YUg0YHQuNC80LLQvtC70L7QsiDQsiDQv9C+0LvQtSAn0JjQvNGPJ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9Ci0LXQu9C10YTQvtC9JyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbnVtYmVyOiBcItCd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgFwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQkiDQvdC+0LzQtdGA0LUg0LzQsNC70L4g0YbQuNGE0YBcIixcclxuICAgICAgICBtYXhsZW5ndGg6IFwi0JIg0L3QvtC80LXRgNC1INC80L3QvtCz0L4g0YbQuNGE0YBcIixcclxuICAgICAgfSxcclxuICAgICAgZW1haWw6IHtcclxuICAgICAgICBlbWFpbDogXCLQndC10L7QsdGF0L7QtNC40Lwg0YTQvtGA0LzQsNGCINCw0LTRgNC10YHQsCBlbWFpbFwiIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICBcclxuICAgICAgc2VuZEFqYXhGb3JtKGZvcm0sICdtYWlsLnBocCcpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2VuZEFqYXhGb3JtKGFqYXhfZm9ybSwgdXJsKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcbiAgICAgICAgICAgICAgdHlwZTogICAgIFwiUE9TVFwiLCAvL9C80LXRgtC+0LQg0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgICBkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGRhdGEpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LTQviDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZm9vdGVyX2J0bicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8kKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvL9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDRg9GB0L/QtdGI0L3QvlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLW5hbWUnKS5odG1sKFwi0KHQv9Cw0YHQuNCx0L4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtZGlzdGFuY2UnKS5odG1sKFwi0J3QsNC/0L7QvNC90LjRgtC1INC80LXQvdC10LTQttC10YDRgyDQv9GA0L4g0L/QvtC00LDRgNC+0LpcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5yZXZpZXdzX19mb3JtLXZhbGlkYXRpb24nKS52YWxpZGF0ZSh7XHJcbiAgICBydWxlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHRPdHppdjoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogMTUwLFxyXG5cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0JjQvNGPJyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyLdGFINGB0LjQvNCy0L7Qu9C+0LIg0LIg0L/QvtC70LUgJ9CY0LzRjydcIlxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0T3R6aXY6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBcItCc0LDQutGB0LjQvNCw0LvRjNC90L4gMTUwINGB0LjQvNCy0L7Qu9C+0LJcIixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgXHJcbiAgICAgIHNlbmRBamF4Rm9ybShmb3JtLCAncmV2aWV3cy5waHAnKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNlbmRBamF4Rm9ybShhamF4X2Zvcm0sIHVybCkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6ICAgICB1cmwsIC8vdXJsINGB0YLRgNCw0L3QuNGG0YsgKHNlbmQucGhwKVxyXG4gICAgICAgICAgICAgIHR5cGU6ICAgICBcIlBPU1RcIiwgLy/QvNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogJChhamF4X2Zvcm0pLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihkYXRhKSB7IC8vINGB0L7QsdGL0YLQuNC1INC00L4g0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAkKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mb3JtLXJldmlld3MnKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1yZXZpZXdzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtcHJpY2UnKS5odG1sKFwi0JLQsNGIINC+0YLQt9GL0LIg0L7Rh9C10L3RjCDQstCw0LbQtdC9INC00LvRjyDQvdCw0YFcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgaW5wSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbiAudGVsdmFsJyk7XHJcbiAgICBsZXQgaW5wTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbiAudGVsdmFsJyk7XHJcbiAgICBsZXQgaW5wWmF5YXZrYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56YXlhdmthLXNlY3Rpb25fX2Zvcm0tdmFsaWRhdGlvbiAudGVsdmFsJyk7XHJcblxyXG4gICAgaWYgKGlucEhlYWQgIT0gbnVsbCkge1xyXG4gICAgICBpbnBIZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICAgICAgLy8g0J7RgtC80LXQvdGP0LXQvCDQstCy0L7QtCDQvdC1INGG0LjRhNGAXHJcbiAgICAgICAgaWYoIS9cXGQvLnRlc3QoZS5rZXkpKVxyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wTW9kYWwgIT0gbnVsbCkge1xyXG4gICAgICBpbnBNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xyXG4gICAgICAgIC8vINCe0YLQvNC10L3Rj9C10Lwg0LLQstC+0LQg0L3QtSDRhtC40YTRgFxyXG4gICAgICAgIGlmKCEvXFxkLy50ZXN0KGUua2V5KSlcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucFpheWF2a2EgIT0gbnVsbCkge1xyXG4gICAgICBpbnBaYXlhdmthLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICAgICAgLy8g0J7RgtC80LXQvdGP0LXQvCDQstCy0L7QtCDQvdC1INGG0LjRhNGAXHJcbiAgICAgICAgaWYoIS9cXGQvLnRlc3QoZS5rZXkpKVxyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgICB9XHJcbiAgfSlcclxuXHJcbiAgJCgnLmhlYWRlcl9fZm9ybS12YWxpZGF0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDksXHJcbiAgICAgICAgbWF4bGVuZ3RoOiAxMlxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9CY0LzRjycg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQktCy0LXQtNC40YLQtSDQvdC1INC80LXQvdC10LUgMi3RhSDRgdC40LzQstC+0LvQvtCyINCyINC/0L7Qu9C1ICfQmNC80Y8nXCJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0KLQtdC70LXRhNC+0L0nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgICBudW1iZXI6IFwi0J3QtdCy0LXRgNC90YvQuSDQvdC+0LzQtdGAXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCSINC90L7QvNC10YDQtSDQvNCw0LvQviDRhtC40YTRgFwiLFxyXG4gICAgICAgIG1heGxlbmd0aDogXCLQkiDQvdC+0LzQtdGA0LUg0LzQvdC+0LPQviDRhtC40YTRgFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiBcItCd0LXQvtCx0YXQvtC00LjQvCDRhNC+0YDQvNCw0YIg0LDQtNGA0LXRgdCwIGVtYWlsXCIgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDozMDAwL1xyXG4gICAgICBzZW5kQWpheEZvcm0oZm9ybSwgJ21haWwucGhwJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAgICAgdXJsLCAvL3VybCDRgdGC0YDQsNC90LjRhtGLIChzZW5kLnBocClcclxuICAgICAgICAgICAgICB0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICQoYWpheF9mb3JtKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICAgIC8vICQoJy5mb290ZXJfYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1x0XHRcdFx0XHRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtbmFtZScpLmh0bWwoXCLQodC/0LDRgdC40LHQviFcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLXByaWNlJykuaHRtbChcItCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1kaXN0YW5jZScpLmh0bWwoXCLQndCw0L/QvtC80L3QuNGC0LUg0LzQtdC90LXQtNC20LXRgNGDINC/0YDQviDQv9C+0LTQsNGA0L7QulwiKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbC1vdmVybGF5MVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbDFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwJSlcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICQoJy53b3JraW1fX2J0bicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy56YXlhdmthLXNlY3Rpb25fX2Zvcm0tdmFsaWRhdGlvbicpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiA5LFxyXG4gICAgICAgIG1heGxlbmd0aDogMTJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vbWVzc2FnZXM6IHtcclxuICAgICAgLy8gbmFtZToge1xyXG4gICAgICAvLyAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQmNC80Y8nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgLy8gICBtaW5sZW5ndGg6IFwi0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDIt0YUg0YHQuNC80LLQvtC70L7QsiDQsiDQv9C+0LvQtSAn0JjQvNGPJ1wiXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIHBob25lOiB7XHJcbiAgICAgIC8vICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9Ci0LXQu9C10YTQvtC9JyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgIC8vICAgbnVtYmVyOiBcItCd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgFwiLFxyXG4gICAgICAvLyAgIG1pbmxlbmd0aDogXCLQndC+0LzQtdGAINGB0L7RgdGC0L7QuNGCINC40LcgOSDRh9C40YHQtdC7XCIsXHJcbiAgICAgIC8vICAgbWF4bGVuZ3RoOiBcItCd0L7QvNC10YAg0YHQvtGB0YLQvtC40YIg0LjQtyA5INGH0LjRgdC10LtcIixcclxuICAgICAgLy8gfVxyXG4gICAgLy99LFxyXG4gICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cclxuICAgICAgc2VuZEFqYXhGb3JtKGZvcm0sICdtYWlsLnBocCcpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2VuZEFqYXhGb3JtKGFqYXhfZm9ybSwgdXJsKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcbiAgICAgICAgICAgICAgdHlwZTogICAgIFwiUE9TVFwiLCAvL9C80LXRgtC+0LQg0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgICBkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGRhdGEpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LTQviDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZm9vdGVyX2J0bicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8kKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvL9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDRg9GB0L/QtdGI0L3QvlxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLW5hbWUnKS5odG1sKFwi0KHQv9Cw0YHQuNCx0L4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtZGlzdGFuY2UnKS5odG1sKFwi0J3QsNC/0L7QvNC90LjRgtC1INC80LXQvdC10LTQttC10YDRgyDQv9GA0L4g0L/QvtC00LDRgNC+0LpcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKCcud29ya2ltX19idG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyAkKCcuaGVhZGVyX19mb3JtJykuc3VibWl0KGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgYWxlcnQoXCJPa1wiKVxyXG4gIC8vIH0pXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJChcIi5tb2RhbC1vdmVybGF5MSwgLmNsb3NlLW1vZGFsMVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZU91dCgpO1xyXG4gICAgJChcIi5tb2RhbDFcIikuZmFkZU91dCgpO1xyXG4gICAgJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDMwMCUpXCJ9KTtcclxuICAgICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwidmlzaWJsZVwifSk7XHJcbn0pXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmFrY2lqYV9fbGluay1ncmVlbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLmFkZENsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgIC8vJCgnLm1vZGFsLWZvcm0tb3ZlcmxheScpLnNob3coKTtcclxuICB9KVxyXG4gICQoJy5tb2RhbC1mb3JtLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwidmlzaWJsZVwifSk7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG4vL9C+0YLQutGA0YvRgtC40LUv0LrQsNGA0YLRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCDQvtGC0LfRi9Cy0YtcclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5vdHppdl9fYmxvY2tfX2xpbmsnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIFxyXG4gICAgICQoJy5tb2RhbC1mb3JtLXJldmlld3MnKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1yZXZpZXdzLWFjdGl2ZScpO1xyXG4gICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgIFxyXG4gIH0pXHJcbiAgJCgnLm1vZGFsLWZvcm0tb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJ2aXNpYmxlXCJ9KTtcclxuICAgICQoJy5tb2RhbC1mb3JtLXJldmlld3MnKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1yZXZpZXdzLWFjdGl2ZScpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5ibG9jazMtYnRuX19idG4tYmx1ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLmFkZENsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICB9KVxyXG5cclxuICAkKCcuYmxvY2szLWJ0bl9fYnRuLWdyZWVuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgbGV0IGF0dHIgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgIGlmIChhdHRyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAkKCcubW9kYWwtZm9ybScpLmFkZENsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgfSlcclxufSlcclxuXHJcbi8vYnRuX191cCBhcnJvd1xyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDUwMCkge1xyXG4gICAgJChcIi5hcnJvd3VwXCIpLmZhZGVJbigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKFwiLmFycm93dXBcIikuZmFkZU91dCgpO1xyXG4gIH1cclxufSk7XHJcbiQoZnVuY3Rpb24gKCQpIHtcclxuICAkKFwiLmFycm93dXBcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcImJvZHksaHRtbFwiKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICB9LCA0MDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiJdfQ==
