import React, {useState} from 'react';
import styled from "styled-components/macro";
import { playerSoldMessage, playerStayingMessage } from '../data/messages';
import {news} from "../data/news"

export default function NewResult() {

    const TextMessage = styled.p`
    color: #151515;
    background-color: #e2e2e4;
    border-radius: 15px;
    font-size: 14px;
    text-align: left;
    padding: 12px;
    font-family: Helvetica Neue;
    `

    const [messages, newMessage] = useState([]);
    const [rounds, updateRounds] = useState(4);

    function updateMessage(){
        newMessage(messages.concat(Math.floor(Math.random() * 2) === 0 ? news[0].news + " Talks progress." : news[1].news +  "Talks move backwards."))
        updateRounds(rounds - 1)
    }

    function clearMessages(){
        newMessage([])
        updateRounds(4)
    }

    function calculateVerdict(){
        return messages.reduce((count, result) => result === "Talks progress" && count + 1) > 0 ? playerSoldMessage : playerStayingMessage;
    }
    

    return (
        <div>
            {rounds > 0 ? <button onClick={()=> updateMessage(3)}>Next offer</button> :
            <button disabled>Next offer</button>}
            <button onClick={()=> clearMessages()}>Clear</button>
            <TextMessage style={{ "color": "white", "background-color": "#0b81fd"}}>Any updates on the transfer?</TextMessage>
            {messages && messages.map((x)=>(
                <TextMessage>{x}</TextMessage>
            ))}
        
            {rounds === 0 && "Verdict:" && calculateVerdict()}
        
        </div>
    )
}
