import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';



import './Search.css'
export default function Search() {

    const [searchText, setSearchText] = useState("");
    const [showList, SetShowList] = useState(false)
    const [searchResults, SetSearchResults] = useState([])

    const { products, setSelected } = useContext(ProductsContext);
    const navigate = useNavigate();


    const searchFunc = (text) => {
        let res = products.filter((item) => typeof item.title == 'string' && item.title.includes(text.toLowerCase()))
        searchText ? SetSearchResults(res) :
            (
                SetSearchResults([])

            )
    }

    const submitSearch = () => {
        searchFunc(searchText)
        SetShowList(true)

    }

    const selectItem = (product) => {
        setSelected(product)
        navigate("/product");
    }

    return (
        <div className={`all_search`}>
            <div className="searchArea">
                <input className={`input`} placeholder="type.." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <i className={`fa-solid fa-magnifying-glass`} onClick={submitSearch} ></i>
                {showList &&
                    searchResults && (
                        <div className='list'>
                            {
                                searchResults.map(item => (
                                    <div key={item.id} onClick={() => selectItem(item)}>{item.title}</div>
                                ))
                            }
                        </div>
                    )
                }
                {
                    showList &&
                    searchResults.length === 0 && (

                        <div className='list' >
                            אין תוצאות
                        </div>
                    )
                }
            </div>

        </div>
    )
}
