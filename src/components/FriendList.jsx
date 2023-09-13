import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className="friend-list">
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
