
 import grilling from "./pig-grilling.jpeg"
 import "./style.css"


function App() {
  return (
    <>
      <img src={grilling}></img>
      <h1>Hello World</h1>

      <p>
        {Math.random()*100+1}
      </p>

      <h2 style={{
        'background-color':'red',
        'color':'green',
      }}>Where is chicken rice!! </h2>
    </>
  );
}

export default App;
