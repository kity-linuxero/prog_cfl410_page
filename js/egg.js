var egg = 0;
var egg2 = 0;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function egg_2(){
  if (egg2 === 4){
    if (egg < 0){
      alert("Te conviene empezar de nuevo :(")
    }else{
    alert("Estuviste cerca. Pero es el otro ;)");
    egg2=0;}
  }else{
    egg2++;
  }
}

function egg_fun() {
  //Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  if (egg === 4){
    modal.style.display = "block";
    egg=-9999;
    span = document.getElementById("egg_text").textContent = "A veces es mejor empezar de cero para encontrar el camino.";   
  } else {
      egg++;
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    }
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

function close_egg(){
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function julio_egg(){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var today = new Date();
  console.log();
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  }
  //let x = document.cookie;
  //console.log(x)
  if (today.getDate() == 1 & today.getMonth() == 6){
      console.log("Un gran día")
      var j = getCookie("julio");
      if (j == null) {
        modal.style.display = "block";
        setCookie("julio","1",2)
      }
      else {
        console.log("Ya se mostró lo mejor")					
      }
  }
  // else{
  // 	console.log("NO pasa nada");
  // }

}