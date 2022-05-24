import { useState, useEffect } from "react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isLandscape = () => window.matchMedia("(min-width: 25cm)").matches;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return function cleanup() {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  if (windowWidth > 700 && isLandscape()) {
    return <DesktopView />;
  } else {
    return (
      <BrowserRouter>
        <MobileView />
      </BrowserRouter>
    );
  }
}

export default App;
