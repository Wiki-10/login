import React from 'react'

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to this React Application</h1>
      <p>You are not logged in</p>
      <div>
        <a href='/login'>
          <button>Login</button>
        </a>
        <a href='/login'>
          <button>Register</button>
        </a>
      </div>
    </div>
  )
}

export default LandingPage