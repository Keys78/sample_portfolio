import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <main className='max-w-[1920px] mx-auto' >
      <section className='page-wrapper'>
      <Navbar />
      </section>
     <div className='mb-[900px]'>
     <HeroLanding />
     </div>
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
