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
        bad: 0
      }

 
        
    onButtonClick = name => {
    this.setState(state => ({[name]: state[name] + 1, notification: true,})
    );
    
}

    render() {
        return (
            <>
             <Section title='Please leave feedback'>
                 <FeedbackOptions type="button" onLeaveFeedback={this.onButtonClick}/>
             </Section>
            <Section title='Statistics'>
                {this.state.notification ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>) : (<Notification message={this.props.message}/>)}
            </Section>
            </>
        )
    }
}
