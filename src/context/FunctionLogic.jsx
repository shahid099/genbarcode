import { useState } from 'react';
import Mycontext from './Mycontext';

const FunctionLogic = (props) => {
    // TextArea State or Textarea Functionality
    const [textValue, setTextValue] = useState('');
    const handleChange = (event)=> {
        setTextValue(event.target.value);
      }

    // Function to Upload Data to Database
    const dataUpload = async () => { 
        console.log("Muhammad Shahid!", textValue);
        const response = await fetch('http://localhost:5000/postdata/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({textValue})
        })
        const json = await response.json();
        console.log(json);
     }
  return (
    <Mycontext.Provider value={{ textValue, handleChange, dataUpload }}>
      {props.children}
    </Mycontext.Provider>
  )
}

export default FunctionLogic
