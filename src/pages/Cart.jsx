import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <Header />
      <div className='container pt-5'>
        <h1 className='text-danger my-5'>User Cart Summary</h1>
        <div className='row mb-5'>
          <div className='col-md-8 border rounded p-5'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>title</td>
                  <td><img width={'50px'} height={'50px'} src="https://tse3.mm.bing.net/th/id/OIP.ZHIPM-cqX1-Z5VUsuH4f3QHaFF?rs=1&pid=ImgDetMain&o=7&rm=3" alt="product" /></td>
                  <td>
                    <div className='d-flex'>
                      <button className='btn fs-1'>-</button>
                      <input style={{ width: '50px' }} type="text" value={10} className='form-control' readOnly />
                      <button className='btn fs-1'>+</button>
                    </div>
                  </td>
                  <td>$ 30</td>
                  <td><button className='btn text-danger fs-4'>X</button></td>
                </tr>
              </tbody>
            </table>
            <div className='float-end mt-3'>
              <button className='btn btn-danger'>EMPTY CART</button>
              <Link to={'/'} className='btn btn-info ms-5'>SHOP MORE</Link>
            </div>

          </div>
          <div className='col-md-4'>
            <div className='border rounded p-5 shadow'>
              <h3>Total <span>4</span> Items</h3>
              <h3>Total Amount: <span className='text-danger'> $ 477 </span></h3>
              <hr />
              <div className='d-grid'>
                <button className='btn btn-success'>CHECKOUT</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Cart