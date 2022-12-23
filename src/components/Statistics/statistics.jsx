import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.stat}>
      {title && <h2 className={s.stat__title}>{title}</h2>}
      <ul className={s.stat__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.stat__item}
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={s.stat__label}>{label}</span>
              <span className={s.stat__percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
