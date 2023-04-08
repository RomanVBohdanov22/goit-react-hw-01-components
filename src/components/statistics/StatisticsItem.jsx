//

const StatisticsItem = ({label, percentage}) => {
    return (
    <li className='item'>
            <span className='label'>{label}</span>
            <span className='percentage'> {percentage}%</span>
    </li>
    );
};

export default StatisticsItem;

//{ "id": "id-1", "label": ".docx", "percentage": 22 }