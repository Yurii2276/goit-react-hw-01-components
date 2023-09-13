export default function FriendListItem({id, avatar, name, isOnline}) {
  return (
          <li key= {id} className="item">
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
  );
}
