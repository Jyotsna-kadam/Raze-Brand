import React, { useState } from 'react'


import { RiShoppingCartFill } from "react-icons/ri";


import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'

import { useSelector } from 'react-redux';


const Navbar = () => {

    const { cartItem } = useSelector((state) => state.cart);
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const [color, setColor] = useState(false);
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(true);

    // const [logos, setLogo] = useState(false);


    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const registers = () => {
        setRegister(!register);
        setLogin(true);
    }
    const logins = () => {
        setLogin(!login);
        setRegister(true);
    }


    // const changeLogo = () => {
    //     if (window.scrollY >= 50) {
    //         setLogo(true)
    //     } else {
    //         setLogo(false)
    //     }
    // }
    // window.addEventListener('scroll', changeLogo)

    // const RenderMenu = () => {
    // if (logos) {
    //     return (
    //       <>
    //      <img src={logo} alt="erroe" className='logo-img mt-3'></img>
    //       </>
    //     )
    //   } else {
    //     return (
    //       <>
    //       <span className=' h1' style={{color:'rgb(197, 16, 46)', fontWeight:"bold" }}>F</span>itness
    //       <span className=' h1' style={{color:'rgb(197, 16, 46)' , fontWeight:"bold"}}>C</span>lub
    //       </>
    //     )
    //   }
    // }

    return (
        <>
            <nav className={color ? 'main-nav  main-nav-bg shadow-nav' : 'main-nav '} style={{ position: "fixed" }} >
                <div className='logo mt-2' >
                    <p className='logo2' >
                        <RiShoppingCartFill />
                        RazeEcom.

                    </p>
                </div>
                <div className={showMediaIcons ? "menu-link mobile-menu-link " : 'menu-link'}>
                    <ul className="margin-for-navfont"  >
                        <li className='color'>
                            <Link to='/' className=' color  height-fontnav h5 ' >Home</Link>
                        </li>

                        <li className='color '><Link to='/product' className=' color height-fontnav h5'  >product </Link></li>
                        <li className='color  '><Link to='/about' className=' color  height-fontnav h5'>about us</Link></li>

                        <li className='color  '><Link to='product' className=' color  height-fontnav h5'>New One</Link></li>
                        <li className='color'><Link to='contact' className=' color  height-fontnav h5'  >Contact Us</Link></li>


                        <AiOutlineClose className='display  mx-3' onClick={() => setShowMediaIcons(false)} />

                    </ul>


                </div>

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li >
                            <div className='cart-item'>
                                
                                    <Link to='/cart' className='text-dark mt-3'><AiOutlineShoppingCart style={{ fontSize: "35px" }} />
                                        
                                    </Link>
                                    <p className='cart-count  '> {cartItem.length}  </p>


                                <button onClick={() => logins()} className='button5 mx-1'>Login</button>
                                <button onClick={() => registers()} className='button4 mx-1'>Register</button>
                            </div>

                        </li>

                    </ul>


                    <form action="" className={login ? " login-form card-6 " : " login-form active card-6 "} >
                        <h3 className=''>login now</h3>
                        <input type="email" placeholder="your email" class="box" />
                        <input type="password" placeholder="your password" class="box" />
                        <input type="submit" placeholder="login now" class="btn2" />
                    </form>

                    <form action="" className={register ? " login-form card-6 " : " login-form active card-6"} >
                        <h3>Register now</h3>
                        <input type="text" placeholder="your name" class="box" />
                        <input type="email" placeholder="your email" class="box" />
                        <input type="password" placeholder="your password" class="box" />
                        <input type="submit" placeholder="login now" class="btn2" />
                    </form>

                    <div className='hamburger-menu' style={{ marginLeft: "10px" }}>

                        <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <AiOutlineMenu className='' style={{ fontSize: "20px" }} />
                        </button>
                    </div>


                </div>


            </nav>

        </>
    )
}

export default Navbar