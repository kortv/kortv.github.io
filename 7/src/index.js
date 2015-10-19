//import App from './components/App';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';

if (typeof document !== 'undefined') {
  ReactDOM.render(<Page1 />, document.getElementById('p1'));
  ReactDOM.render(<Page2 />, document.getElementById('p2'));
}



