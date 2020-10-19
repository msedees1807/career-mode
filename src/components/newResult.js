import React, {useState} from 'react';
import styled from "styled-components/macro";
import {news} from "../data/news"

export default function NewResult() {

    const TextMessage = styled.p`
    color: black;
    background-color: white;
    border-radius: 30px;
    font-size: 16px;
    text-align: left;
    padding: 10px;
    `

    const [messages, newMessage] = useState([]);
    const [rounds, updateRounds] = useState(4);

    function updateMessage(x){
        newMessage(messages.concat(Math.floor(Math.random() * 2) === 0 ? news[0].news + " Talks progress" : news[1].news +  "Talks move backwards"))
     updateRounds(rounds - 1)
    }

    function clearMessage(){
        newMessage([])
        updateRounds(4)
    }

    function calculateVerdict(){
    if(messages.reduce((count, result) => result === "Talks progress" && count + 1) > 0){
         return "A deal has been agreed. The player will be sold."
        }
        else {
         return "Talks failed. The player will remain at the club." 
        }
    }
    

    return (
        <div>
            {rounds > 0 ? <button onClick={()=> updateMessage(3)}>Next offer</button> :
            <button disabled>Next offer</button>}
            <button onClick={()=> clearMessage()}>Clear</button>
            {messages && messages.map((x)=>(
                <TextMessage>{x}</TextMessage>
            ))}
        
            {rounds === 0 && "Verdict:" && calculateVerdict()}
        
        </div>
    )
}
