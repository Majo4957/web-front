// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//   const { category } = useParams();
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('postgres://postgres:postgres@localhost:5533/webshop');
//         const products = await response.json();
//         const filtered = products.filter(product => product.category === category);
//         setFilteredProducts(filtered);
//       } catch (error) {
//         console.error('Fehler beim Laden der Produkte:', error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div>
//       <h1>{category}</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {filteredProducts.map((product) => (
//           <div key={product.name} className="border p-4">
//             <img src={product.imageUrl} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>{product.price} €</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;
