import { useProductsByCategory } from "./useProducts";

// Definiere die Props-Schnittstelle
interface SomeComponentProps {
  category: string; // oder einen spezifischen Typ, den du benötigst
}

export function SomeComponent({ category }: SomeComponentProps) {
  const { data, error, isLoading } = useProductsByCategory(category);

  if (isLoading) return <div>Lädt...</div>;
  if (error) return <div>Fehler: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.data.map((product) => (
        <div key={product.id} className="rounded-lg border p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="mb-2 h-48 w-full object-cover"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-bold">Preis: {product.price} €</p>
        </div>
      ))}
    </div>
  );
}
