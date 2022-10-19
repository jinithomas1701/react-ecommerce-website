import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './app/App';

render(
    <App />,
  window.document.getElementById("app")
);

// var element = <h1 className='head-section-wrap'>My Personal Website</h1>
// ReactDOM.render(element, document.getElementById('root'));


// ReactDOM.render(<div className='sub-section-wrap'>
//   <p>Front end developer</p>
//   <h2>3 years of experience jini</h2>
//   </div>, document.getElementById('app'));

