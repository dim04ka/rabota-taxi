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
      $(this).animated("flipInY", "flipOutY");
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
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
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
	$( document ).ready(function() {
		$(".footer-form").submit(function(e){
				e.preventDefault();
				sendAjaxForm('.footer-form', 'http://localhost:3000/mail.php');

				function sendAjaxForm(ajax_form, url) {
						$.ajax({
								url:     url, //url страницы (send.php)
								type:     "POST", //метод отправки
								dataType: "html",
								data: $(ajax_form).serialize(),  // Сеарилизуем объект
								beforeSend: function(data) { // событие до отправки
									$('.footer_btn').attr('disabled', 'disabled');						
								},
								success: function(response) { //Данные отправлены успешно
										console.log(response);
										result = $.parseJSON(response);
										console.log(result);
										$(".footer-form").trigger("reset");

										$('.modal-head-name').html("Спасибо!");
										$('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
										$(".modal-overlay1").fadeIn();
										$(".modal1").fadeIn();
										$(".modal1").css({"transform" : "translateY(0%)"});
										$("body").css({"overflow":"hidden"});
										$('.workim__btn').removeAttr('disabled');
								}
						});
				}
		});
	});

	$(".modal-overlay1, .close-modal1").on("click", function(){
		$submit.removeAttribute("disabled")
		$(".modal-overlay1").fadeOut();
		$(".modal1").fadeOut();
		$(".modal1").css({"transform" : "translateY(300%)"});
		$("body").css({"overflow":"visible"});
})


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
$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})

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
      
      sendAjaxForm(form, 'http://localhost:3000/mail.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                console.log(data);
                $(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  console.log(response);
                  result = $.parseJSON(response);
                  console.log(result);
                  $(form).trigger("reset");

                  // $('.modal-head-name').html("Спасибо!");
                  // $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
                  // $(".modal-overlay1").fadeIn();
                  // $(".modal1").fadeIn();
                  // $(".modal1").css({"transform" : "translateY(0%)"});
                  // $("body").css({"overflow":"hidden"});
                  // $('.workim__btn').removeAttr('disabled');
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
      
      sendAjaxForm(form, 'http://localhost:3000/mail.php');

      function sendAjaxForm(ajax_form, url) {
          $.ajax({
              url:     url, //url страницы (send.php)
              type:     "POST", //метод отправки
              dataType: "html",
              data: $(ajax_form).serialize(),  // Сеарилизуем объект
              beforeSend: function(data) { // событие до отправки
                // $('.footer_btn').attr('disabled', 'disabled');
                console.log(data);
                $(form).trigger("reset");					
              },
              success: function(response) { //Данные отправлены успешно
                  console.log(response);
                  result = $.parseJSON(response);
                  console.log(result);
                  $(form).trigger("reset");

                  // $('.modal-head-name').html("Спасибо!");
                  // $('.modal-head-price').html("Наш менеджер свяжется с вами в ближайшее время.");
                  // $(".modal-overlay1").fadeIn();
                  // $(".modal1").fadeIn();
                  // $(".modal1").css({"transform" : "translateY(0%)"});
                  // $("body").css({"overflow":"hidden"});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHZhciBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuLy8gcmVxdWlyZSgnLi9qcXVlcnkudmFsaWRhdGUuanMnKTtcclxuXHJcblxyXG5cclxuKGZ1bmN0aW9uKCQpIHsgXHJcbiAgJC5mbi5hbmltYXRlZCA9IGZ1bmN0aW9uKGluRWZmZWN0LCBvdXRFZmZlY3QpIHsgXHJcbiAgIHZhciBqUXVlcnlPYmplY3QgPSAkKHRoaXMpOyBcclxuIFxyXG4gICBqUXVlcnlPYmplY3QuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKTsgXHJcbiBcclxuIFxyXG4gICBqUXVlcnlPYmplY3Qud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7IFxyXG4gICAgaWYgKGRpciA9PT0gXCJkb3duXCIpIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgIGpRdWVyeU9iamVjdC5yZW1vdmVDbGFzcyhpbkVmZmVjdCkuYWRkQ2xhc3Mob3V0RWZmZWN0KS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTsgXHJcbiAgICB9OyBcclxuICAgfSwgeyBcclxuICAgIG9mZnNldDogXCI4MCVcIiBcclxuICAgfSk7IFxyXG4gXHJcbiAgIGpRdWVyeU9iamVjdC53YXlwb2ludChmdW5jdGlvbihkaXIpIHsgXHJcbiAgICBpZiAoZGlyID09PSBcImRvd25cIikgeyBcclxuICAgICBqUXVlcnlPYmplY3QucmVtb3ZlQ2xhc3MoaW5FZmZlY3QpLmFkZENsYXNzKG91dEVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7IFxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgalF1ZXJ5T2JqZWN0LnJlbW92ZUNsYXNzKG91dEVmZmVjdCkuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpOyBcclxuICAgIH07IFxyXG4gICB9LCB7IFxyXG4gICAgb2Zmc2V0OiAtJCh3aW5kb3cpLmhlaWdodCgpIFxyXG4gICB9KTsgXHJcbiAgfTsgXHJcbiB9KShqUXVlcnkpO1xyXG5cclxuIC8vYW5pbWF0ZVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLnRvcGxpbmVfX3Jvdy1hbmltYXRlXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAkKFwiLnRvcGxpbmVfX3Jvdy0yXCIpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiLCBcImZhZGVPdXRVcFwiKTtcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3RvcGxpbmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICQoXCIuaGVhZGVyX193cmFwcGVyXCIpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiLCBcImZhZGVPdXRMZWZ0XCIpO1xyXG4gICQoXCIuaGVhZGVyX19yaWdodFwiKS5hbmltYXRlZChcImZhZGVJblJpZ2h0XCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3aGF0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi53aGF0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gICQoXCIud2hhdF9fd3JhcHBlci1pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5ZXCIsIFwiZmxpcE91dFlcIik7XHJcbiAgfSlcclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3doYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG9mZmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5vZmZlcl9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuICAkKFwiLm9mZmVyc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gIH0pXHJcblxyXG5cclxuIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvb2ZmZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWtjaWphIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5ha2NpamFfX3Jvd1wiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgJChcIi5ha2NpamFfX2ljb25cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5hbmltYXRlZChcImZsaXBJbllcIiwgXCJmbGlwT3V0WVwiKTtcclxuICB9KVxyXG5cclxuXHJcbiAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2FrY2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gJChcIi5kb2hvZF9fY29udGFpbmVyXCIpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxuXHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd29yayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAkKFwiLndvcmtfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLndvcmtfX2NhcmRcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmxpcEluWVwiLCBcImZsaXBPdXRZXCIpO1xyXG4gICAgfSlcclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC93b3JrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL290eml2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgICQoXCIub3R6aXZfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcblxyXG4gIC8vICAkKFwiLmNhcmRcIikuYW5pbWF0ZWQoXCJmYWRlSW5MZWZ0XCIsIFwiZmFkZU91dExlZnRcIik7XHJcbiAgLy8gICQoXCIub3R6aXZfX2Jsb2NrLWNhcHRpb25cIikuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuXHJcbiAgICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL290eml2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcblxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZha2Fuc2lqYSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gICAgJChcIi52YWthbnNpamFfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgICAkKFwiLnZha2Fuc2lqYV9fYmxvY2sgLml0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgICB9KVxyXG4gICAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC92YWthbnNpamEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAgIFxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlY3B2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XHJcbiAgJChcIi5zZWN0aW9uLWVjcHZfX2NvbnRhaW5lclwiKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbiAgXHJcbiAgJChcIi5zZWN0aW9uLWVjcHYtYmdfX3F1ZXN0XCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIH0pXHJcbiAgJChcIi5zZWN0aW9uLWVjcHYgLmNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL2VjcHYgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJsb2cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLmJsb2ctYmdfX2NhcHRpb25cIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4gIFxyXG4gICQoXCIuYmxvZ3NfX2l0ZW1zXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiLCBcImZhZGVPdXRSaWdodFwiKTtcclxuICB9KVxyXG4gIC8vIDwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvYmxvZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG5cclxuICAvLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWJvdXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuICAkKFwiLmFib3V0X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuICAkKFwiLmFib3V0IG1haW4gcFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIiwgXCJmYWRlT3V0UmlnaHRcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcIi5yZWdpc3RyYXRpb25fX2Jsb2NrIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICQodGhpcykuYW5pbWF0ZWQoXCJmbGlwSW5YXCIsIFwiZmFkZU91dFJpZ2h0XCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgLy8gPC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC9hYm91dCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4gIFxyXG4gIFxyXG4vLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VjdGlvbi0xMzVfX2NvbnRhaW5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tPlxyXG4kKFwiLnNlY3Rpb24tMTM1X19jb250YWluZXJcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG4kKFwiLmJsb2NrMyAuYmxvY2szLXJlcXVpZWRcIikuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG5cclxuJChcIi5ibG9ja0l0ZW1zIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAkKHRoaXMpLmFuaW1hdGVkKFwiZmFkZUluVXBcIiwgXCJmYWRlT3V0RG93blwiKTtcclxufSlcclxuXHJcbiQoXCIuYmxvY2syX19pdGVtIFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgJCh0aGlzKS5hbmltYXRlZChcImZhZGVJblVwXCIsIFwiZmFkZU91dERvd25cIik7XHJcbn0pXHJcblxyXG4kKFwiLmJsb2NrMy1yZXF1aWVkLWxpc3RfX2l0ZW1cIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICQodGhpcykuYW5pbWF0ZWQoXCJmYWRlSW5VcFwiLCBcImZhZGVPdXREb3duXCIpO1xyXG59KVxyXG4vLyA8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gL3NlY3Rpb24tMTM1X19jb250YWluZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cclxuXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuLy9idXJnZXIgbW9iaWxlXHJcbiQoZnVuY3Rpb24oKXtcclxuXHQkKCcuaGVhZGVyLWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcuaGVhZGVyLW1lbnUnKS50b2dnbGVDbGFzcygnaGVhZGVyLW1lbnUtYWN0aXZlJyk7XHJcblxyXG5cdFx0JCgnLmhlYWRlci1tZW51LWFjdGl2ZSBhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLmhlYWRlci1tZW51JykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1tZW51LWFjdGl2ZScpO1xyXG5cdFx0fSlcclxuXHR9KVxyXG59KVxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFrY2lqYV9faW1nXCIpICE9IG51bGwpIHtcclxuICAgIC8vcGFyYWxheFxyXG4gIGZ1bmN0aW9uIHBhcmFsYXgoZSkge1xyXG5cdFx0bGV0IHggPSBlLmNsaWVudFgvNTA7XHJcblx0XHRsZXQgeSA9IGUuY2xpZW50WS81MDtcclxuXHRcclxuXHRcdCB2YXIgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFrY2lqYV9faW1nXCIpO1xyXG5cdFx0IGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiK3grXCJweCwgXCIreStcInB4KVwiO1xyXG4gIH1cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcGFyYWxheCk7XHJcbiAgfVxyXG59KVxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2s0LXdyYXBwZXJfX2l0ZW0taW1nIGltZ1wiKSAhPSBudWxsKSB7XHJcbiAgICAvL3BhcmFsYXhcclxuICBmdW5jdGlvbiBwYXJhbGF4KGUpIHtcclxuXHRcdGxldCB4ID0gZS5jbGllbnRYLzUwO1xyXG5cdFx0bGV0IHkgPSBlLmNsaWVudFkvNTA7XHJcblx0XHJcblx0XHQgdmFyIGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9jazQtd3JhcHBlcl9faXRlbS1pbWcgaW1nXCIpO1xyXG5cdFx0IGxheWVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiK3grXCJweCwgXCIreStcInB4KVwiO1xyXG4gIH1cclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcGFyYWxheCk7XHJcbiAgfVxyXG59KVxyXG4gIFxyXG5cdFxyXG5cdC8vc2VuZCBtYWlsXHJcblx0JCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIuZm9vdGVyLWZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRzZW5kQWpheEZvcm0oJy5mb290ZXItZm9ybScsICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWFpbC5waHAnKTtcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24gc2VuZEFqYXhGb3JtKGFqYXhfZm9ybSwgdXJsKSB7XHJcblx0XHRcdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6ICAgICB1cmwsIC8vdXJsINGB0YLRgNCw0L3QuNGG0YsgKHNlbmQucGhwKVxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogICAgIFwiUE9TVFwiLCAvL9C80LXRgtC+0LQg0L7RgtC/0YDQsNCy0LrQuFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogJChhamF4X2Zvcm0pLnNlcmlhbGl6ZSgpLCAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcclxuXHRcdFx0XHRcdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGRhdGEpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LTQviDQvtGC0L/RgNCw0LLQutC4XHJcblx0XHRcdFx0XHRcdFx0XHRcdCQoJy5mb290ZXJfYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkgeyAvL9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDRg9GB0L/QtdGI0L3QvlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLmZvb3Rlci1mb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCgnLm1vZGFsLWhlYWQtbmFtZScpLmh0bWwoXCLQodC/0LDRgdC40LHQviFcIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCgnLm1vZGFsLWhlYWQtcHJpY2UnKS5odG1sKFwi0J3QsNGIINC80LXQvdC10LTQttC10YAg0YHQstGP0LbQtdGC0YHRjyDRgSDQstCw0LzQuCDQsiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjy5cIik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChcIi5tb2RhbC1vdmVybGF5MVwiKS5mYWRlSW4oKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMCUpXCJ9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JCgnLndvcmtpbV9fYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdCQoXCIubW9kYWwtb3ZlcmxheTEsIC5jbG9zZS1tb2RhbDFcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cdFx0JHN1Ym1pdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKVxyXG5cdFx0JChcIi5tb2RhbC1vdmVybGF5MVwiKS5mYWRlT3V0KCk7XHJcblx0XHQkKFwiLm1vZGFsMVwiKS5mYWRlT3V0KCk7XHJcblx0XHQkKFwiLm1vZGFsMVwiKS5jc3Moe1widHJhbnNmb3JtXCIgOiBcInRyYW5zbGF0ZVkoMzAwJSlcIn0pO1xyXG5cdFx0JChcImJvZHlcIikuY3NzKHtcIm92ZXJmbG93XCI6XCJ2aXNpYmxlXCJ9KTtcclxufSlcclxuXHJcblxyXG4vL2dyYWRpZW50IGJ1dHRvbiBob3ZlclxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgbGV0IHJlc2l6ZVJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB3ID0gY2FudmFzQm9keS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaCA9IGNhbnZhc0JvZHkuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gIH1cclxuICBcclxuICBjb25zdCBvcHRzID0geyBcclxuICAgIHBhcnRpY2xlQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG4gICAgbGluZUNvbG9yOiBcInJnYigyNTUsMjU1LDI1NSlcIixcclxuICAgIHBhcnRpY2xlQW1vdW50OiAzMCxcclxuICAgIGRlZmF1bHRTcGVlZDogMixcclxuICAgIHZhcmlhbnRTcGVlZDogMSxcclxuICAgIGRlZmF1bHRSYWRpdXM6IDIsXHJcbiAgICB2YXJpYW50UmFkaXVzOiAyLFxyXG4gICAgbGlua1JhZGl1czogNDAwLFxyXG4gIH07XHJcbiAgXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcclxuICAgIGRlQm91bmNlcigpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGxldCBkZUJvdW5jZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XHJcbiAgICAgIHRpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXNpemVSZXNldCgpO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgfTtcclxuICBcclxuICBsZXQgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKXsgXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHgyIC0geDEsIDIpICsgTWF0aC5wb3coeTIgLSB5MSwgMikpO1xyXG4gIH07XHJcbiAgXHJcbiAgbGV0IGxpbmtQb2ludHMgPSBmdW5jdGlvbihwb2ludDEsIGh1YnMpeyBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHVicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBjaGVja0Rpc3RhbmNlKHBvaW50MS54LCBwb2ludDEueSwgaHVic1tpXS54LCBodWJzW2ldLnkpO1xyXG4gICAgICBsZXQgb3BhY2l0eSA9IDEgLSBkaXN0YW5jZSAvIG9wdHMubGlua1JhZGl1cztcclxuICAgICAgaWYgKG9wYWNpdHkgPiAwKSB7IFxyXG4gICAgICAgIGRyYXdBcmVhLmxpbmVXaWR0aCA9IDAuNTtcclxuICAgICAgICBkcmF3QXJlYS5zdHJva2VTdHlsZSA9IGByZ2JhKCR7cmdiWzBdfSwgJHtyZ2JbMV19LCAke3JnYlsyXX0sICR7b3BhY2l0eX0pYDtcclxuICAgICAgICBkcmF3QXJlYS5iZWdpblBhdGgoKTtcclxuICAgICAgICBkcmF3QXJlYS5tb3ZlVG8ocG9pbnQxLngsIHBvaW50MS55KTtcclxuICAgICAgICBkcmF3QXJlYS5saW5lVG8oaHVic1tpXS54LCBodWJzW2ldLnkpO1xyXG4gICAgICAgIGRyYXdBcmVhLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGRyYXdBcmVhLnN0cm9rZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFBhcnRpY2xlID0gZnVuY3Rpb24oeFBvcywgeVBvcyl7IFxyXG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIHc7IFxyXG4gICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGg7XHJcbiAgICB0aGlzLnNwZWVkID0gb3B0cy5kZWZhdWx0U3BlZWQgKyBNYXRoLnJhbmRvbSgpICogb3B0cy52YXJpYW50U3BlZWQ7IFxyXG4gICAgdGhpcy5kaXJlY3Rpb25BbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2MCk7IFxyXG4gICAgdGhpcy5jb2xvciA9IG9wdHMucGFydGljbGVDb2xvcjtcclxuICAgIHRoaXMucmFkaXVzID0gb3B0cy5kZWZhdWx0UmFkaXVzICsgTWF0aC5yYW5kb20oKSAqIG9wdHMuIHZhcmlhbnRSYWRpdXM7IFxyXG4gICAgdGhpcy52ZWN0b3IgPSB7XHJcbiAgICAgIHg6IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uQW5nbGUpICogdGhpcy5zcGVlZCxcclxuICAgICAgeTogTWF0aC5zaW4odGhpcy5kaXJlY3Rpb25BbmdsZSkgKiB0aGlzLnNwZWVkXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpeyBcclxuICAgICAgdGhpcy5ib3JkZXIoKTsgXHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnZlY3Rvci54OyBcclxuICAgICAgdGhpcy55ICs9IHRoaXMudmVjdG9yLnk7IFxyXG4gICAgfTtcclxuICAgIHRoaXMuYm9yZGVyID0gZnVuY3Rpb24oKXsgXHJcbiAgICAgIGlmICh0aGlzLnggPj0gdyB8fCB0aGlzLnggPD0gMCkgeyBcclxuICAgICAgICB0aGlzLnZlY3Rvci54ICo9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnkgPj0gaCB8fCB0aGlzLnkgPD0gMCkge1xyXG4gICAgICAgIHRoaXMudmVjdG9yLnkgKj0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMueCA+IHcpIHRoaXMueCA9IHc7XHJcbiAgICAgIGlmICh0aGlzLnkgPiBoKSB0aGlzLnkgPSBoO1xyXG4gICAgICBpZiAodGhpcy54IDwgMCkgdGhpcy54ID0gMDtcclxuICAgICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IDA7XHRcclxuICAgIH07XHJcbiAgICB0aGlzLmRyYXcgPSBmdW5jdGlvbigpeyBcclxuICAgICAgZHJhd0FyZWEuYmVnaW5QYXRoKCk7XHJcbiAgICAgIGRyYXdBcmVhLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkqMik7XHJcbiAgICAgIGRyYXdBcmVhLmNsb3NlUGF0aCgpO1xyXG4gICAgICBkcmF3QXJlYS5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICBkcmF3QXJlYS5maWxsKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2V0dXAoKXsgXHJcbiAgICBwYXJ0aWNsZXMgPSBbXTtcclxuICAgIHJlc2l6ZVJlc2V0KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMucGFydGljbGVBbW91bnQ7IGkrKyl7XHJcbiAgICAgIHBhcnRpY2xlcy5wdXNoKCBuZXcgUGFydGljbGUoKSApO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gbG9vcCgpeyBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XHJcbiAgICBkcmF3QXJlYS5jbGVhclJlY3QoMCwwLHcsaCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHBhcnRpY2xlc1tpXS51cGRhdGUoKTtcclxuICAgICAgcGFydGljbGVzW2ldLmRyYXcoKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGlua1BvaW50cyhwYXJ0aWNsZXNbaV0sIHBhcnRpY2xlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNhbnZhc0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSxcclxuICBkcmF3QXJlYSA9IGNhbnZhc0JvZHkuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGxldCBkZWxheSA9IDIwMCwgdGlkLFxyXG4gIHJnYiA9IG9wdHMubGluZUNvbG9yLm1hdGNoKC9cXGQrL2cpO1xyXG4gIHJlc2l6ZVJlc2V0KCk7XHJcbiAgc2V0dXAoKTtcclxufSlcclxuXHJcbi8vIGJ0biBjbGljayBpbiBmb3JtXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcuaGVhZGVyX19mb3JtLXZhbGlkYXRpb24gLmhlYWRlcl9fZm9ybWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmhlYWRlcl9fZm9ybS12YWxpZGF0aW9uIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5jbGljaygpO1xyXG4gIH0pIFxyXG59KVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLm1vZGFsX19mb3JtLXZhbGlkYXRpb24gLmhlYWRlcl9fZm9ybWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1vZGFsX19mb3JtLXZhbGlkYXRpb24gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsaWNrKCk7XHJcbiAgfSkgXHJcbn0pXHJcblxyXG4vL2ltYWdlIHBob3RvIHNob3dcclxuJChmdW5jdGlvbigpe1xyXG5cdCQoJy5jYXJkX19ib3JkZXIgaW1nJykuZWFjaCgoaW5kZXgsZWwpID0+IHtcclxuXHRcdCAgJChlbCkuY2xpY2soKGUpID0+IHtcclxuICAgICAgIC8vZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBob3RvJyk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXBob3RvJykpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbm8nKTtcclxuICAgICAgICAgJCgnLmNhcmRfX2JvcmRlciBpbWcnKS5lYWNoKGZ1bmN0aW9uKGluZCxlbCl7XHJcbiAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXBob3RvJyk7XHJcbiAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlbClcclxuICAgICAgICAgfSlcclxuICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBob3RvJyk7XHJcblxyXG4gICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXBob3RvIGltZycpLmF0dHIoJ3NyYycsZS50YXJnZXQuc3JjKTtcclxuICAgICAgICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW5bMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICBsZXQgZGlzYyA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlblsxXS5pbm5lckhUTUw7XHJcbiAgXHJcbiAgICAgICAgICQoJy5vdHppdl9fYmxvY2stdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGZ1bmN0aW9uIGRvSG9tZXdvcmsoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaGlkZSgzMDApO1xyXG4gICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXRpdGxlJykuaGlkZSgzMDApO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgZG9Ib21ld29yayggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXhMZW5ndGggPSAxNTA7XHJcbiAgICAgICAgICAgIGlmIChkaXNjLmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICAgICAgICAgIGxldCBzdHIgPSBkaXNjLnNsaWNlKDAsbWF4TGVuZ3RoKTtcclxuICAgICAgICAgICAgICBzdHIrPVwiLi4uXCI7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuc2hvdyg1MDApO1xyXG4gICAgICAgICAgICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmh0bWwoc3RyKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXRpdGxlJykuc2hvdyg1MDApO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLWRpc2MnKS5zaG93KDUwMCk7XHJcbiAgICAgICAgICAgICAgJCgnLm90eml2X19ibG9jay1kaXNjJykuaHRtbChkaXNjKTtcclxuICAgICAgICAgICAgICAkKCcub3R6aXZfX2Jsb2NrLXRpdGxlJykuc2hvdyg1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cdFx0IH0pXHJcbiAgfSlcclxuIH0pO1xyXG5cclxuICQoZnVuY3Rpb24oKXtcclxuICBsZXQgbWF4TGVuZ3RoID0gMTUwO1xyXG4gIGxldCB0ZXh0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdHppdl9fYmxvY2stZGlzYycpLmlubmVySFRNTDtcclxuICBpZiAodGV4dC5sZW5ndGggPiBtYXhMZW5ndGgpIHtcclxuICAgIGxldCBzdHIgPSB0ZXh0LnNsaWNlKDAsbWF4TGVuZ3RoKTtcclxuICAgIHN0cis9XCIuLi5cIjtcclxuICAgICQoJy5vdHppdl9fYmxvY2stZGlzYycpLmh0bWwoc3RyKTtcclxuICB9XHJcbiB9KVxyXG5cclxuIC8v0YHQutGA0YvRgtGMINGH0LDRgdGC0Ywg0L3QvtCy0L7RgdGC0Lgg0LHQu9C+0LPQsFxyXG4gJChmdW5jdGlvbigpe1xyXG4gICBsZXQgdGV4dEJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZ3NfX2l0ZW1zIC5kaXNjJyk7XHJcbiAgIC8vY29uc29sZS5sb2codGV4dEJsb2cpXHJcbiAgIHRleHRCbG9nLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBsZXQgbWF4TGVuZ3RoID0gMjUwO1xyXG4gICAgXHJcbiAgICBsZXQgdGV4dCA9IGVsLmlubmVySFRNTDtcclxuICAgIFxyXG4gICAgIGlmICh0ZXh0Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICBsZXQgc3RyID0gZWwuaW5uZXJIVE1MLnNsaWNlKDAsbWF4TGVuZ3RoKTtcclxuICAgICAgc3RyKz1cIi4uLlwiO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygkKGVsKSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcclxuICAgICAgJChlbCkuaHRtbChzdHIpO1xyXG4gICAgIH1cclxuICAgfSlcclxuIH0pXHJcblxyXG5cclxuXHJcbiAvL9GB0LrRgNGL0YLRjCDQv9C+0LrQsNC30LDRgtGMINC+0L/QuNGB0LDQvdC40LVcclxuICQoZnVuY3Rpb24oKXtcclxuICAgJCgnLmJsb2NrNV9fYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICBpZiAoJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcpID09ICcxNDBweCcpIHtcclxuICAgICAgICQoJy5ibG9jazVfX2J0bi10ZXh0JykuaHRtbCgn0KHQutGA0YvRgtGMJyk7XHJcbiAgICAgICAkKCcuYmxvY2s1X19idG4tYXJyJykuY3NzKCd0cmFuc2Zvcm0nLCdyb3RhdGUoMTgwZGVnKScpO1xyXG4gICAgICAgJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcsJzEwMDBweCcpO1xyXG4gICAgXHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmJsb2NrNV9fd3JhcCcpLmNzcygnbWF4LWhlaWdodCcsJzE0MHB4Jyk7XHJcbiAgICAgICQoJy5ibG9jazVfX2J0bi1hcnInKS5jc3MoJ3RyYW5zZm9ybScsJ3JvdGF0ZSgwZGVnKScpO1xyXG4gICAgICAkKCcuYmxvY2s1X19idG4tdGV4dCcpLmh0bWwoJ9Cf0L7QtNGA0L7QsdC90LXQtScpO1xyXG5cclxuICAgICAgbGV0ICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrNScpO1xyXG4gICAgICAkcGFnZS5hbmltYXRlKHtzY3JvbGxUb3A6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxuICAgICAgICAgICBcclxuICAgICB9XHJcbiAgIH0pXHJcbiB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAvL9C/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQuiDRgtC10LPRg1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuLy9jYXJ1c2VsIGZyaWVuZFxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgb3dsID0gJChcIi5vd2wtY2Fyb3VzZWwtZnJpZW5kXCIpO1xyXG4gIG93bC5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogNCxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6dHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAwOntcclxuICAgICAgICAgIGl0ZW1zOjIsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgNzY4OntcclxuICAgICAgICAgIGl0ZW1zOjMsXHJcbiAgICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgMTAyNDp7XHJcbiAgICAgICAgICBpdGVtczo0LFxyXG4gICAgICAgICAgbmF2OmZhbHNlLFxyXG4gICAgICAgICAgbG9vcDogZmFsc2VcclxuICAgICAgfVxyXG4gIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vL2FyciBpbiBmcmllbmQgYmxvY2sgc2VjdGlvblxyXG4kKCcuc2xpY2stcHJldicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZyaWVuZF9faXRlbXMnKS5zbGljaygnc2xpY2tQcmV2Jyk7XHJcbn0pXHJcblxyXG4kKCcuc2xpY2stbmV4dCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmZyaWVuZF9faXRlbXMnKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbn0pXHJcblxyXG5cclxuLy9jYXJ1c2VsIGJsb2dcclxuJChmdW5jdGlvbigpIHtcclxuICAvLyBPd2wgQ2Fyb3VzZWxcclxuICB2YXIgb3dsID0gJChcIi5vd2wtY2Fyb3VzZWwtYmxvZ1wiKTtcclxuICBvd2wub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOnRydWUsXHJcbiAgICByZXNwb25zaXZlOntcclxuICAgICAgMDp7XHJcbiAgICAgICAgICBpdGVtczoxLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDY5MDp7XHJcbiAgICAgICAgICBpdGVtczoyLFxyXG4gICAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDE6e1xyXG4gICAgICAgICAgaXRlbXM6MyxcclxuICAgICAgICAgIG5hdjpmYWxzZSxcclxuICAgICAgICAgIGxvb3A6IGZhbHNlXHJcbiAgICAgIH1cclxuICB9XHJcbiAgICBcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbi8vYnRuIGJ1cmdlclxyXG4kKGZ1bmN0aW9uKCl7XHJcbiBcclxuXHJcbiAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5jbGljayhNb2RhbClcclxuXHJcbiAgLy8gJCgnLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIC8vICAgaWYgKCAkKCcubW9kYWwtZm9ybS1hY3RpdmUnKS5sZW5ndGggPiAwICkge1xyXG4gIC8vICAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gIC8vICAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJ2aXNpYmxlXCJ9KTtcclxuICAvLyAgICAgJCgnLm92ZXJsYXknKS5oaWRlKCk7XHJcbiAgICAgIFxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgTW9kYWwoKTtcclxuICAvLyAgIH1cclxuICAvLyB9KTsgXHJcbiAgJCgnLm92ZXJsYXknKS5jbGljayhNb2RhbCk7XHJcbiAgJCgnLm1vZGFsX19jbG9zZSBzcGFuJykuY2xpY2soTW9kYWwpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gTW9kYWwoKSB7XHJcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIGlmICggJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5oYXNDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKSkge1xyXG4gICAgICQoJy50b3BsaW5lX19idXJnZXItaW1nJykucmVtb3ZlQ2xhc3MoJ3RvcGxpbmVfX2J1cmdlci1pbWctYWN0aXZlJykgXHJcbiAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICQoJy5vdmVybGF5JykuaGlkZSgpO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgJCgnLnRvcGxpbmVfX2J1cmdlci1pbWcnKS5hZGRDbGFzcygndG9wbGluZV9fYnVyZ2VyLWltZy1hY3RpdmUnKTtcclxuICAgICAkKCcubW9kYWwnKS5hZGRDbGFzcygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcclxuICAgICAkKCcub3ZlcmxheScpLnNob3coKTtcclxuICAgIH0gXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICBcclxuICAkKCcubW9kYWxfX2Zvcm0tdmFsaWRhdGlvbicpLnZhbGlkYXRlKHtcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBudW1iZXI6IHRydWUsXHJcbiAgICAgICAgbWlubGVuZ3RoOiA5LFxyXG4gICAgICAgIG1heGxlbmd0aDogOVxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXNzYWdlczoge1xyXG4gICAgICBuYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUgJ9CY0LzRjycg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG1pbmxlbmd0aDogXCLQktCy0LXQtNC40YLQtSDQvdC1INC80LXQvdC10LUgMi3RhSDRgdC40LzQstC+0LvQvtCyINCyINC/0L7Qu9C1ICfQmNC80Y8nXCJcclxuICAgICAgfSxcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0KLQtdC70LXRhNC+0L0nINC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y5cIixcclxuICAgICAgICBudW1iZXI6IFwi0J3QtdCy0LXRgNC90YvQuSDQvdC+0LzQtdGAXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCd0L7QvNC10YAg0YHQvtGB0YLQvtC40YIg0LjQtyA5INGH0LjRgdC10LtcIixcclxuICAgICAgICBtYXhsZW5ndGg6IFwi0J3QvtC80LXRgCDRgdC+0YHRgtC+0LjRgiDQuNC3IDkg0YfQuNGB0LXQu1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBlbWFpbDoge1xyXG4gICAgICAgIGVtYWlsOiBcItCd0LXQvtCx0YXQvtC00LjQvCDRhNC+0YDQvNCw0YIg0LDQtNGA0LXRgdCwIGVtYWlsXCIgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgIFxyXG4gICAgICBzZW5kQWpheEZvcm0oZm9ybSwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tYWlsLnBocCcpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2VuZEFqYXhGb3JtKGFqYXhfZm9ybSwgdXJsKSB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHVybDogICAgIHVybCwgLy91cmwg0YHRgtGA0LDQvdC40YbRiyAoc2VuZC5waHApXHJcbiAgICAgICAgICAgICAgdHlwZTogICAgIFwiUE9TVFwiLCAvL9C80LXRgtC+0LQg0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgICBkYXRhOiAkKGFqYXhfZm9ybSkuc2VyaWFsaXplKCksICAvLyDQodC10LDRgNC40LvQuNC30YPQtdC8INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGRhdGEpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LTQviDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgICAvLyAkKCcuZm9vdGVyX2J0bicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1x0XHRcdFx0XHRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7IC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJC5wYXJzZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAkKGZvcm0pLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vICQoJy5tb2RhbC1oZWFkLW5hbWUnKS5odG1sKFwi0KHQv9Cw0YHQuNCx0L4hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKCcubW9kYWwtaGVhZC1wcmljZScpLmh0bWwoXCLQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLlwiKTtcclxuICAgICAgICAgICAgICAgICAgLy8gJChcIi5tb2RhbC1vdmVybGF5MVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgLy8gJChcIi5tb2RhbDFcIikuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICQoXCIubW9kYWwxXCIpLmNzcyh7XCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwJSlcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKFwiYm9keVwiKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICQoJy53b3JraW1fX2J0bicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmhlYWRlcl9fZm9ybS12YWxpZGF0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1pbmxlbmd0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICBtaW5sZW5ndGg6IDksXHJcbiAgICAgICAgbWF4bGVuZ3RoOiA5XHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgIG5hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogXCLQn9C+0LvQtSAn0JjQvNGPJyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOXCIsXHJcbiAgICAgICAgbWlubGVuZ3RoOiBcItCS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyLdGFINGB0LjQvNCy0L7Qu9C+0LIg0LIg0L/QvtC70LUgJ9CY0LzRjydcIlxyXG4gICAgICB9LFxyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1ICfQotC10LvQtdGE0L7QvScg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjlwiLFxyXG4gICAgICAgIG51bWJlcjogXCLQndC10LLQtdGA0L3Ri9C5INC90L7QvNC10YBcIixcclxuICAgICAgICBtaW5sZW5ndGg6IFwi0J3QvtC80LXRgCDRgdC+0YHRgtC+0LjRgiDQuNC3IDkg0YfQuNGB0LXQu1wiLFxyXG4gICAgICAgIG1heGxlbmd0aDogXCLQndC+0LzQtdGAINGB0L7RgdGC0L7QuNGCINC40LcgOSDRh9C40YHQtdC7XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgZW1haWw6IFwi0J3QtdC+0LHRhdC+0LTQuNC8INGE0L7RgNC80LDRgiDQsNC00YDQtdGB0LAgZW1haWxcIiBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuICAgICAgXHJcbiAgICAgIHNlbmRBamF4Rm9ybShmb3JtLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL21haWwucGhwJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZW5kQWpheEZvcm0oYWpheF9mb3JtLCB1cmwpIHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdXJsOiAgICAgdXJsLCAvL3VybCDRgdGC0YDQsNC90LjRhtGLIChzZW5kLnBocClcclxuICAgICAgICAgICAgICB0eXBlOiAgICAgXCJQT1NUXCIsIC8v0LzQtdGC0L7QtCDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxyXG4gICAgICAgICAgICAgIGRhdGE6ICQoYWpheF9mb3JtKS5zZXJpYWxpemUoKSwgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oZGF0YSkgeyAvLyDRgdC+0LHRi9GC0LjQtSDQtNC+INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICAgICAgICAgIC8vICQoJy5mb290ZXJfYnRuJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJChmb3JtKS50cmlnZ2VyKFwicmVzZXRcIik7XHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHsgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gJCgnLm1vZGFsLWhlYWQtbmFtZScpLmh0bWwoXCLQodC/0LDRgdC40LHQviFcIik7XHJcbiAgICAgICAgICAgICAgICAgIC8vICQoJy5tb2RhbC1oZWFkLXByaWNlJykuaHRtbChcItCd0LDRiCDQvNC10L3QtdC00LbQtdGAINGB0LLRj9C20LXRgtGB0Y8g0YEg0LLQsNC80Lgg0LIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKFwiLm1vZGFsLW92ZXJsYXkxXCIpLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAkKFwiLm1vZGFsMVwiKS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgLy8gJChcIi5tb2RhbDFcIikuY3NzKHtcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDAlKVwifSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICQoXCJib2R5XCIpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgLy8gJCgnLndvcmtpbV9fYnRuJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyAkKCcuaGVhZGVyX19mb3JtJykuc3VibWl0KGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgYWxlcnQoXCJPa1wiKVxyXG4gIC8vIH0pXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmFrY2lqYV9fbGluay1ncmVlbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLmFkZENsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwiaGlkZGVuXCJ9KTtcclxuICAgIC8vJCgnLm1vZGFsLWZvcm0tb3ZlcmxheScpLnNob3coKTtcclxuICB9KVxyXG4gICQoJy5tb2RhbC1mb3JtLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnYm9keScpLmNzcyh7XCJvdmVyZmxvd1wiOlwidmlzaWJsZVwifSk7XHJcbiAgICAkKCcubW9kYWwtZm9ybScpLnJlbW92ZUNsYXNzKCdtb2RhbC1mb3JtLWFjdGl2ZScpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLmJsb2NrMy1idG5fX2J0bi1ibHVlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJy5tb2RhbC1mb3JtJykuYWRkQ2xhc3MoJ21vZGFsLWZvcm0tYWN0aXZlJyk7XHJcbiAgICAkKCdib2R5JykuY3NzKHtcIm92ZXJmbG93XCI6XCJoaWRkZW5cIn0pO1xyXG4gIH0pXHJcblxyXG4gICQoJy5ibG9jazMtYnRuX19idG4tZ3JlZW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1vZGFsLWZvcm0nKS5hZGRDbGFzcygnbW9kYWwtZm9ybS1hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5jc3Moe1wib3ZlcmZsb3dcIjpcImhpZGRlblwifSk7XHJcbiAgfSlcclxuXHJcbn0pXHJcblxyXG4iXX0=
