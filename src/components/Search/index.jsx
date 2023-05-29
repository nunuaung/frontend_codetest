import React from 'react'
import './search.css'
import {BiSearch} from 'react-icons/bi';

const Search = () => {
  return (
    <div className='search-box flex'>
        <input type='text' placeholder='Search....' />
        <button className='search-button'><BiSearch className='search-icon'/></button>
    </div>
  )
}

export default Search
