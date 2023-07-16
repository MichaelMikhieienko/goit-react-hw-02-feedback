// components/Statistics/Statistics.jsx

import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Статистика</h2>
      <p>Хорошо: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Плохо: {bad}</p>
      <p>Всего отзывов: {total}</p>
      <p>Процент положительных отзывов: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

