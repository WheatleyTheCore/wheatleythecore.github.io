import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
// import { Timeline } from './components/Timeline';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Timeline /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}