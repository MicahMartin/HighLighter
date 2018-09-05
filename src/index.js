import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ToolTip from './Components/ToolTip/ToolTip.js';
import './index.css';

// textselection wrapper 
const selection = document.getElementById('textSelection');

ReactDOM.render(<ToolTip selection={selection}/>, document.getElementById('root'));
registerServiceWorker();
