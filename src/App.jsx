import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import DarshanAndEvents from './pages/DarshanAndEvents';
import Gallery from './pages/Gallery';
import Donations from './pages/Donations';
import VisitorInfo from './pages/VisitorInfo';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Volunteer from './pages/Volunteer';
import Loader from './components/common/Loader';
import Layout from './components/Layour.jsx';

function App() {
  return (
    <Router>
      {/* Layout wraps everything - header, footer, announcement will show on all pages */}
      <Layout>
        {/* Loader can be conditionally shown based on loading state */}
        <Loader />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<DarshanAndEvents />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/visitor-info" element={<VisitorInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;