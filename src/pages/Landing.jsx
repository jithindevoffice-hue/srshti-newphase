import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import EstimateCalculator from '../components/EstimateCalculator';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <CaseStudies />
            <EstimateCalculator />
            <Contact />
            <Footer />
        </>
    );
}

export default Landing;
