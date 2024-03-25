import { useState } from "react";
export default function Hobbies() {
  const [hobbies, setHobbies] = useState(["reading"]);

  // more code here
  const handleHobbiesChange = (event) => {
    if(event.checked){
    const modified = [...hobbies, event.target.value];
    setHobbies(modified);
    }else {
        if (event.target.checked) {
            const modified = [...hobbies, event.target.value];
            setHobbies(modified);
          } else {
            const cloned = hobbies.slice();
            let indexToRemove = cloned.findIndex(function(e) {
              return e === event.target.value;
            });
          
            if (indexToRemove !== -1) {
              cloned.splice(indexToRemove, 1);
            }
            setHobbies(cloned);
          }         
    }
  }

  return (

      <div className="App">
          <h1>Hobbies</h1>
          <h2>Selected Hobbies:</h2>

          <input type="checkbox" name="hobbies" value="reading"
              checked={hobbies.includes('reading')}
              className="ms-1 me-1"
              onChange={handleHobbiesChange} />
          <label>Reading</label>

          <input type="checkbox" name="hobbies" value="cooking"
              checked={hobbies.includes('cooking')}
              className="ms-1 me-1"
              onChange={handleHobbiesChange} />
          <label>Cooking</label>

          <input type="checkbox" name="hobbies" value="swimming"
              checked={hobbies.includes('swimming')}
              className="ms-1 me-1"
              onChange={handleHobbiesChange} />
          <label>Swimming</label>

      </div>
  );
}
