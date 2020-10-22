import { playerSoldMessage, playerStayingMessage } from "../data/messages";

/**
 * Calculates an appropriate negotiation result and returns it.
 * @param {string[]} events - the list of event messages to calculate a result for.
 */
export function calculateNegotiationResult(events) {
    return events.filter((message) => message.includes("Talks progress")).length >= 2 ? playerSoldMessage : playerStayingMessage;
}

export default {calculateNegotiationResult}