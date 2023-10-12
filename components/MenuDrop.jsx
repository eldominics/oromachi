import React from "react";
import {useStateContext} from '../context/StateContext'
import {FaTimes} from 'react-icons/fa'

const MenuDrop = () => {

    const {setMenuList} = useStateContext();

    return(
        <>
            <div className="menu-wrapper">
                
                <div className="menu-drop-items">
                    <button type="button" className="menu-toggle-off" onClick={() => setMenuList(false)}>
                        <FaTimes/>
                    </button>
                    <div className="menu-lists">
                        <p>Categories</p>
                        <p>Wishlists</p>
                        <p>Stores around you</p>
                        <p>Contact Us</p>

                    </div>
                    

                </div>
                   
            </div>
        
        </>
    )
}


export default MenuDrop