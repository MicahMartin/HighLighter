import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ToolTip from './Components/ToolTip/ToolTip.js';
import './index.css';

const container = document.getElementById('root');

document.addEventListener('mouseup', function(event){
  setTimeout(()=> {
     const selection = window.getSelection();
     if (selection.isCollapsed) {
      console.log("unloading");
      ReactDOM.unmountComponentAtNode(container);
     } else{
      console.log("rendering");
      ReactDOM.render(<ToolTip selection={selection} />, container);
     }
  }, 1) // sigh
 }
);

registerServiceWorker();
