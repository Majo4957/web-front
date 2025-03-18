import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importiere Link für die Navigation

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-center p-4">
                <input
                    type="text"
                    placeholder="Suche..."
                    className="border rounded-md p-2 mr-4 w-1/4" // kleinere Breite
                />

                <div className="relative inline-block">
                    <button
                        onClick={toggleDropdown}
                        className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                    >
                        Kategorien
                    </button>
                    {dropdownOpen && (
                        <div className="absolute bg-white shadow-md mt-1 rounded-md w-48 z-10">
                            <Link to="/kategorie1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kategorie 1</Link>
                            <Link to="/kategorie2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kategorie 2</Link>
                            <Link to="/kategorie3" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kategorie 3</Link>
                        </div>
                    )}
                </div>

                <div className="border-l h-6 mx-4"></div>

                <Link
                    to="/warenkorb"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
                >
                    Warenkorb
                </Link>

                <div className="border-l h-6 mx-4"></div>

                <Link
                    to="/login"
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
