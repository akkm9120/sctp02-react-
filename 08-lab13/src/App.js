import React from 'react';
import ProductContext from './ProductContext';
import { useState } from 'react';
import ProductListings from './ProductListings';
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "Hammer",
      cost: 9.99
    },
    {
      id: 2,
      product_name: "Screwdriver",
      cost: 6.99
    },
    {
      id: 3,
      product_name: "Nails",
      cost: 4.99
    }
  ]);

const context = {
  getProducts : () => {return products;},
  addProduct: (productName, cost) => {

    let id= products.length + 1;

    setProducts([...products, 
      {
        id : id,
        product_name: productName,
        cost: cost
      }
    ])
  }

}

  return (<ProductContext.Provider value={context}>
    <React.Fragment>

      <ProductListings />
      
    </React.Fragment>


  </ProductContext.Provider>
  );
}

export default App;
