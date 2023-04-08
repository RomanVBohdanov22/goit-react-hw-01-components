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

/*

<ul class="friend-list">
  <!-- Довільна кіл-сть FriendListItem -->
</ul>

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>

*/
/*
import '../statistics/Statistics.css';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => {
          return <StatisticsItem key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
*/

/*
  {
    "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    "name": "Mango",
    "isOnline": true,
    "id": 1812
  }
*/
