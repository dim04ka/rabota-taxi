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
    offset: "80%" 
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
  
  $(".blogs__items").each(function(){
    $(this).animated("fadeInRight", "fadeOutRight");
  })
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
$(".block3 .block3-requied").animated("fadeInUp", "fadeOutDown");

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
   let textBlog = document.querySelectorAll('.blogs__items .disc');
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
       $('.block5__wrap').css('max-height','1000px');
    
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
        maxlength: 9
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
        minlength: "Номер состоит из 9 чисел",
        maxlength: "Номер состоит из 9 чисел",
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
        maxlength: 9
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
        minlength: "Номер состоит из 9 чисел",
        maxlength: "Номер состоит из 9 чисел",
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

$(function(){
  $('.block3-btn__btn-blue').click(function(){
    $('.modal-form').addClass('modal-form-active');
    $('body').css({"overflow":"hidden"});
  })

  $('.block3-btn__btn-green').click(function(){
    $('.modal-form').addClass('modal-form-active');
    $('body').css({"overflow":"hidden"});
  })

})


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gcmVxdWlyZSgnLi9qcXVlcnkudmFsaWRhdGUuanMnKTtcclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCQpIHsgXHJcbiAgJC5mbi5hbmltYXRlZCA9IGZ1bmN0aW9uKGluRWZmZWN0LCBvdXRFZmZlY3QpIHsgXHJcbiAgIHZhciBqUXVlcnlPYmplY3QgPSAkKHRoaXMpOyBcclxuIFxyXG4gICBqUXVlcnlPYmplY3QuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKTsgXHJcbiBcclxuIFxyXG4gICBqUXVlcnlPYmplY3Qud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7IFxyXG4gICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhpbkVmZmVjdCkuYWRkQ2xhc3Mob3V0RWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9OyBcclxuICAgfSwgeyBcclxuICAgIG9mZnNldDogXCI4MCVcIiBcclxuICAgfSk7IFxyXG4gXHJcbiAgIGpRdWVyeU9iamVjdC53YXlwb2ludChmdW5jdGlvbihkaXIpIHsgXHJcbiAgICBpZiAoZGlyID09PSBcImRvd25cIikgeyBcclxuICAgICBqUXVlcnlPYmplY3QucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7IFxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH07IFxyXG4gICB9LCB7IFxyXG4gICAgb2Zmc2V0OiAtJCh3aW5kb3cpLmhlaWdodCgpIFxyXG4gICB9KTsgXHJcbiAgfTsgXHJcbiB9KShqUXVlcnkpO1xyXG5cclxuIC8vYW5pbWF0ZVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLnRvcGxpbmVfX3Jvdy1hbmltYXRlXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAkKFwiLnRvcGxpbmVfX3Jvdy0yXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3RvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuaGVhZGVyX193cmFwcGVyXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gICQoXCIuaGVhZGVyX19yaWdodFwiKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3aGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi53aGF0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gICQoXCIud2hhdF9fd3JhcHBlci1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5ZXCIsIFwiZmxpcE91dFlcIik7XHJcbiAgfSlcclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3doYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG9mZmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5vZmZlcl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAkKFwiLm9mZmVyc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gIH0pXHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb2ZmZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWtjaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ha2NpamFfX3Jvd1wiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgJChcIi5ha2NpamFfX2ljb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJbllcIiwgXCJmbGlwT3V0WVwiKTtcclxuICB9KVxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2FrY2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gJChcIi5kb2hvZF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLndvcmtfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLndvcmtfX2NhcmRcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAgIH0pXHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9vdHppdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLm90eml2X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuICAvLyAgJChcIi5jYXJkXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gIC8vICAkKFwiLm90eml2X19ibG9jay1jYXB0aW9uXCIpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcblxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9vdHppdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YWthbnNpamEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgICQoXCIudmFrYW5zaWphX19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICAgJChcIi52YWthbnNpamFfX2Jsb2NrIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gICAgfSlcclxuICAgIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvdmFrYW5zaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgICBcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZWNwdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuc2VjdGlvbi1lY3B2X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICQoXCIuc2VjdGlvbi1lY3B2LWJnX19xdWVzdFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICB9KVxyXG4gICQoXCIuc2VjdGlvbi1lY3B2IC5jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9lY3B2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBibG9nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ibG9nLWJnX19jYXB0aW9uXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICBcclxuICAkKFwiLmJsb2dzX19pdGVtc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2Jsb2cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFib3V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5hYm91dF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcbiAgJChcIi5hYm91dCBtYWluIHBcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCIucmVnaXN0cmF0aW9uX19ibG9jayAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG4gIFxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvYWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICBcclxuICBcclxuLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNlY3Rpb24tMTM1X19jb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuJChcIi5zZWN0aW9uLTEzNV9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuJChcIi5ibG9jazMgLmJsb2NrMy1yZXF1aWVkXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcbiQoXCIuYmxvY2tJdGVtcyAuaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbn0pXHJcblxyXG4kKFwiLmJsb2NrMl9faXRlbSBcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG59KVxyXG5cclxuJChcIi5ibG9jazMtcmVxdWllZC1saXN0X19pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxufSlcclxuLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9zZWN0aW9uLTEzNV9fY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGxldCAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcclxuICBsZXQgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblxyXG4gICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoICRtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpKSB7XHJcbiAgICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykucmVtb3ZlQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJylcclxuICAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAkKCcub3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkcGFnZS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICB9XHJcbiAgfSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4vL2J1cmdlciBtb2JpbGVcclxuJChmdW5jdGlvbigpe1xyXG5cdCQoJy5oZWFkZXItYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5oZWFkZXItbWVudScpLnRvZ2dsZUNsYXNzKCdoZWFkZXItbWVudS1hY3RpdmUnKTtcclxuXHJcblx0XHQkKCcuaGVhZGVyLW1lbnUtYWN0aXZlIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcuaGVhZGVyLW1lbnUnKS5yZW1vdmVDbGFzcygnaGVhZGVyLW1lbnUtYWN0aXZlJyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcbn0pXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIikgIT0gbnVsbCkge1xyXG4gICAgLy9wYXJhbGF4XHJcbiAgZnVuY3Rpb24gcGFyYWxheChlKSB7XHJcblx0XHRsZXQgeCA9IGUuY2xpZW50WC81MDtcclxuXHRcdGxldCB5ID0gZS5jbGllbnRZLzUwO1xyXG5cdFxyXG5cdFx0IHZhciBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWtjaWphX19pbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jazQtd3JhcHBlcl9faXRlbS1pbWcgaW1nXCIpICE9IG51bGwpIHtcclxuICAgIC8vcGFyYWxheFxyXG4gIGZ1bmN0aW9uIHBhcmFsYXgoZSkge1xyXG5cdFx0bGV0IHggPSBlLmNsaWVudFgvNTA7XHJcblx0XHRsZXQgeSA9IGUuY2xpZW50WS81MDtcclxuXHRcclxuXHRcdCB2YXIgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrNC13cmFwcGVyX19pdGVtLWltZyBpbWdcIik7XHJcblx0XHQgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIreCtcInB4LCBcIit5K1wicHgpXCI7XHJcbiAgfVxyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwYXJhbGF4KTtcclxuICB9XHJcbn0pXHJcbiAgXHJcblx0XHJcblx0Ly9zZW5kIG1haWxcclxuXHQvLyAkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdC8vIFx0JChcIi5mb290ZXItZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oZSl7XHJcblx0Ly8gXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdC8vIFx0XHRcdHNlbmRBamF4Rm9ybSgnLmZvb3Rlci1mb3JtJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYWlsLnBocCcpO1xyXG5cclxuXHQvLyBcdFx0XHRmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuXHQvLyBcdFx0XHRcdFx0JC5hamF4KHtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHR0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0JCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1x0XHRcdFx0XHRcdFxyXG5cdC8vIFx0XHRcdFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcblx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIuZm9vdGVyLWZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwJSlcIn0pO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0XHRcdCQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuXHQvLyBcdFx0XHRcdFx0XHRcdFx0XHQkKCcud29ya2ltX19idG4nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cdC8vIFx0XHRcdFx0XHRcdFx0fVxyXG5cdC8vIFx0XHRcdFx0XHR9KTtcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly8gXHR9KTtcclxuXHQvLyB9KTtcclxuXHJcbi8vZ3JhZGllbnQgYnV0dG9uIGhvdmVyXHJcbiQoZnVuY3Rpb24oKXtcclxuICBsZXQgcmVzaXplUmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHcgPSBjYW52YXNCb2R5LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBoID0gY2FudmFzQm9keS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IG9wdHMgPSB7IFxyXG4gICAgcGFydGljbGVDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICBsaW5lQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG4gICAgcGFydGljbGVBbW91bnQ6IDMwLFxyXG4gICAgZGVmYXVsdFNwZWVkOiAyLFxyXG4gICAgdmFyaWFudFNwZWVkOiAxLFxyXG4gICAgZGVmYXVsdFJhZGl1czogMixcclxuICAgIHZhcmlhbnRSYWRpdXM6IDIsXHJcbiAgICBsaW5rUmFkaXVzOiA0MDAsXHJcbiAgfTtcclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgZGVCb3VuY2VyKCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbGV0IGRlQm91bmNlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGlkKTtcclxuICAgICAgdGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJlc2l6ZVJlc2V0KCk7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICB9O1xyXG4gIFxyXG4gIGxldCBjaGVja0Rpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpeyBcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeDIgLSB4MSwgMikgKyBNYXRoLnBvdyh5MiAtIHkxLCAyKSk7XHJcbiAgfTtcclxuICBcclxuICBsZXQgbGlua1BvaW50cyA9IGZ1bmN0aW9uKHBvaW50MSwgaHVicyl7IFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IGNoZWNrRGlzdGFuY2UocG9pbnQxLngsIHBvaW50MS55LCBodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgIGxldCBvcGFjaXR5ID0gMSAtIGRpc3RhbmNlIC8gb3B0cy5saW5rUmFkaXVzO1xyXG4gICAgICBpZiAob3BhY2l0eSA+IDApIHsgXHJcbiAgICAgICAgZHJhd0FyZWEubGluZVdpZHRoID0gMC41O1xyXG4gICAgICAgIGRyYXdBcmVhLnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2JbMF19LCAke3JnYlsxXX0sICR7cmdiWzJdfSwgJHtvcGFjaXR5fSlgO1xyXG4gICAgICAgIGRyYXdBcmVhLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGRyYXdBcmVhLm1vdmVUbyhwb2ludDEueCwgcG9pbnQxLnkpO1xyXG4gICAgICAgIGRyYXdBcmVhLmxpbmVUbyhodWJzW2ldLngsIGh1YnNbaV0ueSk7XHJcbiAgICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgZHJhd0FyZWEuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgUGFydGljbGUgPSBmdW5jdGlvbih4UG9zLCB5UG9zKXsgXHJcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdzsgXHJcbiAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogaDtcclxuICAgIHRoaXMuc3BlZWQgPSBvcHRzLmRlZmF1bHRTcGVlZCArIE1hdGgucmFuZG9tKCkgKiBvcHRzLnZhcmlhbnRTcGVlZDsgXHJcbiAgICB0aGlzLmRpcmVjdGlvbkFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTsgXHJcbiAgICB0aGlzLmNvbG9yID0gb3B0cy5wYXJ0aWNsZUNvbG9yO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRzLmRlZmF1bHRSYWRpdXMgKyBNYXRoLnJhbmRvbSgpICogb3B0cy4gdmFyaWFudFJhZGl1czsgXHJcbiAgICB0aGlzLnZlY3RvciA9IHtcclxuICAgICAgeDogTWF0aC5jb3ModGhpcy5kaXJlY3Rpb25BbmdsZSkgKiB0aGlzLnNwZWVkLFxyXG4gICAgICB5OiBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbkFuZ2xlKSAqIHRoaXMuc3BlZWRcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICB0aGlzLmJvcmRlcigpOyBcclxuICAgICAgdGhpcy54ICs9IHRoaXMudmVjdG9yLng7IFxyXG4gICAgICB0aGlzLnkgKz0gdGhpcy52ZWN0b3IueTsgXHJcbiAgICB9O1xyXG4gICAgdGhpcy5ib3JkZXIgPSBmdW5jdGlvbigpeyBcclxuICAgICAgaWYgKHRoaXMueCA+PSB3IHx8IHRoaXMueCA8PSAwKSB7IFxyXG4gICAgICAgIHRoaXMudmVjdG9yLnggKj0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMueSA+PSBoIHx8IHRoaXMueSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy52ZWN0b3IueSAqPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy54ID4gdykgdGhpcy54ID0gdztcclxuICAgICAgaWYgKHRoaXMueSA+IGgpIHRoaXMueSA9IGg7XHJcbiAgICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSAwO1xyXG4gICAgICBpZiAodGhpcy55IDwgMCkgdGhpcy55ID0gMDtcdFxyXG4gICAgfTtcclxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKCl7IFxyXG4gICAgICBkcmF3QXJlYS5iZWdpblBhdGgoKTtcclxuICAgICAgZHJhd0FyZWEuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSoyKTtcclxuICAgICAgZHJhd0FyZWEuY2xvc2VQYXRoKCk7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIGRyYXdBcmVhLmZpbGwoKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBzZXR1cCgpeyBcclxuICAgIHBhcnRpY2xlcyA9IFtdO1xyXG4gICAgcmVzaXplUmVzZXQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5wYXJ0aWNsZUFtb3VudDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzLnB1c2goIG5ldyBQYXJ0aWNsZSgpICk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBsb29wKCl7IFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICAgIGRyYXdBcmVhLmNsZWFyUmVjdCgwLDAsdyxoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgcGFydGljbGVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgICBwYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsaW5rUG9pbnRzKHBhcnRpY2xlc1tpXSwgcGFydGljbGVzKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY2FudmFzQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLFxyXG4gIGRyYXdBcmVhID0gY2FudmFzQm9keS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgbGV0IGRlbGF5ID0gMjAwLCB0aWQsXHJcbiAgcmdiID0gb3B0cy5saW5lQ29sb3IubWF0Y2goL1xcZCsvZyk7XHJcbiAgcmVzaXplUmVzZXQoKTtcclxuICBzZXR1cCgpO1xyXG59KVxyXG5cclxuLy8gYnRuIGNsaWNrIGluIGZvcm1cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbiAuaGVhZGVyX19mb3JtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuaGVhZGVyX19mb3JtLXZhbGlkYXRpb24gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsaWNrKCk7XHJcbiAgfSkgXHJcbn0pXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbiAuaGVhZGVyX19mb3JtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuY2xpY2soKTtcclxuICB9KSBcclxufSlcclxuXHJcbi8vaW1hZ2UgcGhvdG8gc2hvd1xyXG4kKGZ1bmN0aW9uKCl7XHJcblx0JCgnLmNhcmRfX2JvcmRlciBpbWcnKS5lYWNoKChpbmRleCxlbCkgPT4ge1xyXG5cdFx0ICAkKGVsKS5jbGljaygoZSkgPT4ge1xyXG4gICAgICAgLy9lLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcGhvdG8nKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcGhvdG8nKSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdubycpO1xyXG4gICAgICAgICAkKCcuY2FyZF9fYm9yZGVyIGltZycpLmVhY2goZnVuY3Rpb24oaW5kLGVsKXtcclxuICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcGhvdG8nKTtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsKVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcGhvdG8nKTtcclxuXHJcbiAgICAgICAgICQoJy5vdHppdl9fYmxvY2stcGhvdG8gaW1nJykuYXR0cignc3JjJyxlLnRhcmdldC5zcmMpO1xyXG4gICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgIGxldCBkaXNjID0gZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzFdLmlubmVySFRNTDtcclxuICBcclxuICAgICAgICAgJCgnLm90eml2X19ibG9jay10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgZnVuY3Rpb24gZG9Ib21ld29yayhjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5oaWRlKDMwMCk7XHJcbiAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5oaWRlKDMwMCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBkb0hvbWV3b3JrKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IG1heExlbmd0aCA9IDE1MDtcclxuICAgICAgICAgICAgaWYgKGRpc2MubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHN0ciA9IGRpc2Muc2xpY2UoMCxtYXhMZW5ndGgpO1xyXG4gICAgICAgICAgICAgIHN0cis9XCIuLi5cIjtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaHRtbChzdHIpO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLnNob3coNTAwKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5odG1sKGRpc2MpO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblx0XHQgfSlcclxuICB9KVxyXG4gfSk7XHJcblxyXG4gJChmdW5jdGlvbigpe1xyXG4gIGxldCBtYXhMZW5ndGggPSAxNTA7XHJcbiAgbGV0IHRleHQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90eml2X19ibG9jay1kaXNjJykuaW5uZXJIVE1MO1xyXG4gIGlmICh0ZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgbGV0IHN0ciA9IHRleHQuc2xpY2UoMCxtYXhMZW5ndGgpO1xyXG4gICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaHRtbChzdHIpO1xyXG4gIH1cclxuIH0pXHJcblxyXG4gLy/RgdC60YDRi9GC0Ywg0YfQsNGB0YLRjCDQvdC+0LLQvtGB0YLQuCDQsdC70L7Qs9CwXHJcbiAkKGZ1bmN0aW9uKCl7XHJcbiAgIGxldCB0ZXh0QmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nc19faXRlbXMgLmRpc2MnKTtcclxuICAgLy9jb25zb2xlLmxvZyh0ZXh0QmxvZylcclxuICAgdGV4dEJsb2cuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGxldCBtYXhMZW5ndGggPSAyNTA7XHJcbiAgICBcclxuICAgIGxldCB0ZXh0ID0gZWwuaW5uZXJIVE1MO1xyXG4gICAgXHJcbiAgICAgaWYgKHRleHQubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XHJcbiAgICAgIGxldCBzdHIgPSBlbC5pbm5lckhUTUwuc2xpY2UoMCxtYXhMZW5ndGgpO1xyXG4gICAgICBzdHIrPVwiLi4uXCI7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCQoZWwpKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxyXG4gICAgICAkKGVsKS5odG1sKHN0cik7XHJcbiAgICAgfVxyXG4gICB9KVxyXG4gfSlcclxuXHJcblxyXG5cclxuIC8v0YHQutGA0YvRgtGMINC/0L7QutCw0LfQsNGC0Ywg0L7Qv9C40YHQsNC90LjQtVxyXG4gJChmdW5jdGlvbigpe1xyXG4gICAkKCcuYmxvY2s1X19idG4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgIGlmICgkKCcuYmxvY2s1X193cmFwJykuY3NzKCdtYXgtaGVpZ2h0JykgPT0gJzE0MHB4Jykge1xyXG4gICAgICAgJCgnLmJsb2NrNV9fYnRuLXRleHQnKS5odG1sKCfQodC60YDRi9GC0YwnKTtcclxuICAgICAgICQoJy5ibG9jazVfX2J0bi1hcnInKS5jc3MoJ3RyYW5zZm9ybScsJ3JvdGF0ZSgxODBkZWcpJyk7XHJcbiAgICAgICAkKCcuYmxvY2s1X193cmFwJykuY3NzKCdtYXgtaGVpZ2h0JywnMTAwMHB4Jyk7XHJcbiAgICBcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuYmxvY2s1X193cmFwJykuY3NzKCdtYXgtaGVpZ2h0JywnMTQwcHgnKTtcclxuICAgICAgJCgnLmJsb2NrNV9fYnRuLWFycicpLmNzcygndHJhbnNmb3JtJywncm90YXRlKDBkZWcpJyk7XHJcbiAgICAgICQoJy5ibG9jazVfX2J0bi10ZXh0JykuaHRtbCgn0J/QvtC00YDQvtCx0L3QtdC1Jyk7XHJcblxyXG4gICAgICBsZXQgJHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2s1Jyk7XHJcbiAgICAgICRwYWdlLmFuaW1hdGUoe3Njcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcH0sIDEwMDApO1xyXG4gICAgICAgICAgIFxyXG4gICAgIH1cclxuICAgfSlcclxuIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuIC8v0L/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7INC6INGC0LXQs9GDXHJcbi8vICQoZnVuY3Rpb24oKXtcclxuLy8gICB2YXIgJHBhZ2UgPSAkKCdodG1sLCBib2R5Jyk7XHJcbi8vICAgJCgnYVtocmVmKj1cIiNcIl0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuLy8gICAgICAgJHBhZ2UuYW5pbWF0ZSh7XHJcbi8vICAgICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4vLyAgICAgICB9LCA0MDApO1xyXG4vLyAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgfSk7XHJcbi8vIH0pXHJcblxyXG4vL2NhcnVzZWwgZnJpZW5kXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBvd2wgPSAkKFwiLm93bC1jYXJvdXNlbC1mcmllbmRcIik7XHJcbiAgb3dsLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czp0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTp7XHJcbiAgICAgIDA6e1xyXG4gICAgICAgICAgaXRlbXM6MixcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6e1xyXG4gICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICAxMDI0OntcclxuICAgICAgICAgIGl0ZW1zOjQsXHJcbiAgICAgICAgICBuYXY6ZmFsc2UsXHJcbiAgICAgICAgICBsb29wOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vYXJyIGluIGZyaWVuZCBibG9jayBzZWN0aW9uXHJcbiQoJy5zbGljay1wcmV2JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKCcuZnJpZW5kX19pdGVtcycpLnNsaWNrKCdzbGlja1ByZXYnKTtcclxufSlcclxuXHJcbiQoJy5zbGljay1uZXh0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKCcuZnJpZW5kX19pdGVtcycpLnNsaWNrKCdzbGlja05leHQnKTtcclxufSlcclxuXHJcblxyXG4vL2NhcnVzZWwgYmxvZ1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gIC8vIE93bCBDYXJvdXNlbFxyXG4gIHZhciBvd2wgPSAkKFwiLm93bC1jYXJvdXNlbC1ibG9nXCIpO1xyXG4gIG93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMyxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6dHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAwOntcclxuICAgICAgICAgIGl0ZW1zOjEsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgNjkwOntcclxuICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgMTIwMTp7XHJcbiAgICAgICAgICBpdGVtczozLFxyXG4gICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgbG9vcDogZmFsc2VcclxuICAgICAgfVxyXG4gIH1cclxuICAgIFxyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuLy9idG4gYnVyZ2VyXHJcbiQoZnVuY3Rpb24oKXtcclxuIFxyXG5cclxuICAkKCcudG9wbGluZV9fYnVyZ2VyLWltZycpLmNsaWNrKE1vZGFsKVxyXG5cclxuICAvLyAkKCcub3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICBpZiAoICQoJy5tb2RhbC1mb3JtLWFjdGl2ZScpLmxlbmd0aCA+IDAgKSB7XHJcbiAgLy8gICAgICQoJy5tb2RhbC1mb3JtJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWZvcm0tYWN0aXZlJyk7XHJcbiAgLy8gICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG4gIC8vICAgICAkKCcub3ZlcmxheScpLmhpZGUoKTtcclxuICAgICAgXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBNb2RhbCgpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pOyBcclxuICAkKCcub3ZlcmxheScpLmNsaWNrKE1vZGFsKTtcclxuICAkKCcubW9kYWxfX2Nsb3NlIHNwYW4nKS5jbGljayhNb2RhbCk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBNb2RhbCgpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgaWYgKCAkKCcudG9wbGluZV9fYnVyZ2VyLWltZycpLmhhc0NsYXNzKCd0b3BsaW5lX19idXJnZXItaW1nLWFjdGl2ZScpKSB7XHJcbiAgICAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5yZW1vdmVDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKSBcclxuICAgICAkKCcubW9kYWwnKS5yZW1vdmVDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCd2aXNpYmxlJyk7XHJcbiAgICAgJCgnLm92ZXJsYXknKS5oaWRlKCk7XHJcbiAgICB9ICBlbHNlIHtcclxuICAgICAkKCcudG9wbGluZV9fYnVyZ2VyLWltZycpLmFkZENsYXNzKCd0b3BsaW5lX19idXJnZXItaW1nLWFjdGl2ZScpO1xyXG4gICAgICQoJy5tb2RhbCcpLmFkZENsYXNzKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xyXG4gICAgICQoJy5vdmVybGF5Jykuc2hvdygpO1xyXG4gICAgfSBcclxuICB9XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIFxyXG4gICQoJy5tb2RhbF9fZm9ybS12YWxpZGF0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDksXHJcbiAgICAgICAgbWF4bGVuZ3RoOiA5XHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0JjQvNGPJyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyLdGFINGB0LjQvNCy0L7Qu9C+0LIg0LIg0L/QvtC70LUgJ9CY0LzRjydcIlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQotC10LvQtdGE0L7QvScg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG51bWJlcjogXCLQndC10LLQtdGA0L3Ri9C5INC90L7QvNC10YBcIixcclxuICAgICAgICBtaW5sZW5ndGg6IFwi0J3QvtC80LXRgCDRgdC+0YHRgtC+0LjRgiDQuNC3IDkg0YfQuNGB0LXQu1wiLFxyXG4gICAgICAgIG1heGxlbmd0aDogXCLQndC+0LzQtdGAINGB0L7RgdGC0L7QuNGCINC40LcgOSDRh9C40YHQtdC7XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IFwi0J3QtdC+0LHRhdC+0LTQuNC8INGE0L7RgNC80LDRgiDQsNC00YDQtdGB0LAgZW1haWxcIiBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgXHJcbiAgICAgIHNlbmRBamF4Rm9ybShmb3JtLCAnbWFpbC5waHAnKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNlbmRBamF4Rm9ybShhamF4X2Zvcm0sIHVybCkge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICB1cmw6ICAgICB1cmwsIC8vdXJsINGB0YLRgNCw0L3QuNGG0YsgKHNlbmQucGhwKVxyXG4gICAgICAgICAgICAgIHR5cGU6ICAgICBcIlBPU1RcIiwgLy/QvNC10YLQvtC0INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogJChhamF4X2Zvcm0pLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbihkYXRhKSB7IC8vINGB0L7QsdGL0YLQuNC1INC00L4g0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgICAgLy8gJCgnLmZvb3Rlcl9idG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAkKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtaGVhZC1uYW1lJykuaHRtbChcItCh0L/QsNGB0LjQsdC+IVwiKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtcHJpY2UnKS5odG1sKFwi0J3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwtb3ZlcmxheTFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIubW9kYWwxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgJChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5oZWFkZXJfX2Zvcm0tdmFsaWRhdGlvbicpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiA5LFxyXG4gICAgICAgIG1heGxlbmd0aDogOVxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9CY0LzRjycg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQktCy0LXQtNC40YLQtSDQvdC1INC80LXQvdC10LUgMi3RhSDRgdC40LzQstC+0LvQvtCyINCyINC/0L7Qu9C1ICfQmNC80Y8nXCJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0KLQtdC70LXRhNC+0L0nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgICBudW1iZXI6IFwi0J3QtdCy0LXRgNC90YvQuSDQvdC+0LzQtdGAXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCd0L7QvNC10YAg0YHQvtGB0YLQvtC40YIg0LjQtyA5INGH0LjRgdC10LtcIixcclxuICAgICAgICBtYXhsZW5ndGg6IFwi0J3QvtC80LXRgCDRgdC+0YHRgtC+0LjRgiDQuNC3IDkg0YfQuNGB0LXQu1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiBcItCd0LXQvtCx0YXQvtC00LjQvCDRhNC+0YDQvNCw0YIg0LDQtNGA0LXRgdCwIGVtYWlsXCIgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgIC8vaHR0cDovL2xvY2FsaG9zdDozMDAwL1xyXG4gICAgICBzZW5kQWpheEZvcm0oZm9ybSwgJ21haWwucGhwJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAgICAgdXJsLCAvL3VybCDRgdGC0YDQsNC90LjRhtGLIChzZW5kLnBocClcclxuICAgICAgICAgICAgICB0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICQoYWpheF9mb3JtKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICAgIC8vICQoJy5mb290ZXJfYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1x0XHRcdFx0XHRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWhlYWQtbmFtZScpLmh0bWwoXCLQodC/0LDRgdC40LHQviFcIik7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1oZWFkLXByaWNlJykuaHRtbChcItCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgLy8gJCgnLndvcmtpbV9fYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gJCgnLmhlYWRlcl9fZm9ybScpLnN1Ym1pdChmdW5jdGlvbihlKXtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIGFsZXJ0KFwiT2tcIilcclxuICAvLyB9KVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoXCIubW9kYWwtb3ZlcmxheTEsIC5jbG9zZS1tb2RhbDFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVPdXQoKTtcclxuICAgICQoXCIubW9kYWwxXCIpLmZhZGVPdXQoKTtcclxuICAgICQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgzMDAlKVwifSk7XHJcbiAgICAkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG59KVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5ha2NpamFfX2xpbmstZ3JlZW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgICAvLyQoJy5tb2RhbC1mb3JtLW92ZXJsYXknKS5zaG93KCk7XHJcbiAgfSlcclxuICAkKCcubW9kYWwtZm9ybS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcInZpc2libGVcIn0pO1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5yZW1vdmVDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICB9KVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5ibG9jazMtYnRuX19idG4tYmx1ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLmFkZENsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICB9KVxyXG5cclxuICAkKCcuYmxvY2szLWJ0bl9fYnRuLWdyZWVuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5tb2RhbC1mb3JtJykuYWRkQ2xhc3MoJ21vZGFsLWZvcm0tYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gIH0pXHJcblxyXG59KVxyXG5cclxuIl19
