import { useState } from 'react';
import FruitCard from './FruitCard';

const FruitsGrid = () => {
    const [fruits, setFruits] = useState([
        { name: 'Apple', price: 120, description: 'Fresh and juicy apples.' },
        { name: 'Banana', price: 50, description: 'Sweet and ripe bananas.' },
        { name: 'Strawberry', price: 150, description: 'Organic and fresh strawberries.' },
        { name: 'Orange', price: 100, description: 'Citrus and tangy oranges.' },
        { name: 'Watermelon', price: 130, description: 'Refreshing watermelon slices.' },
        { name: 'Pineapple', price: 128, description: 'Tropical and juicy pineapples.' },
        { name: 'Mango', price: 215, description: 'Sweet and ripe mangoes.' },
        { name: 'Grapes', price: 220, description: 'Fresh grape bunches.' },
        { name: 'Blueberry', price: 270, description: 'Organic blueberries.' }
    ]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handleAddFruit = () => {
        if (name && price && description) {
            setFruits([...fruits, { name, price: parseFloat(price), description }]);
            setName('');
            setPrice('');
            setDescription('');
        }
    };

    const handleRemoveFruit = (indexToRemove) => {
        setFruits(fruits.filter((_, index) => index !== indexToRemove));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fruits.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(fruits.length / itemsPerPage);

    return (
        <div id="fruits" className="container mx-auto py-6">
            <h2 className="text-3xl font-bold mb-6 text-green-900">Our Fruits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {currentItems.map((fruit, index) => (
                    <FruitCard
                        key={index}
                        name={fruit.name}
                        price={fruit.price}
                        description={fruit.description}
                        onRemove={() => handleRemoveFruit(index)}
                    />
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded ${index + 1 === currentPage ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <div className="mt-6 p-6 bg-green-100 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-900">Add a New Fruit</h3>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>
                <button
                    onClick={handleAddFruit}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                    Add Fruit
                </button>
            </div>
        </div>
    );
}

export default FruitsGrid;
