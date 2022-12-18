import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th className={s.transaction_history__headline}>Type</th>
          <th className={s.transaction_history__headline}>Amount</th>
          <th className={s.transaction_history__headline}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.transaction_history__body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={s.transaction_history__cell}>{type}</td>
              <td className={s.transaction_history__cell}>{amount}</td>
              <td className={s.transaction_history__cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
