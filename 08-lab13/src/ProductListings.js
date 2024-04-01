import React, {useContext} from 'react' ;
import ProductContext from './ProductContext';
import AddProducts from './AddProducts';

export default function ProductListings() {

    let context = useContext(ProductContext);
    return<>
        <ul>
            {context.getProducts().map(product =>(
                <li>{product.product_name} - {product.cost}$</li>
                
            ) )}
        </ul>

        <AddProducts/>
    </>

}