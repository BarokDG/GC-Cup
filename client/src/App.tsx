import { useState, useEffect } from "react";
import DesktopView from "./views/desktopView";
import MobileView from "./views/mobileView";

import { BrowserRouter } from "react-router-dom";

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

  return (
    <>
      {windowWidth > 700 ? (
        <DesktopView />
      ) : (
        <BrowserRouter>
          <MobileView />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
