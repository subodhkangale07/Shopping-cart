import React from "react";
// import Cart from "../pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({item}) => {
    const {cart} = useSelector( (state) => state)
    const dispatch = useDispatch(); // it is used to acces function in slice 

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Remove Item from Cart");
    }
    const addToCart = () => {
        dispatch(add(item));
        toast.success("Item added to Cart");
    }
    
    return(
        <div className="flex flex-col justify-center items-center hover:scale-110 transition
        duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl first-letter border box-border">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={item.image} alt="" className="h-full w-full"/>
            </div>

            <div className="flex justify-between gap-12 ">
                 <div>
                   <p className="text-green-600 font-semibold">${item.price}</p>
                 </div>
              {
                cart.some( (p) => p.id === item.id) ? 
                (
                    <button onClick={removeFromCart}
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                        Remove Item
                    </button>
                ):
                 (
                    <button onClick={addToCart} 
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                        Add to Cart
                    </button>
                 )
               }
            </div>

        </div>
    )
}
export default Product;