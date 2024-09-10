import { useState } from 'react';
import './App.css';
import Counter from "./components/count";
// import LegoBuilder from "./components/shouldHook"
import CountClass from './components/countClass';
import CountHook from './components/countHoks';
import LegoBuilder from './components/legoShouldComponent';
import RegisterComponent from './components/RegisterComponent';
import TimerComponent from './components/timerComponent'; // ini untuk hooks component
import Timer from "./components/timerClassWarming"
import LoginComponent from './components/LoginComponent';


function App() {
  const [showComponent, setShowComponent] = useState(true)


  const handleButton  = () => {
    console.log("aku terpanggil");
    setShowComponent(el => !el)
  } 

  return (
    <div className="App">
      <header className="App-header">
        {/* <CountHook/> */}
        {/* <LegoBuilder/> */}
        
        {
          !showComponent && <LoginComponent/>
        }
        {showComponent && <Timer/>}
        <button onClick={handleButton}>Go to change page</button>
      </header>
    </div>
  );
}

export default App;
