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
				{ name: "Smartwatch", price: 250 },
				{ name: "Headphones", price: 150 },
				{ name: "Monitor", price: 300 },
				{ name: "Keyboard", price: 100 },
				{ name: "Mouse", price: 50 },
				{ name: "Printer", price: 200 },
				{ name: "Webcam", price: 120 },
				{ name: "External Hard Drive", price: 180 },
				{ name: "USB Flash Drive", price: 40 },
				{ name: "Gaming Chair", price: 350 },
				{ name: "Graphics Card", price: 700 },
				{ name: "Motherboard", price: 400 },
				{ name: "Processor", price: 500 },
				{ name: "RAM", price: 150 },
				{ name: "Power Supply Unit", price: 130 },
				{ name: "Cooling Fan", price: 60 },
				{ name: "Network Router", price: 90 }
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