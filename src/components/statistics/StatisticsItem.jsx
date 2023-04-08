import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

//{ "id": "id-1", "label": ".docx", "percentage": 22 }

StatisticsItem.propTypes= {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

