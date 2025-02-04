import React, { useEffect, useState } from 'react'


import Typical from 'react-typical'
import { Swiper, SwiperSlide } from "swiper/react";

import Aos from 'aos'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper";

import image from '../images/banner-girl3.jpg'
import { Link } from 'react-router-dom';




//

const Home = () => {


  const [product, setProduct] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {

    const fetchProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setProduct(data);
    };

    fetchProduct();



  }, []);

  let women = product.filter(function (products) {
    return products.category !== "electronics";
  }).map(function (products) {
    return products;
  })


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>

      <div className='background-color banner-height'>


        <img src={image} alt="error" className='img-fluid banner-photo-height' />


        <div className="banner-block">
          <div data-aos="fade-left">

            <p className='font-size-slider'>new season arrivals</p>
          </div>
          <p className='font-size-slider2'>

            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "don't compromise on style!",
                1000,
                "get flat 30% off for new arrivals",
                1000,

              ]}
            />
          </p>
          <br></br>
          <button className="button">shop now</button>
        </div>


      </div>


      <div className='container-fluid card-8'>

        <div className='row' >

          <div className='col-md-4 mt-2  padding'>
            <div className='background-small-banner img-css  mt-2' data-aos="fade-right">
              <div className='font-style font-size-slider' data-aos="fade-left">
                shirt style

              </div>



            </div>


          </div>
          <div className='col-md-4 mt-2 padding'>
            <div className='background-small-banner1 img-css mt-2' data-aos="fade-up">
              <div className='font-style' data-aos="fade-down">
                loungewear love

              </div>
            </div>

          </div>
          <div className='col-md-4 mt-2  padding'>
            <div className='background-small-banner2 img-css mt-2' data-aos="fade-left">
              <div className='font-style' data-aos="fade-right">
                summer style

              </div>
            </div>



          </div>


        </div>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <div className='container-fluid'>

       
   
        <div className='row'>

          {
            women.map((product) => (
              <div className='col-md-6  col-sm-12 col-xl-4'>

                <div className='card-6 mt-4' data-aos="fade-left">

                  <center>
                    <Link to={`/productsitem/${product.id}`}>


                      <div className='card-3 ' key={product.id}>

                        <img src={product.image} alt="error" />
                        <br></br> <br></br>

                        <h5 className='text-dark'>{product.title}</h5>
                        <h5 className='text-dark' >${product.price}</h5>


                      </div>
                    </Link>
                  </center>

                </div>

              </div>



            ))}



        </div>



      </div>




      <br></br>
      <div className='background3 card-8'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='' data-aos="fade-up"  >

          <center>
            <p className='font-size-slider color2' style={{ fontWeight: "bold" }}>A BIG <span className='text-white' > OFFER  </span> FOR  <br></br><span className="text-white"> THIS SUMMER  </span> </p>
            <p className='text-white font-size-slider3'> Your Clothing and Style  With Professional Touch</p>
            <br></br>
            {/* <div className='wrap'>
                        <Link className='button' to="contact">JOIN US</Link>
                    </div> */}
          </center>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


      </div>






      <div className='container-fluid '>
        <div className='font-size-slider3 ' data-aos="fade-right">

        <p className='font-size-slider3' data-aos="fade-down" >
         <spam > get flat 30%</spam> off for new arrivals
        </p>
          <br></br>
        </div>
        <Swiper
          spaceBetween={30}


          autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}

          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1020: {
              width: 1028,
              slidesPerView: 3,
            },


          }}



        >

          {
            product.map((product) => (
              <SwiperSlide>
                <Link to={`/productsitem/${product.id}`}>

                  <div className='card-3' key={product.id}>
                    <img src={product.image} alt="error" />
                    <br></br> <br></br>

                    <h5 className='text-dark' >{product.title}</h5>

                    {/* <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button> */}
                  </div>
                </Link>



              </SwiperSlide>

            ))}

        </Swiper>

      </div>

   

      <br></br>
      <br></br>
   
 


    </>
  )
}

export default Home