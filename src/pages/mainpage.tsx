import { useState } from "react";
import Navbar from "../ui/nav-bar";
import { useProducts } from "../service/useProducts";
import kuh from "../components/pictures/kuehe-weide.jpg"
import { useCart } from "../service/useCart";

export function Mainpage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  const { data } = useProducts();
  const products = data?.data;
  if (products === undefined) {
    return null;
  }
  
  const nextProduct = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          backgroundImage: `url(${kuh})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="my-8 text-center border-2 border-gray-500 rounded-lg p-4 bg-white shadow-md w-200 h-120 relative">
          <h2 className="mb-4 animate-pulse text-xl font-extrabold text-blue-800">
            Angebot des Tages
          </h2>
          {products.length > 0 ? (
            <div className="mb-4 flex flex-col items-center">
              <h1 className="text-lg font-bold">
                {products[currentIndex].name}
              </h1>
              <img
                src={products[currentIndex].imageUrl}
                alt={products[currentIndex].name}
                className="max-h-60 max-w-md object-contain"
              />
              <p>{products[currentIndex].description}</p>
              <p className="text-green-600">
                Preis: {products[currentIndex].price} €
              </p>
              <button
            onClick={() =>
              addToCart({
                productId: products[currentIndex].id,
                quantity: 1,
                itemPrice: products[currentIndex].price,
                productName: products[currentIndex].name,
              })
            } 
            className="mx-auto mt-2 block w-1/2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
          >
            Das muss ich haben!
          </button>
            </div>
          ) : (
            <p>Keine Produkte verfügbar.</p>
          )}
          <div className="absolute left-0 right-0 flex items-center justify-between top-1/2 transform -translate-y-1/2 mt-4">
            <button
              onClick={prevProduct}
              className="bg-gray-700 p-2 text-yellow-100 hover:bg-violet-700"
            >
              ←
            </button>
            <button
              onClick={nextProduct}
              className="bg-gray-700 p-2 text-yellow-100 hover:bg-violet-700"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
