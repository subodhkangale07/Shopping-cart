import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();
    const removeCartItem = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }
    return(
        <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
           <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
           <div className="w-[30%]">
                <img src={item.image} alt=""
                className="object-cover "/>
            </div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-lg text-green-600">${item.price}</p>
                    <div>
                        <MdDelete
                        onClick={removeCartItem}
                        className="rounded-full bg-red-300 text-red-600 w-8 h-8 py-2 px-2"
                       />
                    </div>
                </div>
            </div>
           </div>

           {/* // <div className="w-[450px] h-0.5 bg-slate-400"></div> */}
            

        </div>
        
    )
}
export default CartItem;