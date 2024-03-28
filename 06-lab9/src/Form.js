import React from 'react';


export default function Form(props) {

    return <>
        <input type='text' name='userName'
            value={props.userName}
            onChange={(event)=>props.setUserName(event.target.value)}>
        </input>

        <input type='text' name='email'
            value={props.email}
            onChange={(event)=> props.setEmail(event.target.value)}>
        </input>
    <button onClick={props.confirm}>Confirm</button>
    </>
}