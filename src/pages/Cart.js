import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { add, decrease, remove, getTotals } from '../store/cartSlice';



const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem,  total } = useSelector(state => state.cart);
  const cart = useSelector((state) => state.cart);

 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemove = (product) => {

    dispatch(remove(product))

  }
  const handleAdd = (product) => {

    dispatch(add(product))

  }
  const handleDecrease = (product) => {

    dispatch(decrease(product))

  }

  return (
    < >
      <br></br>
      <br></br>
      <br></br>
      <div className='container-fluid con1 card-6 padding'>
        <h1 className='heading-cart'>Your Cart ({cartItem.length} Item)</h1>
        <br></br>

        <div className='row mt-4 display2' style={{ textAlign: "center" }}>
          <div className='col-md-2'>
            <h4 className='mt-1'>Item</h4>
          </div>
          <div className='col-md-4'>
            <h4 className='mt-1'>Description</h4>
          </div>
          <div className='col-md-2'>
            <h4 className='mt-1'>Price</h4>
          </div>
          <div className='col-md-1'>
            <h4 className='mt-1'>Quantity</h4>
          </div>
          <div className='col-md-1'>

          </div>

          <div className='col-md-2 '>
            <h4 className='mt-1'>operation</h4>
          </div>
        </div>
        <hr></hr>
        <br></br>

        <div>

          {
            cartItem.map((product) => (
              <>
                <div className='row mt-4 ' style={{ textAlign: "center" }}>
                  <div className='col-md-2'>
                    <img src={product.image} alt="error" className='img-small' />
                  </div>
                  <div className='col-md-4'>
                    <h5 className='mt-1'>{product.title}</h5>
                    <h5 className='mt-1 color3'>{product.category}</h5>
                  </div>
                  <div className='col-md-2'>
                    <h5 className='mt-1'>${product.price}</h5>

                  </div>
                  <div className='col-md-1'>
                    <h5 className='mt-1'>{product.quantity}</h5>

                  </div>
                  <div className='col-md-1 mb-2'>
                    <button className='btn mx-4' onClick={() => handleRemove(product)}>Remove</button>
                  </div>
                  <div className='col-md-2 '>
                    <button className='btn mx-1 ' onClick={() => handleAdd(product)}>+</button>
                    <button className='btn mx-1 ' onClick={() => handleDecrease(product)}>-</button>
                  </div>



                </div>



              </>

            ))

          }

          <hr ></hr>



          

            <div  className='subtotal'>

              <h2>Subtotal:</h2>
              <h2>${total}</h2>
            </div>

        




        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </>
  )
}

export default Cart