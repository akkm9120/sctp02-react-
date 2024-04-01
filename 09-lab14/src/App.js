import React from 'react';
import ProductContextData from './ProductContext.js';
import {  BrowserRouter as Router, 
          Routes, 
          Route, 
          Link} from 'react-router-dom'
import ProductListingsPage from './pages/ProductListingsPage.js';
import ProductDetailsPage from './pages/ProductDetailsPage.js';

export default function App(){

  return (
    <React.Fragment>
      <ProductContextData>
        <Router>
           <Routes>
              <Route path="/" element={<ProductListingsPage />} />
              <Route path="/details/:productID" element={<ProductDetailsPage />} />
           </Routes>
        </Router>
      </ProductContextData>
    </React.Fragment>
)

}
