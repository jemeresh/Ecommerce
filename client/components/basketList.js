import React from 'react'


const basketList = ({ item }) => {
  return (
    <div className=" flex flex-row space-x-4">
      <div className=".product__image">{Image}</div>
      <div className=".product__tirle">Title</div>
      <div className=".product__price">Price</div>
      <div className=".product__amount">{item.amount}</div>
      <div className=".product__remove border px-2">
      <button type="button" onClick={() => {}} >add</button>
      </div>
    </div>
  )
}

basketList.propTypes = {}

export default React.memo(basketList)