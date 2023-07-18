// components/FeedbackOptions/FeedbackOptions.jsx

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <h2>Оставьте свой отзыв</h2>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;