import React from 'react';
import css from './feedback.module.css'

class FeedBack extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

}
render() {
    return (
       <>
       <h2>
            Please leave feedaback
        </h2>
        <button type='button'></button>
        <button type='button'></button>
        <button type='button'></button>
        </>

    )
}