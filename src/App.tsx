import React, { useEffect } from "react";
import "./App.css";
import { AppHeader } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { HomePage } from "./pages/home-page";
import { DogsPage } from "./pages/dogs-page";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CatsPage } from "./pages/cats-page";
import { BirdsPage } from "./pages/birds-page";
import { RabbitsPage } from "./pages/rabbits-page";
import { NavBar } from "./components/navbar";
import { LoginPage } from "./pages/login-page";
import { Registration } from "./pages/registration/registration";

function AppContent() {
    const isLogginPage = useLocation().pathname === "/login";
    return (
        <div className='App'>
            {!isLogginPage && (
                <>
                    <AppHeader></AppHeader>
                    <SearchBar></SearchBar>
                    <NavBar></NavBar>
                    <Registration></Registration>
                    
        
                </>
            )}

            <div className={!isLogginPage ? "page-content" : ""}>
                <Routes>
                    <Route path='/home' element={<HomePage />}></Route>
                    <Route path='/dogs' element={<DogsPage />}></Route>
                    <Route path='/cats' element={<CatsPage />}></Route>
                    <Route path='/birds' element={<BirdsPage />}></Route>
                    <Route path='/rabbits' element={<RabbitsPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='*' element={<Navigate to={"/home"} replace />} />
                </Routes>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
