import PropTypes from 'prop-types';
import '../transactions/TransactionHistory.css';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
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

TransactionHistory.propTypes= {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired,    
};
//stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})),