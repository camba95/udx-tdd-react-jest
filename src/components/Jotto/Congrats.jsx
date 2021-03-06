import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
  const { success } = props;
  return (
    <>
      {success && (
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! you guessed the word!
        </span>
        </div>
      )}
    </>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;

