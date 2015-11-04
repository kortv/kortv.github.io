//import App from './components/App';
require("./../css/reveal.scss");

import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';



if (typeof document !== 'undefined') {
  ReactDOM.render(<Page1 />, document.getElementById('p1'));
  ReactDOM.render(<Page2 />, document.getElementById('p2'));
  ReactDOM.render(<Page3 />, document.getElementById('p3'));
}                   