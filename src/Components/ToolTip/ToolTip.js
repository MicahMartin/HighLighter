import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js'
import * as Ramda from 'ramda'
import ButtonUtils from '../Button/ButtonUtils.js'
import logo from '../../logo.svg';
import '../../Styles/ToolTip/ToolTip.css';

class ToolTip extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  determinePosition() {
    const selection = this.props.selection;
  }

  getButtons(){
    let buttons = [];
    const selection = this.props.selection;

    // build a formatter
    const twitterFormatter = ButtonUtils.formatter(ButtonUtils.formatTweet);
    const twitterFunctionality = Ramda.compose(ButtonUtils.sendTweet, ButtonUtils.log, twitterFormatter);
    buttons.push(<Button key="twitter" methods={twitterFunctionality} selection={selection}/>);

    return buttons;
  }

  render() {
    const buttons = this.getButtons();
    return (
      <div className="ToolTip">
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
