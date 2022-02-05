import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
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

  return (
    <Card>
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
    </Card>
  )
}

export default FeedbackForm
