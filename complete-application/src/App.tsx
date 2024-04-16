import { Navigate, Route, Routes } from "react-router-dom";

import LogoHeader from "./components/LogoHeader";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import MakeChangePage from "./pages/MakeChangePage";

import { useFusionAuth } from "@fusionauth/react-sdk";

function App() {
  const { isFetchingUserInfo } = useFusionAuth();

  if (isFetchingUserInfo) {
    return null;
  }

  return (
    <div id="page-container">
      <div id="page-header">
        <LogoHeader />
        <MenuBar />
      </div>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/make-change" element={<MakeChangePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
