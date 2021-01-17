
import PropTypes from 'prop-types';
import style from './statistics.module.css';

function Statistics({good, neutral, bad, total, persentage}) {
    return (
        <>
            <ul className={style.statisticsList}>
                <li className={style.statisticsItem}>Good: {good}</li>
                <li className={style.statisticsItem}>Neutral: {neutral}</li>
                <li className={style.statisticsItem}>Bad: {bad}</li>
                <li className={style.statisticsItem}>Total: {total}</li>
                <li className={style.statisticsItem}>Positive Feedback: {persentage} %</li>
            </ul>
            
        </>
    )
}

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total:PropTypes.number,
persentage:PropTypes.number,
}

export default Statistics

