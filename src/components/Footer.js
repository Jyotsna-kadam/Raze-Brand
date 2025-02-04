import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import {RiShoppingCartFill} from 'react-icons/ri'
import { AiOutlineInstagram, AiOutlineSkype, AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer style={{ marginBottom: "-2rem" }} className="mt-5">

                <div className='background5' style={{ background: " #9445a1", opacity: "" }} >
                    <div className='transbox5' >
                        <div className='container-fluid '>
                            <div className='row padding2'>
                                <div className="col-sm-6 col-md-4 center2 mt-5 mb-5" >
                                    <ul  >

                                        <h3 className="text-white mt-4" >
                                        <RiShoppingCartFill/> RazeEcom. </h3>
                                        <hr className='color-hr'></hr>

                                        <p className="mt-3 text-white" > If You Would Like To Experience The Best Of Online Shopping For Men, Women And Kids In India, You Are At The Right Place. RAZEECOM. Is The Ultimate Destination For Fashion And Lifestyle, Being Host To A Wide Array Of Merchandise Including Clothing, Footwear, Accessories, Jewellery, Personal Care Products And More. It Is Time To Redefine Your Style Statement With Our Treasure-Trove Of Trendy Items. Our Online Store Brings You The Latest In Designer Products Straight Out Of Fashion Houses. You Can Shop Online At RAZEECOM.</p>
                                        <Link to="/aboutus" className="button mt-5 " >Know More</Link>

                                    </ul>
                                </div>


                                <div className="col-sm-6 col-md-2 mt-5 mb-5 " >
                                    <div className='center2'>

                                        <ul  >
                                            <br />
                                            <h3 className="text-white " >Quick Link</h3>
                                            <hr className='color-hr'></hr>
                                            <li className='zoom marginFooter' ><Link to="/contact" className="text-white color mt-1"> <i className="fa fa-angle-right" aria-hidden="true"></i> Contact Us</Link></li>
                                            <li className='zoom marginFooter' >  <Link to="/about" className="text-white  color "> <i className="fa fa-angle-right" aria-hidden="true"></i> About Us</Link></li>
                                            <li className='zoom marginFooter' ><Link to="/product" className="text-white  color "><i className="fa fa-angle-right" aria-hidden="true"></i> Product</Link></li>
                                            <li className='zoom marginFooter' >  <Link to="/" className="text-white color  "> <i className="fa fa-angle-right" aria-hidden="true"></i> Links</Link></li>
                                            <li className='zoom marginFooter' >  <Link to="/" className="text-white color  "> <i className="fa fa-angle-right" aria-hidden="true"></i> Links</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-2 mt-5 mb-5" >

                                    <ul>
                                        <br />
                                        <h3 className="text-white " >Blog</h3>
                                        <hr className='color-hr'></hr>
                                        <li className='zoom marginFooter'><Link to="/" className="text-white color mt-1"> <i className="fa fa-angle-right" aria-hidden="true"></i> Contact Us</Link></li>
                                        <li className='zoom marginFooter'>  <Link to="/" className="text-white  color "> <i className="fa fa-angle-right" aria-hidden="true"></i> About Us</Link></li>
                                        <li className='zoom marginFooter'><Link to="/" className="text-white  color "><i className="fa fa-angle-right" aria-hidden="true"></i> Links</Link></li>
                                        <li className='zoom marginFooter'>  <Link to="/" className="text-white color  "> <i className="fa fa-angle-right" aria-hidden="true"></i> Links</Link></li>
                                        <li className='zoom marginFooter'>  <Link to="/" className="text-white color  "> <i className="fa fa-angle-right" aria-hidden="true"></i> Links</Link></li>
                                    </ul>
                                </div>




                                <div className="col-sm-6 col-md-4 mt-5 mb-5" style={{ fontFamily: "Poppins" }}>
                                    <ul>
                                        <br />
                                        <h3 className='text-white ' >Contact</h3>
                                        <hr className='color-hr'></hr>

                                        <li className='text-white d-flex'> <i className="fa fa-phone-square" ></i> +945545454545/94513454282/9137319282</li><br />
                                        <li className='text-white d-flex'> <i className="fa fa-phone-square" ></i><span className="mx-1">+91545450 48830</span> </li><br />

                                        <li className='text-white'   > <i className="fa fa-envelope"></i> dhananjayavare786@gmail.com</li><br />
                                        <li className='text-white' ><i className="fa fa-map-marker" ></i> kalyan , Thane , Mumbai </li><br />
                                    </ul>



                                </div>

                            </div>
                            <hr className='color-hr'></hr>
                            <div className='row'>
                                <div className='register-free  '>




                                    <h3 className='mt-2 text-white '>Register for Free</h3>
                                    <br></br>
                                    <Link to="/" className='button3 '>SIGN UP! </Link>


                                </div>

                            </div>
                            <br></br>
                            <hr className='color-hr'></hr>

                            <br></br>
                            <div className='icon-social'>
                                <FaFacebookF className='icons zoom' />
                                <AiOutlineInstagram className='icons zoom' />
                                <FaTwitter className='icons zoom'/>
                                <AiOutlineSkype className='icons zoom' />
                                <FaLinkedinIn className='icons zoom' />
                                <AiFillGithub className='icons zoom' />
                                <AiOutlineGoogle className='icons zoom' />
                            </div>
                            <br></br>
                       <div className='icon-social color5'>
                                <h5 className='padding text-white'>@ 2022 Copyright:Razer.c53.com</h5>  
                       </div>

                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer
