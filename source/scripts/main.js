$(document).ready(function() {
    if ($(window).innerWidth() > 1024) {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['home', 'about', 'signin', 'contact'],
            sectionsColor: ['#ecf0f1', '#2ebe21', '#2C3E50', '#51bec4'],
            navigation: {
                'position': 'right',
                'tooltips': ['Home', 'About', 'Signin', 'Contact']
            },
            afterLoad: function(anchorLink, index) {
                if (index === 1) {
                    console.log("1")
                } else if (index === 2) {
                    
                } else if (index === 3) {
                    $("#signinvideo")[0].play();
                } else if (index === 4) {

                }
            },

            


        });
    }else{
        $("#signinvideo")[0].play();
        var navigateArr = ["#section1", "#section2", "#section3", "#section4"];
        $("ul#menu > li").each(function(i){ 
            $(this).find("a").attr("href",navigateArr[i]);  
        });

        $("ul#menu > li").click(function(){
            $("ul#menu > li").removeClass("active");
            $(this).addClass("active");
        })
    }



});



var homeSection = require('../components/home/home.js');
homeSection();


var infoSection = require('../components/info/info.js');
infoSection();


var writerForm = require('../components/writersform/writerform.js');
writerForm();


var contentform = require('../components/contentform/contentform.js');
contentform();

