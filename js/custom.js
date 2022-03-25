$(function(){
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prev"></i>',
        nextArrow:'<i class="fas fa-chevron-right next"></i>'
        
      });


      $('.linker_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:2,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow:1
            }
          }
        ]
      });

      $('.card_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        prevArrow:'<i class="fas fa-chevron-left prevs"></i>',
        nextArrow:'<i class="fas fa-chevron-right nexts"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '35px',
              slidesToShow:1
            }
          }
        ]
      });

});