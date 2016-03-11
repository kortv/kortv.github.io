"use strict";

var start_btn = document.querySelector('#start_btn'),
    win = document.querySelector('#win'),
    coinLabel = document.querySelector('#coinLabel'),
    fabric_btn = document.querySelector('#fabric'),
    factory_btn = document.querySelector('#factory'),
    panel = document.querySelector('#panel_with_line'),
    body = document.querySelector("body"),
    acount = document.querySelector("#acount"),
    coinContainer = document.querySelector(".container"),
    fabricContainer = document.querySelector(".containerFabric"),
    factoryContainer = document.querySelector(".containerFactory"),
    cover = document.querySelector("#cover"),
    intervals = [],
    acountSum = 0;

// Main constructor
var CoinProducer = function (container, time, random) {
	this.random = random;
	this.container = container;
	this.time = time;
	this.num = 0;
}


CoinProducer.prototype.addChilde = function(container) {
  var childe = document.createElement("div");  
  if (this.random) {
    childe.onclick = this.onClickFunc;
    var randLeft = Math.random() * 927 + 20;
    var randTop = Math.random() * 518 + 20;
    childe.setAttribute("style", "top:" + randTop + "px;left:" + randLeft + "px;")
  } else if (container.className){
    childe.onclick = this.onClickFunc;
    this.startInterval(childe)
  }
  container.appendChild(childe);
};

CoinProducer.prototype.startInterval = function(container) {
  var that = this;
  var i = intervals.length;
  intervals[i]=setInterval(function () {
    that.addChilde(container);
  }, this.time*1000)
};

CoinProducer.prototype.onClickFunc = function(e) {
  var element = e.target
  acountSum += element.children.length;
  acountChanger(acountSum);
  element.innerHTML = "";
};

// Objects creating
var coinField = new CoinProducer (coinContainer, 5, true);
var fabrics = new CoinProducer (fabricContainer, 5, false);
var factorys = new CoinProducer (factoryContainer, 2.5	, false);

// Changing onClickFunc for coin field
coinField.onClickFunc = function(e) {
  var childe = e.target;
  var parent =  childe.parentNode;
  acountSum++;
  acountChanger(acountSum);
  parent.removeChild(childe);
};

// Global Functions
function init () {
  start_btn.className = "animated fadeOut";
  panel.className = "animated fadeInUp";
  coinLabel.className = "animated fadeInDown";
  fabric_btn.className = "animated slideInDown";
  setTimeout(function () {
	  start_btn && body.removeChild(start_btn);
	  panel.className = "";
	  coinLabel.className = ""
  }, 1000)
  coinField.startInterval(coinField.container);
}

function acountChanger(sum) {
  acount.innerHTML = sum;
  if (sum >= 500) {
    intervals.forEach(function (key) {
      window.clearInterval(key);
    })
    console.log("winer")
    win.className = "animated zoomInUp"
    cover.className = "animated fadeIn";
  }
}

// On click events
start_btn.onclick = init;
fabric_btn.onclick = function () {
	if (acountSum >= 4 && fabrics.num < 10){
    acountSum -= 4;
    fabrics.num++;
    acountChanger(acountSum)
    fabrics.addChilde(fabrics.container);
		fabrics.num  && (factory_btn.className = "");
  } else {console.log("give me more money")}
}

factory_btn.onclick = function () {
  if (acountSum >= 14 && factorys.num < 5){
    acountSum -= 14;
    factorys.num++;
    acountChanger(acountSum)
    factorys.addChilde(factorys.container);
  } else {console.log("give me more money")}
}
win.onclick = function () { location.reload() };
