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

  let vid = document.getElementById("interactiveVideo");

  function playVid(){
    vid.play();
  }

  function pauseVid(){
    vid.pause();
  }

  document.body.onkeydown=function userData(e){
    if(e.keyCode==32){
      playVid()
    }
  }