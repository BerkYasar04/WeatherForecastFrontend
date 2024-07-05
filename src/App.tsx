import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
