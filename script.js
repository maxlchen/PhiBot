// Code goes here
//var positive = ["Yikes","Ooooh Phikeia", "Olivia Ure a cutie. I wanna have fun tonight and us cuties together it's magic bound to happen. Life is short, let's live in the moment. Let's party tonight"];
//var positive = JSON.parse("text.json");
var data = [
	"yop",
	"cashed",
	"worst case",
	"start going down to the chapter room",
	"one",
	"/wən/",
	"1. stand",
	"Avatar",
	"Yuppie",
	"0 days since cole had sex",
	"easily",
	"Yikes",
	"where are the brothers",
	"rahhhhhb",
	"this is a dry house!",
	"crank",
	"BSQ",
	"can we get 3's",
	"TNP",
	"where is the bong",
	"riot juice",
	"what are we drinking @Max Wu",
	"reimbursements in the mailbox",
	"basicaclly",
	"Any rides from ctown?",
	"Rob is sick today",
	"nothing to report",
	"loose jim",
	"Move the CRT out of the great hall",
	"Clean the f*cking annex",
	"how does it not get there",
	"elegance",
	"Avatar",
	"Felipe f*ck you",
	"Bachelor board",
	"ya like that? - daddy d",
	"Unionize the land",
	"4way with phi tau",
	"Matthew Conte",
	"you hate to see it",
	"Phi Tall",
	"go birds",
	"Yiiiiiiiikes",
	"a photo of kyle waddel",
	"did Alessandro just chug a handle of Bartons",
	"Ale",
	"Avatar",
	"f*ck off",
	"port",
	"miami fire",
	"Phire",
	"Mickey",
	"Yikes",
	"Ooooh Phikeia", 
	"Olivia Ure a cutie. I wanna have fun tonight and us cuties together it's magic bound to happen. Life is short, let's live in the moment. Let's party tonight"
];

// var request = new XMLHttpRequest();
//    request.open("GET", "./text.json", false);
//    request.send(null)
//    var positive = JSON.parse(request.responseText);

window.onload = function() {
	// var sentiment = 0;
	// function validate(){
	// $.ajax({
 //   	url: "./sentanalysis.py",
 //   	success: function(response) {
 //     // here you do whatever you want with the response variable
 //   	}
	// });
	// }
  function addMsg(msg) {
    var message = document.getElementById("logs");
    var curr = document.createElement("div");
    curr.setAttribute("class", "chat user");//document.getElementById("logs");
    // curr.createElement("div");
    var text = document.createElement("p");//.appendChild(documents.createTextNode(msg));
    text.setAttribute("class","chat-message");
    text.innerHTML = msg;
    var botimg = document.createElement("div");
    botimg.setAttribute("class", "user-photo");
    var img = new Image();
    img.src = "./img/smile.png";
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
    var positivesentence = data[Math.floor(Math.random()*data.length)];

    var bot = document.createElement("div");
    bot.setAttribute("class", "chat bot");
    var bottext = document.createElement("p");
    bottext.setAttribute("class", "chat-message");
    bottext.innerHTML = positivesentence;
    var robotimg = document.createElement("div");
    robotimg.setAttribute("class", "user-photo");
    var img2 = new Image();
    img2.src = "./img/pdt.jpg";
    robotimg.append(img2);
    bot.appendChild(robotimg);
    bot.appendChild(bottext);
    message.appendChild(bot);

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