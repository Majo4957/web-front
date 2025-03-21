import { useState, useEffect } from "react";
import Navbar from "../ui/nav-bar";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  imageUrl: string;
  description: string;
}

export function Mainpage() {
  const [result, setResult] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ data: Product[] }>("http://localhost:3000/products");
        setResult(response.data.data || []);
      } catch (error) {
        console.error("Fehler beim Abrufen der Produkte:", error);
      }
    };

    fetchProducts();
  }, []);

  const nextProduct = () => {
    setCurrentIndex((currentIndex + 1) % result.length);
  };

  const prevProduct = () => {
    setCurrentIndex((currentIndex - 1 + result.length) % result.length);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-gray-300">
        <div className="my-8 text-center">
          <h2 className="mb-4 animate-pulse text-xl font-extrabold text-blue-800">
            Angebot des Tages
          </h2>
          {result.length > 0 ? (
            <div className="mb-4">
              <h1 className="text-lg font-bold">{result[currentIndex].name}</h1>
              <img
                src={result[currentIndex].imageUrl}
                alt={result[currentIndex].name}
                className="max-h-60 max-w-md"
              />
              <p>{result[currentIndex].description}</p>
              <p className="text-green-600">Preis: {result[currentIndex].price} €</p>
            </div>
          ) : (
            <p>Keine Produkte verfügbar.</p>
          )}
          {result.length > 1 && (
            <div className="flex items-center justify-center">
              <button
                onClick={prevProduct}
                className="rounded-l bg-gray-700 p-2 text-yellow-100 hover:bg-violet-700"
              >
                ←
              </button>
              <button
                onClick={nextProduct}
                className="rounded-r bg-gray-700 p-2 text-yellow-100 hover:bg-violet-700"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
