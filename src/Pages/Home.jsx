import React, { useEffect, useState } from "react";
import Header from "../Component/Headers/Header";
import Button from "../Component/Elements/Button/Button";
import CardProduct from "../Component/Elements/Fragment/CardProduct";
import { getProducts } from "../Services/product.services";
import Search from "../Component/Elements/Search/Search";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const DataProducts = () => {
    return (
      <div className="flex flex-wrap justify-center py-5 gap-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price}>
                Add to Cart
              </CardProduct.Footer>
            </CardProduct>
          ))
        ) : (
          <h1 className="font-semibold font-Poppins text-2xl text-headline">
            No Product Found
          </h1>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="absolute w-full min-h-screen bg-background">
        <section className="w-full mt-16 pb-20">
          <div className="flex flex-wrap pt-6 py-4 gap-3 justify-center">
            <div className="w-full lg:w-2/4 grid justify-items-center p-4">
              <div className="overflow-hidden md:w-[200px] lg:w-[500px] bg-slate-100 lg:p-14 rounded-t-full">
                <img
                  src="/Img/clothes1.png"
                  alt=""
                  className="scale-125 hover:scale-150 duration-500 rounded-t-full"
                />
              </div>
            </div>
            <div className="w-full self-center px-4 lg:w-2/5 p-2 text-center">
              <div className="p-2 gap-3 text-center flex flex-col my-2">
                <h2 className="font-Poppins font-bold text-3xl items-center inline-block text-headline">
                  Shopping And Department Store
                </h2>
                <p className="font-poppins text-center font-semibold text-base text-headline">
                  Shopping is a bit of relaxing hobby for me, which is sometimes
                  for the bank balance.
                </p>
              </div>
              <Button classname="rounded-full bg-btnPrimary font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="products" className="pt-8 pb-36">
          <div className="container">
            <div className="text-center border-b-2">
              <p className="font-Poppins font-thin text-2xl text-headline mb-2">
                Products
              </p>
            </div>
            <div className="flex justify-center w-96 items-center">
              <label
                htmlFor=""
                className="font-Poppins font-semibold text-headline w-96"
              >
                Search Product's :
              </label>
              <Search type="text" onChange={handleSearch} />
            </div>
            <DataProducts />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
