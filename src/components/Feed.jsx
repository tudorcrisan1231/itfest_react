import React, { Component } from 'react'
import Categories from './Categories'
import FeatureProduct from './FeatureProduct'
import Search from './Search'

function Feed() {
    return (
      <>    
        <Search />
        <Categories />
        <FeatureProduct />
      </>
    )
}

export default Feed