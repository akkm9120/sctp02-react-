import { useState } from "react";
export default function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  // more code here
  const handleHobbiesChange = (event) => {
    const modified = [...hobbies, event.target.value];
    setHobbies(modified);
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
