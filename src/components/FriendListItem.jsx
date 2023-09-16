import css from './FriendListItem.module.css'

import PropTypes from 'prop-types';

export default function FriendListItem({id, avatar, name, isOnline}) {
  return (
          <li key= {id} className={css.item}>
            <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>&#9679;</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
          </li>
  );
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
