// Hover Multiple Elements

document.body.addEventListener( 'mouseover', function( event ) {
    if( event.target.classList.contains( 'link_about' ) ) {
        [].forEach.call(document.getElementsByClassName( 'link_about' ), function( elem ) {
            elem.classList.add( 'hover' );
        });
    }
});

document.body.addEventListener( 'mouseout', function( event ) {
    if( event.target.classList.contains( 'link_about' ) ) {
        [].forEach.call(document.getElementsByClassName( 'link_about' ), function( elem ) {
            elem.classList.remove( 'hover' );
        });
    }
});


// Pointer

$(document).mousemove(function (e) {
  $(".pointer").css({ left: e.pageX, top: e.pageY });
});

// Pointer Changing on Hover        NOT WORKING!!!

//document.querySelectorAll('link_about').addEventListener('mouseover', function() {
//  'redmouse'.src = 'linkpointer.png';
//});


//$('link_about').on('mouseover', function() {
//  $('pointer').find('img').attr('src', 'linkpointer.png');
//});


// Random Image

 $(document).ready(function() {
        $(document).keypress(function() {
            displayPics();
        });
    });


    function displayPics() {

        var imagesArray = new Array();

        imagesArray = [
            "/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png","/images/6.png","/images/7.png",
            "/images/8.png","/images/9.png","/images/10.png","/images/11.png","/images/12.png","/images/13.png","/images/14.png",
            "/images/15.png","/images/16.png","/images/17.png","/images/18.png","/images/19.png","/images/20.png","/images/21.png",
            "/images/22.png","/images/23.png","/images/24.png","/images/25.png","/images/26.png","/images/27.png","/images/28.png",
            "/images/29.png","/images/30.png","/images/31.png","/images/32.png","/images/33.png","/images/34.png","/images/35.png",
            "/images/36.png","/images/37.png","/images/38.png","/images/39.png","/images/40.png","/images/41.png","/images/42.png",
            "/images/43.png","/images/44.png","/images/45.png","/images/46.png","/images/47.png","/images/48.png","/images/49.png",
            "/images/50.png","/images/51.png","/images/52.png","/images/53.png","/images/54.png","/images/55.png","/images/56.png",
        ]

        var num = Math.floor(Math.random() * imagesArray.length);
        var img = imagesArray[num];

        $("#picture").attr("src", img);
    }

    window.onload = init;
