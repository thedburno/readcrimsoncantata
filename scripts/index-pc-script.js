// This script is used to create a collapsible element in the HTML page. And to torture myself. I hate this.

var coll = document.getElementsByClassName("collapsible-pc");
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