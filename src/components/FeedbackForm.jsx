import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  function handleTextChange(e) {
    setText(e.target.value)
  }

  return (
    <Card>
      <h2>How Would you rate your service with us?</h2>
      <div className="input-group">
        <input
          type="text"
          onChange={handleTextChange}
          value={text}
          placeholder="Write your feedback here"
        />

        <Button type="submit" version="primary">
          Send
        </Button>
      </div>
    </Card>
  )
}

export default FeedbackForm
