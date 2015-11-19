import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import './../css/reveal.scss';
import "./../css/main.scss";

"use strict";
let allModules={};
allModules.Page1 = <Page1/>;
allModules.Page2 = <Page2/>;
allModules.Page3 = <Page3/>;
console.log(allModules)

if (typeof document !== 'undefined') {
  ReactDOM.render(<Page3/>, document.getElementById('Page1'));
} 


const cleanAllInterval = function() {
    for (let i = 1; i < 9999; i++) {clearInterval(i)}
}
const clearPreviousComponents = function  (arg) {
	ReactDOM.unmountComponentAtNode(document.getElementById(arg));
}

                    
Reveal.addEventListener('slidechanged', function(event) {

	cleanAllInterval()
	let currentModule = event.currentSlide.attributes["id"].nodeValue,
			prevModule = event.previousSlide.attributes["id"].nodeValue;

	for (let key in allModules) {
	  if (currentModule != key) {
	    setTimeout(function() {
	      clearPreviousComponents(key);
	    }, 1200)
	  }
	};
	
	ReactDOM.render(allModules[currentModule], document.getElementById(currentModule));
	

    // if (event.previousSlide.attributes["data-state"]) {
    //     cleanAllInterval();
    //     event.previousSlide.children[0].innerHTML = ""
    // }
    // if (event.currentSlide.attributes["data-state"]) {
    //     var state = event.currentSlide.attributes["data-state"].nodeValue;
    //     ReactDOM.render(components[state.toString()], event.currentSlide.children[0]);
    //     components[state + "Fn"]()
    // }
})                  