import PropTypes from 'prop-types';
import style from './button.module.css';

export default function Button({type, onLeaveFeedback}) {
    return (
        <>
            <button className={style.button} type={type} onClick={() => onLeaveFeedback('good')}>Good</button>
            <button className={style.button} type={type} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button className={style.button} type={type} onClick={() => onLeaveFeedback('bad')}>Bad</button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    
}