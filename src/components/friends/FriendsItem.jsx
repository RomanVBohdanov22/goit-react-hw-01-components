const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
          { ({isOnline}===true) ?
              (<span className="status online">On -l.</span>) :
              (<span className="status">Off-l.</span>)
          }
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsItem;

/*<span className="status">{isOnline}</span> */
/*
 {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages.</p>
      ) : (
        <p>No unread messages.</p>
      )}
*/
/*
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
*/
