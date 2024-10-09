import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import LandingPageOne from './LandingPage-one/LandingPageOne';
import LandingPageTwo from './LandingPage-Two/LandingPageTwo';
import LandingPageThree from './LandingPage-three/LandingPageThree';

function App() {
  return (
    <div className="App">
      <div className='header-main'>
        <Header />
        <LandingPageOne />
      </div>
      <LandingPageTwo />
      <LandingPageThree />
    </div>
  );
}

export default App;
