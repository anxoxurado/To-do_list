var lista = document.getElementsByTagName("li");
var i;
for (i = 0; i < lista.length; i++) {
  var span = document.createElement("SPAN");
  var tarea = document.createTextNode("x");
  span.className = "close";
  span.appendChild(tarea);
  lista[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var alist = document.querySelector('ul');
alist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);

function nuevoli() {
  var li = document.createElement("li");
  var valor = document.getElementById("input").value;
  var t = document.createTextNode(valor);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var tarea = document.createTextNode("x");
  span.className = "close";
  span.appendChild(tarea);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}