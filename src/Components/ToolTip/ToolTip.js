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
    const selection = this.props.selection.toString();

    // build a formatter
    const twitterFormatter = R.compose(ButtonUtils.formatTweet, Utils.replaceNewlines);
    const twitterFuncs = R.compose(ButtonUtils.sendTweet, ButtonUtils.log, encodeURIComponent, twitterFormatter);
    buttons.push(<Button key="twitter" type="twitter" methods={twitterFuncs} selection={selection}/>);

    const fbFuncs = R.compose(ButtonUtils.shareFacebook, ButtonUtils.log);
    buttons.push(<Button key="facebook" type="facecbook" methods={fbFuncs} selection={selection}/>);


    const commentFormatter = R.compose(Utils.replaceNewlines);
    const commentFuncs = R.compose(ButtonUtils.shareFacebook, encodeURIComponent, commentFormatter);
    buttons.push(<Button key="comment" type="comment" methods={commentFuncs} selection={selection}/>);

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
