import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Head from './head'
import Header from './header'
import Product from './products'
import { getProductsFromServer, getRatesFromServer } from '../redux/reducers/products.js'


const Main = () => {

  const dispatch = useDispatch()
  const productList = useSelector((store) => store.products.goods)

  useEffect(() => {
    dispatch(getProductsFromServer())
    dispatch(getRatesFromServer())
  }, [])

   return (
    <nav className="font-mono bg-green-200 f-screen">
    <Head title="Main" />
    <Header />
    <div className="flex flex-wrap h-full">
      {productList.map((good) => {
        return (<div key={good.id}>
          <Product good={good}/>
          </div>)
      })}
    </div>
    </nav>
   )
}

Main.propTypes = {}

export default React.memo(Main)
