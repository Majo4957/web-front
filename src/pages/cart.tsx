import { useState } from "react";
import Navbar from "../ui/nav-bar";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartItem {
    id: number;
    quantity: number;
}

const products: Product[] = [
    { id: 1, name: "Produktname 1", price: 19.99 },
    { id: 2, name: "Produktname 2", price: 29.99 },
];

export function Cart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (productId: number) => {
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === productId);
            if (productInCart) {
                return prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { id: productId, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId: number, quantity: string) => {
        const qty = parseInt(quantity);
        if (qty < 1) return; // Verhindern, dass die Menge auf 0 oder negativ gesetzt wird

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: qty } : item
            )
        );
    };

    const removeItem = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const total = cart.reduce((acc, item) => {
        const product = products.find(p => p.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
    }, 0);

    return (
        <>
            <Navbar />
            <div className="grid h-full min-h-screen place-items-center bg-gray-300 p-5">
                <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-lg">
                    <h2 className="text-xl font-semibold mb-4">Warenkorb</h2>
                    <div id="cart-items">
                        {cart.length === 0 ? (
                            <p>Der Warenkorb ist leer.</p>
                        ) : (
                            cart.map(item => {
                                const product = products.find(p => p.id === item.id);
                                return (
                                    <div key={item.id} className="flex justify-between items-center mb-4">
                                        <div>
                                            <h3 className="text-lg">{product?.name}</h3>
                                            <p className="text-gray-500">€{product?.price.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                className="border rounded w-16 text-center"
                                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="text-red-500"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Entfernen
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span className="font-semibold">Gesamt:</span>
                        <span className="font-semibold">€{total.toFixed(2)}</span>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            Zur Kasse
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
