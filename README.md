#Introduction  
  
understanding how to effectively use React's core hooks like useEffect, useState, and useContext  
This user documentation will guide you through the proper usage of these essential React features.  
  
##useState  
The useState hook allows you to add state to functional components. it has two elements,the current state value and a function to update that state.   
  
Here's an example:  
import { useState } from 'react';  
function Counter() {  
  const [count, setCount] = useState(0);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>Click me</button>  
    </div>  
  );  
}  
 `count variable holds the current state value, and setCount is the function used to update the state.`  
  
  
##useEffect  
The useEffect hook allows you to perform side effects in functional components.  
It takes two arguments: a function that represents the effect, and an optional array of dependencies.  
Here's an example :   
import { useState, useEffect } from 'react';  
  
function UserProfile() {  
  const [user, setUser] = useState(null);  
  
  useEffect(() => {  
    async function fetchUser() {  
      const response = await fetch('/api/user');  
      const data = await response.json();  
      setUser(data);  
    }  
    fetchUser();  
  }, []);  
  
  if (!user) return <div>Loading...</div>;  
  
  return (  
    <div>  
      <h1>{user.name}</h1>  
      <p>{user.email}</p>  
    </div>  
  );  
}  
useEffect hook is used to fetch the user data and update the component's state when the component mounts.  
  
##useContext  
The useContext hook allows you to access the context value from the React.createContext provider.  
This is useful for passing data through the component tree without having to pass props down manually at every level.  
Here's an example of using useContext:  
import { createContext, useContext } from 'react';  
  
const ThemeContext = createContext(null);  
  
export default function MyApp() {  
  return (  
    <ThemeContext.Provider value="dark">  
      <Form />  
    </ThemeContext.Provider>  
  )  
}  
  
function Form() {  
  return (  
    <Panel title="Welcome">  
      <Button>Sign up</Button>  
      <Button>Log in</Button>  
    </Panel>  
  );  
}  
  
function Panel({ title, children }) {  
  const theme = useContext(ThemeContext);  
  const className = 'panel-' + theme;  
  return (  
    <section className={className}>  
      <h1>{title}</...
