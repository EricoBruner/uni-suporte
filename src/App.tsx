import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SupportProfilePage from "./pages/SupportProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:subject" element={<SearchPage />} />
          <Route
            path="/support/profile/:userId"
            element={<SupportProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
