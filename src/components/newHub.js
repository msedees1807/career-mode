import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { teams } from "../data/teams";

const TextMessage = styled.p`
  color: #151515;
  background-color: #e2e2e4;
  border-radius: 15px;
  font-size: 14px;
  text-align: left;
  padding: 12px;
  margin: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function NewHub() {
  const [results, setResults] = useState([]);
  const [revealResults, setRevealResults] = useState([]);
  const [overalResult, setOveralResult] = useState();
  const [negotiationInProgress, setProgress] = useState(false);
  const [negStrength, setNegStrength] = useState();

  const initialRender = useRef(true);

  const calculateNegStrength = (prestige, rating) => {
    let value = Math.floor(rating + prestige - 7);
    return value > 0 ? value : 1;
  };

  const calculateResults = (attempts) => {
    // Wipe the current results array.
    results.length && setResults([]);
    revealResults.length && setRevealResults([]);
    // Set the negotiation progress to started.
    setProgress(true);
    // Loop for the 3 negotiation attempts. Randomise to decide if a "yes" or "no".
    for (let i = 0; i < attempts; i++) {
      if (Math.floor(Math.random() * 2) === 0) {
        setResults((results) => [...results, "N"]);
      } else {
        setResults((results) => [...results, "Y"]);
      }
    }
  };

  const calculateOverallResult = () => {
    let soldCount = results.reduce((a, v) => (v === "Y" ? a + 1 : a), 0);
    if (soldCount >= 2) {
      setOveralResult("Player Sold.");
    } else {
      setOveralResult("Player Stays!");
    }

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setRevealResults((revealResults) => [...revealResults, results[i]]);
      }, i * 1000);
    }

    // Uncomment this to allow for new negotiations, however it doubles the number of results in revealResults
    // setProgress(false)
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      calculateOverallResult();
    }
  }, [negotiationInProgress]);

  const yesOutcomeMessage = () => {
    return <TextMessage>Yes</TextMessage>;
  };

  const noOutcomeMessage = () => {
    return <TextMessage>No</TextMessage>;
  };

  return (
    <div>
      <div>
        <p>Select a team to begin negotiations.</p>
        <select
          name="teams"
          id="teams"
          onChange={(e) => setNegStrength(e.target.value)}
        >
          {teams.map((team) => (
            <option value={calculateNegStrength(team.prestige, team.rating)}>
              {team.name}
            </option>
          ))}
        </select>
        Negotiation Strength: {negStrength}
      </div>

      <div>
        <button onClick={() => calculateResults(negStrength)}>Negotiate</button>
      </div>

      {revealResults.map((x) =>
        x === "Y" ? yesOutcomeMessage() : noOutcomeMessage()
      )}
      <p>{overalResult && "Overall Result: " + overalResult}</p>
    </div>
  );
}
