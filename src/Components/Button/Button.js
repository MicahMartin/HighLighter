import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  const clickHandler = e => {
    e.preventDefault();
    props.methods(props.selection);
  }

  return (
    <div >
      <button className="button" onClick={clickHandler} />
    </div>
    
  );
}

Button.propTypes = {
  selection: PropTypes.object.isRequired,
  methods: PropTypes.func.isRequired
};

export default Button;
