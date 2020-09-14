import React from 'react';
import './App.css';
import JumbotronPage from './components/Jumbotron';
import SearchPage from './components/Search-Bar/index';
import TablePage from './components/Table';


function App() {
  return (
    <div className="App">
    <JumbotronPage />
    <SearchPage />
    <TablePage />
    </div>
  );
}

export default App;
