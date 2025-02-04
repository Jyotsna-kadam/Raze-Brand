import React, { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { add, remove } from '../store/cartSlice';

const ProductItem = () => {

    const dispatch = useDispatch();
    const { cartItem } = useSelector((state) => state.cart);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
   

    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {

        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            
            setProduct(data);
        };

        fetchProduct();

    });


    const handleRemove = (product) => {

        dispatch(remove(product))

    }
    const handleAdd = (product) => {

        dispatch(add(product));

    }



    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='container  '>
                <div className='row ' >

                    <div className='col-md-6  col-sm-12' >
                        <img src={product.image} alt={product.title} className="img-single img-fluid zoom" />


                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h4 className='text-uppercase text-black-50'>
                            {product.category}
                        </h4>
                        <h1 className='display-5'> {product.title}</h1>
                        <p className='lead'>
                     Rating   {product.rating && product.rating.rate }  <AiFillStar  fontSize="28px" color='#ffa500' />
                            {/* {Math.round(product.rating.rate).map((i) => (
                                <span>
                                <AiFillStar  fontSize="28px" color='#ffa500' />
                                    {product.rating.rate > i ? (
                                        <AiFillStar  fontSize="28px" color='#ffa500' />
                                    ) : (
                                        <AiOutlineStar fontSize="28px" />
                                    )}

                                </span>

                            ))} */}

                        </p>
                        <h3 className='display-6 f2-bold my-4'>
                            ${product.price}
                        </h3>
                        <p className='lead'>
                            {product.description}
                        </p>


                        {cartItem.some((p) => p.id === product.id) ? (
                            <button

                                className="btn-red"
                                onClick={() => handleRemove(product)}
                            >
                                Remove From Cart
                            </button>
                        ) : (
                            <button
                                className="button6 "

                                onClick={() => handleAdd(product)}

                            >
                                Add to Cart
                            </button>
                        )}
                        <Link to="/cart" className='button6 mx-2'>Go to Cart</Link>

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <br></br> <br></br>

        </>
    )
}

export default ProductItem
