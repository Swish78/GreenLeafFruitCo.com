import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import FruitsGrid from "./components/FruitsGrid";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <div className="bg-green-50">
            <Navbar />
            <Carousel />
            <FruitsGrid />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default App;
