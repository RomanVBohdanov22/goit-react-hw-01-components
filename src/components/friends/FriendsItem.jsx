import PropTypes from 'prop-types';

const FriendsItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="item">
            <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

export default FriendsItem;

FriendsItem.propTypes= {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
