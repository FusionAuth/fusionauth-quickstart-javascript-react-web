import './App.css';
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {useFusionAuth} from "@fusionauth/react-sdk";
import LogoHeader from "./components/LogoHeader";
import MenuBar from "./components/MenuBar";

function App() {
    const {user, isAuthenticated, isLoading, login} = useFusionAuth();

    if (isLoading) {
        return null;
    }

    return (
        <div id="page-container">
            <div id="page-header">
                <LogoHeader />
                <MenuBar />
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
