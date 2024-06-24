import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-container'>
        {categories.map(categoriesMap => {
            return <button 
            type='button' 
            className='btn'
            key={categoriesMap}
            onClick={() => filterItems(categoriesMap)}>
                {categoriesMap}
            </button>
        })}
    </div>
  )
}

export default Categories