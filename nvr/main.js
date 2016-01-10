var mod = document.querySelector('#model');
console.log("asdf");
var increment = 0;
//var mod3 = "<a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"inifite\"></a-animation><a-animation attribute=\"visible\" begin=\"0\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"0\" to=\"0.01 0.01 0.01\" dur=\"1500\" easing=\"ease-in-out-cubic\" repeat=\"0\"></a-animation>";

//var mod1a = "<a-animation id=\"anim1\" attribute=\"rotation\" begin=\"start\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"0\"></a-animation><a-animation attribute=\"visible\" begin=\"100\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"100\" to=\"1 1 1\" dur=\"1500\" easing=\"ease-in-out-cubic\" repeat=\"0\"></a-animation>";
var mod1b = "<a-animation attribute=\"scale\" begin=\"100\" from=\"1 1 1\" to=\"10 10 10\" dur=\"1000\" easing=\"ease-in-cubic\" repeat=\"0\"></a-animation><a-animation attribute=\"position\" begin=\"600\" to=\"0 0 200\" dur=\"500\" repeat=\"0\"></a-animation><a-animation attribute=\"visible\" begin=\"1100\" to=\"false\" repeat=\"0\"></a-animation>";

var mod2a = "<a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"inifite\"></a-animation><a-animation attribute=\"visible\" begin=\"100\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"100\" to=\"1 1 1\" dur=\"1500\" easing=\"ease-in-out-cubic\" repeat=\"0\"></a-animation>";
var mod2b = "<a-animation attribute=\"scale\" begin=\"100\" from=\"1 1 1\" to=\"20 20 20\" dur=\"1000\" easing=\"ease-in-cubic\" repeat=\"0\"></a-animation><a-animation attribute=\"position\" begin=\"8500\" to=\"0 0 200\" dur=\"500\" repeat=\"0\"></a-animation><a-animation attribute=\"visible\" begin=\"1100\" to=\"false\" repeat=\"0\"></a-animation>";

//var sorces = ["src: url(../_models/brain.dae); format: collada","src: url(../_models/ni.dae); format: collada","src: url(../_models/dna3ds.dae); format: collada"];
var models = {};
		models[1] = document.querySelector('#model1');
		models[2] = document.querySelector('#model2');
		models[3] = document.querySelector('#model3');
var model1 = document.querySelector('#model1');
var model2 = document.querySelector('#model2');
var model3 = document.querySelector('#model3');
var rotateClass = document.querySelector('.rotation');
console.log(models)

document.querySelector('a-entity').addEventListener('click', function () {
	increment = (increment + 1)%4
	//console.log('I was clicked!', increment);
	//mod.setAttribute("loader", sorces[increment])
	switch (increment) {
	    case 1:
	        //model1.innerHTML = mod1a;
	        console.log('I was clicked!', increment);
	        break;
	    case 2:
	    models[increment-1].removeEventListener('animationend', rotateFun, true);
	    models[increment].addEventListener('animationend', rotateFun, true);
	        delayEmit(model1, 100, "m100");
	        delayEmit(model1, 600, "m600");
	        delayEmit(model1, 1100, "m1100");
	        delayEmit(model2, 100, "m21");
	        delayEmit(model2, 1, "rotate");

	        //model1.innerHTML = mod1b;
	        //model2.innerHTML = mod2a;
	        console.log('I was clicked!', increment);
	        break;
	    case 3:
	    models[increment-1].removeEventListener('animationend', rotateFun, true);
	    models[increment].addEventListener('animationend', rotateFun, true);
	        delayEmit(model2, 1, "m22");
	        delayEmit(model2, 600, "m23");
	        delayEmit(model2, 1000, "m24");
	        //model2.innerHTML = mod2b;
	        model3.emit('m3');
	        model3.emit('rotate');
	        //model3.innerHTML = mod3;
	        console.log('I was clicked!', increment);
	        break;
	    case 0:
	        console.log('I was clicked!', increment);
	        location.reload();
	        break;
	}

});

 window.onload = function () {
 				increment++;	
        model1.emit('m11');
        model1.emit('rotate');
        //model1.emit('start');
	 models[increment].addEventListener('animationend', rotateFun, true);
			console.log('I was clicked!', increment);
};

function emitter (el) {
	model1.emit('a');
	model1.emit('start');
	console.log("emitter started");
}
// setInterval(function  () {
// 	emitter();
// },  15001);

function delayEmit (el, time, trigger) {
	setTimeout (function  () {
		el.emit(trigger);
	}, time)
};

function rotateFun () {
	this.emit('rotate')
};

