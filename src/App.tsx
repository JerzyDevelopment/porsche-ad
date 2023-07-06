import {useEffect} from "react";
import "./App.css";
import LandingPage from "./pages/landing";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    //TODO doesnt work scroll to top
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
