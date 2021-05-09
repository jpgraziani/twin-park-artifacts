import React, { useContext, useEffect } from "react"
import { Link } from 'react-router-dom'

import { ShopContext } from "../context/shopContext"

const Home = () => {
  
  const { fetchAllProducts, products} = useContext(ShopContext);

  //use effect is just like component did mount
  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if (!products) return <div>Loading...</div>

  return (
    <div>
      {
        products.map(product => (
          <Link to={`/products/${product.handle}`} key={product.title}><h3>{product.title}</h3></Link>
        ))
      }
    </div>
  );
};

export default Home;
