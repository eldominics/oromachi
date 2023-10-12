import React from 'react'
import   {AiOutlineShopping, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import {Cart} from './'
import { useStateContext } from '../context/StateContext';
import MenuDrop from './MenuDrop';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities, menuList, setMenuList} = useStateContext();
  return (
    <>
      {menuList? '' : <div className='shop-special'> Shop on the most amazing deals</div>}
      {menuList? '' : <div className='navbar-container'>

        <button type='button' className='toggle-menu' onClick= {() => setMenuList(true)}> 
          <AiOutlineMenu/>
        </button>
        

        <p className='logo'>
          <Link href='/' legacyBehaviour> OROMACHI </Link>
        </p>

        <button type='button' className='search-icon' onClick=''> 
          <AiOutlineSearch/>
        </button>

        
        
        <button type='button' className='cart-icon' onClick={() =>setShowCart(true)}>
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart/>}

      </div>}
      {menuList && <MenuDrop/>}
    </> 
  )
}

export default Navbar