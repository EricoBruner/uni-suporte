import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SupportProfilePage from "./pages/SupportProfilePage";
import MySupportsPage from "./pages/MySupportsPage";
import StudentSupport from "./pages/StudentSupport";
import RectoryPage from "./pages/RectoryPage";
import AlertHomePage from "./pages/AlertHomePage";
import RankingPage from "./pages/RankingPage";
import FeedbacksPage from "./pages/FeedbacksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:subject" element={<SearchPage />} />
          <Route
            path="/search/:subject/profile/:userId"
            element={<SupportProfilePage />}
          />
          <Route path="/supports/me" element={<MySupportsPage />} />
          <Route path="/student-support/me" element={<StudentSupport />} />
          <Route path="/reitoria" element={<RectoryPage />} />
          <Route path="/alert" element={<AlertHomePage />} />
          <Route path="/ranking" element={<RankingPage />} />
          <Route path="/feedbacks" element={<FeedbacksPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
