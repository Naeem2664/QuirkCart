import React from 'react'
import ProductList from '../../components/ProductsList'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchMensProductsThunk } from '../../features/slices/productSlice'
const Kids = () => {
  const sortOptions = [
    { name: "Most Popular", to: "", current: true },
    { name: "Best Rating", to: "", current: false },
    { name: "Newest", to: "#", current: false },
    { name: "Price: Low to High", to: "", current: false },
    { name: "Price: High to Low", to: "", current: false },
  ];
  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "nike", label: "Nike", checked: false },
        { value: "adidas", label: "Adidas", checked: false },
        { value: "gucci", label: "Gucci", checked: true },
        { value: "louis-vuitton", label: "Louis Vuitton", checked: false },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "shoes", label: "Shoes", checked: false },
        { value: "hand-bags", label: "Hand Bags", checked: false },
        { value: "shirts", label: "Shirts", checked: true },
        { value: "pants", label: "Pants", checked: false },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "ms", label: "Small", checked: false },
        { value: "md", label: "Medium", checked: false },
        { value: "lg", label: "Large", checked: false },
        { value: "xl", label: "X-Large", checked: false },
      ],
    },
  ];
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.products.products)
  const status=useSelector((state)=>state.products.status)
  const error=useSelector((state)=>state.products.error)
useEffect(() => {
  dispatch(fetchMensProductsThunk())
}, [dispatch])

  return (
    <div>
      <ProductList category='Kids' products={products} status={status} error={error} filters={filters} sortOptions={sortOptions} ></ProductList>
    </div>
  )
}
export default Kids
