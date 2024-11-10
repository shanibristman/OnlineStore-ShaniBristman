import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductContext';

import './Product.css';


export default function Product() {

    const { selected } = useContext(ProductsContext);
    const [showList, setShowList] = useState(false);

    const showMoreFunc = () => {
        setShowList(!showList);
    }

    return (
        <div className='product'>
            <img className="picP" src={selected.image.url} />
            <div className="container">
                <div className='title'>{selected.title}</div>
                <div className='desc'>{selected.desc}</div>
                <div className='price'>{selected.price} ₪</div>
                {!showList && selected && selected.features &&
                    <div className='moreBtn' onClick={showMoreFunc}>לפרטים נוספים</div>
                }
                {
                    showList &&
                    <div className='moreD'>
                        <div onClick={showMoreFunc}>X</div>
                        <div>{selected.features}</div>
                    </div>
                }
            </div>
        </div>
    )
}
