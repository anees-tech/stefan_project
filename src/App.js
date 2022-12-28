import logo from './logo.svg';
import './App.css';
import RatingHeader from './components/ratingHeader';
import PageHero from './components/pageHero';
import Homepage from './pages/homepage.pages';

function App() {
  return (
    <div className='flex flex-col items-center w-screen'>
      <RatingHeader />
      <PageHero />
      <Homepage />
    </div>
  );
}

export default App;
