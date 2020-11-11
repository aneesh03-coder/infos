import React, { useState,useEffect } from 'react';
import './Product.css';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useDispatch} from "react-redux";
import {setCartTotal, decCartTotal} from "./features/appSlice";

const Product = ({title, calorie, price, src}) => {
    const [num, setNum] = useState(1);
    const [fnType,setFnType]=useState("increment");
    const dispatch=useDispatch();
    useEffect(() => {
        if(fnType == "increment"){
            dispatch(setCartTotal({
                itemValue:parseFloat(price),
               }));
        }
        else if(fnType == "decrement"){
            dispatch(decCartTotal({
                itemValue:parseFloat(price),
               }));
        }
        else{
            console.log("Something went wrong");
        }
      
    }, [num])

    const incNum = () => {
        setFnType("increment");
        setNum(num+1);
   }

    const decNum = () => {
        if(num>0){
            setFnType("decrement");
            setNum(num-1);            
        }
    }

    return (
        <div className='product'>
                <div className="product_image">
                    <img src={src} alt="" />
                </div>
                <div className="product_info">
                    <div className="product_title">
                        <p>{title}</p>
                    </div>
                    <div className="product_details">
                        <div className="product_calorie">
                            <WhatshotIcon className="calorie"/>
                            <p>{calorie} Calories</p>
                        </div>
                        <h3>{price}00 KWD</h3>
                    </div>
                    <div className="product_count">
                        <div className="counter">
                            <RemoveIcon className="remove_icon" onClick={()=>decNum()}/>
                            <div className="count_div">
                                <span className="count"><h4>{num}</h4></span>
                            </div>
                            <AddIcon className="add_icon" onClick={()=>incNum()}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Product
