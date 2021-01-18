import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeedbackOptions from '../Button/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section.jsx';
import Statistics from '../Statistics/Statistics';


export default class Feedback extends Component {

    static defaultProps = {
        message: 'No feedback given',
    }

    static propTypes = {
        message: PropTypes.string.isRequired,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

        
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = (total, good) => {
        const positivePercentage= (good/total)*100;
        return positivePercentage.toFixed();
           
        
    } 
    
    onButtonClick = name => {
    this.setState(state => ({[name]: state[name] + 1, notification: true}));
    
     
    
}

    render() {
        const total = this.countTotalFeedback();
        const posPers = this.countPositiveFeedbackPercentage(total, this.state.good)
        
        return (
            <>
             <Section title='Please leave feedback'>
                 <FeedbackOptions type="button" onLeaveFeedback={this.onButtonClick}/>
             </Section>
            <Section title='Statistics'>
                {this.state.notification ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total}
            percentage={posPers}/>) : (<Notification message={this.props.message}/>)}
            </Section>
            </>
        )
    }
}
