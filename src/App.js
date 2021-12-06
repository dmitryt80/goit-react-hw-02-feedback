import React, { Component } from 'react'
import './App.css'
import Container from './components/Container/Container'

import Feedback from './components/Feedback/Feedback'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification/Notification'

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 }

  onSetVoice = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }))
  }

  countTotalFeedback = () => {
    const objKey = Object.keys(this.state)
    return objKey.reduce((total, el) => (total += this.state[el]), 0)
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    const total = this.countTotalFeedback()
    const positive = this.countPositiveFeedbackPercentage()
    const state = this.state
    const keys = Object.keys(this.state)
    return (
      <div className="App">
        <Container title="Please leave feedback">
          <Feedback options={keys} addVoice={this.onSetVoice} />
        </Container>
        <Container title="Statistics">
          {total > 0 ? (
            <Statistics
              options={state}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Container>
      </div>
    )
  }
}

export default App