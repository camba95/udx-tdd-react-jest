import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const { success } = this.props;
    if (success) {
      return null;
    }
    return (
      <div data-test="component-input">
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            placeholder="Enter guess"
            type="text"
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => ({
  success
});

export default connect(mapStateToProps, null)(Input);
