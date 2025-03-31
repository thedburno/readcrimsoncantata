// This script is used to create a collapsible element in the HTML page, but now on mobile.
// Why? Because I am a masochist and I hate myself.


var coll = document.getElementsByClassName("collapsible-mb");
var i;

for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
} 