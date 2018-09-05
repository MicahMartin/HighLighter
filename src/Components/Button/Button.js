import React from 'react';
// import PropTypes from 'prop-types';

const Button = (props) => {

  const doStuff = e => {
    e.preventDefault();
    // first param should be selectionFormatter(formatType)
    // selectionFormatter(formatType)(selection)
    props.methods(props.selection);
  }
  

  return (
    <div >
      <button className="button" onClick={doStuff} />
    </div>
    
  );
}

export default Button;
