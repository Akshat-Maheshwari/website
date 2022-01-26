import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LandingPage from "./components/Landing_page";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
