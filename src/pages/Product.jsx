import React from "react";
import { Products } from "../data/Products";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const queryparams = new URLSearchParams(location.search);
  console.log(queryparams);

  //extract the params
  const category = queryparams.get("category");
  const sort = queryparams.get("sort");

  const filteredProducts = Products.filter((Product) =>
    category ? Product.category === category : true
  );
  console.log(filteredProducts);

  //sorting the products
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "des") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  function HandleFilter(key, value) {
    if (value) {
      queryparams.set(key, value);
    } else {
      queryparams.delete(key);
    }
    navigate(`?${queryparams.toString()}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">Shop The Best Summer Deals</h2>

      <div className="category text-center my-2 ">
        <div className="btn-group " role="group" arial-label="Basic example">
          <button
            type="button"
            onClick={() => HandleFilter("category", "men's clothing")}
            className="btn btn-light border-black"
          >
            men's clothing
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "women's clothing")}
            className="btn btn-light border-black"
          >
            women's clothing
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "electronics")}
            className="btn btn-light border-black"
          >
            electronics
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", "jewelery")}
            className="btn btn-light border-black"
          >
            jewelery
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("category", null)}
            className="btn btn-light border-black"
          >
            Products
          </button>
        </div>
      </div>

      <div className="sort-products text-center">
        <div className="btn-group" role="group" arial-label="Basic example">
          <button
            type="button"
            onClick={() => HandleFilter("sort", "asc")}
            className="btn btn-danger"
          >
            Low
          </button>
          <button
            type="button"
            onClick={() => HandleFilter("sort", "des")}
            className="btn btn-success"
          >
            High
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row gy-3 ">
          {filteredProducts.length > 0
            ? filteredProducts.map((ele) => (
                <div className="col-sm-12 col-md-4 col-lg-4 card ">
                  <img src={ele.image} alt="" height={"300px"} width={"90%"} />
                  <h3 className="card-title">{ele.title.slice(1, 15)}</h3>
                  <p className="card-text bg-warning ps-3 py-1 ">
                    {ele.price}$
                  </p>
                </div>
              ))
            : "No-products Found"}
        </div>
      </div>
    </div>
  );
};

export default Product;
