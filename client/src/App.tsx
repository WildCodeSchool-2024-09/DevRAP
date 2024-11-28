import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./components/context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
