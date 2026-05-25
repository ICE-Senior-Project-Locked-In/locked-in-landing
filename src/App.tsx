import { About } from './components/About';
import { Feedback } from './components/feedback/Feedback';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Team } from './components/Team';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Feedback />
      <About />
      <Team />
      <Footer />
    </>
  );
}
