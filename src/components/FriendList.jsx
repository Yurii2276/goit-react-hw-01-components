import FriendListItem from "./FriendListItem";

import css from './Friendlist.module.css'

import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map((element) => (
            <FriendListItem 
            key={element.id} 
            avatar={element.avatar}
            name={element.name}
            isOnline={element.isOnline}/>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,

}