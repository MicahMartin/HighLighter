import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js'
import * as Ramda from 'ramda'
import ButtonUtils from '../Button/ButtonUtils.js'
import '../../Styles/ToolTip/ToolTip.css';

class ToolTip extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  getButtons(){
    const buttons = [];
    const selection = this.props.selection;

    // build a formatter
    const twitterFormatter = ButtonUtils.formatter(ButtonUtils.formatTweet);
    const twitterFunctionality = Ramda.compose(ButtonUtils.sendTweet, ButtonUtils.log, twitterFormatter);
    buttons.push(<Button key="twitter" type="twitter" methods={twitterFunctionality} selection={selection}/>);

    return buttons;
  }

  getPosition() {
    const selection = this.props.selection;
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const right = rect.right + window.scrollX;

    const middle = (left + right)/2;

    return {'position': 'absolute', top, left: middle};
  }


  render() {
    const buttons = this.getButtons();
    const position = this.getPosition();
    return (
      <div className="ToolTip" style={position}>
        <header className="ToolTip-header">
          {buttons}
        </header>
      </div>
    );
  }
}

ToolTip.propTypes = {
  selection: PropTypes.object.isRequired
};

export default ToolTip;
