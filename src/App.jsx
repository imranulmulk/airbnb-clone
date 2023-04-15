import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* Banner */}
      {/* Search */}
      {/* Card */}
      {/* Footer */}
      {/* Searchpage */}
      {/* ... */}
    </div>
  );
}

export default App;
