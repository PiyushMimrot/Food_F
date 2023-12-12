import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';
export default function Card(props) {
    let options = props.options;
    let priceOptions = Object.keys(options)
    let priceRef = useRef();
    let dispatch = useDispatchCart();
    let data = useCart();
    let [qty, setQty] = useState(1);
    let [size, setSize] = useState("");

    const handleAddtoCart = async () => {

        let food = [];

        for(const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                
                break;
            }
        }
        if(food!==[]){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty : qty})
                return;
            }else if(food.size!==size){
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                // console.log(data)
                return
        }
          return;
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
  
    }
    let finalPrice = qty  * parseInt(options[size]);
    useEffect(() =>{
        setSize(priceRef.current.value);
    },[])
    return (
        <div>

            <div>
                <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                    <img src={props.foodItem.img} class="card-img-top" alt="..." style={{ height: "160px", objectFit: "fill" }} />
                    <div class="card-body" >
                        <h5 class="card-title">{props.foodItem.name}</h5>

                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded' onChange={(e) => { setQty(e.target.value) }}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1} </option>
                                    )
                                })
                                }</select >

                            <select className='m-2 h-100  bg-success rounded' ref = {priceRef} onChange={(e) => { setSize(e.target.value) }}>
                                {priceOptions.map((data) => {
                                    return (<option key={data}>{data}</option>)
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                               Rs {finalPrice}/-
                            </div>
                        </div>
                        <hr />
                        <button className="btn btn-success justify-center ms-2" onClick={handleAddtoCart} >Add to Cart</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
