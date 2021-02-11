import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class Input extends Component {
  state = {
    currentGuess: ''
  };

  submitGuessedWord = (event) => {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  };

  onInputChange = (event) => {
    this.setState({
      currentGuess: event.target.value
    });
  };

  render() {
    const { success } = this.props;
    const { currentGuess } = this.state;
    let content = null;
    if (!success) {
      content = (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            placeholder="Enter guess"
            type="text"
            value={currentGuess}
            onChange={this.onInputChange}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={this.submitGuessedWord}
          >
            Submit
          </button>
        </form>
      );
    }
    return (
      <div data-test="component-input">
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({
  success
});

export default connect(mapStateToProps, { guessWord })(Input);
