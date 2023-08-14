import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
            </Routes>
            <Footer />

        </BrowserRouter>

    )
}

export default App
