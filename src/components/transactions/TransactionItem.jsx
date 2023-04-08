//TransactionItem

const TransactionItem = ({ type, amount, currency }) => { 
    return (
    <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </tr>
    );
};

export default TransactionItem;

/**
   {
    "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    "type": "invoice",
    "amount": "828.62",
    "currency": "UGX"
  }
 */
/*
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
*/