import React from 'react'
import  {BsCart3} from 'react-icons/bs'

function Sidbar() {
  return (
    <aside id='sidbar'>
    <div className='sidbar-title'>
        <div className='sidbar-brand '>
             <BsCart3 className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon'>X</span>
    </div>

<ul className='sidbar-list'>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> Dashboard
     </a>
    </li>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> products
     </a>
    </li>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> Customers
     </a>
    </li>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> Inventory
     </a>
    </li>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> Reports
     </a>
    </li>
    <li className='sidbar-list-item'>
     <a href=''>
        <BsCart3 className='icon' /> settinf
     </a>
    </li>
</ul>

    </aside>
  )
}

export default Sidbar
