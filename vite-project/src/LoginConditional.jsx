import React from 'react'

function LoginConditional(userStatus) {
  return (
    userStatus === "admin" ? (
        <>
            <h2>Admin Dashboard</h2>
            <button>Manage Users</button>
        </>
    ) : userStatus === "member" ? (
        <p>Welcome to the community.</p>
    ) : (
        <a href="#">Sign up here.</a>
    )
  )
}

export default LoginConditional