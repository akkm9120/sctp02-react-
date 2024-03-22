import { useState } from "react";

function Dice(){
    const [dice,setDice ] = useState(0);
    const Random = ()=>{
       setDice(Math.floor(1+Math.random() * 6))
    }
    return <div style={{"padding":"20px",
                        "border":"2px solid green"}} 
                        onClick={Random}>

        The number on your Dice is {dice}. { dice > 4 ? <p>Big</p>: null }
    </div>
}

export default Dice; 