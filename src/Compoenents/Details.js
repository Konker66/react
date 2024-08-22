import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import the Link component

function ProDetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams(); 
    console.log(params);

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((product) => setProduct(product))
            .catch((error) => console.error('Fetch error:', error));
    }, [params.productId]);

    return (
        <div>
            <h1>Product Details</h1>
            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <Link href="#" className="btn btn-primary mt-auto">
                    Buy Now
                  </Link>
                </div>
            )}
        </div>
    );
}

export default ProDetails;