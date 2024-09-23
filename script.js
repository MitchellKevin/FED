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
