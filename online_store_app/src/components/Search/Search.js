import React from 'react'

import './Search.css'
export default function Search() {
    return (
        <div className={`all_search`}>
            <div className="searchArea">
                <input className={`input`} placeholder="type.." />
                <i className={`fa-solid fa-magnifying-glass`} ></i>
            </div>

        </div>
    )
}
