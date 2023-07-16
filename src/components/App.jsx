import React, { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = state;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Отзывы</h2>
      <div>
        <button onClick={() => handleFeedback('good')}>Хорошо</button>
        <button onClick={() => handleFeedback('neutral')}>Нейтрально</button>
        <button onClick={() => handleFeedback('bad')}>Плохо</button>
      </div>

      <h2>Статистика</h2>
      <p>Хорошо: {good}</p>
      <p>Нейтрально: {neutral}</p>
      <p>Плохо: {bad}</p>
      <p>Всего отзывов: {totalFeedback}</p>
      <p>Процент положительных отзывов: {positivePercentage}%</p>
    </div>
  );
};
