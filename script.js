// Code goes here
window.onload = function() {
  function addMsg(msg) {
    var message = document.querySelectorAll(".chatlogs");
    var curr = document.createElement("div").setAttribute("class", "chat bot");//document.getElementById("logs");
    // curr.createElement("div");
    var text = document.createElement("p").setAttribute("class","chat-message").appendChild(documents.createTextNode(msg));
    var botimg = new Image();
    botimg.src = "/img/pdt.jpg";
    botimg.width = 100;
    botimg.height = 40;
    // var p1 = document.createElement("p");
    // p1.setAttribute("class","chat-message");
    // p1.innerHTML = msg;	
    text.innerHTML = msg;
    //var p2 = document.createElement("p");
    //p2.setAttribute("class", "route");
    //p2.innerHTML = route;
    curr.appendChild(botimg);
    curr.appendChild(p1);
    curr.appendChild(p2);
    if (message.length) {
    message[message.length -1].insertAdjacentHTML("afterEnd", curr.outerHTML)
    } else {
     document.forms[0].insertAdjacentHTML("afterEnd", curr.outerHTML)
    }
  }

  var obj = {
    txt: ""
    // number: "",
    // route: ""
  };

  document.forms[0].onchange = function(e) {
    obj[e.target.name] = e.target.value;
  }

  document.forms[0].onsubmit = function(e) {
    e.preventDefault();
    addMsg(obj.txt)
  }
}