import React from "react";
import "./App.css";
import { AppHeader } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { HomePage } from "./pages/home-page";
import { DogsPage } from "./pages/dogs-page";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { CatsPage } from "./pages/cats-page";
import { BirdsPage } from "./pages/birds-page";
import { RabbitsPage } from "./pages/rabbits-page";
import { NavBar } from "./components/navbar";

function App() {
    return (
        <Router>
            <div className='App'>
                <AppHeader></AppHeader>
                <SearchBar></SearchBar>
                <NavBar></NavBar>
                {/* <HomePage></HomePage> */}
                <div className='page-content'>
                    <Routes>
                        <Route path='/home' element={<HomePage />}></Route>
                        <Route path='/dogs' element={<DogsPage />}></Route>
                        <Route path='/cats' element={<CatsPage />}></Route>
                        <Route path='/birds' element={<BirdsPage />}></Route>
                        <Route path='/rabbits' element={<RabbitsPage />}></Route>
                        <Route path='*' element={<Navigate to='/home' replace />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
