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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vLyB2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vLyB2YXIgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHJlcXVpcmUoJy4vanF1ZXJ5LnZhbGlkYXRlLmpzJyk7XHJcblxyXG5cclxuXHJcbihmdW5jdGlvbigkKSB7IFxyXG4gICQuZm4uYW5pbWF0ZWQgPSBmdW5jdGlvbihpbkVmZmVjdCwgb3V0RWZmZWN0KSB7IFxyXG4gICB2YXIgalF1ZXJ5T2JqZWN0ID0gJCh0aGlzKTsgXHJcbiBcclxuICAgalF1ZXJ5T2JqZWN0LmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpLmFkZENsYXNzKFwiYW5pbWF0ZWRcIik7IFxyXG4gXHJcbiBcclxuICAgalF1ZXJ5T2JqZWN0LndheXBvaW50KGZ1bmN0aW9uKGRpcikgeyBcclxuICAgIGlmIChkaXIgPT09IFwiZG93blwiKSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICBqUXVlcnlPYmplY3QucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7IFxyXG4gICAgfTsgXHJcbiAgIH0sIHsgXHJcbiAgICBvZmZzZXQ6IFwiOTAlXCIgXHJcbiAgIH0pOyBcclxuIFxyXG4gICBqUXVlcnlPYmplY3Qud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7IFxyXG4gICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKGluRWZmZWN0KS5hZGRDbGFzcyhvdXRFZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhvdXRFZmZlY3QpLmFkZENsYXNzKGluRWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9OyBcclxuICAgfSwgeyBcclxuICAgIG9mZnNldDogLSQod2luZG93KS5oZWlnaHQoKSBcclxuICAgfSk7IFxyXG4gIH07IFxyXG4gfSkoalF1ZXJ5KTtcclxuXHJcbiAvL2FuaW1hdGVcclxuJChmdW5jdGlvbigpe1xyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0b3BsaW5lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi50b3BsaW5lX19yb3ctYW5pbWF0ZVwiKS5hbmltYXRlZChcImZhZGVJbkRvd25cIiwgXCJmYWRlT3V0VXBcIik7XHJcbiAgJChcIi50b3BsaW5lX19yb3ctMlwiKS5hbmltYXRlZChcImZhZGVJbkRvd25cIiwgXCJmYWRlT3V0VXBcIik7XHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC90b3BsaW5lIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLmhlYWRlcl9fd3JhcHBlclwiKS5hbmltYXRlZChcImZhZGVJbkxlZnRcIiwgXCJmYWRlT3V0TGVmdFwiKTtcclxuICAkKFwiLmhlYWRlcl9fcmlnaHRcIikuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2hlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2hhdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIud2hhdF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAkKFwiLndoYXRfX3dyYXBwZXItaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gIH0pXHJcblxyXG4gLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC93aGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBvZmZlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIub2ZmZXJfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgJChcIi5vZmZlcnNcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJbllcIiwgXCJmbGlwT3V0WVwiKTtcclxuICB9KVxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL29mZmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFrY2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuYWtjaWphX19yb3dcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gICQoXCIuYWtjaWphX19pY29uXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5ZXCIsIFwiZmxpcE91dFlcIik7XHJcbiAgfSlcclxuXHJcblxyXG4gLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9ha2NpamEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICQoXCIuZG9ob2RfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcblxyXG5cclxuICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHdvcmsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgJChcIi53b3JrX19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICAgJChcIi53b3JrX19jYXJkXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgICB9KVxyXG5cclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3dvcmsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb3R6aXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgJChcIi5vdHppdl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcbiAgLy8gICQoXCIuY2FyZFwiKS5hbmltYXRlZChcImZhZGVJbkxlZnRcIiwgXCJmYWRlT3V0TGVmdFwiKTtcclxuICAvLyAgJChcIi5vdHppdl9fYmxvY2stY2FwdGlvblwiKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG5cclxuICAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb3R6aXYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmFrYW5zaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgICAkKFwiLnZha2Fuc2lqYV9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICBcclxuICAgICQoXCIudmFrYW5zaWphX19ibG9jayAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICAgIH0pXHJcbiAgICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3Zha2Fuc2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAgXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGVjcHYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLnNlY3Rpb24tZWNwdl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICBcclxuICAkKFwiLnNlY3Rpb24tZWNwdi1iZ19fcXVlc3RcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgfSlcclxuICAkKFwiLnNlY3Rpb24tZWNwdiAuY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvZWNwdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmxvZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuYmxvZy1iZ19fY2FwdGlvblwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgLy8gJChcIi5ibG9nc19faXRlbXNcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gIC8vICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIC8vIH0pXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9ibG9nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhYm91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuYWJvdXRfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcblxyXG4gICQoXCIuYWJvdXQgbWFpbiBwXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG5cclxuICAkKFwiLnJlZ2lzdHJhdGlvbl9fYmxvY2sgLml0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJblhcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuICBcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2Fib3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgXHJcbiAgXHJcbi8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZWN0aW9uLTEzNV9fY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiQoXCIuc2VjdGlvbi0xMzVfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiQoXCIuYmxvY2szIGJsb2NrMy1yZXF1aWVkLXRyZWJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4kKFwiLmJsb2NrMyBibG9jazMtcmVxdWllZC1wcmVkXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcbiQoXCIuYmxvY2tJdGVtcyAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbn0pXHJcblxyXG4kKFwiLmJsb2NrMl9faXRlbSBcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG59KVxyXG5cclxuJChcIi5ibG9jazMtcmVxdWllZC1saXN0X19pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxufSlcclxuLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9zZWN0aW9uLTEzNV9fY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGxldCAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICBsZXQgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblxyXG4gICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoICRtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpKSB7XHJcbiAgICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykucmVtb3ZlQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJylcclxuICAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAkKCcub3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICB9XHJcbiAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4vL2J1cmdlciBtb2JpbGVcclxuJChmdW5jdGlvbigpe1xyXG5cdCQoJy5oZWFkZXItYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXItbWVudScpLnRvZ2dsZUNsYXNzKCdoZWFkZXItbWVudS1hY3RpdmUnKTtcclxuXHJcblx0XHQkKCcuaGVhZGVyLW1lbnUtYWN0aXZlIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcuaGVhZGVyLW1lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyLW1lbnUtYWN0aXZlJyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcbn0pXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIikgIT0gbnVsbCkge1xyXG4gICAgLy9wYXJhbGF4XHJcbiAgZnVuY3Rpb24gcGFyYWxheChlKSB7XHJcblx0XHRsZXQgeCA9IGUuY2xpZW50WC81MDtcclxuXHRcdGxldCB5ID0gZS5jbGllbnRZLzUwO1xyXG5cdFxyXG5cdFx0IHZhciBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jazQtd3JhcHBlcl9faXRlbS1pbWcgaW1nXCIpICE9IG51bGwpIHtcclxuICAgIC8vcGFyYWxheFxyXG4gIGZ1bmN0aW9uIHBhcmFsYXgoZSkge1xyXG5cdFx0bGV0IHggPSBlLmNsaWVudFgvNTA7XHJcblx0XHRsZXQgeSA9IGUuY2xpZW50WS81MDtcclxuXHRcclxuXHRcdCB2YXIgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrNC13cmFwcGVyX19pdGVtLWltZyBpbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcbiAgXHJcblx0XHJcblx0Ly9zZW5kIG1haWxcclxuXHQvLyAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdC8vIFx0JChcIi5mb290ZXItZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSl7XHJcblx0Ly8gXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdC8vIFx0XHRcdHNlbmRBamF4Rm9ybSgnLmZvb3Rlci1mb3JtJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYWlsLnBocCcpO1xyXG5cclxuXHQvLyBcdFx0XHRmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuXHQvLyBcdFx0XHRcdFx0JC5hamF4KHtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHR0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0JCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1x0XHRcdFx0XHRcdFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIuZm9vdGVyLWZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwJSlcIn0pO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcud29ya2ltX19idG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cdC8vIFx0XHRcdFx0XHR9KTtcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9KTtcclxuXHJcbi8vZ3JhZGllbnQgYnV0dG9uIGhvdmVyXHJcbiQoZnVuY3Rpb24oKXtcclxuICBsZXQgcmVzaXplUmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHcgPSBjYW52YXNCb2R5LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBoID0gY2FudmFzQm9keS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IG9wdHMgPSB7IFxyXG4gICAgcGFydGljbGVDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICBsaW5lQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG4gICAgcGFydGljbGVBbW91bnQ6IDMwLFxyXG4gICAgZGVmYXVsdFNwZWVkOiAyLFxyXG4gICAgdmFyaWFudFNwZWVkOiAxLFxyXG4gICAgZGVmYXVsdFJhZGl1czogMixcclxuICAgIHZhcmlhbnRSYWRpdXM6IDIsXHJcbiAgICBsaW5rUmFkaXVzOiA0MDAsXHJcbiAgfTtcclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgZGVCb3VuY2VyKCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbGV0IGRlQm91bmNlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGlkKTtcclxuICAgICAgdGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJlc2l6ZVJlc2V0KCk7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBjaGVja0Rpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpeyBcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKSk7XHJcbiAgfTtcclxuICBcclxuICBsZXQgbGlua1BvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSwgaHVicyl7IFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IGNoZWNrRGlzdGFuY2UocG9pbnQxLngsIHBvaW50MS55LCBodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMSAtIGRpc3RhbmNlIC8gb3B0cy5saW5rUmFkaXVzO1xyXG4gICAgICBpZiAob3BhY2l0eSA+IDApIHsgXHJcbiAgICAgICAgZHJhd0FyZWEubGluZVdpZHRoID0gMC41O1xyXG4gICAgICAgIGRyYXdBcmVhLnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2JbMF19LCAke3JnYlsxXX0sICR7cmdiWzJdfSwgJHtvcGFjaXR5fSlgO1xyXG4gICAgICAgIGRyYXdBcmVhLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGRyYXdBcmVhLm1vdmVUbyhwb2ludDEueCwgcG9pbnQxLnkpO1xyXG4gICAgICAgIGRyYXdBcmVhLmxpbmVUbyhodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgZHJhd0FyZWEuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgUGFydGljbGUgPSBmdW5jdGlvbih4UG9zLCB5UG9zKXsgXHJcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdzsgXHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogaDtcclxuICAgIHRoaXMuc3BlZWQgPSBvcHRzLmRlZmF1bHRTcGVlZCArIE1hdGgucmFuZG9tKCkgKiBvcHRzLnZhcmlhbnRTcGVlZDsgXHJcbiAgICB0aGlzLmRpcmVjdGlvbkFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTsgXHJcbiAgICB0aGlzLmNvbG9yID0gb3B0cy5wYXJ0aWNsZUNvbG9yO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRzLmRlZmF1bHRSYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogb3B0cy4gdmFyaWFudFJhZGl1czsgXHJcbiAgICB0aGlzLnZlY3RvciA9IHtcclxuICAgICAgeDogTWF0aC5jb3ModGhpcy5kaXJlY3Rpb25BbmdsZSkgKiB0aGlzLnNwZWVkLFxyXG4gICAgICB5OiBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbkFuZ2xlKSAqIHRoaXMuc3BlZWRcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICB0aGlzLmJvcmRlcigpOyBcclxuICAgICAgdGhpcy54ICs9IHRoaXMudmVjdG9yLng7IFxyXG4gICAgICB0aGlzLnkgKz0gdGhpcy52ZWN0b3IueTsgXHJcbiAgICB9O1xyXG4gICAgdGhpcy5ib3JkZXIgPSBmdW5jdGlvbigpeyBcclxuICAgICAgaWYgKHRoaXMueCA+PSB3IHx8IHRoaXMueCA8PSAwKSB7IFxyXG4gICAgICAgIHRoaXMudmVjdG9yLnggKj0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMueSA+PSBoIHx8IHRoaXMueSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy52ZWN0b3IueSAqPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy54ID4gdykgdGhpcy54ID0gdztcclxuICAgICAgaWYgKHRoaXMueSA+IGgpIHRoaXMueSA9IGg7XHJcbiAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSAwO1xyXG4gICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gMDtcdFxyXG4gICAgfTtcclxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICBkcmF3QXJlYS5iZWdpblBhdGgoKTtcclxuICAgICAgZHJhd0FyZWEuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSoyKTtcclxuICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGwoKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBzZXR1cCgpeyBcclxuICAgIHBhcnRpY2xlcyA9IFtdO1xyXG4gICAgcmVzaXplUmVzZXQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5wYXJ0aWNsZUFtb3VudDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSgpICk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBsb29wKCl7IFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIGRyYXdBcmVhLmNsZWFyUmVjdCgwLDAsdyxoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgICBwYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsaW5rUG9pbnRzKHBhcnRpY2xlc1tpXSwgcGFydGljbGVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2FudmFzQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLFxyXG4gIGRyYXdBcmVhID0gY2FudmFzQm9keS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgbGV0IGRlbGF5ID0gMjAwLCB0aWQsXHJcbiAgcmdiID0gb3B0cy5saW5lQ29sb3IubWF0Y2goL1xcZCsvZyk7XHJcbiAgcmVzaXplUmVzZXQoKTtcclxuICBzZXR1cCgpO1xyXG59KVxyXG5cclxuLy8gYnRuIGNsaWNrIGluIGZvcm1cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbiAuaGVhZGVyX19mb3JtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuaGVhZGVyX19mb3JtLXZhbGlkYXRpb24gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsaWNrKCk7XHJcbiAgfSkgXHJcbn0pXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbiAuaGVhZGVyX19mb3JtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuY2xpY2soKTtcclxuICB9KSBcclxufSlcclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5yZXZpZXdzX19mb3JtLXZhbGlkYXRpb24gLmhlYWRlcl9fZm9ybWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnJldmlld3NfX2Zvcm0tdmFsaWRhdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuY2xpY2soKTtcclxuICB9KSBcclxufSlcclxuXHJcbi8vaW1hZ2UgcGhvdG8gc2hvd1xyXG4kKGZ1bmN0aW9uKCl7XHJcblx0JCgnLmNhcmRfX2JvcmRlciBpbWcnKS5lYWNoKChpbmRleCxlbCkgPT4ge1xyXG5cdFx0ICAkKGVsKS5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgLy9lLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcGhvdG8nKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcGhvdG8nKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdubycpO1xyXG4gICAgICAgICAkKCcuY2FyZF9fYm9yZGVyIGltZycpLmVhY2goZnVuY3Rpb24oaW5kLGVsKXtcclxuICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcGhvdG8nKTtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsKVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcGhvdG8nKTtcclxuXHJcbiAgICAgICAgICQoJy5vdHppdl9fYmxvY2stcGhvdG8gaW1nJykuYXR0cignc3JjJyxlLnRhcmdldC5zcmMpO1xyXG4gICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgIGxldCBkaXNjID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzFdLmlubmVySFRNTDtcclxuICBcclxuICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgZnVuY3Rpb24gZG9Ib21ld29yayhjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5oaWRlKDMwMCk7XHJcbiAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5oaWRlKDMwMCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBkb0hvbWV3b3JrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IG1heExlbmd0aCA9IDE1MDtcclxuICAgICAgICAgICAgaWYgKGRpc2MubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHN0ciA9IGRpc2Muc2xpY2UoMCxtYXhMZW5ndGgpO1xyXG4gICAgICAgICAgICAgIHN0cis9XCIuLi5cIjtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaHRtbChzdHIpO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKGRpc2MpO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblx0XHQgfSlcclxuICB9KVxyXG4gfSk7XHJcblxyXG4gJChmdW5jdGlvbigpe1xyXG4gIGxldCBtYXhMZW5ndGggPSAxNTA7XHJcbiAgbGV0IHRleHQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90eml2X19ibG9jay1kaXNjJykuaW5uZXJIVE1MO1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgbGV0IHN0ciA9IHRleHQuc2xpY2UoMCxtYXhMZW5ndGgpO1xyXG4gICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaHRtbChzdHIpO1xyXG4gIH1cclxuIH0pXHJcblxyXG4gLy/RgdC60YDRi9GC0Ywg0YfQsNGB0YLRjCDQvdC+0LLQvtGB0YLQuCDQsdC70L7Qs9CwXHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgIGxldCB0ZXh0QmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nc19faXRlbXMgLmRpc2MtaGlkZScpO1xyXG4gICAvL2NvbnNvbGUubG9nKHRleHRCbG9nKVxyXG4gICB0ZXh0QmxvZy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgbGV0IG1heExlbmd0aCA9IDI1MDtcclxuICAgIFxyXG4gICAgbGV0IHRleHQgPSBlbC5pbm5lckhUTUw7XHJcbiAgICBcclxuICAgICBpZiAodGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgICAgbGV0IHN0ciA9IGVsLmlubmVySFRNTC5zbGljZSgwLG1heExlbmd0aCk7XHJcbiAgICAgIHN0cis9XCIuLi5cIjtcclxuICAgICAgLy8gY29uc29sZS5sb2coJChlbCkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICQoZWwpLmh0bWwoc3RyKTtcclxuICAgICB9XHJcbiAgIH0pXHJcbiB9KVxyXG5cclxuXHJcblxyXG4gLy/RgdC60YDRi9GC0Ywg0L/QvtC60LDQt9Cw0YLRjCDQvtC/0LjRgdCw0L3QuNC1XHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgICQoJy5ibG9jazVfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgaWYgKCQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnKSA9PSAnMTQwcHgnKSB7XHJcbiAgICAgICAkKCcuYmxvY2s1X19idG4tdGV4dCcpLmh0bWwoJ9Ch0LrRgNGL0YLRjCcpO1xyXG4gICAgICAgJCgnLmJsb2NrNV9fYnRuLWFycicpLmNzcygndHJhbnNmb3JtJywncm90YXRlKDE4MGRlZyknKTtcclxuICAgICAgICQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnLCc1MDAwcHgnKTtcclxuICAgIFxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5ibG9jazVfX3dyYXAnKS5jc3MoJ21heC1oZWlnaHQnLCcxNDBweCcpO1xyXG4gICAgICAkKCcuYmxvY2s1X19idG4tYXJyJykuY3NzKCd0cmFuc2Zvcm0nLCdyb3RhdGUoMGRlZyknKTtcclxuICAgICAgJCgnLmJsb2NrNV9fYnRuLXRleHQnKS5odG1sKCfQn9C+0LTRgNC+0LHQvdC10LUnKTtcclxuXHJcbiAgICAgIGxldCAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jazUnKTtcclxuICAgICAgJHBhZ2UuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgfVxyXG4gICB9KVxyXG4gfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gLy/Qv9C70LDQstC90YvQuSDRgdC60YDQvtC70Lsg0Log0YLQtdCz0YNcclxuLy8gJChmdW5jdGlvbigpe1xyXG4vLyAgIHZhciAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuLy8gICAkKCdhW2hyZWYqPVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAkcGFnZS5hbmltYXRlKHtcclxuLy8gICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbi8vICAgICAgIH0sIDQwMCk7XHJcbi8vICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICB9KTtcclxuLy8gfSlcclxuXHJcbi8vY2FydXNlbCBmcmllbmRcclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIG93bCA9ICQoXCIub3dsLWNhcm91c2VsLWZyaWVuZFwiKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOnRydWUsXHJcbiAgICByZXNwb25zaXZlOntcclxuICAgICAgMDp7XHJcbiAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODp7XHJcbiAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMjQ6e1xyXG4gICAgICAgICAgaXRlbXM6NCxcclxuICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgIH1cclxuICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9hcnIgaW4gZnJpZW5kIGJsb2NrIHNlY3Rpb25cclxuJCgnLnNsaWNrLXByZXYnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICQoJy5mcmllbmRfX2l0ZW1zJykuc2xpY2soJ3NsaWNrUHJldicpO1xyXG59KVxyXG5cclxuJCgnLnNsaWNrLW5leHQnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICQoJy5mcmllbmRfX2l0ZW1zJykuc2xpY2soJ3NsaWNrTmV4dCcpO1xyXG59KVxyXG5cclxuXHJcbi8vY2FydXNlbCBibG9nXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgLy8gT3dsIENhcm91c2VsXHJcbiAgdmFyIG93bCA9ICQoXCIub3dsLWNhcm91c2VsLWJsb2dcIik7XHJcbiAgb3dsLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgIDA6e1xyXG4gICAgICAgICAgaXRlbXM6MSxcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICA2OTA6e1xyXG4gICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICAxMjAxOntcclxuICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vL2J0biBidXJnZXJcclxuJChmdW5jdGlvbigpe1xyXG4gXHJcblxyXG4gICQoJy50b3BsaW5lX19idXJnZXItaW1nJykuY2xpY2soTW9kYWwpXHJcblxyXG4gIC8vICQoJy5vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAvLyAgIGlmICggJCgnLm1vZGFsLWZvcm0tYWN0aXZlJykubGVuZ3RoID4gMCApIHtcclxuICAvLyAgICAgJCgnLm1vZGFsLWZvcm0nKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAvLyAgICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwidmlzaWJsZVwifSk7XHJcbiAgLy8gICAgICQoJy5vdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICBcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIE1vZGFsKCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7IFxyXG4gICQoJy5vdmVybGF5JykuY2xpY2soTW9kYWwpO1xyXG4gICQoJy5tb2RhbF9fY2xvc2Ugc3BhbicpLmNsaWNrKE1vZGFsKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIE1vZGFsKCkge1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgICBpZiAoICQoJy50b3BsaW5lX19idXJnZXItaW1nJykuaGFzQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJykpIHtcclxuICAgICAkKCcudG9wbGluZV9fYnVyZ2VyLWltZycpLnJlbW92ZUNsYXNzKCd0b3BsaW5lX19idXJnZXItaW1nLWFjdGl2ZScpIFxyXG4gICAgICQoJy5tb2RhbCcpLnJlbW92ZUNsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsJ3Zpc2libGUnKTtcclxuICAgICAkKCcub3ZlcmxheScpLmhpZGUoKTtcclxuICAgIH0gIGVsc2Uge1xyXG4gICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykuYWRkQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJyk7XHJcbiAgICAgJCgnLm1vZGFsJykuYWRkQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XHJcbiAgICAgJCgnLm92ZXJsYXknKS5zaG93KCk7XHJcbiAgICB9IFxyXG4gIH1cclxufSlcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgXHJcbiAgJCgnLm1vZGFsX19mb3JtLXZhbGlkYXRpb24nKS52YWxpZGF0ZSh7XHJcbiAgICBydWxlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbnVtYmVyOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogOSxcclxuICAgICAgICBtYXhsZW5ndGg6IDEyXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0JjQvNGPJyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyLdGFINGB0LjQvNCy0L7Qu9C+0LIg0LIg0L/QvtC70LUgJ9CY0LzRjydcIlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQotC10LvQtdGE0L7QvScg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG51bWJlcjogXCLQndC10LLQtdGA0L3Ri9C5INC90L7QvNC10YBcIixcclxuICAgICAgICBtaW5sZW5ndGg6IFwi0JIg0L3QvtC80LXRgNC1INC80LDQu9C+INGG0LjRhNGAXCIsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBcItCSINC90L7QvNC10YDQtSDQvNC90L7Qs9C+INGG0LjRhNGAXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IFwi0J3QtdC+0LHRhdC+0LTQuNC8INGE0L7RgNC80LDRgiDQsNC00YDQtdGB0LAgZW1haWxcIiBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgXHJcbiAgICAgIHNlbmRBamF4Rm9ybShmb3JtLCAnbWFpbC5waHAnKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNlbmRBamF4Rm9ybShhamF4X2Zvcm0sIHVybCkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6ICAgICB1cmwsIC8vdXJsINGB0YLRgNCw0L3QuNGG0YsgKHNlbmQucGhwKVxyXG4gICAgICAgICAgICAgIHR5cGU6ICAgICBcIlBPU1RcIiwgLy/QvNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogJChhamF4X2Zvcm0pLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihkYXRhKSB7IC8vINGB0L7QsdGL0YLQuNC1INC00L4g0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAkKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtcHJpY2UnKS5odG1sKFwi0J3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLWRpc3RhbmNlJykuaHRtbChcItCd0LDQv9C+0LzQvdC40YLQtSDQvNC10L3QtdC00LbQtdGA0YMg0L/RgNC+INC/0L7QtNCw0YDQvtC6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZvcm0nKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcucmV2aWV3c19fZm9ybS12YWxpZGF0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICB0ZXh0T3R6aXY6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IDE1MCxcclxuXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9CY0LzRjycg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQktCy0LXQtNC40YLQtSDQvdC1INC80LXQvdC10LUgMi3RhSDRgdC40LzQstC+0LvQvtCyINCyINC/0L7Qu9C1ICfQmNC80Y8nXCJcclxuICAgICAgfSxcclxuICAgICAgdGV4dE90eml2OiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG1heGxlbmd0aDogXCLQnNCw0LrRgdC40LzQsNC70YzQvdC+IDE1MCDRgdC40LzQstC+0LvQvtCyXCIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgIFxyXG4gICAgICBzZW5kQWpheEZvcm0oZm9ybSwgJ3Jldmlld3MucGhwJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAgICAgdXJsLCAvL3VybCDRgdGC0YDQsNC90LjRhtGLIChzZW5kLnBocClcclxuICAgICAgICAgICAgICB0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICQoYWpheF9mb3JtKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICAgIC8vICQoJy5mb290ZXJfYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1x0XHRcdFx0XHRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtZm9ybS1yZXZpZXdzJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWZvcm0tcmV2aWV3cy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtbmFtZScpLmh0bWwoXCLQodC/0LDRgdC40LHQviFcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLXByaWNlJykuaHRtbChcItCS0LDRiCDQvtGC0LfRi9CyINC+0YfQtdC90Ywg0LLQsNC20LXQvSDQtNC70Y8g0L3QsNGBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZvcm0nKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChmdW5jdGlvbigpe1xyXG4gICAgbGV0IGlucEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19mb3JtLXZhbGlkYXRpb24gLnRlbHZhbCcpO1xyXG4gICAgbGV0IGlucE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3JtLXZhbGlkYXRpb24gLnRlbHZhbCcpO1xyXG4gICAgbGV0IGlucFpheWF2a2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuemF5YXZrYS1zZWN0aW9uX19mb3JtLXZhbGlkYXRpb24gLnRlbHZhbCcpO1xyXG5cclxuICAgIGlmIChpbnBIZWFkICE9IG51bGwpIHtcclxuICAgICAgaW5wSGVhZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xyXG4gICAgICAgIC8vINCe0YLQvNC10L3Rj9C10Lwg0LLQstC+0LQg0L3QtSDRhtC40YTRgFxyXG4gICAgICAgIGlmKCEvXFxkLy50ZXN0KGUua2V5KSlcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlucE1vZGFsICE9IG51bGwpIHtcclxuICAgICAgaW5wTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcclxuICAgICAgICAvLyDQntGC0LzQtdC90Y/QtdC8INCy0LLQvtC0INC90LUg0YbQuNGE0YBcclxuICAgICAgICBpZighL1xcZC8udGVzdChlLmtleSkpXHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnBaYXlhdmthICE9IG51bGwpIHtcclxuICAgICAgaW5wWmF5YXZrYS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xyXG4gICAgICAgIC8vINCe0YLQvNC10L3Rj9C10Lwg0LLQstC+0LQg0L3QtSDRhtC40YTRgFxyXG4gICAgICAgIGlmKCEvXFxkLy50ZXN0KGUua2V5KSlcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbicpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiA5LFxyXG4gICAgICAgIG1heGxlbmd0aDogMTJcclxuICAgICAgfSxcclxuICAgICAgZW1haWw6IHtcclxuICAgICAgICBlbWFpbDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQmNC80Y8nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgICBtaW5sZW5ndGg6IFwi0JLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3QtdC1IDIt0YUg0YHQuNC80LLQvtC70L7QsiDQsiDQv9C+0LvQtSAn0JjQvNGPJ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9Ci0LXQu9C10YTQvtC9JyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbnVtYmVyOiBcItCd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgFwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQkiDQvdC+0LzQtdGA0LUg0LzQsNC70L4g0YbQuNGE0YBcIixcclxuICAgICAgICBtYXhsZW5ndGg6IFwi0JIg0L3QvtC80LXRgNC1INC80L3QvtCz0L4g0YbQuNGE0YBcIixcclxuICAgICAgfSxcclxuICAgICAgZW1haWw6IHtcclxuICAgICAgICBlbWFpbDogXCLQndC10L7QsdGF0L7QtNC40Lwg0YTQvtGA0LzQsNGCINCw0LTRgNC10YHQsCBlbWFpbFwiIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xyXG4gICAgICAvL2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cclxuICAgICAgc2VuZEFqYXhGb3JtKGZvcm0sICdtYWlsLnBocCcpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2VuZEFqYXhGb3JtKGFqYXhfZm9ybSwgdXJsKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcbiAgICAgICAgICAgICAgdHlwZTogICAgIFwiUE9TVFwiLCAvL9C80LXRgtC+0LQg0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgICBkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGRhdGEpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LTQviDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZm9vdGVyX2J0bicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8kKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvL9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDRg9GB0L/QtdGI0L3QvlxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLW5hbWUnKS5odG1sKFwi0KHQv9Cw0YHQuNCx0L4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtZGlzdGFuY2UnKS5odG1sKFwi0J3QsNC/0L7QvNC90LjRgtC1INC80LXQvdC10LTQttC10YDRgyDQv9GA0L4g0L/QvtC00LDRgNC+0LpcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKCcud29ya2ltX19idG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuemF5YXZrYS1zZWN0aW9uX19mb3JtLXZhbGlkYXRpb24nKS52YWxpZGF0ZSh7XHJcbiAgICBydWxlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbnVtYmVyOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogOSxcclxuICAgICAgICBtYXhsZW5ndGg6IDEyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL21lc3NhZ2VzOiB7XHJcbiAgICAgIC8vIG5hbWU6IHtcclxuICAgICAgLy8gICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0JjQvNGPJyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgIC8vICAgbWlubGVuZ3RoOiBcItCS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyLdGFINGB0LjQvNCy0L7Qu9C+0LIg0LIg0L/QvtC70LUgJ9CY0LzRjydcIlxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyBwaG9uZToge1xyXG4gICAgICAvLyAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQotC10LvQtdGE0L7QvScg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAvLyAgIG51bWJlcjogXCLQndC10LLQtdGA0L3Ri9C5INC90L7QvNC10YBcIixcclxuICAgICAgLy8gICBtaW5sZW5ndGg6IFwi0J3QvtC80LXRgCDRgdC+0YHRgtC+0LjRgiDQuNC3IDkg0YfQuNGB0LXQu1wiLFxyXG4gICAgICAvLyAgIG1heGxlbmd0aDogXCLQndC+0LzQtdGAINGB0L7RgdGC0L7QuNGCINC40LcgOSDRh9C40YHQtdC7XCIsXHJcbiAgICAgIC8vIH1cclxuICAgIC8vfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgLy9odHRwOi8vbG9jYWxob3N0OjMwMDAvXHJcbiAgICAgIHNlbmRBamF4Rm9ybShmb3JtLCAnbWFpbC5waHAnKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNlbmRBamF4Rm9ybShhamF4X2Zvcm0sIHVybCkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6ICAgICB1cmwsIC8vdXJsINGB0YLRgNCw0L3QuNGG0YsgKHNlbmQucGhwKVxyXG4gICAgICAgICAgICAgIHR5cGU6ICAgICBcIlBPU1RcIiwgLy/QvNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogJChhamF4X2Zvcm0pLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihkYXRhKSB7IC8vINGB0L7QsdGL0YLQuNC1INC00L4g0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAkKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtcHJpY2UnKS5odG1sKFwi0J3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLWRpc3RhbmNlJykuaHRtbChcItCd0LDQv9C+0LzQvdC40YLQtSDQvNC10L3QtdC00LbQtdGA0YMg0L/RgNC+INC/0L7QtNCw0YDQvtC6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgLy8gJCgnLndvcmtpbV9fYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gJCgnLmhlYWRlcl9fZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKXtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIGFsZXJ0KFwiT2tcIilcclxuICAvLyB9KVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoXCIubW9kYWwtb3ZlcmxheTEsIC5jbG9zZS1tb2RhbDFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVPdXQoKTtcclxuICAgICQoXCIubW9kYWwxXCIpLmZhZGVPdXQoKTtcclxuICAgICQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgzMDAlKVwifSk7XHJcbiAgICAkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG59KVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5ha2NpamFfX2xpbmstZ3JlZW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgICAvLyQoJy5tb2RhbC1mb3JtLW92ZXJsYXknKS5zaG93KCk7XHJcbiAgfSlcclxuICAkKCcubW9kYWwtZm9ybS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICB9KVxyXG59KVxyXG5cclxuLy/QvtGC0LrRgNGL0YLQuNC1L9C60LDRgNGC0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAg0L7RgtC30YvQstGLXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcub3R6aXZfX2Jsb2NrX19saW5rJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICBcclxuICAgICAkKCcubW9kYWwtZm9ybS1yZXZpZXdzJykuYWRkQ2xhc3MoJ21vZGFsLWZvcm0tcmV2aWV3cy1hY3RpdmUnKTtcclxuICAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICBcclxuICB9KVxyXG4gICQoJy5tb2RhbC1mb3JtLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwidmlzaWJsZVwifSk7XHJcbiAgICAkKCcubW9kYWwtZm9ybS1yZXZpZXdzJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWZvcm0tcmV2aWV3cy1hY3RpdmUnKTtcclxuICB9KVxyXG59KVxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcuYmxvY2szLWJ0bl9fYnRuLWJsdWUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgfSlcclxuXHJcbiAgJCgnLmJsb2NrMy1idG5fX2J0bi1ncmVlbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGxldCBhdHRyID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcbiAgICBpZiAoYXR0ciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgJCgnLm1vZGFsLWZvcm0nKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG59KVxyXG5cclxuIl19
