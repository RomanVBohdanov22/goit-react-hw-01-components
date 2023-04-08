import user from '../db/user';
import data from '../db/data';
import friends from '../db/friends';

import Profile from './profile';
import Statistics from './statistics';
import StatisticsItem from '../components/statistics/StatisticsItem';

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
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
/*
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
*/