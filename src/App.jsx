import './app.scss';
import Index from './components/index/Index'
import Featured from './components/featured/Featured'
// import Resume from './components/resume/Resume'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
// import About from './components/about/About'
// import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
        <Index />
        <Featured />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
