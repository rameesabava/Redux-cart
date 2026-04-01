import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import {addToWishlist} from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function View() {
  const { id } = useParams()
  //console.log(id);

  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState({})

  const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()


  // console.log(product);

  useEffect(() => {
    setProduct(allProducts?.find(item => item?.id == id))
  }, [])

  const handleWishlist = ()=>{
    console.log("Inside the handlewishlist");
    
    // check product inside wishlist

    const existingProduct = userWishlist?.find(item=>item.id==product?.id)
    if(existingProduct){
      Swal.fire({
        title:"Sorry!!!",
        text:"Product already in your Wishlist!!!",
        icon:'error',
        confirmButtonText:'Ok'
      })
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{   
    // check product inside wishlist
    const existingProduct = userCart?.find(item=>item.id==product?.id)
    dispatch(addToCart(product))
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
        <div className='row pt-5 align-items-center'>
          <div className='col-lg-6 text-center'>
            <img src={product?.thumbnail} alt="image" className='img-fluid' />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-info'>ADD TO WISHLIST</button>
              <button onClick={handleCart} className='btn btn-success'>ADD TO CART</button>

            </div>

          </div>
          <div className='col-lg-6'>
            <h1>{product?.title}</h1>
            <h2 className='text-danger'>$ {product?.price}</h2>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <h4>Description: {product?.description}</h4>
            <h5>Client Reviews</h5>
            {product?.reviews?.map((item,index) => (
              <div key={`${item?.date}-${index}`} className='border rounded p-2 shadow my-1'>
                <p><span className='fw-bolder'>{item?.reviewerName}: </span>{item?.comment}</p>
                <p>Rating: {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>

              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default View