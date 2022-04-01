/* global $ */
import $ from 'jquery';
import { slick } from 'slick-carousel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function support_format_webp() {
  var elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}

$(function() {
    if (!support_format_webp()) {
      $('body').addClass('webp-not-support');
    }

      $('.scrollme').on('click', function(event) {
        event.preventDefault();
        $('.navbar').removeClass('menu-open');
        var $this = $(this.hash);
        $('html, body').animate({
            scrollTop: $this.offset().top
        }, 300);
        console.log('teste');
    });

    $('.colaboradores-ganha').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        arrows: false,
        draggable: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });

    $('.empresa-ganha').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        arrows: false,
        draggable: false,
        rtl: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
});


ScrollTrigger.matchMedia({
    '(min-width: 992px)': function() {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.parallax',
                start: 'center center',
                end: 'bottom top',
                scrub: true,
                pin: true
            }
        })
        .from('.delayed-section', { y: innerHeight * .25 })
    }
});