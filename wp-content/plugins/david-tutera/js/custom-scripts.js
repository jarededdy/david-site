//Rotating our rocket on the home page
jQuery(function() {
    var rotation = 0,
        scrollLoc = jQuery(document).scrollTop();
    jQuery(window).scroll(function() {
        var newLoc = jQuery(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation -= diff / 12, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";


        jQuery(".vsg-rocket").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
        //console.log("Rocket Rotation is " + rotation + " Diff is " + diff);

    });
});

// Rotating our rocket icons on the home page
jQuery(function() {
    var rotation = 0,
        scrollLoc = jQuery(document).scrollTop();
    jQuery(window).scroll(function() {
        var newLoc = jQuery(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff / 12, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";


        jQuery(".vsg-rocket-icons").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
        //console.log("Icon Rotation is " + rotation + " Diff is " + diff);

    });
});
// Changing the phone number to black
jQuery(function() {
    var whatYearIsIt = new Date().getFullYear();
    jQuery('#current-year').html(whatYearIsIt);
    jQuery(window).scroll(function() {

        if (jQuery(document).scrollTop() != 0) {
            jQuery('head').append('<style>.elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item:hover, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item.elementor-item-active, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item.highlighted, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item:focus {color : #00aeef;}.elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:before, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:after { background-color: #00aeef;} #vsg-header-phone, #vsg-header-phone a, #vsg-header-phone a:visited, #vsg-header-phone a:active, #vsg-header-phone a:focus { color:#000;}</style>');
            jQuery('#transparent-header-logo').attr('src', '/wp-content/uploads/2018/06/vsg-marketing-logo-retina.png');
        } else {
            jQuery('head').append('<style>.elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item:hover, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item.elementor-item-active, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item.highlighted, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main .elementor-item:focus {color : #fff;}.elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:before, .elementor-318 .elementor-element.elementor-element-471b62d6 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:after { background-color: #fff;} #vsg-header-phone, #vsg-header-phone a, #vsg-header-phone a:visited, #vsg-header-phone a:active, #vsg-header-phone a:focus { color:#fff;}</style>');
            jQuery('#transparent-header-logo').attr('src', '/wp-content/uploads/2018/06/vsg-marketing-logo-black-retina.png');
        }

        //console.log("Header phone number should be black.")
    });
});



jQuery(function() {
    // Run this when the page loads
    var getWinWidth = window.innerWidth; // get window width
    console.log("Window width is " + getWinWidth);
    var setImgWidth = getWinWidth * 2 + 200;
    jQuery('#vsg-sliding-rocket').css('width', setImgWidth);
    jQuery('#grey-sliding-rocket').css('width', setImgWidth);
    console.log("Image width should be " + setImgWidth);

    // Run this when the user resizes the window
    window.addEventListener("resize", function() {
        var getWinWidth = window.innerWidth; // get window width
        console.log("Window width is " + getWinWidth);
        var setImgWidth = getWinWidth * 2 + 200; // set image width to window width * 2 + 200px(this is the size of the rocket)
        jQuery('#vsg-sliding-rocket').css('width', setImgWidth); // set image width for the VSG rocket
        jQuery('#grey-sliding-rocket').css('width', setImgWidth); // set image width for grey rocket
        console.log("Image width should be " + setImgWidth);
    });
});


jQuery(document).ready(function() {
    if (window.location.href.indexOf("our-culture") > -1) {
        if (jQuery(window).width() > 767) {



            jQuery(document.getElementsByClassName('swiper-slide')[13]).addClass('highlightMember');

            document.querySelector('.elementor-main-swiper').swiper.on('slideChange', function() {
                console.log(this.slides[this.activeIndex + 4]);

                jQuery(this.slides).removeClass('highlightMember');
                jQuery(this.slides[this.activeIndex + 4]).addClass('highlightMember');
                var currentMemberIndex = jQuery('.highlightMember').data("swiper-slide-index");
                console.log(currentMemberIndex);
                switch (currentMemberIndex) {

                    case 0:
                        jQuery('#team-member-name-title p').html("JARED EDDY<br/>WEB DEVELOPER");
                        break;
                    case 1:
                        jQuery('#team-member-name-title p').html("SARAH BRADSHAW<br/>GRAPHIC DESIGNER");
                        break;
                    case 2:
                        jQuery('#team-member-name-title p').html("MARISSA BLANDFORD<br/>GRAPHIC DESIGNER");
                        break;
                    case 3:
                        jQuery('#team-member-name-title p').html("ASHLEE WEATHERFORD<br/>PROJECT MANAGER");
                        break;
                    case 4:
                        jQuery('#team-member-name-title p').html("DOUG BURTON<br/>HEAD COACH");
                        break;
                    case 5:
                        jQuery('#team-member-name-title p').html("ALEX DEVINE<br/>ACCOUNT MANAGER");
                        break;
                    case 6:
                        jQuery('#team-member-name-title p').html("KATIE PRICE<br/>ACCOUNT MANAGER");
                        break;
                    case 7:
                        jQuery('#team-member-name-title p').html("EMILY SHERWOOD<br/>ACCOUNT COORDINATOR");
                        break;
                    case 8:
                        jQuery('#team-member-name-title p').html("SEAN DONOHUE<br/>PRODUCTION MANAGER");

                };
            });

        } else {
            jQuery(document.getElementsByClassName('swiper-slide-active')).addClass('highlightMember');
            jQuery('#team-member-name-title p').html("JARED EDDY<br/>WEB DEVELOPER");
            document.querySelector('.elementor-main-swiper').swiper.on('slideChange', function() {
                console.log(this.slides[this.activeIndex]);

                jQuery(this.slides).removeClass('highlightMember');
                jQuery(this.slides[this.activeIndex]).addClass('highlightMember');
                var currentMemberIndex = jQuery('.highlightMember').data("swiper-slide-index");
                console.log(currentMemberIndex);
                switch (currentMemberIndex) {

                    case 0:
                        jQuery('#team-member-name-title p').html("JARED EDDY<br/>WEB DEVELOPER");
                        break;
                    case 1:
                        jQuery('#team-member-name-title p').html("SARAH BRADSHAW<br/>GRAPHIC DESIGNER");
                        break;
                    case 2:
                        jQuery('#team-member-name-title p').html("MARISSA BLANDFORD<br/>GRAPHIC DESIGNER");
                        break;
                    case 3:
                        jQuery('#team-member-name-title p').html("ASHLEE WEATHERFORD<br/>PROJECT MANAGER");
                        break;
                    case 4:
                        jQuery('#team-member-name-title p').html("DOUG BURTON<br/>HEAD COACH");
                        break;
                    case 5:
                        jQuery('#team-member-name-title p').html("ALEX DEVINE<br/>ACCOUNT MANAGER");
                        break;
                    case 6:
                        jQuery('#team-member-name-title p').html("KATIE PRICE<br/>ACCOUNT MANAGER");
                        break;
                    case 7:
                        jQuery('#team-member-name-title p').html("EMILY SHERWOOD<br/>ACCOUNT COORDINATOR");
                        break;
                    case 8:
                        jQuery('#team-member-name-title p').html("SEAN DONOHUE<br/>PRODUCTION MANAGER");

                };
            });
        }
    }
});