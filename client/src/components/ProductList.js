import React from 'react';
import Product from './Product';
import products from '../db/products';

const ProductList = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <Product
               product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
