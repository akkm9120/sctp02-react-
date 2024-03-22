import { useState } from "react";

function Dice(){
    const [dice,setDice ] = useState(0);
    const Random = ()=>{
       setDice(Math.floor(1+Math.random() * 6))
    }
    return <div style={{"padding":"20px",
                        "border":"2px solid green",
                        "color": "#fffff",
                        "backgroundColor": dice % 2 === 0 ? "green" : "red" }} 
                        onClick={Random}>

        The number on your Dice is {dice} 
    </div>
}

export default Dice; 