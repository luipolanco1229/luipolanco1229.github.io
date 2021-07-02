import React from 'react';
import './App.css';
import StartingScreen from './Components/StartingScreen';
import WatchCategories from './Components/WatchProductCategories';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
        <StartingScreen/>
      <BrowserRouter>
         <Route path="/WatchProductCategories" component={WatchCategories}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
