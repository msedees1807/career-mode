import { calculateNegotiationResult } from './utils';
import { playerSoldMessage, playerStayingMessage } from './../data/messages';

test('Calculate final result where all sold-supporting events gives sold result', () => {
    const events = [
        "Test message Talks progress",
        "Message stating Talks progress",
        "Talks progress",
        "Test Talks progress"
    ];
    expect(calculateNegotiationResult(events)).toBe(playerSoldMessage);
});

test('Calculate result where all stay-supporting events gives stay result', () => {
    const events = [
        "Test message talks not progress",
        "Message",
        "Bad message",
        "Valid but wrong message"
    ];
    expect(calculateNegotiationResult(events)).toBe(playerStayingMessage);
});

test('Calculate result when given 2 progress events', ()=>{
    const events = [
        "Test message Talks progress",
        "Message",
        "Test message Talks progress",
        "Message"
    ];
    expect(calculateNegotiationResult(events)).toBe(playerSoldMessage);
})

test('Calculate result when given 1 progress events', ()=>{
    const events = [
        "Test message Talks progress",
        "Message",
        "Message"
    ];
    expect(calculateNegotiationResult(events)).toBe(playerStayingMessage);
})

test('Calculate result when given 0 progress events', ()=>{
    const events = [
        "Message",
        "Message",
        "Message",
        "Message"
    ];
    expect(calculateNegotiationResult(events)).toBe(playerStayingMessage);
})