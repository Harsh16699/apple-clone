import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IPhone from './pages/iPhone';
import Mac from './pages/Mac';
import Watch from './pages/Watch';
import Support from './pages/Support';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/support" element={<Support />} />
          {/* Catch-all route for unimplemented pages */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
