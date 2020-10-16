import React, {useState} from 'react'

export default function NewResult() {

    const [messages, newMessage] = useState([]);
    const [rounds, updateRounds] = useState(4);

    function updateMessage(x){
        newMessage(messages.concat(Math.floor(Math.random() * 2) === 0 ? "Talks progressing" : "Talks ended"))
     updateRounds(rounds - 1)
    }

    function clearMessage(){
        newMessage([])
    }

    return (
        <div>
            {rounds > 0 ? <button onClick={()=> updateMessage(3)}>Test</button> :
            <>Nahhhh</>}
            <button onClick={()=> clearMessage()}>Clear</button>
            {messages && messages.map((x)=>(
                <p>{x}</p>
            ))}
        </div>
    )
}
