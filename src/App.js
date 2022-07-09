import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar style={{ zindex: 3 }} />

        <Routes>
          <Route path="/"
            element={
              <Home style={{ zindex: 0 }} />
            } />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
