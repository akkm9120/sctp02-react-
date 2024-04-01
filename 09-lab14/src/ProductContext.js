import React, {useState, createContext} from 'react';

export const ProductContext = createContext();
export default function ProductContextData (props) {
//In this function, we construct the context value we pass on.
    const [products, setProducts] = useState([
            { id: 1, product_name: 'ACME Anvils', cost: 9.99 },
            { id: 2, product_name: 'ACME Hammer', cost: 15.5 },
            { id: 3, product_name: 'ACME Screwdriver', cost: 12.5 },
        ]);    
        function addProduct(newProductName, cost) {            
            let id= products.length +1;            
            const productsWithNewAdded = [...products, {
                        id: id,
                        product_name: newProductName,
                        cost: cost
                    }
                ]
            setProducts(productsWithNewAdded);
        }

        function getProductByID (productParams){ 
            const foundProduct = products.filter((p)=> p.id === parseInt(productParams));            
            return foundProduct;
        }
    
        let context = {
            products: products,
            addProduct: addProduct,
            getProductByID: getProductByID
        }
    
        return (
            <ProductContext.Provider value={context}>
                {props.children}
            </ProductContext.Provider>
        )
}

// alternative, instead of (props), you can destructure it 
// like this:
// export default function ProductContextData({children}). 
// Then in 
// <ProductContextProvider>
    //   {children}
// </ProductContext.Provider>
// this is the same as using props.children above, but it is how
// it is written in the documentation
// use the method that is most comfortable to you.

