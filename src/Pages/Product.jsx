import React, { useState, useEffect } from "react";
import Header from "../Component/Headers/Header";
import CardProduct from "../Component/Elements/Fragment/CardProduct";
import { getProducts } from "../Services/product.services";

const Product = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Header />
      <section className="pt-24 min-h-screen pb-36 bg-background">
        <div className="container">
          <div className="w-full border-b-2 py-2">
            <p className="text-headline font-semibold text-2xl">Products</p>
          </div>
          <div className="flex flex-wrap justify-center py-5 gap-3">
            {Products.length > 0 &&
              Products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} />
                  <CardProduct.Body title={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id}>
                    Detail
                  </CardProduct.Footer>
                </CardProduct>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
