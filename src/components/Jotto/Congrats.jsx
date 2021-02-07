import React from 'react';

const Congrats = (props) => {
  const { success } = props;
  return (
    <div data-test="component-congrats">
      {success && (
        <span data-test="congrats-message">
          Congratulations! you guessed the word!
        </span>
      )}
    </div>
  );
};

export default Congrats;

