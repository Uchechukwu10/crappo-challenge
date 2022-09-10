import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import WhyCrappo from './components/WhyCrappo';
import Calculate from './components/Calculate';
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App relative">
      <NavBar />
      <Banner />
      <div className='absolute ruler1'>hi</div>
      <WhyCrappo />
      <Calculate />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
