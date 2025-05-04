import Product from './Product';
import useProducts from '../hooks/useProducts';

export default function ProductList() {

 	const { products, searchProduct, setSearchProduct } = useProducts();

	return (
		<div className="w-full max-w-4xl">
			<div className="mb-6 text-center">
				<input
					className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
					value={searchProduct}
					onChange={(e) => setSearchProduct(e.target.value)}
					placeholder="Search product here..."
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{
					products.length 
					? products.map((product, index) => (
						<Product key={index} product={product} />
					)) : 
					<h2 className="text-xl font-semibold mb-2 col-span-full text-center">Product Not Found!</h2>
				}
			</div>
		</div>
	);
}
