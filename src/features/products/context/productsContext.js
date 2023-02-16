import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ProductsContext = ({ children }) => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [collection, setCollection] = useState('all');
  const [filterBy, setFilterBy] = useState([]);
  const [sortBy, setSortBy] = useState(null);


  const onFilterChange = (tagId) => {
    setFilterBy(prev => {
      if (prev.includes(tagId)) {
        return [...prev.filter((tag) => tag !== tagId)]
      }
      else {
        return [...prev, tagId]
      }
    })
  }

  const reset = () => {
    setCollection('all');
    setFilterBy([]);
    setSortBy(null);
    let filterTags = document.getElementsByName('filterTag');
    filterTags.forEach((tag) => tag.checked = false)
  }

  return (
    <Context.Provider
      value={{
        showFilterDropdown,
        collection,
        filterBy,
        sortBy,
        setShowFilterDropdown,
        setCollection,
        setFilterBy,
        setSortBy,
        onFilterChange,
        reset
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useProductsContext = () => useContext(Context);