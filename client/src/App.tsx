import { useState, useEffect } from "react";
import DesktopView from "./pages/desktopView";
import MobileView from "./pages/mobileView";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return function cleanup() {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return <>{windowWidth > 700 ? <DesktopView /> : <MobileView />}</>;
}

export default App;
