import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const { success } = this.props;
    let content = null;
    if (!success) {
      content = (
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

export default connect(mapStateToProps, null)(Input);
