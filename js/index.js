$(document).ready(function(){
     // owlCarousel
     $('.happy-customer-active').owlCarousel({
          loop:true,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayDuration:2000,
          slideSpeed: 3000,
          items:1,
          navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          nav:true,
          dots:false,
          responsive:{
          0:{
               items:1
          },
          767:{
               items:1
          },
          992:{
               items:1
          },
          1024:{
               item:1
          },
          }
     })
     // mashonary
     $('.mashonary_active').isotope({
          itemSelector: '.grid-item',
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
            horizontalOrder: true
          }
        })
     //    brands
     $('.active_brands').owlCarousel({
          loop:true,
          autoplay:false,
          autoplayTimeout:2000,
          autoplayDuration:2000,
          slideSpeed: 3000,
          items:4,
          nav:false,
          dots:false,
          responsive:{
          0:{
               items:1
          },
          767:{
               items:2
          },
          992:{
               items:4
          }
          }
     })
     // mean menu
     // meanmenu
     $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: "1024"
     });
})
// js code
let bar = document.querySelector('#bar');
let mainMenu = document.querySelector('.main-menu');
let overlaay = document.querySelector('.overlay-bg');
bar.addEventListener('click',()=>{
     bar.classList.toggle('fa-times');
     mainMenu.classList.toggle('acitve');
     overlaay.classList.toggle('actived');
})
// sticky header
window.addEventListener('scroll', function() {
     const header = document.querySelector('.mainHeader');
     const scrollPosition = window.scrollY;
   
     if (scrollPosition > 1) {
       header.classList.add('sticky');
     } else {
       header.classList.remove('sticky');
     }
   });
   