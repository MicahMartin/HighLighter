import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.js'
import Utils from '../../Utils.js'
import * as R from 'ramda'
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
    const twitterFormatter = ButtonUtils.formatter(R.compose(ButtonUtils.formatTweet, Utils.replaceNewlines));
    const twitterFunctionality = R.compose(ButtonUtils.sendTweet, ButtonUtils.log, encodeURIComponent, twitterFormatter);
    buttons.push(<Button key="twitter" type="twitter" methods={twitterFunctionality} selection={selection}/>);

    const fbFormatter = ButtonUtils.formatter(Utils.replaceNewlines);
    const fbFuncs = R.compose(ButtonUtils.shareFacebook, encodeURIComponent, fbFormatter);
    buttons.push(<Button key="facebook" type="facecbook" methods={fbFuncs} selection={selection}/>);
    buttons.push(<Button key="facebook" type="clog" methods={fbFuncs} selection={selection}/>);

    return buttons;
  }

  getPosition() {
    const selection = this.props.selection;
    const rect = selection.getRangeAt(0).getBoundingClientRect();

    const top = rect.top - 55 + window.scrollY;
    const middle = ((rect.left + window.scrollX) + (rect.right + window.scrollX))/2;
    console.log({rect}, middle);

    return {top, left: middle};
  }


  render() {
    const buttons = this.getButtons();
    const position = this.getPosition();
    return (
      <div className="tooltip" style={position}>
        <div className="top">
          {buttons}
          <i className="arrow"></i>
        </div>
      </div>
    );
  }
}

ToolTip.propTypes = {
  selection: PropTypes.object.isRequired
};

export default ToolTip;
