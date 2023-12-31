import './App.css';
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {useFusionAuth} from "@fusionauth/react-sdk";
import LogoHeader from "./components/LogoHeader";
import MenuBar from "./components/MenuBar";
import MakeChangePage from "./pages/MakeChangePage";

function App() {
  const {isLoading} = useFusionAuth();

  if (isLoading) {
    return null;
  }

  return (
    <div id="page-container">
      <div id="page-header">
        <LogoHeader/>
        <MenuBar/>
      </div>

      <div style={{flex: 1}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/account" element={<AccountPage/>}/>
          <Route path="/make-change" element={<MakeChangePage/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
