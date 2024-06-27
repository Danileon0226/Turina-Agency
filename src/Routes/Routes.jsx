import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Contact from "../Screens/Contact/Contact";
import Services from "../Screens/ServicesPage/Services";
import Dashboards from "../Screens/Dashboards/Dashboards";
import Login from "../Screens/Login/Login";
import SignIn from "../Screens/SigIn/SigIn";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
