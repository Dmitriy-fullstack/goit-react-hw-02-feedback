import react from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css';

function Statistics({good, neutral, bad}) {
    return (
        <>
            <ul className={style.statisticsList}>
                <li className={style.statisticsItem}>Good: {good}</li>
                <li className={style.statisticsItem}>Neutral: {neutral}</li>
                <li className={style.statisticsItem}>Bad: {bad}</li>
            </ul>
            
        </>
    )
}

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
}

export default Statistics

