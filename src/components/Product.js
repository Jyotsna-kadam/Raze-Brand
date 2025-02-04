import React, { useState, useEffect } from 'react'


import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { STATUSES } from '../store/productSlice';

const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
   
    const {  status } = useSelector((state) => state.product);



    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);


    useEffect(() => {
        // dispatch(fetchProducts());

        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            setData(data);
            setFilter(data);
        };

        fetchProduct();

    }, []);




    const productFilter = (c) => {
        const updatedList = data.filter((prod) => {
           return prod.category === c;
        });
        setFilter(updatedList);
    }




    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <>
            <br></br>
            <div className='icon-social'>


                <button className='button6  mx-2' onClick={() => setFilter(data)}> All </button>
                <button className='button6  mx-2' onClick={() => productFilter("men's clothing")}>Mens </button>
                <button className='button6  mx-2' onClick={() => productFilter("jewelery")}> Jewelery </button>

                <button className='button6  mx-2' onClick={() => productFilter("women's clothing")}> Women </button>
                <button className='button6  mx-2' onClick={() => productFilter("electronics")}> Electronices </button>
            </div>
            <hr></hr>
            <br></br>
            <div className='productsWrapper ' >

                {
                    filter.map((prod) => (

                        <div className='card-2 card-6  ' key={prod.id}>
                            <img src={prod.image} alt="error" />
                            <h4>{prod.title}</h4>
                            <h4>${prod.price}</h4>
                            <br></br>
                            <Link to={`/productsitem/${prod.id}`} className='button6 mx-1'>Show Product</Link>


                            {/* {cartItem.some((p) => p.id === prod.id) ? (
                                <button

                                    className="btn-red"
                                    onClick={() => handleRemove(prod)}
                                >
                                    Remove From Cart
                                </button>
                            ) : (
                                <button
                                    className="button6 "

                                    onClick={() => handleAdd(prod)}
                                    
                                >
                                    Add to Cart
                                </button>
                            )} */}




                            {/* <button className='btn mx-1' onClick={() => handleAdd(product)}>Add to cart</button> */}
                        </div>

                    ))}
            </div>
        </>
    )
}

export default Product