import React from 'react';
import propTypes from 'prop-types';

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: '🇺🇸' },
    { code: 'emoji', symbol: '😊' }
  ];
  return (
    <div data-test='component-language-picker'>
      {languages.map((current) => (
        <span
          data-test='language-icon'
          key={current.code}
          onClick={() => setLanguage(current.code)}
        >
          {current.symbol}
        </span>
      ))}
    </div>
  )
};

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired
};

export default LanguagePicker;
