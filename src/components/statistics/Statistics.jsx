import PropTypes from 'prop-types';
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

Statistics.propTypes= {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired,
};