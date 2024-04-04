# React Hooks Documentation
## Introduction
This documentation aims to provide guidance on effectively using React's core hooks: useState, useEffect, and useContext. Understanding these hooks is essential for developing efficient and functional React applications.

## `useState`
The useState hook allows functional components to incorporate state management. It consists of two elements: the current state value and a function to update that state.

### Example
```react
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
```
In this example, the count variable holds the current state value, and setCount is the function used to update the state.

## `useEffect`
The useEffect hook facilitates performing side effects within functional components. It accepts two arguments: a function representing the effect and an optional array of dependencies.

### Example

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

In this example, the useEffect hook is used to fetch user data and update the component's state when the component mounts.

## `useContext`
The useContext hook allows accessing context values provided by React.createContext without manually passing props down the component tree.

Example

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
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

In this example, the useContext hook is used to access the ThemeContext value provided by the MyApp component.

