import React, {useState} from 'react'

export default function NewResult() {

    const [messages, newMessage] = useState([]);
    const [rounds, updateRounds] = useState(4);

    function updateMessage(x){
        newMessage(messages.concat(Math.floor(Math.random() * 2) === 0 ? "Talks progress" : "Talks move backwards"))
     updateRounds(rounds - 1)
    }

    function clearMessage(){
        newMessage([])
        updateRounds(4)
    }

    return (
        <div>
            {rounds > 0 ? <button onClick={()=> updateMessage(3)}>Next offer</button> :
            <button disabled>Test</button>}
            <button onClick={()=> clearMessage()}>Clear</button>
            {messages && messages.map((x)=>(
                <p>{x}</p>
            ))}
            {rounds === 0 && <>Talks have concluded. Verdict: {messages.reduce((count, result) => result ==="Talks progress" && count + 1) > messages.length ? "The player will be sold" : "Talks failed"}</>}
        </div>
    )
}
