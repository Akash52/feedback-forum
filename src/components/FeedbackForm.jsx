import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    } else {
      setRating(0)
      setText('')
    }
  }, [feedbackEdit])

  function handleTextChange(e) {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Please enter at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
        setText('')
      } else {
        addNewFeedback(newFeedback)
        setText('')
        setBtnDisabled(true)
        setMessage('Thank you for your feedback!')
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      }
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="Write your feedback here"
          />

          <Button type="submit" isDisabled={btnDisabled} version="primary">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
