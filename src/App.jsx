import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Landing from './pages/Landing.jsx';

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);
    return null;
}

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-300">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App;
