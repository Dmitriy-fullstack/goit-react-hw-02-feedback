
import PropTypes from 'prop-types';
import style from './section.module.css';

function Section({title, children}) {
    return (<>
       <section className={style.section}>
           <h2 className={style.section-title}>{title}</h2>
           {children}
       </section>
       </>
    )
}

Section.propTypes = {
title:PropTypes.string,
}

export default Section

