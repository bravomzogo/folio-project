import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;