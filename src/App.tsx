import { About } from "./components/About";
import { News } from "./components/News";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { Members } from "./components/Members";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Members />
      <News />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;
