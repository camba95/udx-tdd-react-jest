import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from '../../actions';

class Jotto extends Component {
  render() {
    return (
      <div className="container" data-test="component-jotto">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{
          guessedWord: 'train',
          letterMatchCount: 3
        }]} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord
});

export default connect(mapStateToProps, { getSecretWord })(Jotto);
