const Navbar = () => {
    return (
        <nav className="bg-green-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-xl font-bold">GreenLeafFruitCo.com</a>
                <div className="space-x-4">
                    <a href="#fruits" className="text-white hover:text-green-300">Fruits</a>
                    <a href="#about" className="text-white hover:text-green-300">About Us</a>
                    <a href="#contact" className="text-white hover:text-green-300">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
