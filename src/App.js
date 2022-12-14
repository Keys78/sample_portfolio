import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';

function App() {
  return (
    <main className='max-w-[1920px] mx-auto' >
      <section className='page-wrapper'>
      <Navbar />
      </section>
      <HeroLanding />
    </main>
  );
}

export default App;
