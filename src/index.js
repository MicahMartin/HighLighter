import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ToolTip from './Components/ToolTip/ToolTip.js';
import Utils from './Utils.js';
import './index.css';

const container = document.getElementById('root');

document.body.addEventListener('mouseup', event => {
  const selection = Utils.getSelected();
  if(selection){
    ReactDOM.render(<ToolTip selection={selection} />, container);
  }else{
    console.log("No text selected! gonna try to unmount");
    ReactDOM.unmountComponentAtNode(container);
  }
});

registerServiceWorker();
