// Code goes here
window.onload = function() {
  function addMsg(msg) {
    var message = document.getElementById("logs");
    var curr = document.createElement("div");
    curr.setAttribute("class", "chat user");//document.getElementById("logs");
    // curr.createElement("div");
    var text = document.createElement("p");//.appendChild(documents.createTextNode(msg));
    text.setAttribute("class","chat-message");
    text.innerHTML = msg
    var botimg = document.createElement("div");
    botimg.setAttribute("class", "user-photo");
    var img = new Image();
    img.src = "/img/smile.png";
    // botimg.width = 100;
    // botimg.height = 40;
    botimg.appendChild(img);
    // var p1 = document.createElement("p");
    // p1.setAttribute("class","chat-message");
    // p1.innerHTML = msg;	
    // text.innerHTML = msg;
    //var p2 = document.createElement("p");
    //p2.setAttribute("class", "route");
    //p2.innerHTML = route;
    curr.appendChild(botimg);
    curr.appendChild(text);
    message.appendChild(curr);
    // curr.appendChild(p2);
    // if (message.length) {
    // message[message.length -1].insertAdjacentHTML("afterEnd", curr.outerHTML)
    // } else {
    //  document.forms[0].insertAdjacentHTML("afterEnd", curr.outerHTML)
    // }
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