var character = document.getElementById("character"); // creates varible so that we can use our character
var badguy = document.getElementById("badguy");//Does the same as the last except for badguy
var counter = 0;
function jump(){
    if(character.classList == "animate"){return} // only adds the class animate if it hasnt already beeen added
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },550);// removes animate from classlist making it possible to jump agian
}

var checkDead = setInterval(function(){ // creates the varible which checks if you have lost yet.
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // Gets top posistion of the character. parseInt is used due to it otherwise ruturning the value of top as 450px instead of 450
  let badguyleft = parseInt(window.getComputedStyle(badguy).getPropertyValue("left")); // Gets the left posistion of the badguy. parseInt dose the same as before but what we are doing with these lines is checking if they intertvine
  if(badguyleft<50 &&badguyleft>0 && characterTop>=380){
    badguy.style.animation = "none";//removes the animation from the screen if you lose
    badguy.style.display = "none"; // removes styles from block making it disapper
    alert("Oh no! You lost please try agian. Your score was: "+Math.floor(counter/100));
    scoreSpan.style.display = "none";
    character.style.display = "none";
    
  }
  else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);// checks every 10ms
