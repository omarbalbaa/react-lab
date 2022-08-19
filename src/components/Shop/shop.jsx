import { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  //   console.log("products", products);

  return (
    <div className="container text-center">
      <div className="shop-global my-3">
        <h2 className="header mb-4">Available products</h2>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-2 col-md-4 col-6 my-2">
                <div className="card">
                  <div>
                    <img
                      src={product.image}
                      className="img-fluid p-4 pb-1"
                      alt={product.title}
                    ></img>
                  </div>
                  <div className="card-content text-start py-3 px-2">
                    <section>{product.category}</section>
                    <section className="rate">
                      Avg. Rate: {product.rating.rate} by:{"  "}
                      {product.rating.count}
                    </section>
                    <section className="fw-bold">EGP {product.price}</section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
          <span className="fs-5"> Go to </span>
          <Link to="/counter" className="homelinks fs-5 mx-2">
            Counter
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Shop;
