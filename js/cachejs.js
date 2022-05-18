function cacheInput(e) {
   localStorage.setItem(e.attributes["name"].value, e.value)
}

window.onload = function () {
   let form = document.getElementById("myForm");
   let inputs = form.children;
   for (let i = 0; i < inputs.length; i++) {
       let el = inputs[i];
       if (el.tagName.toLowerCase() != "select" || el.attributes["name"].value != "ts") {
           continue
       } 
       let cachedVal = localStorage.getItem(el.attributes["name"].value)
       if (cachedVal != null) {
           el.value = cachedVal;
       }
   }
}
