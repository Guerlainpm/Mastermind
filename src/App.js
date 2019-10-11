import React from 'react';
import './App.css';
import './style.min.css'
import Header from './createdElements/header/header.js'
import Main from './createdElements/main/main.js'
function App() {
  return (
    <div className="App d-flex fd-column">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
