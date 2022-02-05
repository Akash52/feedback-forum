import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbakData'
import { FeedbackProvider } from './context/FeedbackContext'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
    // setFeedback([...feedback, newFeedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id))
    }
  }
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addNewFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </FeedbackProvider>
  )
}

export default App
