var mod = document.querySelector('#model');
console.log("asdf");
var increment = 0;
var mod3 = "<a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"inifite\"></a-animation><a-animation attribute=\"visible\" begin=\"0\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"0\" to=\"0.01 0.01 0.01\" dur=\"1500\" easing=\"linear\" repeat=\"0\"></a-animation>";

var mod1a = "<a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"inifite\"></a-animation><a-animation attribute=\"visible\" begin=\"100\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"100\" to=\"1 1 1\" dur=\"1500\" easing=\"linear\" repeat=\"0\"></a-animation>";
var mod1b = "<a-animation attribute=\"rotation\" begin=\"100\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"100\" from=\"1 1 1\" to=\"10 10 10\" dur=\"1000\" easing=\"linear\" repeat=\"0\"></a-animation><a-animation attribute=\"position\" begin=\"600\" to=\"0 0 200\" dur=\"500\" repeat=\"0\"></a-animation><a-animation attribute=\"visible\" begin=\"1100\" to=\"false\" repeat=\"0\"></a-animation>";

var mod2a = "<a-animation attribute=\"rotation\" from=\"0 -30 0\" to=\"0 330 0\" dur=\"15000\" easing=\"linear\" repeat=\"inifite\"></a-animation><a-animation attribute=\"visible\" begin=\"100\" to=\"true\" repeat=\"0\"></a-animation><a-animation attribute=\"scale\" begin=\"100\" to=\"1 1 1\" dur=\"1500\" easing=\"linear\" repeat=\"0\"></a-animation>";
var mod2b = "<a-animation attribute=\"scale\" begin=\"100\" from=\"1 1 1\" to=\"20 20 20\" dur=\"1000\" easing=\"linear\" repeat=\"0\"></a-animation><a-animation attribute=\"position\" begin=\"8500\" to=\"0 0 200\" dur=\"500\" repeat=\"0\"></a-animation><a-animation attribute=\"visible\" begin=\"1100\" to=\"false\" repeat=\"0\"></a-animation>";

var sorces = ["src: url(../_models/brain.dae); format: collada","src: url(../_models/ni.dae); format: collada","src: url(../_models/dna3ds.dae); format: collada"];

var model1 = document.querySelector('#model1');
var model2 = document.querySelector('#model2');
var model3 = document.querySelector('#model3');

document.querySelector('a-entity').addEventListener('click', function () {
	increment = (increment + 1)%4
	//console.log('I was clicked!', increment);
	//mod.setAttribute("loader", sorces[increment])
	switch(increment){
	case 1: model1.innerHTML = mod1a;
		console.log('I was clicked!', increment);
		break;
	case 2: model1.innerHTML = mod1b;
	model2.innerHTML = mod2a;
		console.log(increment);
		break;
	case 3: model2.innerHTML = mod2b;
	model3.innerHTML = mod3;
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
        model1.innerHTML = mod1a;
			console.log('I was clicked!', increment);
}