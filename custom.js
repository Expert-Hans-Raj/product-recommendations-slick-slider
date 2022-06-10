  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
  <script src="{{ 'custom.js' | asset_url }}" defer="defer"></script>


 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

$(document).ready(function (){

  setTimeout(function() {
    $('.recommendation_slider').slick(
      {
        infinite: true,
        slidesToShow: 4, 
        autoplay: true,
        dots: false,
        slidesToScroll: 1, 
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerPadding: '40px',
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerPadding: '40px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      })

  }, 2500);
});
