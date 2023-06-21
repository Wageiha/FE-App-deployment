import Records from './components/Records';
import './App.css';
import axios from "axios";
import  { useState } from 'react';

function App() {
  const [records, setRecords] = useState([])

  const url = "http://localhost:4400/api/records/all"

  const getRecords = async () => {
    const allRecords = await axios.get(url);
    setRecords(allRecords);
  };
  return (
    <div className="App">
      <header className="App-header">
      <Records records={records} getRecords={getRecords} />
      </header>
    </div>
  );
}

export default App;
