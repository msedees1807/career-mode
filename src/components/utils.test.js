import { calculateNegotiationResult } from './utils';
import { playerSoldMessage, playerStayingMessage } from './../data/messages';

test('Calculate result with all sold-supporting events gives sold result', () => {
    const events = [
        "Test message Talks progress",
        "Message stating Talks progress",
        "Talks progress",
        "Test Talks progress"
    ];

    expect(calculateNegotiationResult(events)).toBe(playerSoldMessage);
});

test('Calculate result with all stay-supporting events gives stay result', () => {
    const events = [
        "Test message talks not progress",
        "Message",
        "Bad message",
        "Valid but wrong message"
    ];

    expect(calculateNegotiationResult(events)).toBe(playerStayingMessage);
});