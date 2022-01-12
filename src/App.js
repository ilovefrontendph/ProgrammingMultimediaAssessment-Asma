import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
import Form from "./pages/Form";
import Login from "./pages/Login";
import LTOADLForm21 from "./pages/LTOADLForm21";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/stack" element={<Stack />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/LTO-ADL-Form21" element={<LTOADLForm21 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
