import { useState } from "react";

export default function Radio() {
  const [selectedFruit, setSelectedFruit] = useState("apples");
  return (
      <div>
          <h1>Selected Fruit: {selectedFruit}</h1>
          <input type="radio" value="apples" name="fruits"
              checked={selectedFruit === "apples"}
              onChange={(e) => { setSelectedFruit(e.target.value) }} />
          <label>Apples</label>

          <input type="radio" value="bananas" name="fruits"
              checked={selectedFruit === "bananas"}
              onChange={(e) => { setSelectedFruit(e.target.value) }} />
          <label>Bananas</label>

          <input type="radio" value="cherries" name="fruits"
              checked={selectedFruit === "cherries"}
              onChange={(e) => { setSelectedFruit(e.target.value) }} />
          <label>Cherries</label>
      </div>
  );
}
