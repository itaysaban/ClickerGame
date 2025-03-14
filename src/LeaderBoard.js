import React, { useEffect, useState } from "react";
import './ClickerGame.js';

const LeaderBoard = ({currentPoints}) => {
    const [score, setScore] = useState([]);

    useEffect(() => {
        const savedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        setScore(savedScores)
    })
    
    useEffect(() => {
        if (currentPoints > 0) {
            setScore((prevScores) => {
                const updatedScores = [...prevScores, currentPoints]
                    .sort((a, b) => b - a)
                    .slice(0, 10);
                
                localStorage.setItem('leaderboard', JSON.stringify(updatedScores));  // Save updated scores to localStorage
                return updatedScores;
            });
        }
    }, [currentPoints]); 


    return (
        <div>
            <h1 id="leaderboardtitle">Highest Points Glory Board</h1>
                <ol id="scorelist">
                    {score.map((score, index) =>(
                        <li key={index}>{score} points</li>
                    ))}
                </ol>
        </div>
    );

};

export default LeaderBoard