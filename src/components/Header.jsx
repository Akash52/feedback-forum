import React from 'react'

const headerStlyes = {
  backgroundColor: '#27272a',
  color: '#f43f5e',
}

const Header = () => {
  return (
    <header style={headerStlyes}>
      <div className="container">
        <h2>Feedback Forum</h2>
      </div>
    </header>
  )
}

export default Header
