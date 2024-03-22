import Shout from "./shout";

function Sumoftwo(para){
  return(
    <div>
      {para.x + para.y}
    </div>
  )
}

function App() {
  return (
    <>
    <Shout msg="What the hell"/>
    <Sumoftwo x={4} y={6}/>
    </>
  );
}

export default App;
