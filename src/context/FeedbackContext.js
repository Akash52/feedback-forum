import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetch feedback

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:3001/feedback?_sort=id&_order=desc`
    )
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }
  //Delete Feedback

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id))
    }
  }

  //Add feedback

  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
    // setFeedback([...feedback, newFeedback])
  }

  //Edit feedback

  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updatedFeedback } : feedback
      )
    )
  }

  //Set feedback to edit

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addNewFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
