import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()
      const userCart = useSelector(state => state.cartReducer)
  

  const handleCart = (product)=>{   
      // check product inside wishlist
      const existingProduct = userCart?.find(item=>item.id==product?.id)
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
        Swal.fire({
          title:"Success!!!",
          text:existingProduct?`Product ${existingProduct.title} quantity incremented`:"Product added to your cart!!!",
          icon:'success',
          confirmButtonText:'Ok'
        })
      
    }

  return (
    <>
      <Header />
      <div className='container my-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className='pt-5 text-primary'>User Wishlist</h1>
              <div className='row pt-5'>
                {/* duplicate column according to products*/}
                {userWishlist?.map(item => (
                  <div className='col-md-3 mb-2'>
                    {/* card */}
                    <Card>
                      <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{item?.title}</Card.Title>
                        <div className='d-flex justify-content-evenly'>
                          <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /> </button>
                          <button onClick={()=>handleCart(item)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /> </button>

                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              }

              </div>
            </>
            :
            <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
              <img className='w-25' src="https://static.vecteezy.com/system/resources/previews/047/639/604/non_2x/empty-cart-icon-for-web-app-infographic-etc-vector.jpg" alt="wishlist" />
              <h1>Your Wishlist is Empty!!!</h1>
              <Link to={'/'} className='btn btn-primary'>Add More</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist