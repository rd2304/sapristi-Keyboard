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


// Random Image

 $(document).ready(function() {
        $(document).keypress(function() {
            displayPics();
        });
    });


    function displayPics() {

        var imagesArray = new Array();

        imagesArray = [
            "images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png","images/6.png","images/7.png",
            "images/8.png","images/9.png","images/10.png","images/11.png","images/12.png","images/13.png","images/14.png",
            "images/15.png","images/16.png","images/17.png","images/18.png","images/19.png","images/20.png","images/21.png",
            "images/22.png","images/23.png","images/24.png","images/25.png","images/26.png","images/27.png","images/28.png",
            "images/29.png","images/30.png","images/31.png","images/32.png","images/33.png","images/34.png","images/35.png",
            "images/36.png","images/37.png","images/38.png","images/39.png","images/40.png","images/41.png","images/42.png",
            "images/43.png","images/44.png","images/45.png","images/46.png","images/47.png","images/48.png","images/49.png",
            "images/50.png","images/51.png","images/52.png","images/53.png","images/54.png","images/55.png","images/56.png",
            "images/57.png","images/58.png","images/59.png","images/60.png","images/61.png","images/62.png","images/64.png",
            "images/64.png","images/65.png","images/66.png","images/67.png","images/68.png","images/69.png","images/70.png",
            "images/71.png","images/72.png","images/73.png","images/74.png","images/75.png","images/76.png","images/77.png",
            "images/78.png","images/79.png","images/80.png","images/81.png","images/82.png","images/83.png","images/84.png",
            "images/85.png","images/86.png","images/87.png","images/88.png","images/89.png","images/90.png","images/91.png",
            "images/92.png","images/93.png","images/94.png","images/95.png","images/96.png","images/97.png","images/98.png",
            "images/99.png","images/100.png","images/101.png","images/102.png","images/103.png","images/104.png","images/105.png",
            "images/106.png","images/107.png","images/108.png","images/109.png","images/110.png","images/111.png","images/112.png",
            "images/113.png","images/114.png","images/115.png","images/116.png","images/117.png","images/118.png","images/119.png",
            "images/120.png","images/121.png","images/122.png","images/123.png","images/124.png","images/125.png","images/126.png",
            "images/127.png","images/128.png","images/129.png","images/130.png","images/131.png","images/132.png","images/133.png",
            "images/134.png","images/135.png","images/136.png","images/137.png","images/138.png","images/139.png","images/140.png",
            "images/141.png","images/142.png","images/143.png","images/144.png"
        ]

        var num = Math.floor(Math.random() * imagesArray.length);
        var img = imagesArray[num];

        $("#picture").attr("src", img);
    }
