import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect, useSyncExternalStore } from "react";

function ClickerGame() {

    const [timer, setTimer] = useState(null);
    const [points, setPoints] = useState(0);
    const [countDown, setCountDown] = useState(null);
    const [difficulty, setDifficulty] = useState(null);

    const startGame = () => {
      setPoints(0);
      setCountDown(3);
        if (difficulty === "Easy") {
          setTimer(30);
        };
        if (difficulty === "Medium"){
            setTimer(20);
          };
        if (difficulty === "Hard"){
          setTimer(10);
        };

    }

    const stopGame = () => {
      setPoints(0);
      setCountDown(null);
      setTimer(null);
        };

    const addPoints = () => {
        setPoints((prevPoints) => prevPoints + 1);
    };

    const setGameDifficulty = (level) => {
      setDifficulty(level);
      setPoints(0);
      setTimer(null);
      setCountDown(null);
    }
    
    useEffect(() => {
      if (countDown === null || countDown === 0) return;
      const countDownInterval = setInterval(() => {
        setCountDown((prevCountDown) => {
          if (prevCountDown === 1) {
            clearInterval(countDownInterval);
            setTimer(difficulty === "Easy" ? 30 : difficulty === "Medium" ? 20 : difficulty === "Hard" ? 10 : 0);
            return null;
          }
            return prevCountDown -1;
          
        });
      }, 1000)
        return () => clearInterval(countDownInterval)
    }, [countDown]);


    useEffect(() => {
        if (timer === null || timer === 0) return;
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer === 1) {
                clearInterval(interval);
              }
              return prevTimer - 1;
            });
          }, 1000);

            return () => clearInterval(interval);
    }, [timer]);



    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Clicker Game</h1>
          {timer === 0 || timer === null ? null : (
            <h2>
              {countDown !== null && countDown > 0 ? (
                `Go in: ${countDown}`
              ) : (
                `Timer: ${timer}`
              )}
            </h2>
    )}
          {timer === 0 ? <h2>Game Over, you scored {points} points! Start again!</h2>: <h2>Click the button as much as possible!</h2>}
          {timer !== 0 &&<h2>Points: {points}</h2>}
          {(timer === null || timer === 0) && (
                <div>
              <h3>Choose difficulty:</h3>
              <button onClick={() => setGameDifficulty("Easy")}>Easy</button>
              <button onClick={() => setGameDifficulty("Medium")}>Medium</button>
              <button onClick={() => setGameDifficulty("Hard")}>Hard</button>
              </div>)}
          <button onClick={startGame} disabled={timer !== null && timer > 0} >
            Start Game
          </button>
          <button onClick={addPoints} disabled={(timer === 0 || timer === null)|| countDown !== null}>
            Click Me!
          </button>
          {(timer !== null) &&
          <button onClick={stopGame}>Reset</button>}
        </div>
      );
    };

export default ClickerGame;
