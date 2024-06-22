import { useEffect, useState } from "react";
import { productUrl } from "../urls/constants";
import ProductCard from "./ProductCard";

export default function IndiaHome({ country }) {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
    let productFetchUrl;
    if (country === "India") {
      productFetchUrl = `${productUrl}?_start=0&_limit=3`;
    } else if (country === "United States") {
      productFetchUrl = `${productUrl}?_start=10&_limit=6`;
    } else {
      productFetchUrl = `${productUrl}?_start=0&_limit=6`;
    }
    const productsResponse = await fetch(productFetchUrl).then((res) =>
      res.json()
    );
    setProducts(productsResponse);
  }
  useEffect(() => {
    fetchProducts();
  }, [country]);
  return (
    <div className="flex flex-col justify-center h-full items-center text-white">
      <h1 className="text-5xl">
        Welcome to the product listing page (Region : {country})
      </h1>
      <p className="text-xl my-8">
        As we can see that you are from {country} hence please find the list of
        products that we offer according to your region.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {products &&
          products.map((item) => <ProductCard data={item} key={item.id} />)}
      </div>
    </div>
  );
}
