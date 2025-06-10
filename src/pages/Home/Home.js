import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';


import subimage from "../../utils/images/about1.jpg"
import subimage2 from "../../utils/images/subimage2.avif"

import serimg1 from "../../utils/images/our-services1.jpg"
import serimg2 from "../../utils/images/our-services2.jpg"
import serimg3 from "../../utils/images/our-services3.jpg"

import galimg1 from "../../utils/images/yoga2.jpg"
import galimg2 from "../../utils/images/menimage1.avif"
import galimg3 from "../../utils/images/yoga3.jpg"
import galimg4 from "../../utils/images/menimage2.webp"
import galimg5 from "../../utils/images/menimage3.jpg"
import galimg6 from "../../utils/images/yoga4.jpg"
import galimg7 from "../../utils/images/menimage4.jpg"
import galimg8 from "../../utils/images/yoga8.jpg"

import icon1 from "../../utils/images/contact.png"
import icon2 from "../../utils/images/social-media.png"

import './Home.css'
import './delect.css'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function Home() {

    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("auth_token");
        navigate("/login");
    };

    useEffect(() =>{
        const tokenFromCookie = Cookies.get('auth_token');
            if (tokenFromCookie) {
                setToken(tokenFromCookie);
            } else {
                console.log('No token found');
            }
        }, []);
    return (
        <div>
            <div className='home-container' id="home">
                <div className='home-header'>
                    <div className='head'>
                    <h1 className='home-heading'>YogaVision</h1>
                    </div>
                    {/* <Link
                    to="home"
                    smooth={true}
                    duration={500}> */}
                        <button 
                            className="btnn " 
                            id="home-btn"
                        >
                            <a className='ancor' href="#home">Home</a>
                        </button>
                    {/* </Link> */}
                    {/* <Link to='about'smooth={true}
                    duration={500}> */}
                        <button 
                            className="btnn " 
                            id="about-btn"
                        >
                            <a className='ancor' href="#about">About Us</a>
                        </button>
                    {/* </Link> */}
                    {/* <Link to='services'smooth={true}
                    duration={500}> */}
                        <button 
                            className="btnn " 
                            id="ourservice-btn"
                        >
                            <a className='ancor' href="#services">Our Service</a>
                        </button>
                    {/* </Link> */}
                    {/* <Link to='howitwork'smooth={true}
                    duration={500}> */}
                        <button 
                            className="btnn " 
                            id="howitworks-btn"
                        >
                            <a className='ancor' href="#howitwork">How It Works</a>
                        </button>
                    {/* </Link> */}
                    {token ? (
                <>
                    <Link to="/start">
                        <button className="btnn" id="getstarted-btn">
                            Test Pose
                        </button>
                    </Link>
                    <a href="https://yogavision.solvixsoftworks.com/">
                        <button className="btnn" id="getstarted-btn">
                            Portal
                        </button>
                    </a>
                    <button className="btnn" id="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
               <Link to="/login">
                    <button className="btnn" id="login-btn">
                        Login
                    </button>
                </Link>
            )}
                </div>
                <div className="home-main">
                    <h1 className='center' id='title'>Yoga &amp; Robustness At Home</h1>
                    <p className='center' id='subtitle'>Experience Yoga In The Comfort Of Your Own Home.</p>
                    <a className='center' id='supersub'>Explore Our Services</a>
                </div>
                <section className="section-white" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 padding-top-40">

                                <h3>Experience The Best Virtual AI Trainer.</h3>

                                <p>Yoga enhances physical fitness, fosters mental clarity, and cultivates a sense of inner peace, leading to a harmonious mind-body connection. 
                                It also promotes stress reduction, improves posture and balance, and boosts overall well-being.</p>

                                <ul className="benefits">
                                    <li><i className="fas fa-check"></i> Enhances your intrest in yoga .</li>
                                    <li><i className="fas fa-check"></i> Help you to get fit at your home.</li>
                                    <li><i className="fas fa-check"></i> Guide with correct position to avoide injury.</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={subimage} className="width-100 top-margins-images box-shadow" alt="pic"/>
                            </div>
                        </div>
                    </div>    
                </section>
                <section className="section-grey">
                <div className="container">

                    {/* <!--begin row--> */}
                    <div className="row">
                    
                        {/* <!--begin col-md-6--> */}
                        <div className="col-md-6">

                            <img src={subimage2} className="width-100 margin-right-15 box-shadow" alt="pic"/>

                        </div>
                        {/* <!--end col-sm-6--> */}
                        
                        {/* <!--begin col-md-6--> */}
                        <div className="col-md-6">

                            <h3>Learn more about us.</h3>

                            {/* <!--begin accordion --> */}
                            <div className="accordion" id="accordionFAQ">
                                {/* <!--begin card --> */}
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <a className='btn-link' > Virtual Yoga:</a>
                                        </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionFAQ">
                                        <div className="card-body">
                                        Access a wide variety of yoga, ranging from gentle flows to dynamic vinyasa sequences, all available at your fingertips. 
                                        Our virtual trainer will lead you through each session, providing detailed instructions and modifications to suit your individual needs.
                                        </div>
                                    </div>

                                </div>
                                {/* <!--end card --> */}

                                {/* <!--begin card --> */}
                                <div className="card">

                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <a className='btn-link'>Personalized Guidance:</a>
                                        </button>
                                        </h5>
                                    </div>

                                    <div >
                                        <div className="card-body">
                                        We understand that everyone's yoga journey is unique.
                                        That's why our virtual trainer offers personalized guidance, helping you set goals, track progress, and tailor your practice to align with your specific requirements.
                                        </div>
                                    </div>

                                </div>
                                {/* <!--end card --> */}

                                {/* <!--begin card --> */}
                                <div className="card">

                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <a className='btn-link'>Fitness and Mindfulness: </a>
                                        </button>
                                        </h5>
                                    </div>

                                    <div >
                                        <div className="card-body">
                                        Discover the power of fitness and cultivate a sense of calm and clarity through virtual trainer. 
                                        Our virtual trainer will lead you through mindfulness exercises, angle to follow that relaxation practices to promote overall well-being.
                                        </div>
                                    </div>

                                </div>
                                {/* <!--end card --> */}

                            </div>
                            {/* <!--end accordion --> */}

                        </div>
                        {/* <!--end col-md-6--> */}
                    
                    </div>
                    {/* <!--end row--> */}
            
                </div>
                {/* <!--end container--> */}
                </section>
            
                <section className="section-white" id="services">

                    {/* <!--begin container --> */}
                    <div className="container">

                        {/* <!--begin row --> */}
                        <div className="row">

                            {/* <!--begin col-md-12 --> */}
                            <div className="col-md-12 text-center">

                                <h2 className="section-title">Discover Our Service</h2>

                            </div>
                            {/* <!--end col-md-12 --> */}

                        </div>
                        {/* <!--end row --> */}

                    </div>
                    {/* <!--end container --> */}

                    {/* <!--begin services-wrapper --> */}
                    <div className="services-wrapper">

                        {/* <!--begin container --> */}
                        <div className="container">

                            {/* <!--begin row --> */}
                            <div className="row">

                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">

                                        <img src={serimg1} className="width-100" alt="pic"/>

                                        <h3><a href="#services">Virtual Yoga</a></h3>

                                        <p>Experience the transformative power of our dedicated Virtual yoga.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}

                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">

                                        <img src={serimg2} className="width-100" alt="pic"/>

                                        <h3><a href="#services">Asanas</a></h3>

                                        <p>Explore a variety of yoga asanas, unlocking strength, flexibility, and mindfulness in your practice.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}
                                
                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">

                                        <img src={serimg3} className="width-100" alt="pic"/>

                                        <h3><a href="#services">Web Cam</a></h3>

                                        <p>With your camara you can see the joint of your pose.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}

                        
                            </div>
                            {/* <!--end row --> */}
                            
                        </div>
                        {/* <!--end container --> */}
                            <section className="section-grey" id="gallery">

                                {/* <!--begin container --> */}
                                <div className="container">

                                    {/* <!--begin row --> */}
                                    <div className="row">
                                
                                        {/* <!--begin col-md-12 --> */}
                                        <div className="col-md-12 text-center padding-bottom-20">

                                            <h2 className="section-title">Gallery</h2>

                                            <p className="section-subtitle">The Virtual yoga trainer.</p>
                                        
                                        </div>
                                        {/* <!--end col-md-12 --> */}
                                
                                    </div>
                                    {/* <!--end row --> */}
                                
                                </div>
                                
                                <div className="grid">
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg1} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg2} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg3} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg4} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg5} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg6} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg7} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                    <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                                        <a className="popup2 gallery-insta" >
                                            <img src={galimg8} className="width-100" alt="pic"/>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            

                                {/* <!--begin container --> */}
                                <div className="container">

                                    {/* <!--begin row --> */}
                                    <div className="row">
                                
                                        {/* <!--begin col-md-12 --> */}
                                        <div className="col-md-12 text-center padding-top-30">

                                            <p className="follow-instagram">Like what you see? Follow us <a href="">@YogaVision</a></p>
                                        
                                        </div>
                                        {/* <!--end col-md-12 --> */}
                                
                                    </div>
                                    {/* <!--end row --> */}
                                
                                </div>
                                {/* <!--end container --> */}
                            
                            </section>

                                        </div>
                </section>
{/* <!--end services-wrapper --> */}
                <section>
                    <div className="container" id='howitwork'>

                        {/* <!--begin row --> */}
                        <div className="row">

                            {/* <!--begin col-md-12 --> */}
                            <div className="col-md-12 text-center">

                                <h2 className="section-title">How Does It Work</h2>

                                <p className="section-subtitle">Get started today.</p>
                                
                            </div>
                            {/* <!--end col-md-12 --> */}

                        </div>
                        {/* <!--end row --> */}

                        </div>
                        {/* <!--end container --> */}

                        {/* <!--begin services-wrapper --> */}
                        <div className="services-wrapper">

                        {/* <!--begin container --> */}
                        <div className="container">

                            {/* <!--begin row --> */}
                            <div className="row">

                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">

                                        <i className="pe-7s-note2"></i>
                                        

                                        <h4>Explore</h4>

                                        <p>Take a closer look at the website to discover its content and features.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}

                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">
                                        

                                        <i className="pe-7s-users"></i>

                                        <h4>Clicking Start</h4>

                                        <p>Initiate by clicking 'Start' to be directed to the Virtual yoga Page.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}

                                {/* <!--begin col-md-4 --> */}
                                <div className="col-md-4">

                                    <div className="main-services">

                                        <i className="pe-7s-like2"></i>
                                    

                                        <h4>Get Fit</h4>

                                        <p>Achieve fitness through yoga and experience relaxation at home.</p>
                                        
                                    </div>

                                </div>
                                {/* <!--end col-md-4 --> */}
                        
                            </div>
                            {/* <!--end row --> */}
                            
                        </div>
                        {/* <!--end container --> */}
                    </div>
                </section>
                <div className="footer">
            
            {/* <!--begin container --> */}
            <div className="container footer-top">
            
                {/* <!--begin row --> */}
                <div className="row section-grey">
                
                    {/* <!--begin col-md-4 --> */}
                    <div className="col-md-4 text-center">
                       
                        <i className="pe-7s-map-2"></i>
                        <img className="footer-img" src={icon1} alt="contact icon"/>
    
                        <h5>Get In Touch</h5>
    
                        <p>Whatsapp</p>
                        
                        <p><a href="mailto:#">Mail us</a></p>
                        
                        <p>+91 1234567890</p>
                        
                    </div>
                    {/* <!--end col-md-4 --> */}
                    
                    {/* <!--begin col-md-4 --> */}
                    <div className="col-md-4 text-center">
                       
                        <i className="pe-7s-comment"></i>
                        <img className="footer-img" src={icon2} alt=""/>
    
                        <h5>Social Media</h5>
    
                        {/* <p>See bellow where you can find us.</p> */}
                                             
                       
                        
                    </div>
                    {/* <!--end col-md-4 --> */}
                    
                    {/* <!--begin col-md-4 --> */}
                    {/* <div className="col-md-4 text-center">
                       
                        <i className="pe-7s-link"></i>
                        <img className="footer-img" src={icon3} alt=""/>
    
                        <h5>Useful Links</h5>
    
                        <a href="" className="footer-links">Our Cookies Policy</a>
    
                        <a href="" className="footer-links">Meet The Team Behind LeadPage</a>
    
                        <a href="" className="footer-links">Terms and Conditions</a>
                        
                    </div> */}
                    {/* <!--end col-md-4 --> */}
                    
                </div>
                {/* <!--end row --> */}
    
            </div>
            {/* <!--end container --> */}
                    
            {/* <!--begin container --> */}
            <div className="container-fluid footer-bottom px-0">
            
                {/* <!--begin row --> */}
                <div className="row no-gutters mx-0">
                
                
                    {/* <!--begin col-md-12 --> */}
                    <div className="col-md-12 text-center">
                       
                        <p>Copyright © 2025 <span className="template-name">YogaVision</span>.</p> 
                        
                    </div>
                    {/* <!--end col-md-6 --> */}
                    
                </div>
                {/* <!--end row --> */}
                
            </div>
            {/* <!--end container --> */}
                    
        </div>    
    </div>
</div>

        
    )
}

