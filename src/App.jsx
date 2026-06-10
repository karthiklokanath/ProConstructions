import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import Services from './pages/Services';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="news" element={<News />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
