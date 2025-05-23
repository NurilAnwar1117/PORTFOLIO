/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);

// ===================================
 const tags = [
    "HTML", "CSS", "JavaScript", "Laravel", "React", "Bootstrap", "Tailwind",
    "MySQL", "XAMPP", "Laragon", "Photoshop", "Illustrator", "Canva", "Figma",
    "CorelDRAW", "Word", "Excel", "Google Workspace", "Zoom", "Google Meet", "Discord", "GitHub"
  ];

  const radius = 150;
  const sphere = document.getElementById('tagsphere');
  const tagElements = [];

  // generate tags on sphere
  tags.forEach((tag, i) => {
    const el = document.createElement('div');
    el.className = 'tag';
    el.innerText = tag;

    const phi = Math.acos(-1 + (2 * i + 1) / tags.length);
    const theta = Math.sqrt(tags.length * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    sphere.appendChild(el);
    tagElements.push({ el, x, y, z });
  });

  // animate rotation
  let angleX = 0.002;
  let angleY = 0.002;

  function rotate() {
    const sinX = Math.sin(angleX), cosX = Math.cos(angleX);
    const sinY = Math.sin(angleY), cosY = Math.cos(angleY);

    tagElements.forEach(t => {
      let y = t.y * cosX - t.z * sinX;
      let z = t.y * sinX + t.z * cosX;
      let x = t.x * cosY - z * sinY;
      z = t.x * sinY + z * cosY;

      t.x = x;
      t.y = y;
      t.z = z;

      const scale = 300 / (300 + z);
      t.el.style.transform = `translate3d(${x * scale}px, ${y * scale}px, 0) scale(${scale})`;
      t.el.style.zIndex = Math.floor(z);
      t.el.style.opacity = `${(z + radius) / (2 * radius)}`;
    });

    requestAnimationFrame(rotate);
  }

  rotate();

  // mouse move interaction
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    angleY = x * 0.01;
    angleX = y * 0.01;
  });

//   ===================================
 const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/2 / 400, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth/2, 400);
  document.getElementById('rocket-canvas').appendChild(renderer.domElement);

  // Lighting
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // Model Rocket (dummy - box as placeholder)
  const geometry = new THREE.ConeGeometry(1, 3, 32);
  const material = new THREE.MeshStandardMaterial({ color: '#9333ea' });
  const rocket = new THREE.Mesh(geometry, material);
  scene.add(rocket);

  camera.position.z = 5;

  // Controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

//   ==========
