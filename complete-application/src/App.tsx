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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logged-out" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/make-change" element={<MakeChangePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  );
}

export default App;
