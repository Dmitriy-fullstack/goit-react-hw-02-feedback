
import PropTypes from 'prop-types';
import style from './statistics.module.css';

function Statistics({good, neutral, bad, total, percentage}) {
    return (
        <>
            <ul className={style.statisticsList}>
                <li className={style.statisticsItem}>Good: {good}</li>
                <li className={style.statisticsItem}>Neutral: {neutral}</li>
                <li className={style.statisticsItem}>Bad: {bad}</li>
                <li className={style.statisticsItem}>Total: {total}</li>
                <li className={style.statisticsItem}>Positive Feedback: {percentage} %</li>
            </ul>
            
        </>
    )
}

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total:PropTypes.number,
positivePercentage:PropTypes.string,
}

export default Statistics

