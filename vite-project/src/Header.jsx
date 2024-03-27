import React from 'react'
import
{BsFillBellFill, BsFillEnvelopeFill, BsPersonCricle, BsSearch, BsJustify, Bs1CircleFill, BsPCircle}
from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
      <div className='menu-icons'>
      <BsJustify className='icon'/>
      </div>
      <div className='header-left'>
         <BsSearch />
      </div>
      <div className='header-right'>
      <BsFillBellFill className='icon'/>
      <BsFillEnvelopeFill className='icon'/>
      <BsPersonCricle className='icon'/>
      </div>
    </header>
  ) 
}

export default Header
