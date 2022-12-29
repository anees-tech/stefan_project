import logo from './logo.svg';
import './App.css';
import RatingHeader from './components/ratingHeader';
import PageHero from './components/pageHero';
import Homepage from './pages/homepage.pages';
import Footer from './components/footer';

function App() {
  return (
    <div className='flex flex-col items-center w-[100%]'>
      <RatingHeader />
      <PageHero />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
