var url_mobile = "http://app.nailsup.com.br";
    (function (a, b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) window.location = b
    })(navigator.userAgent || navigator.vendor || window.opera, url_mobile);

$(document).ready(function () {

    "use strict";
    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


    /*-- =============================================== -->
    <!-- ========== bootstrap scrollspy ========== -->
    <!-- =============================================== --> */


    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });



    /*<!-- =============================================== -->
    <!-- ========== scrollTop.js ========== -->
    <!-- =============================================== -->*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });



    /*<!-- =============================================== -->
    <!-- ========== scrolldown.js ========== -->
    <!-- =============================================== -->*/

    $('.scrolldown a').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    /*<!-- =============================================== -->
    <!-- ========== navbardown.js ========== -->
    <!-- =============================================== -->*/

    $('.nav a').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });






    /*<!-- =============================================== -->
    <!-- ========== fancy box ========== -->
    <!-- =============================================== -->*/



    //
    //	$(".youtube-media").on("click", function(e) {
    //		var jWindow = $(window).width();
    //		if (jWindow <= 410) {
    //			return;
    //		}
    //		$.fancybox({
    //			href: this.href,
    //			padding: 4,
    //			type: "iframe",
    //			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    //		});
    //		return false;
    //	});



    /*<!-- =============================================== -->
    <!-- ========== portfolio section ========== -->
    <!-- =============================================== -->*/



    $('#portfolio a').nivoLightbox({
        effect: 'fadeScale'
    });



    /*<!-- =============================================== -->
    <!-- ========== owlcarousel team ========== -->
    <!-- =============================================== -->*/




    $(".gallery_carousel").owlCarousel({

        /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],

        pagination: true,
        paginationNumbers: false,


        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window

    });



    $(".main_testimonial_text").owlCarousel({

        /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: true,
        paginationNumbers: false,
        singleItem: true,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window

    });


    new WOW().init();

});






//<!-- =============================================== -->
//<!-- ========== Navbar ========== -->
//<!-- =============================================== -->


jQuery(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    var batas = 800;
    var logo = 'images/logo.png';
    var logoScroll = 'images/logo2.png';
    //alert(batas);

    if (top > batas) {
        jQuery('.main-menu').addClass('tiny');
        jQuery('.main-menu').css('opacity', '1');
        jQuery('.navbar-brand img').attr('src', logoScroll);
    } else {
        jQuery('.main-menu').removeClass('tiny');
        jQuery('.navbar-brand img').attr('src', logo);
    }
});


//
//<!-- =============================================== -->
//<!-- ========== Map ========== -->
//<!-- =============================================== -->


$(document).ready(function () {


    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#ec46c0"
                }, {
                    "visibility": "on"
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }


});
