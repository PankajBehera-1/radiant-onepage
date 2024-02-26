import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../home/homecard";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Longcard from "../home/longcard";
import Threecards from "../home/threecards";
import Heading from "../home/heading";
import Lastpart from "../home/lastpart";
import Number from "../home/number";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="navbar" element={<Navbar />} />
        <Route path="footer" element={<Footer />} />
        <Route path="card" element={<Longcard />} />
        <Route path="threecard" element={<Threecards />} />
        <Route path="heading" element={<Heading />} />
        <Route path="lastpart" element={<Lastpart />} />
        <Route path="number" element={<Number />} />


      </Routes>
    </BrowserRouter>
  );
}