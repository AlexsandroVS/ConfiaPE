import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;