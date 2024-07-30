import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    // kitne cart item present hai vo hme slice se milenge by state 
    const {cart} = useSelector( (state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0));
    },[cart])
    return(
        <div>
            {
                cart.length > 0 ? 
                ( 
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                        <div className="w-[100%] md:w-[60%] flex flex-col p-2"> 
                          {
                            cart.map ( (item,index) => {
                                return <CartItem key={item.id} item={item} itemIndex={index}/>
                            } )
                         }
                       </div>

                         <div className="flex flex-col mt-[100px] justify-between">
                         <div className="flex flex-col justify-center items-center gap-y-5 ">
                            <div className="font-semibold text-xl text-green-800 -ml-[110px] ">Your Cart </div>
                            <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
                            <p className="text-xl">
                            <span className="text-gray-700 font-semibold text-xl -ml-[85px]">Total Items:{cart.length}</span>
                            </p>
                         </div>
                            <div className="flex flex-col">
                              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
                              <button 
                                 className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2
                                 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                                CheckOut Now
                              </button>
                            </div>
                         </div>
                    </div>
                   
                ):
                (
                    <div>
                        <h1>Cart Empty</h1>
                        <NavLink to={"/"}>
                            <button>Shopnow</button>
                        </NavLink>
                        </div>
                )
            }

        </div>
    )
}
export default Cart;