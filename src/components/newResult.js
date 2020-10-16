import React, {useState} from 'react'

export default function NewResult() {

    const [messages, newMessage] = useState([]);

    function updateMessage(x){
        for(let i= 0; i<x; i++){
        newMessage(messages.concat(Math.floor(Math.random() * 2) === 0 ? "Talks progressing" : "Talks ended"))
        console.log(messages)
        }
    }

    function clearMessage(){
        newMessage([])
    }

    return (
        <div>
            <button onClick={()=> updateMessage(3)}>Test</button>
            <button onClick={()=> clearMessage()}>Clear</button>
            {messages && messages.map((x)=>(
                <p>{x}: test</p>
            ))}
        </div>
    )
}
