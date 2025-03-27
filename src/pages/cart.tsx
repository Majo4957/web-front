import { useCart } from "../service/useCart";
import Navbar from "../ui/nav-bar";

export function Cart() {
  const { items: cart, removeItem } = useCart();

  return (
    <>
      <Navbar />
      <div className="grid h-full min-h-screen place-items-center bg-gray-300 p-5">
        <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Warenkorb</h2>
          <div id="cart-items">
            {cart.length === 0 ? (
              <p>Der Warenkorb ist leer.</p>
            ) : (
              cart.map((item) => {
                return (
                  <div
                    key={item.productId}
                    className="mb-4 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg">{item.productId}</h3> // Hier Namen reinpacken
                      <p className="text-gray-500">€{item.quantity}</p>
                      <p className="text-gray-500">€{item.itemPrice}</p>
                    </div>
                    <div>
                      <button
                        className="text-red-500"
                        onClick={() => removeItem(item.productId)}
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-semibold">Gesamt:</span>
            <span className="font-semibold">
              €
              {cart.reduce<number>((acc: number, item) => {
                return item.itemPrice * item.quantity + acc;
              }, 0)}
            </span>
          </div>
          <div className="mt-4">
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Zur Kasse
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
