import { createContext, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsContextProvider(props) {

    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState({});

    const loadProducts = async () => {
        let res = await fetch(`https://tinyurl.com/vht7ah2`,
            { method: 'GET' });
        let data = await res.json();
        setProducts(data);
    }

    const values = {
        products,
        loadProducts,
        selected,
        setSelected
    }

    return (
        <ProductsContext.Provider value={values}>
            {props.children}
        </ProductsContext.Provider>
    )
}
