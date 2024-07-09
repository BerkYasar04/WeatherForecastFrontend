import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, ProvinceDetail } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail/:merkezId" element={<ProvinceDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
