import ClickerGame from "./ClickerGame";
import MainMenu from "./MainMenu";
import './App.css';
import { useState } from "react";

const App = () => {

  const [currentScreen, setCurrentScreen] = useState('menu')

  const handleStartGame = () => {
    setCurrentScreen('game');
  }


  const handleOptions = () => {
    console.log('Options Clicked')
  }
  return (
    <div>
      {currentScreen === 'menu' && (
        <MainMenu 
          onStartGame={handleStartGame} 
          onOptions={handleOptions} 
        />
      )}
      
      {currentScreen === 'game' && <ClickerGame />}
    </div>
  );
}


export default App;
