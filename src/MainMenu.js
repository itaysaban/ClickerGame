import { useState } from "react";
import Button from './Button'
import './App.css'

const MainMenu = ({onStartGame, onOptions, onCredits}) => {
    return (
        <div>
            <h1 id="gametitle">Clicker Game</h1>
            <button label="Start Game" onClick={onStartGame}>Start</button>
            <button label="Options" onClick={onOptions}>Options</button>
            <button label="Credits" onClick={onCredits}>Credits</button>
        </div>
    )
}

export default MainMenu;