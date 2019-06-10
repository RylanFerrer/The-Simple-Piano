var amountOfKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < amountOfKeys; i++)
{
  document.querySelectorAll(".key")[i].addEventListener("click",function() {
      var buttonInnerHtml = this.textContent;
      makeSoundandAnimate(buttonInnerHtml);




  });
}

document.addEventListener("keydown" ,function(event){

  makeSoundandAnimate(event.key);


});


  function makeSoundandAnimate(key) {

    switch (key) {

      case "q":
      var C4 = new Audio('sounds/Db4.mp3');
      C4.play();

      var C4key = document.querySelector(".C4-key");

      C4key.classList.add("active");
      setTimeout(function(){
        C4key.classList.remove("active");
      }, 100);



      break;

      case "2":
      var Db4 = new Audio('sounds/Db4.mp3');
      Db4.play();

      var Db4key = document.querySelector(".Db4-key");

      Db4key.classList.add("active");
      setTimeout(function(){
        Db4key.classList.remove("active");
      }, 100);

      break;

      case "w":
      var D4 = new Audio('sounds/d4.mp3');
      D4.play();

      var D4key = document.querySelector(".D4-key");

      D4key.classList.add("active");
      setTimeout(function(){
        D4key.classList.remove("active");
      }, 100);

      break;

      case "3":
      var Eb4 = new Audio('sounds/Eb4.mp3');
      Eb4.play();

      var Eb4key = document.querySelector(".Eb4-key");

      Eb4key.classList.add("active");
      setTimeout(function(){
        Eb4key.classList.remove("active");
      }, 100);

      break;

      case "e":
      var E4 = new Audio('sounds/E4.mp3');
      E4.play();

      var E4key = document.querySelector(".E4-key");

      E4key.classList.add("active");
      setTimeout(function(){
        E4key.classList.remove("active");
      }, 100);

      break;

      case "r":
      var F4 = new Audio('sounds/F4.mp3');
      F4.play();

      var F4key = document.querySelector(".F4-key");

      F4key.classList.add("active");
      setTimeout(function(){
        F4key.classList.remove("active");
      }, 100);
      break;

      case "5":
      var Gb4 = new Audio('sounds/Gb4.mp3');
      Gb4.play();
      var Gb4key = document.querySelector(".Gb4-key");

      Gb4key.classList.add("active");
      setTimeout(function(){
        Gb4key.classList.remove("active");
      }, 100);
      break;

      case "t":
      var G4 = new Audio('sounds/G4.mp3');
      G4.play();

      var G4key = document.querySelector(".G4-key");

      G4key.classList.add("active");
      setTimeout(function(){
        G4key.classList.remove("active");
      }, 100);
      break;

      case "6":
      var Ab4 = new Audio('sounds/Ab4.mp3');
      Ab4.play();

      var Ab4key = document.querySelector(".Ab4-key");

      Ab4key.classList.add("active");
      setTimeout(function(){
        Ab4key.classList.remove("active");
      }, 100);
      break;

      case "y":
      var A4 = new Audio('sounds/A4.mp3');
      A4.play();

      var A4key = document.querySelector(".A4-key");

      A4key.classList.add("active");
      setTimeout(function(){
        A4key.classList.remove("active");
      }, 100);
      break;

      case "7":
      var Bb4 = new Audio('sounds/Bb4.mp3');
      Bb4.play();

      var Bb4key = document.querySelector(".Bb4-key");

      Bb4key.classList.add("active");
      setTimeout(function(){
        Bb4key.classList.remove("active");
      }, 100);
      break;

      case "u":
      var B4 = new Audio('sounds/B4.mp3');
      B4.play();

      var B4key = document.querySelector(".B4-key");

      B4key.classList.add("active");
      setTimeout(function(){
        B4key.classList.remove("active");
      }, 100);
      break;

      case "i":
      var C5 = new Audio('sounds/C5.mp3');
      C5.play();

      var C5key = document.querySelector(".C5-key");

      C5key.classList.add("active");
      setTimeout(function(){
        C5key.classList.remove("active");
      }, 100);
      break;

      case "9":
      var Db5 = new Audio('sounds/Db5.mp3');
      Db5.play();

      var Db5key = document.querySelector(".Db5-key");

      Db5key.classList.add("active");
      setTimeout(function(){
        Db5key.classList.remove("active");
      }, 100);
      break;

      case "o":
      var D5 = new Audio('sounds/D5.mp3');
      D5.play();

      var D5key = document.querySelector(".D5-key");

      D5key.classList.add("active");
      setTimeout(function(){
        D5key.classList.remove("active");
      }, 100);
      break;

      case "0":
      var Eb5 = new Audio('sounds/Eb5.mp3');
      Eb5.play();

      var Eb5key = document.querySelector(".Eb5-key");

      Eb5key.classList.add("active");
      setTimeout(function(){
        Eb5key.classList.remove("active");
      }, 100);
      break;

      case "p":
      var E5 = new Audio('sounds/E5.mp3');
      E5.play();

      var E5key = document.querySelector(".E5-key");

      E5key.classList.add("active");
      setTimeout(function(){
        E5key.classList.remove("active");
      }, 100);
      break;

      default: console.log(key);
    }




}
