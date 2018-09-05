import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  function clickHandler(event) {
    event.preventDefault();
    props.methods(props.selection);
  }

  // vim highlighter breaks when i wrap tempale strings in curly braces
  // sue me
  const unnececaryFn = component => `${props.type}--${component}`;

  return (
    <div className={unnececaryFn('container')}>
      <button className={unnececaryFn('button')} onClick={clickHandler} />
    </div>
    
  );
}

Button.propTypes = {
  selection: PropTypes.object.isRequired,
  methods: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
