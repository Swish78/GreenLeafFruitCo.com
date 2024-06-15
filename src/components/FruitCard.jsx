import React from 'react';

const FruitCard = ({ name, price, description, onRemove }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-md hover-shadow transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-organic-green">{name}</h3>
            <p className="text-lg text-gray-700">₹{price.toFixed(2)}</p>
            <p className="text-gray-600">{description}</p>
            <button onClick={onRemove} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none">
                Remove
            </button>
        </div>
    );
}

export default FruitCard;
