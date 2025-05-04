export default function Product({ product }) {
  return (
    <div className="rounded-xl shadow-md p-6 bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">Price : ${product.price}</p>
    </div>
  );
}