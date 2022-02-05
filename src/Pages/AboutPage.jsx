import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const AboutPage = () => {
  return (
    <Card>
      <h1>About</h1>
      <p>This is a simple app to help you rate your service with a friend.</p>
      <p>You can add your feedback and see the feedback from your friends.</p>
      <p>You can also see the average rating of your friends.</p>
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <p> version 1.0.0</p>
    </Card>
  )
}

export default AboutPage
