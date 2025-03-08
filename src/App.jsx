import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Profile />
      <section id="projects">
        <Projects />
      </section>
      <Tech />
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
