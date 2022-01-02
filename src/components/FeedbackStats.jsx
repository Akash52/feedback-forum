const FeedbackStats = ({ feedback }) => {
  let average =
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length

  average = average.toFixed(2).replace(/\.?0+$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats