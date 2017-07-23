$(document).ready(function() {
    if ($(window).innerWidth() > 1024) {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['home', 'about', 'signin', 'contact'],
            sectionsColor: ['#ecf0f1', '#2ebe21', '#2C3E50', '#51bec4'],
            navigation: {
                'position': 'right',
                'tooltips': ['Home', 'What We Do', 'Who We Are', 'Super']
            },
            afterLoad: function(anchorLink, index) {
                if (index === 1) {
                    console.log("1")
                } else if (index === 2) {
                    TweenMax.to('.info__graphic img', .4, { opacity: 1, x: 0, ease: Back.easeOut });
                    TweenMax.to('.info__content', .8, { x: 0, ease: Back.easeOut });
                } else if (index === 3) {
                    $("#signinvideo")[0].play();
                } else if (index === 4) {

                }
            },

            


        });
    }else{
        $("#signinvideo")[0].play();
    }



});



var homeSection = require('../components/home/home.js');
homeSection();


var infoSection = require('../components/info/info.js');
infoSection();