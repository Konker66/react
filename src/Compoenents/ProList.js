import { useEffect, useState } from "react";
import "./Pro.css"; // Import the custom CSS
import { Link } from 'react-router-dom'; // Import the Link component

function ProductList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-center p-4">Our Products</h1>
      <div className="container">
        <div className="row text-center">
          {products.slice(0, 15).map((product) => ( // Limit to 15 items
            <div className="col-md-4 p-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <Link className="btn btn-primary mt-auto" to={`/product/${product.id}`}>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;