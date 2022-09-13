import React from 'react'

export const Footer = () => {
    let FooterStyle = {
        // position: "relative",
        // top:"10vh",
        width: "100%",
        // border: "2px solid red"
    }
  return (
    <div className='bg-dark text-light py-3' style={FooterStyle}>
        <p className='text-center'>
        Copyright &copy; MyTodoList.com
        </p>
    </div>
  )
}
