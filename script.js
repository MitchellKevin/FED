function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.addEventListener("mousemove", parallax);

  function parallax(e) {
      var layers = document.querySelectorAll('.layer');
      Array.prototype.forEach.call(layers, function(layer) {
          var speed = layer.getAttribute('data-speed');
  
          var x = (window.innerWidth - e.pageX * speed) / 200;
          var y = (window.innerHeight - e.pageY * speed) / 200;
  
          layer.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
          layer.style.backgroundPosition = x + "px " + y + "px";
      });
  }

  // let vid = document.getElementById("interactiveVideo");

  // function playVid(){
  //   vid.play();
  // }

  // function pauseVid(){
  //   vid.pause();
  // }

  // document.body.onkeydown = function userData(e){
  //   if(e.keyCode==66){
  //     playVid()
  //     console.log("werkt")
  //   }
  //   else{
  //     pauseVid()
  //   }
  // }
  document.addEventListener('DOMContentLoaded', function () {
    let vid = document.getElementById("interactiveVideo");
    let isSpacebarDown = false;

    function playVid() {
        vid.play();
    }

    function pauseVid() {
        vid.pause();
    }

    function restartVid() {
        vid.currentTime = 0; // Reset video to the beginning
        vid.play(); // Optionally start playing again
    }

    // Detect if the spacebar (keyCode 32) is pressed
    document.body.addEventListener('keydown', function(e) {
        if (e.keyCode === 32) { // Spacebar pressed
            isSpacebarDown = true;
        }
    });

    // Detect if the spacebar is released
    document.body.addEventListener('keyup', function(e) {
        if (e.keyCode === 32) { // Spacebar released
            isSpacebarDown = false;
        }
    });

    // Set up an interval to check the spacebar status continuously
    setInterval(function() {
        if (isSpacebarDown) {
            playVid(); // Play the video if spacebar is pressed
        } else {
            restartVid(); // Restart the video if spacebar is not pressed
        }
    }, 1); // Check every 100ms
});

let topSpeedCounter = document.querySelector("section:nth-of-type(7) video");


function changeCarColor_to_red(){
    document.getElementById("firstImg").src= "img/img-front34.png", document.getElementById("firstImg").alt="Sky view of the front of a mcLaren 750s in the color red";
    document.getElementById("secondImg").src= "img/img-side.png", document.getElementById("secondImg").alt="The side of a mcLaren 750s in the color red";
    document.getElementById("thirdImg").src= "img/img-rear.png", document.getElementById("thirdImg").alt="The side of a mcLaren 750s in the color red";
    document.getElementById("forthImg").src= "img/EXT_Rear_203Qtr.png", document.getElementById("forthImg").alt="The side of a mcLaren 750s in the color red";
    document.getElementById("fifthImg").src= "img/img-front.png", document.getElementById("fifthImg").alt="The side of a mcLaren 750s in the color red";
}

function changeCarColor_to_yellow(){
    document.getElementById("firstImg").src= "img/EXT_Front_203Qtr_1.png", document.getElementById("firstImg").alt="Sky view of the front of a mcLaren 750s in the color yellow";
    document.getElementById("secondImg").src= "img/EXT_Side.png", document.getElementById("secondImg").alt="The side of a mcLaren 750s in the color yellow";
    document.getElementById("thirdImg").src= "img/EXT_Rear.png", document.getElementById("thirdImg").alt="The side of a mcLaren 750s in the color yellow";
    document.getElementById("forthImg").src= "img/EXT_Rear_203Qtr_1.png", document.getElementById("forthImg").alt="The side of a mcLaren 750s in the color yellow";
    document.getElementById("fifthImg").src= "img/EXT_Front.png", document.getElementById("fifthImg").alt="The side of a mcLaren 750s in the color yellow";
}

function changeCarColor_to_purple(){
    document.getElementById("firstImg").src= "img/EXT_Front_203Qtr1.png", document.getElementById("firstImg").alt="Sky view of the front of a mcLaren 750s in the color purple";
    document.getElementById("secondImg").src= "img/EXT_Side1.png", document.getElementById("secondImg").alt="The side of a mcLaren 750s in the color purple";
    document.getElementById("thirdImg").src= "", document.getElementById("thirdImg").alt="The side of a mcLaren 750s in the color red";
    document.getElementById("forthImg").src= "img/EXT_Rear_203Qtr1.png", document.getElementById("forthImg").alt="The side of a mcLaren 750s in the color purple";
    document.getElementById("fifthImg").src= "img/EXT_Front1.png", document.getElementById("fifthImg").alt="The side of a mcLaren 750s in the color purple";
}

function changeCarColor_to_grey(){
    document.getElementById("firstImg").src= "img/EXT_Front_203Qtr.png", document.getElementById("firstImg").alt="Sky view of the front of a mcLaren 750s in the color grey";
    document.getElementById("secondImg").src= "", document.getElementById("secondImg").alt="The side of a mcLaren 750s in the color grey";
    document.getElementById("thirdImg").src= "", document.getElementById("thirdImg").alt="The side of a mcLaren 750s in the color grey";
    document.getElementById("forthImg").src= "img/EXT_Rear_203Qtr.png", document.getElementById("forthImg").alt="The side of a mcLaren 750s in the color grey";
    document.getElementById("fifthImg").src= "", document.getElementById("fifthImg").alt="The side of a mcLaren 750s in the color grey";
}

function changeCarColor_to_white(){
    document.getElementById("firstImg").src= "img/EXT_Front_203Qtr3.png", document.getElementById("firstImg").alt="Sky view of the front of a mcLaren 750s in the color white";
    document.getElementById("secondImg").src= "img/EXT_Side3.png", document.getElementById("secondImg").alt="The side of a mcLaren 750s in the color white";
    document.getElementById("thirdImg").src= "img/EXT_Rear3.png", document.getElementById("thirdImg").alt="The side of a mcLaren 750s in the color white";
    document.getElementById("forthImg").src= "img/EXT_Rear_203Qtr3.png", document.getElementById("forthImg").alt="The side of a mcLaren 750s in the color white";
    document.getElementById("fifthImg").src= "img/EXT_Front3.png", document.getElementById("fifthImg").alt="The side of a mcLaren 750s in the color white";
}

// Add nog een class selecter en querySelecter