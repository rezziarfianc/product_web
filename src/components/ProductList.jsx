import Product from "./Product";
import useProducts from "../hooks/useProducts";

export default function ProductList()
{
	const {products, searchProduct, setSearchProduct} = useProducts();

	return (
		<>
			<div className="w-full min-h-screen flex items-center justify-center flex-row">
		      	<div className="grid gap-4">
		      		<input
						className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
						value={searchProduct}
						onChange={(e) => setSearchProduct(e.target.value)}
						placeholder="search product here..."
					/>
		      		{products.map((product, index) => (
						<Product key={index} product={product} />
		      		))}
		      	</div>
		    </div>
		</>
	);
}