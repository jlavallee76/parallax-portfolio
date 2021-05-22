import './app.scss';
import Index from './components/index/Index'
import Featured from './components/featured/Featured'
import Resume from './components/resume/Resume'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
// import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
        <Index />
        <Featured />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
