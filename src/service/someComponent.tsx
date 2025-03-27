import { useProductsByCategory } from "./useProducts";
import { useCart } from "../service/useCart";

interface SomeComponentProps {
  category: string;
}

export function SomeComponent({ category }: SomeComponentProps) {
  const { data, error, isLoading } = useProductsByCategory(category);
  const { addToCart } = useCart();

  if (isLoading) return <div>Lädt...</div>;
  if (error) return <div>Fehler: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.data.map((product) => (
        <div key={product.id} className="rounded-lg border p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="mb-2 h-48 w-full object-contain"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-bold">Preis: {product.price} €</p>
          <button
            onClick={() =>
              addToCart({
                productId: product.id,
                quantity: 1,
                itemPrice: product.price,
              })
            } 
            className="mx-auto mt-2 block w-1/2 rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
          >
            Rein in die Olga!
          </button>
        </div>
      ))}
    </div>
  );
}
