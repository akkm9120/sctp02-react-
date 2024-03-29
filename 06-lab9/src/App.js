import React, {useState} from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";

export default function App() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const confirmUpdate = (event) =>{
    alert(` username is now ${userName} and email ${email}`);
    setIsSubmitting(true);
  }	
  
  return (
    <React.Fragment>
      <div className="App">
        { !isSubmitting ? ~
          (
            <Form userName = {userName}
                  setUserName={setUserName}
                  email = {email}
                  setEmail = {setEmail}
                  confirm = {confirmUpdate}
            />
          ) : (
            <Confirmation userName = {userName}
                          email = {email}
            />
          )
        }
      </div>
    </React.Fragment>
  )
}

