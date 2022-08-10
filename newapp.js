//function to animate text

let i = -1;
let txt = 'FrontEnd Web Developer'; /* The text */
let speed = 110; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("letters").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();




