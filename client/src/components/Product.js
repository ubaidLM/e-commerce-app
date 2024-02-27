import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const { category, title, price, image }=product
    const nav=useNavigate()
    const handleClick=()=>{
        nav(`/Product/${product._id}`)
    }
  return (
    <div onClick={handleClick} className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
