import React, { useEffect, useState } from "react";
import './LeaderBoard.css'
import './ClickerGame.js';

const LeaderBoard = ({currentPoints, timer}) => {
    const [score, setScore] = useState([]);

    useEffect(() => {
        const savedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        setScore(savedScores)
    }, [])
    
    useEffect(() => {
        if ((currentPoints > 0) && (timer === 0)) {
            setScore((prevScores) => {
                const updatedScores = [...prevScores, currentPoints]
                    .sort((a, b) => b - a)
                    .slice(0, 10);
                localStorage.setItem('leaderboard', JSON.stringify(updatedScores));  // Save updated scores to localStorage
                return updatedScores;
            });
        }
    }, [timer]); 


    return (
        <div className="leaderboard">
            <h3 className="leaderboardtitle">Highest Points Glory Board</h3>
                <ol id="scorelist">
                    {score.map((score, index) =>(
                        <li key={index} className="leaderboard-item">{score} points</li>
                    ))}
                </ol>
        </div>
    );

};

export default LeaderBoard