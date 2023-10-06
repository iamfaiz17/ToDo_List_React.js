import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "40vh",
    width: "100%",
    border: "2px solid white"
  }
  return (
    <div className='bg-dark text-light py-2' style = {footerStyle}>
      <p className='text-center'>
        Copyright &copy; YourTodosList.com
      </p>
    </div>
  )
}

export default Footer



