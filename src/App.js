import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import ScrollToTop from './component/Scroll';
import Social from './component/Social';
import Welcome from './component/Welcome';
import Header from './component/header';
import Skills from './component/skills';
import OuterCircle from './component/skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Skills/>
      <About />
      <Contact/>
      <Social/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
