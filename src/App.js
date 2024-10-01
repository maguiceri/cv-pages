import './App.css';
import Header from './modules/Header';
import Body from './modules/Body';
import { useState } from 'react';


function App() {

  const [selectedNav, setSelectedNav] = useState(false);

  return (
    <div style={{ margin: 0, backgroundColor: "#081130", overflowX:"hidden"}}>
      <Header setSelectedNav={setSelectedNav} selectedNav={selectedNav} />
      <Body setSelectedNav={setSelectedNav} /> 
    </div>
  );
}

export default App;
