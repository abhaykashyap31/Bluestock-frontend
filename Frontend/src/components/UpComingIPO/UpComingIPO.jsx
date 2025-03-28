import './UpComingIPO.css';
import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Communitypage from '../Communitypage/Communitypage';
export default function UpComingIPO()
{
  const [isOpen, setIsOpen] = useState(Array(10).fill(false));
  const toggleCollapse =(index)=>{
    setIsOpen((prev)=>{
      const newIsopen=[...prev];
      newIsopen[index]=!newIsopen[index];
      return newIsopen;
    });
  };
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <img src="\src\assets\Copy of logo.png"/>
            <a className="navbar-brand" href="#home">BLUESTOCK</a>
             <div className="three-dots2" onClick={(e) =>
                        {
                          e.stopPropagation();
                        document.querySelector('.menu-content').classList.toggle('show')}}>
                        <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                        <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                          <div className="menu-content">
                          <ul>
                          <li className="nav-item">
                  <a className="nav-link" href="#products">PRODUCTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">PRICING</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#community">
                    <Link to="/Communitypage">
                    COMMUNITY
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                MEDIA
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#brokers">
                  SUPPORT
                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link sign-in" href="#signin">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary signup" type="button">
                  Sign Up Now
                </button>
              </li>         
                        </ul>
                        </div>
                        </div>
                        <script>{`
              document.addEventListener('click', function(e) {
                if (!e.target.closest('.three-dotss2')) {
                  document.querySelector('.menu-content').classList.remove('show');
                }
              });
            `}</script>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#products">PRODUCTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">PRICING</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#community">
                    <Link to="/Communitypage">
                    COMMUNITY
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                MEDIA
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#brokers">
                  SUPPORT
                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link sign-in" href="#signin">Sign in</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-primary sign-up" type="button">Sign Up Now</button>
                </li>
                </ul>
                <div className="three-dots">
                <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                </div>
            </div>
          </div>
        </nav>
        <main className='page-background'>
        <p className='bs'>Bluestock {'>'} IPO</p><p className='uipo'>{'>'} UPCOMING IPO</p>
        <h1 className='h1-main'>Upcoming IPO</h1>
        <span className='main-detial'>Companies that have filled for an IPO with SEBI. Few details might be disclosed by the companies later.</span>
      <div className="container">
      <div className="row">
        <div className="box box1">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\nova.svg' className='sec-img'/>
                    <div className="value">Nova Agritech Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Rs 39-41</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">2024-01-22</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">2024-01-24</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">143.81Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">2024-01-30</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
            </div>
          </div>  
        <div className="box box2">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\epack.svg' className='sec-img'/>
                    <div className="value">EPACK Durable Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Rs 218-230</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">2024-01-19</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">2024-01-23</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">640.05Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">2024-01-29</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div> 
        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\rkswamy.svg' className='sec-img'/>
                    <div className="value">RK Swamy Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\oyo.svg' className='sec-img'/>
                    <div className="value oyo">Oravel Stays Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">8430 Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3 box4">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\boat.svg' className='sec-img'/>
                    <div className="value">Imagine marketing Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">2000 Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\kidsclinic.svg' className='sec-img'/>
                    <div className="value kids">Kids Clinic India Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="box box3 box5">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\ola.svg' className='sec-img'/>
                    <div className="value">OLA Electric Mobility Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3 box6">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\mobikwik 1.svg' className='sec-img'/>
                    <div className="value">One Mobikwik Systems Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">1900 Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\ixigo.svg' className='sec-img'/>
                    <div className="value orv">Oravel Stays Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">1600 Cr.</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="box box3 box7">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\cmr.svg' className='sec-img'/>
                    <div className="value">CMR Green Technologies</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3 box8">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\wellness.svg' className='sec-img'/>
                    <div className="value">Wellness Forever</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3 box9">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\pkh.svg' className='sec-img'/>
                    <div className="value">PKH Ventures Ltd.</div>
                </div>
                <div className="details-2">
                <div className="section2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">OPEN</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section2">
                    <p className="label">CLOSE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">Not Issued</p>
                </div>
                <div className="section3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="section3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">Not Issued</p>
                </div>
                </div>
                <div className="footer">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
      </div>
    </div>
    <div className="freq">
    <h1 className='freqQues'>Frequently Asked Questions?</h1>
    <span className='freqAns'>Find answers to common questions that come in your mind related to IPO.</span>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card" >
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How to Subscribe to an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(0)}>
            {isOpen[0]? "−" : "+"}
          </button>
        </div>
        {isOpen[0] && (
          <div className="card card-body">
            <ul>
              <li className="box1mat">Step 1: Login to your respective service provider.
              <li className="box1mat">Step 2: Click on the IPO button.</li>
              <li className="box1mat">Step 3: Select the IPO you want to bid and enter the relevant details.</li>
              <li className="box1mat">Step4: Your subscription will be completed once you make the payment or give permission.</li></li>
            </ul>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Should I buy an IPO first day?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(1)}>
            {isOpen[1]? "−" : "+"}
          </button>
        </div>
        {isOpen[1] && (
          <div className="card card-body">
            <p>Buying an IPO on the first day depends on factors like demand, valuation, and market conditions. If the IPO is highly oversubscribed and has strong fundamentals, it may list at a premium, making early buying beneficial. However, if the stock is overvalued or market sentiment is weak, prices may drop after listing. It's best to analyze the company, check grey market trends, and wait for price stability before investing.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How do you know if an IPO is good?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(2)}>
            {isOpen[2]? "−" : "+"}
          </button>
        </div>
        {isOpen[2] && (
          <div className="card card-body">
            <p>To determine if an IPO is good, analyze the company's fundamentals, including revenue growth, profitability, and debt levels. Compare its valuation with industry peers to ensure it's fairly priced. Market sentiment, such as high demand and a positive grey market premium, can indicate strong interest. Assess the credibility of promoters and management, as a strong leadership team increases trust. Lastly, check how the company plans to use the IPO funds—whether for expansion or just debt repayment. A combination of solid financials, fair valuation, and strong demand suggests a promising IPO.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How to check IPO start date?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(3)}>
            {isOpen[3]? "−" : "+"}
          </button>
        </div>
        {isOpen[3] && (
          <div className="card card-body">
            <p>You can check an IPO's start date on stock exchange websites like NSE and BSE, as they provide official listings. SEBI also publishes IPO schedules on its website. Brokerage platforms such as Zerodha, Groww, and Upstox list upcoming IPOs along with their start dates.</p>
          </div>
        )}
      </div>
    </div><div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is issue size?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(4)}>
            {isOpen[4]? "−" : "+"}
          </button>
        </div>
        {isOpen[4] && (
          <div className="card card-body">
            <p>Issue size refers to the total value of shares offered in an IPO. It is calculated as:<br></br>

Issue Size = Number of Shares × Issue Price per Share<br></br>

It represents the total funds a company aims to raise from the public. A larger issue size indicates a bigger fundraising effort, while a smaller issue size may suggest a niche or emerging company.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How many shares in a lot?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(5)}>
            {isOpen[5]? "−" : "+"}
          </button>
        </div>
        {isOpen[5] && (
          <div className="card card-body">
            <p>The number of shares in a lot varies for each IPO and is decided by the company. A lot size is the minimum number of shares an investor must apply for in an IPO. For example, if an IPO has a lot size of 50 shares, an investor can apply for multiples of 50</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How is the lot size calculated?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(6)}>
            {isOpen[6]? "−" : "+"}
          </button>
        </div>
        {isOpen[6] && (
          <div className="card card-body">
            <p>Lot Size = Minimum Investment Amount / Issue Price per Share<br></br>

For example, if the issue price of a share is ₹500 and the minimum investment is ₹15,000, then:<br></br>

Lot Size = 15,000 / 500 = 30 shares per lot</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Who decides the IPO price band?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(7)}>
            {isOpen[7]? "−" : "+"}
          </button>
        </div>
        {isOpen[7] && (
          <div className="card card-body">
            <p>The IPO price band is decided by the company going public in consultation with investment bankers or merchant bankers (also called underwriters). They determine the price band based on factors like the company's financials, market conditions.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is IPO GMP?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(8)}>
            {isOpen[8]? "−" : "+"}
          </button>
        </div>
        {isOpen[8] && (
          <div className="card card-body">
            <p>IPO GMP (Grey Market Premium) is the unofficial price at which an IPO's shares are traded in the grey market before listing. It indicates market sentiment and expected listing gains. If an IPO’s issue price is ₹100 and the GMP is ₹50, the expected listing price could be ₹150. However, GMP is not official or guaranteed and can fluctuate based on demand and market conditions</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How many lots should I apply for IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(9)}>
            {isOpen[9]? "−" : "+"}
          </button>
        </div>
        {isOpen[9] && (
          <div className="card card-body">
            <p>The number of lots you should apply for in an IPO depends on your budget and the IPO’s demand. For oversubscribed IPOs, applying for one lot increases your chances since allotment is done through a lottery system.</p>
          </div>
        )}
      </div>
    </div>
    </main>
    <footer>
      <div className='foot-container'>
        <div className="fc-1">
        <div className="foot-links">
          <h6>Resouces</h6>
          <a>Trading View</a>
          <a>NSE Holidays</a>
          <a>e-Voting CDSL</a>
          <a>e-Voting NSDL</a>
          <a>Market Timings</a>
        </div>
        <div className="foot-links">
        <h6>Company</h6>
          <a>Careers</a>
          <a>Contact Us</a>
          <a>About Us</a>
          <a>Community</a>
          <a>Blogs</a>
        </div>
        </div>
        <div className="fc-2">
        <div className="foot-links">
        <h6>Offerings</h6>
          <a>Compare Broker</a>
          <a>Fin Calculators</a>
          <a>IPO</a>
          <a>All Brokers</a>
          <a>Products</a>
        </div>
        <div className="foot-links">
        <h6 className='links'>Links</h6>
          <a>Shark Investor</a>
          <a>Mutual Funds</a>
          <a>Sitemap</a>
          <a>Indian Indices</a>
          <a>Bug Bounty Program</a>
        </div>
        </div>
        <div className="fc-3">
        <div className="foot-links">
        <h6 className='policy'>Policy</h6>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Refund Policy</a>
          <a>Disclaimer</a>
          <a>Trust & Security</a>
        </div>
        </div>
      </div>
      <div className='credit-contain'>
        <div className="sc-link">
        <div className="social-links">
        <i className="fa-brands fa-x-twitter" style={{ color: "#0078ff" }}></i>
        <i className="fa-brands fa-facebook-f" style={{ color: "#0078ff" }}></i>
        <i className="fa-brands fa-youtube" style={{ color: "#0078ff" }}></i>
        <i className="fa-brands fa-linkedin" style={{ color: "#0078ff" }}></i>
        <i className="fa-brands fa-instagram" style={{ color: "#0078ff" }}></i>
        <i className="fa-brands fa-telegram" style={{ color: "#0078ff" }}></i>
        </div>
        <div className="credit-logo">
          <img src='\src\assets\bluestock logo.svg'/>
          <h1>BLUESTOCK</h1>
        </div>
        <div className="locatin-info">
          <p>Bluestock Fintech</p>
          <p className='l2'>Pune,Maharashtra</p>
        </div>
        <div className="msme-no">
          <p>MSME Registration No:</p>
          <p className='mn'>UDYAM-MH-01-v0138001</p>
        </div>
        <img src='\src\assets\startup india image.svg' className='startup-img'/>
        </div>
        <div className="credit-info">
          <span className='span1'>Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI.<br></br> Issued in the interest of the investors.<br></br></span>
          <span className='span2'>The users can write to <a href=''>hello@bluestock.in</a> for any app, website related queries. Also you can send IT / Tech related feedback to<br></br><a href=''>cto@bluestock.in</a><br></br></span>
          <span className='span3'>Disclaimer: We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock<br></br> tips, or investment and trading advice. All the stock scripts shown in the Bluestock app, website, all social media handles are for educational<br></br> purposes only.
          Before making any investment in the financial market, it is advisable to consult with your financial advisor. Remember<br></br> that stock markets are subject to market risks.</span>
        </div>
        </div>
        <div className="mybottom"></div>
        <div className="buttominfo">
          <p>Bluestock Fintech All Rights Reserved.</p>
          <p className='state'>Made with ❤️ in Pune,Maharashtra</p>
        </div>
    </footer>
</>
    );
};