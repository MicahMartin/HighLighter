import React, { Component } from 'react';
import '../../Styles/ToolTip/ToolTip.css';

/**
 * Main tooltip class.
 * @reactProps {Object} selection - the Selection instance
 */
class ToolTip extends Component {

  /**
   * Adds an event listener to the window to check for highlighted text whenever
   * the mouse is released
   * 
   * @param {Object} props - props
  */

  constructor(props){
    super(props);

    this.state = {
      selection: ''
    };

    this.getSelection = this.getSelection.bind(this);

    document.addEventListener('mouseup', event => setTimeout(this.getSelection, 1));   
  };

  /**
   * check for a selection, set to state if it exists
   * @returns {Object} newState - will set new state
  */
  getSelection(){
    const selection = window.getSelection();
    if (selection.isCollapsed) {
      console.log("unloading");
      this.setState({selection: ''});
    } else {
      console.log("rendering");
      this.setState({selection});
    }
  }

  /**
   * gets the middle of the left and right of the Selection instance
   * @param {Object} selection - the selection instance
   * @returns {[Object]} obj - object with top and left defined to be used as style rules
  */
  getPosition(selection) {
    const rect = selection.getRangeAt(0).getBoundingClientRect();

    const top = rect.top - 55 + window.scrollY;
    const middle = ((rect.left + window.scrollX) + (rect.right + window.scrollX))/2;

    return {top, left: middle};
  }

  render() {
    const { children } = this.props;
    const { selection } = this.state;
    console.log("the selection,", selection);

    const position = selection ? this.getPosition(selection) : {display: "none"};
    const buttons = children ? React.Children.map(children, child => React.cloneElement(child, {selection: selection.toString()})) : "";

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

export default ToolTip;
