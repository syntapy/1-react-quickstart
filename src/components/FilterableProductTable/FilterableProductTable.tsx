import { useState } from 'react'
import ProductTable from "../ProductTable/index"
import SearchBar from "../SearchBar/index"

import style from "../../style.ts"
import type { StyleProps } from "../../style.ts"

import { ProductData, _filterProductData } from "../../data/index"
import getProductData from "../../data/index"

export default function FilterableProductTable(props: StyleProps) {
  const [searchText, setSearchText] = useState('')
  const [_, setShowOnlyInStock] = useState(false)

  const data: ProductData = getProductData()
  let dataFiltered: ProductData = {items: []}
  
  dataFiltered = _filterProductData(data, searchText)

  return (
    <div 
      data-testid="filterable-product-table"
      className={style.licorice_border + " p-8 md:p-16 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-64 " + props.className}
    >
      <SearchBar
        className=""
        setSearchText={setSearchText}
        setOnlyInStock={setShowOnlyInStock}
        searchText={searchText}
      />
      <ProductTable
        className=""
        data={dataFiltered}
      />
    </div>
  )
}
