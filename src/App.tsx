import React from 'react';
import './App.css';
import { AppHeader } from './components/header';
import { SearchBar } from './components/search-bar';
import {
  HomePage
} from './home'
function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SearchBar></SearchBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
