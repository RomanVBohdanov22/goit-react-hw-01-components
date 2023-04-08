import PropTypes from 'prop-types';
import '../friends/Friends.css';
import FriendsItem from './FriendsItem';

const FriendList = ({ friends }) => { 
  return (
    <ul className="friend-list">
      {
        friends.map(item => {
          return <FriendsItem key={item.id} {...item} />
        })
      }
    </ul>
  );    
};
export default FriendList;

FriendList.propTypes= {
    friends: PropTypes.array.isRequired,
    
};
