import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda'

import Button from '../Button/Button.js'
import Utils from '../../Utils/Utils.js'
import TwitterUtils from '../../Utils/TwitterUtils.js'
import FacebookUtils from '../../Utils/FacebookUtils.js'
import CommentUtils from '../../Utils/CommentUtils.js'
// import ButtonUtils from '../../Utils/ButtonUtils.js'

import '../../Styles/ToolTip/ToolTip.css';

class ToolTip extends Component {

  getButtons(){
    const buttons = [];
    const selection = this.props.selection.toString();
    const logger = Utils.log("Button logger");

    // twitter button
    const twitterFuncs = R.compose(TwitterUtils.sendTweet, logger, encodeURIComponent, TwitterUtils.formatTweet);
    buttons.push(<Button key="twitter" type="twitter" methods={twitterFuncs} selection={selection}/>);

    // facebook button
    buttons.push(<Button key="facebook" type="facebook" methods={FacebookUtils.shareFacebook} selection={selection}/>);

    // comment button
    const quoteSpan = Utils.tagWrapper('span')(Utils.keyEqValFormat({
        id: "tooltip-quote",
        style: "font-style: italic; font-size: 12px; color: blue;"
    }));
    const commentFormatter = R.compose(quoteSpan, Utils.replaceNewlines);
    const commentFuncs = R.compose(CommentUtils.addQuoteToForm, logger, commentFormatter);
    buttons.push(<Button key="comment" type="comment" methods={commentFuncs} selection={selection}/>);

    return buttons;
  }

  getPosition() {
    const selection = this.props.selection;
    const rect = selection.getRangeAt(0).getBoundingClientRect();

    const top = rect.top - 55 + window.scrollY;
    const middle = ((rect.left + window.scrollX) + (rect.right + window.scrollX))/2;

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
