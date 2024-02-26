import React from 'react'
import ProductList from '../../components/ProductsList'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchWomensProductsThunk } from '../../features/slices/productSlice'
const Womens = () => {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.products.products)
  const status=useSelector((state)=>state.products.status)
  const error=useSelector((state)=>state.products.error)
useEffect(() => {
  dispatch(fetchWomensProductsThunk())
}, [dispatch])

  return (
    <div>
      <ProductList category='Womens' products={products} status={status} error={error} ></ProductList>
    </div>
  )
}
export default Womens
