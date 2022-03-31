import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Manga from "./pages/manga";
import "./App.scss";
function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="manga" element={<Manga />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
