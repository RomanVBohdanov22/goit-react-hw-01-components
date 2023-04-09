import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StatisticsItem = ({ label, percentage }) => {
  return (
      <li className="item" style={{ backgroundColor: getRandomHexColor()}}>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes= {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

