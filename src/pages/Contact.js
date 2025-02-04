import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BiMailSend} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import { AiOutlineInstagram, AiOutlineSkype, AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        

<div className='container-fluid big-text '>
<br></br>
<br></br>
<h1>Contact Us</h1>
<h3>Contact the Help Team </h3>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


</div>



            <section className="contactus card-5"  style={{ marginTop: "-10rem" }}>
            
                <div className="container contact "  style={{ background: "#f6dbfb" }}>
                
                    <div className="row mt-5" >
            
             
                        <div className="col-12 col-lg-10 mx-auto" >
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5 " >
                                    <ul style={{ marginTop: "1rem" }}>
                                      
                                        <li style={{ color: "#121212", textDecoration: "none", fontSize: "20px" }}><GoLocation/> Satyam Heights,309/308 Opp. Anjali Hospital ,Malang Road ,kalyan east ,<br /> Thane-421306,Maharashtra</li><br />
                                        <li style={{ color: "#121212", textDecoration: "none", fontSize: "20px" }}> <i className="fa fa-phone-square" ></i> +919137319282</li><br />
                                        <li style={{ color: "#121212", textDecoration: "none", fontSize: "20px" }} > <BiMailSend></BiMailSend> support@razejobfinder.com</li><br />
                                    </ul>
                                    <Link to="/" className='icons2 zoom'><AiOutlineInstagram /></Link>
                                    <Link to="/" className='icons2 zoom'><AiOutlineSkype /></Link>
                                    <Link to="/" className='icons2 zoom'><AiFillGithub /></Link>
                                    <Link to="/" className='icons2 zoom'><AiOutlineGoogle /></Link>
                                    <br></br>
                                <br></br>
                                </div>
                                <br></br>
                                <br></br>

                                {/* right side contact form  */}

                                <div className="contact-rightside col-12 col-lg-7">

                                   <br></br>
                                    <form  >
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginTop: "16px", marginBottom: "5px" }}>FullName:</p>
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    id=""
                                                    className="form-control"

                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-3rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>PHONE NO:</p>
                                                <input
                                                    type="text"
                                                    name="user_phone"
                                                    id=""
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>EMAIL:</p>
                                                <input
                                                    type="text"
                                                    name="user_email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>SUBJECT:</p>
                                                <input
                                                    type="text"
                                                    name="user_sub"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>MESSSAGE:</p>
                                                <input
                                                    type="text"
                                                    name="user_email"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild" style={{ marginTop: "-4rem", fontWeight: "bold" }}>
                                                <p style={{ color: "#121212", fontSize: "17px", marginLeft: "0px", marginBottom: "5px", marginTop: "16px" }}>REQUEST:</p>
                                                <input
                                                    type="text"
                                                    name="user_sub"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style" style={{ marginTop: "-1rem" }}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label
                                                className=" form-check-label main-hero-para" style={{ color: "#121212", marginTop: "-1.5rem" }} >
                                                <h5>     I agree that the Razejob Finder may contact me at the email address or phone number above </h5>
                                            </label>
                                        </div>

                                        <button
                                            style={{ marginTop: "1rem", color: "" }}
                                            type="submit"
                                            value="Send"
                                            className="w-100 button6">
                                            Submit
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="container-fluid " style={{ marginBottom: "4rem" }}>
        <p classname="maps" style={{  height: "20rem", border: "0", allowfullscreen: "", loading: "lazy" }}><iframe style={{ width: "101%", height: "27rem", border: "0", allowfullscreen: "", loading: "lazy" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4229.063075291826!2d73.13154841324223!3d19.209752753873097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795efeb3d38eb%3A0x8d8b68aab4d64d6d!2sAuxilum%20hospital!5e0!3m2!1sen!2sin!4v1644228214354!5m2!1sen!2sin" title="Map showing company location"></iframe></p>
      </div>
      <br></br>
        </>
    )
}

export default Contact
