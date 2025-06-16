import { useRef, useState } from "react";
import "./App.css";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import useCustomCursor from "./hooks/useCustomCursor";
import SeasonalEffect from "./components/seasonalEffect";
import FloatingBlocks from "./components/floatingBlocks";
import CatSprite from "./components/catSprite";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  useCustomCursor();
  const [blockPositions, setBlockPositions] = useState([]);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <SeasonalEffect />
      <FloatingBlocks count={15} onReady={setBlockPositions} />
      <CatSprite path={blockPositions.slice(0, 6)} />
      <main
        className="bg-white dark:bg-black text-black dark:text-white"
        style={{ position: "relative", zIndex: 1 }}
      >
        <Home
          scrollToProjects={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          scrollToContact={() =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <AboutMe />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </>
  );
}

export default App;
