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
import { Registration } from "./pages/registration-page/registration";
import { SellPage } from "./pages/sell-page/sell";
import { LatestPage } from "./pages/latest-page";
import { GlobalContextProvider } from "./contexts/global.context";
import { AdminPage } from "./pages/admin-login/admin";
import { SearchPage } from "./pages/search/search";

function AppContent() {
    const isLogginPage = useLocation().pathname === "/login";
    const isRegisterPage = useLocation().pathname === "/register";
    return (
        <div className='App'>
            {!isLogginPage && !isRegisterPage && (
                <>
                    <AppHeader></AppHeader>
                    <SearchBar></SearchBar>
                    <NavBar></NavBar>
                </>
            )}

            <div className={!isLogginPage && !isRegisterPage ? "page-content" : ""}>
                <Routes>
                    <Route path='/home' element={<HomePage />}></Route>
                    <Route path='/dogs' element={<DogsPage />}></Route>
                    <Route path='/cats' element={<CatsPage />}></Route>
                    <Route path='/birds' element={<BirdsPage />}></Route>
                    <Route path='/rabbits' element={<RabbitsPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/sell' element={<SellPage />}></Route>
                    <Route path='/latest' element={<LatestPage />}></Route>
                    <Route path='/admin' element={<AdminPage />}></Route>
                    <Route path='/register' element={<Registration />}></Route>
                    <Route path='/search/:searchKey' element={<SearchPage />}></Route>
                    <Route path='*' element={<Navigate to={"/home"} replace />} />
                </Routes>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <GlobalContextProvider>
                <AppContent />
            </GlobalContextProvider>
        </Router>
    );
}

export default App;
