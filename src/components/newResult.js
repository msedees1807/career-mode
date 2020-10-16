import React, {useState} from 'react'

export default function NewResult() {

    const [messages, newMessage] = useState([]);

    function updateMessage(){
        newMessage(messages.concat("hello"))
    }

    function clearMessage(){
        newMessage([])
    }

    return (
        <div>
            <button onClick={()=> updateMessage()}>Test</button>
            <button onClick={()=> clearMessage()}>Clear</button>
            {messages && messages.map((x)=>(
                <p>{x}</p>
            ))}
        </div>
    )
}
