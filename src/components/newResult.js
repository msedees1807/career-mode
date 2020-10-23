import React, {useState} from 'react';
import styled from "styled-components/macro";
import {news} from "../data/news"
import { calculateNegotiationResult } from './utils';

const TextMessage = styled.p`
color: #151515;
background-color: #e2e2e4;
border-radius: 15px;
font-size: 14px;
text-align: left;
padding: 12px;
font-family: Arial, Helvetica, sans-serif;
`

export default class NewResult extends React.PureComponent {

    state = {
        messages: []
      };
    
    newMessage = () => (
        console.log(this.state.messages) +
        this.state.messages.concat(Math.floor(Math.random() * 2) === 0 ? news[0].news + " Talks progress." : news[1].news +  "Talks move backwards.")
        )

    updateMessage = () => (
        this.newMessage(this.state.messages.concat(
            Math.floor(Math.random() * 2) === 0 ? 
            news[0].news + " Talks progress." : 
            news[1].news +  "Talks move backwards.")) +
        this.props.updateRounds()
    )
    
    render() {

        const { roundsNEW } = this.props
    
    return (
        <div>
            {roundsNEW && roundsNEW}
            {roundsNEW > 0 ? <button onClick={()=> this.updateMessage()}>Next offer</button> :
            <button disabled>Next offer</button>}
            <button onClick={()=> this.props.clearMessages()}>Clear</button>
            <TextMessage style={{ "color": "white", "background-color": "#0b81fd"}}>Any updates on the transfer?</TextMessage>
            {this.messages && this.messages.map((x)=>(
                <TextMessage>{x}</TextMessage>
            ))}
        
            {roundsNEW === 0 && "Verdict:" && this.messages && calculateNegotiationResult(this.messages)}
        
        </div>
        )
    }
}
