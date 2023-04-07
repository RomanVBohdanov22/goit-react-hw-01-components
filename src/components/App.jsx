import user from '../db/user';
import Profile from './profile';

//React homework template{user.username} 
export const App = () => {
  return (
    <div
      style={{
        marginTop: '10px',
        //height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    </div>
  );
};
