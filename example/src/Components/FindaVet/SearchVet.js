import React from 'react'
import './SearchVet.css'
import StarRating from "../RatingStar/StarRating" 

const SearchVet = ({setSearchByName}) => {
  return (
    <div>
        <div className='search-container'>
            <input 
            className='champ'
            type= "text" 
            placeholder='Trouver un vétérinaire'
            onChange={(e)=>setSearchByName(e.target.value)}
            />
            <div className='rating-search'>
              <StarRating />
            </div>
            </div>
    </div>
  )
}

export default SearchVet