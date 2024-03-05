import React from 'react'
import './Header.css'

const Header = (props) => {
  
  return (
    <div className='flex'>
      
      <div onClick={()=>props.handleShow(false)}><h1>shop</h1></div>
      <div onClick={()=>props.handleShow(true)}> <h1>cart
         <sup className='sup'>{props.count}</sup></h1>
     
       </div>
   </div>
  )
}

export default Header 