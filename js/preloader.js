$(window).on('load', function(){setTimeout(function(){$(".loader-page").css({visibility: "hidden", opacity: "0"})}, 2000);});let animData={wrapper: document.querySelector('#animationWindow'), animType: 'svg', loop: true, prerender: true, autoplay: true, path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'};let anim=bodymovin.loadAnimation(animData);anim.setSpeed(3.4);