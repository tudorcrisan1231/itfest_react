import React, { Component } from 'react'
import Categories from './Categories'
import FeatureProduct from './FeatureProduct'
import Search from './Search'

function Feed() {
    return (
      <>    
        <Search />
        <Categories />
        <div id='feature'>
          <FeatureProduct />
        </div>
        
      </>
    )
}

export default Feed