import { useState } from "react";
import Button from './Button'
import './MainMenu.css'

const MainMenu = ({onStartGame, onOptions, onCredits}) => {
    return (
        <div>
            <h1 id="gametitle">Clicker Game</h1>
                <div className='menubuttons'>
                    <button id="startbutton" label="Start Game" onClick={onStartGame}>Start</button>
                    <button id="optionsbutton" label="Options" onClick={onOptions}>Options</button>
                    <button id="creditsbutton" label="Credits" onClick={onCredits}>Credits</button>
                </div>
        </div>
    )
}

export default MainMenu;