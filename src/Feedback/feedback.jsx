import React from 'react';
import css from './feedback.module.css'

export class FeedBack extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }
      handleGood = () => {
        this.setState((prev) => ({
            good: prev.good+1
        }))
      };
      handleNeutral = () => {
        this.setState((prev) => ({
            neutral: prev.neutral+1
        }))
      };
      handleBad = () => {
        this.setState((prev) => ({
            bad: prev.bad+1
        }))
      };
      countTotalFeedback = () => {
        const count = Object.values(this.state);
        const sum = count.reduce((accumulator, currentValue) => accumulator + currentValue, 0,)
        return sum
      }
      countPositiveFeedbackPercentage = () => {
      const percanatge = Math.floor((this.state.good / this.countTotalFeedback()) * 100);
        return percanatge
      }


render(){
    const fB = this.countTotalFeedback();
    const perc = this.countPositiveFeedbackPercentage()
    return (
       <>
       <h2>
            Please leave feedaback
        </h2>
        <ul className={css.feedbackUl}>
        <button type='button' onClick={this.handleGood}>Good</button>
        <button type='button' onClick={this.handleNeutral}>Neutral</button>
        <button type='button' onClick={this.handleBad}>Bad</button>
        </ul>
        <h2>Stats</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>  
        <p>Total: {fB}</p>     
        <p>Positive feedback: {perc}%</p> 
        </>

    )
}}
