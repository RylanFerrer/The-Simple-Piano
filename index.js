var amountOfKeys = document.querySelectorAll(".key").length;

// this is a loop that will find all the buttons that have the class key and the loop will add even listeners on them
for (var i = 0; i < amountOfKeys; i++)
{
  document.querySelectorAll(".key")[i].addEventListener("click",function() {
      var buttonInnerHtml = this.textContent;
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);





  });
}

document.addEventListener("keydown" ,function(event){

  makeSound(event.key);
  buttonAnimation(event.key);



});


  function makeSound(key) {

    switch (key) {

      case "q":
      var C4 = new Audio('sounds/C4.mp3');
      C4.play();
      break;

      case "2":
      var Db4 = new Audio('sounds/Db4.mp3');
      Db4.play();
      break;

      case "w":
      var D4 = new Audio('sounds/D4.mp3');
      D4.play();


      break;

      case "3":
      var Eb4 = new Audio('sounds/Eb4.mp3');
      Eb4.play();
      break;

      case "e":
      var E4 = new Audio('sounds/E4.mp3');
      E4.play();
      break;

      case "r":
      var F4 = new Audio('sounds/F4.mp3');
      F4.play();
      break;

      case "5":
      var Gb4 = new Audio('sounds/Gb4.mp3');
      Gb4.play();
      break;

      case "t":
      var G4 = new Audio('sounds/G4.mp3');
      G4.play();
      break;

      case "6":
      var Ab4 = new Audio('sounds/Ab4.mp3');
      Ab4.play();
      break;

      case "y":
      var A4 = new Audio('sounds/A4.mp3');
      A4.play();
      break;

      case "7":
      var Bb4 = new Audio('sounds/Bb4.mp3');
      Bb4.play();
      break;

      case "u":
      var B4 = new Audio('sounds/B4.mp3');
      B4.play();
      break;

      case "i":
      var C5 = new Audio('sounds/C5.mp3');
      C5.play();
      break;

      case "9":
      var Db5 = new Audio('sounds/Db5.mp3');
      Db5.play();
      break;

      case "o":
      var D5 = new Audio('sounds/D5.mp3');
      D5.play();

      break;

      case "0":
      var Eb5 = new Audio('sounds/Eb5.mp3');
      Eb5.play();


      break;

      case "p":
      var E5 = new Audio('sounds/E5.mp3');
      E5.play();
      break;

      default: console.log(key);
    }

}

function buttonAnimation(currentKey) {

  if(currentKey == '0')
  {
    currentKey = 'zero';
  }
  else if (currentKey == '1')
  {
    currentKey = 'one';
  }
  else if (currentKey == '2')
  {
    currentKey = "two";
  }
  else if (currentKey == '3')
  {
    currentKey = "three";
  }
  else if (currentKey == '4')
  {
    currentKey = "four";
  }
  else if (currentKey == '5')
  {
    currentKey = "five";
  }
  else if (currentKey == '6')
  {
    currentKey = "six";
  }
  else if (currentKey == '7')
  {
    currentKey = "seven";
  }
  else if (currentKey == '8')
  {
    currentKey = "eight";
  }
  else if (currentKey == '9')
  {
    currentKey = "nine";
  }

  var activeButton =document.querySelector("." + currentKey);
  activeButton.classList.add("active");

  setTimeout(function(){
    activeButton.classList.remove("active");
  }, 100);

}
