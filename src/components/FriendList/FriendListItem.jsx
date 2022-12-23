import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.friend_list__item} key={id}>
      <span
        className={
          isOnline ? s.friend_list__status : s.friend_list__status__offline
        }
      ></span>
      <img
        className={s.friend_list__avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={s.friend_list__name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
