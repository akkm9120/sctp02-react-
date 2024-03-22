import { useState } from 'react';

function AlertBox(){
    const [ message, setMessage ] = useState("");
    

    return <div style = {{"padding":"10px","width":"100px","height":"100px","border": "4px solid black"}}>
      {message}
    </div>
  }
  
 export default AlertBox;