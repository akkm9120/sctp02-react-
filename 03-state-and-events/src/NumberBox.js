import { useState } from "react";

function NumberBox(){
    const [count,setCount] = useState(0);
    const increaseNumber = ()=>{
        setCount(count+1)
    }
    const decreaseNumber = ()=>{
        setCount(count-1)
    }


    return <div
        style = {{"padding":"20px",
                "height": "50px",
                "width": "50px",
                "border":"1px solid black"}}>
                     {count} <br></br>

           <button  onClick={increaseNumber}>+</button> 
           <button  onClick={decreaseNumber}>-</button>
    </div>
}

export default NumberBox;