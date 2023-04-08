import '../transactions/TransactionHistory.css';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
          </thead>
          <tbody>
          {
             items.map(item => {
                  return <TransactionItem key={item.id} {...item}/>;
               })
              }
          </tbody>
    </table>
  );
};

export default TransactionHistory;

/*
      {
        friends.map(item => {
          return <FriendsItem key={item.id} {...item} />
        })
      }
*/
/*
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

*/
