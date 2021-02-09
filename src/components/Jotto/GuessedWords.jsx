import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const { guessedWords } = props;
  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length && (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      )}
      {!!guessedWords.length && (
        <div data-test="guessed-words">
          <h3>Guesed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((current, index) => (
                <tr key={index} data-test="guessed-word">
                  <td>{current.guessedWord}</td>
                  <td>{current.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
