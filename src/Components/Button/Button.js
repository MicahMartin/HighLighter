import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  function clickHandler(event) {
    event.preventDefault();
    props.methods(props.selection);
  }

  // vim highlighter breaks when i wrap tempale strings in curly braces
  // sue me
  const unnececaryFn = (type, component) => `button--${component} ${type}`;

  return (
    <div className={unnececaryFn(props.type, 'container')}>
      <button className={unnececaryFn(props.type, 'button')} onClick={clickHandler} />
    </div>
    
  );
}

Button.propTypes = {
  selection: PropTypes.string.isRequired,
  methods: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
