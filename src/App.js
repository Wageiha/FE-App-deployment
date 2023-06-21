import Records from './components/Records';
import './App.css';
import axios from "axios";
import  { useState } from 'react';

function App() {
  const [records, setRecords] = useState([])

  const url = "https://record-shop-be.onrender.com/api/records/all"

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
