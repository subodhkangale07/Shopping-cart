import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const {cart} = useSelector( (state) => state);
    return(
        <div>
             <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5">
                      <img src="../logo.png" alt="" className="h-14"/>
                    </div>
                </NavLink>
                
                <div className="flex items-center font-medium text-slate-100 space-x-6  mr-5">
                  <NavLink to="/">
                    <p>Home</p>
                  </NavLink>

                  <NavLink to="/cart">
                    <div className="relative text-2xl">
                     <FaShoppingCart/>
                     {
                      cart.length > 0 && 
                      <span 
                      className="-top-1 -right-2 absolute bg-green-600 flex justify-center items-center 
                      rounded-full w-5 h-5 text-xs animate-bounce text-white ">
                      {cart.length}</span>
                     }
                    </div>
                  </NavLink>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;