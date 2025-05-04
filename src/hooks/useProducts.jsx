import { useState, useEffect } from "react";

export default function useProducts()
{
	const [products, setProducts] = useState([]);
	const [searchProduct, setSearchProduct] = useState("");

	///simulate data from API
	useEffect(()=> {
		const getProducts = () => {
			const products = [
				{ name: "Laptop", price: 1200 },
				{ name: "Smartphone", price: 800 },
				{ name: "Tablet", price: 600 },
			];

			const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
			setProducts(filteredProducts);
		}
		getProducts();
	}, [ searchProduct ]);

	return {
		products, searchProduct, setSearchProduct
	};
}