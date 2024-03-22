import { useState } from 'react'
import './style.css'
import NumberBox from "./NumberBox"
import AlertBox from './Alert';
import Dice from './Dice';



function App() {
   const [number] = useState(0);

  return <>
    <h1>
      State Examples
    </h1>
    {number}
  <Dice/>
  <AlertBox/>
    <NumberBox/>

  </>

}

export default App;
