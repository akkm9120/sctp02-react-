import "./style.css";
import { useState } from "react";
export default function App() {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");

  const handleCodeChange = (event)=>{
    setProductCode(event.target.value)
  }
  const handleNameChange = (event)=>{
    setProductName(event.target.value)
  }

  return (
    <div className="App">
      <div>
        <label>Product Code</label>
        <input type="text" 
              value={productCode}
              onChange={handleCodeChange}
        />

      </div>
      <div>
        <label>Product Name</label>
        <input type="text"
              value={productName} 
              onChange={handleNameChange}/>
      </div>

      <button onClick={() => {alert([productCode,productName]); }}>Submit</button>
    </div>
  );
}
