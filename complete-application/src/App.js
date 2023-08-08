import logo from './changebank.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {useFusionAuth} from "@fusionauth/react-sdk";

function App() {
    const {user, isAuthenticated, isLoading, login} = useFusionAuth();

    if (isLoading) {
        return null;
    }

    return (
        <div id="page-container">
            <div id="page-header">
                <div id="logo-header">
                    <img src={logo} alt="Change Bank" width="257" height="55"/>
                    {
                        isAuthenticated ? (
                            <div className="h-row">
                                <p className="header-email">
                                    {user.email}
                                </p>
                                <a className="button-lg" style={{cursor: "pointer"}}>
                                    Logout
                                </a>
                            </div>
                        ) : (
                            <a className="button-lg" style={{cursor: "pointer"}} onClick={() => login()}>
                                Login
                            </a>
                        )
                    }
                </div>

                <div id="menu-bar" className="menu-bar">
                    {
                        isAuthenticated ? (
                            <>
                                <a className="menu-link">Make Change</a>

                                <a className="menu-link" style={{textDecorationLine: "underline"}}>Account</a>
                            </>
                        ) : (
                            <>
                                <a className="menu-link">About</a>
                                <a className="menu-link">Services</a>
                                <a className="menu-link">Products</a>

                                <a className="menu-link" style={{textDecorationLine: "underline"}}>Home</a>
                            </>
                        )
                    }
                </div>
            </div>

            <div style={{flex: 1}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
