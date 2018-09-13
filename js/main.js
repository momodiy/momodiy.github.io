/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */
/* eslint-env browser */
(function ($) {
    'use strict'

    /* ---------------------------------------------------- */
    /* Preloader
      ------------------------------------------------------ */
    $(window).load(function () {
        // will first fade out the loading animation
        $('#loader').fadeOut('slow', function () {
            // will fade out the whole DIV that covers the website.
            $('#preloader').delay(300).fadeOut('slow')
        })
    })

    /* ---------------------------------------------------- */
    /* FitText Settings
      /* Automatic adaptation the length of drop-down menu tab
      ------------------------------------------------------ */
    setTimeout(function () {
        $('#intro h1').fitText(1, {minFontSize: '42px', maxFontSize: '84px'})
    }, 100)

    /* ---------------------------------------------------- */
    /* FitVids
      ------------------------------------------------------ */
    $('.fluid-video-wrapper').fitVids()

    /* ---------------------------------------------------- */
    /* Owl Carousel
      ------------------------------------------------------ */
    $('#owl-slider').owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom: [ // Responsive design
            [0, 1],
            [700, 2],
            [960, 3]
        ],
        navigationText: true
    })

    /* ----------------------------------------------------- */
    /* Alert Boxes
        ------------------------------------------------------- */
    // $('.alert-box').on('click', '.close', function () {
    //     $(this).parent().fadeOut(5000);
    // });

    /* ----------------------------------------------------- */
    /* Stat Counter
      /* Counter animation
        ------------------------------------------------------- */
    let statSection = $('#stats')
    let stats = $('.stat-count')

    statSection.waypoint({

        handler: function (direction) {
            if (direction === 'down') {
                stats.each(function () {
                    var $this = $(this)

                    $({Counter: 0}).animate({Counter: $this.text()}, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (curValue) {
                            $this.text(Math.ceil(curValue))
                        }
                    })
                })
            }

            this.destroy() // trigger once only
        },

        offset: '95%' // Set how much to trigger the event from the top（when to execution the handler function）

    })

    /* ---------------------------------------------------- */
    /*  Masonry
      ------------------------------------------------------ */
    let containerProjects = $('#folio-wrapper')

    containerProjects.imagesLoaded(function () {
        containerProjects.masonry({
            itemSelector: '.folio-item',
            resize: true
        })
    })

    /* ---------------------------------------------------- */
    /*  Modal Popup
      ------------------------------------------------------ */
    $('.item-wrap a').magnificPopup({

        type: 'inline',
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

    })

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault()
        $.magnificPopup.close()
    })

    /* ----------------------------------------------------- */
    /* Navigation Menu
   ------------------------------------------------------ */
    let toggleButton = $('.menu-toggle')
    let nav = $('.main-navigation')

    // toggle button
    toggleButton.on('click', function (e) {
        e.preventDefault()
        toggleButton.toggleClass('is-clicked')
        nav.slideToggle()
    })

    // nav items
    nav.find('li a').on('click', function () {
        // update the toggle button
        toggleButton.toggleClass('is-clicked')
        // fadeout the navigation panel
        nav.fadeOut()
    })

    /* ---------------------------------------------------- */
    /* Highlight the current section in the navigation bar
      ------------------------------------------------------ */
    let sections = $('section')
    let navigationlinks = $('#main-nav-wrap li a')

    sections.waypoint({

        handler: function (direction) {
            let activeSection

            activeSection = $('section#' + this.element.id)

            if (direction === 'up') activeSection = activeSection.prev()

            let activeLink = $('#main-nav-wrap a[href="#' + activeSection.attr('id') + '"]')

            navigationlinks.parent().removeClass('current')
            activeLink.parent().addClass('current')
        },

        offset: '20%'
    })

    /* ---------------------------------------------------- */
    /* Smooth Scrolling
      ------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault()

        let target = this.hash
        let $target = $(target)

        $('html, body').stop().animate({ // stop(): stop animation
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            location.hash = target // anchor jump
        })
    })

    /* ---------------------------------------------------- */
    /*  Placeholder Plugin Settings
      ------------------------------------------------------ */
    $('input, textarea, select').placeholder() // let the fuck IE support the placeholder

    /* ---------------------------------------------------- */
    /*  contact form
      ------------------------------------------------------ */

    /* local validation */
    $('#contactForm').validate({

        /* submit via ajax */
        submitHandler: function (form) {
            console.log(form)

            // let sLoader = $('#submit-loader')

            /*
                     * jQuery serialize()
                     * function: Serialize form values, create URL-encoded text strings
                     * e.g. a=1&b=2&c=3&d=4&e=5
                     * */
            // $.ajax({
            //
            //     type: "POST",
            //     url: "inc/sendEmail.php",
            //     data: $(form).serialize(),
            //     beforeSend: function () {
            //
            //         sLoader.fadeIn();
            //
            //     },
            //     success: function (msg) {
            //         console.log(msg);
            //
            //         // Message was sent
            //         if (msg === 'OK') {
            //             sLoader.fadeOut();
            //             $('#message-warning').hide();
            //             $('#contactForm').fadeOut();
            //             $('#message-success').fadeIn();
            //         }
            //         // There was an error
            //         else {
            //             sLoader.fadeOut();
            //             $('#message-warning').html(msg).fadeIn();
            //         }
            //
            //     },
            //     error: function () {
            //
            //         sLoader.fadeOut();
            //         $('#message-warning').html("Something went wrong. Please try again.").fadeIn();
            //
            //     }
            //
            // });
        }

    })

    /* ----------------------------------------------------- */
    /* Back to top
   ------------------------------------------------------- */
    let pxShow = 500 // height on which the button will show
    let fadeInTime = 400 // how slow/fast you want the button to show
    let fadeOutTime = 400 // how slow/fast you want the button to hide

    // Show or hide the sticky footer button
    $(document).scroll(function () {
        if (!($('#header-search').hasClass('is-visible'))) {
            if ($(document).scrollTop() >= pxShow) {
                $('#go-top').fadeIn(fadeInTime)
            } else {
                $('#go-top').fadeOut(fadeOutTime)
            }
        }
    })

    $('.button-primary').click(() => swal('Operation rejection', 'Suppose you have already downloaded a resume...', 'warning'))
})(jQuery)
