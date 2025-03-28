import { useCart } from "../service/useCart";
import Navbar from "../ui/nav-bar"; 
import bub from "../components/pictures/bubbles.webp"

export function Cart() {
  const { items: cart, removeItem, decreaseItemQuantity } = useCart();

  return (
    <>
      <Navbar />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bub})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      ></div>
      <div className="grid h-full min-h-screen place-items-center bg-gray-300 p-5 relative">
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
                      <h3 className="text-lg">{item.productName}</h3>
                      <p className="text-gray-500">x{item.quantity}</p>
                      <p className="text-gray-500">€{item.itemPrice}</p>
                    </div>
                    <div>
                      <button
                        className="mr-2 rounded border border-red-500 px-2 py-1 text-red-500"
                        onClick={() => removeItem(item.productId)}
                      >
                        Weg damit!
                      </button>
                      <button
                        className="rounded border border-blue-500 px-2 py-1 text-blue-500"
                        onClick={() => decreaseItemQuantity(item.productId)}
                      >
                        Weniger pls
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
                const endPrice = item.itemPrice * item.quantity + acc;
                return endPrice;
              }, 0).toFixed(2)}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold"> Gesamtanzahl Produkte: </span>x
            {cart.reduce<number>((accu: number, item) => {
              const totalQuantity = item.quantity + accu;
              return totalQuantity;
            }, 0)}
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

export function totalCount() {
  const { items: cart } = useCart();

  return cart.reduce<number>((accu: number, item) => {
    return item.quantity + accu;
  }, 0);
}
