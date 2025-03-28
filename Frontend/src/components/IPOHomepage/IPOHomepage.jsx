import "./IPOHomepage.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useState } from "react";
import Communitypage from "../Communitypage/Communitypage";
export default function IPOHomepage() {
  const [isOpen, setIsOpen] = useState(Array(15).fill(false));
    const toggleCollapse =(index)=>{
      setIsOpen((prev)=>{
        const newIsopen=[...prev];
        newIsopen[index]=!newIsopen[index];
        return newIsopen;
      });
    };
  return (
    <main className="main-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="\src\assets\Copy of logo.png" />
          <a className="navbar-brand" href="#home">
            BLUESTOCK
          </a>
          <div className="three-dot2">
          <i class="fa-solid fa-magnifying-glass" style={{color:" #999999"}}></i>
          </div>
          <div className="three-dotss2" onClick={(e) =>
            {
              e.stopPropagation();
            document.querySelector('.menu-content').classList.toggle('show')}}>
            <i className="fa-solid fa-bars" style={{color: "#999999"}}></i>
              <div className="menu-content">
              <ul>
              <li className="nav-item">
                <a className="nav-link" href="#ipo">
                <Link to="/IPOHomepage">
                  IPO
                </Link>
                </a>
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
                PRODUCTS
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
                  BROKERS
                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link livenews" href="#livenews">
                  LIVE NEWS
                </a>
                <button className="live-new">New</button>
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
                <a className="nav-link" href="#ipo">
                <Link to="/IPOHomepage">
                  IPO
                </Link>
                </a>
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
                PRODUCTS
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
                  BROKERS
                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link livenews" href="#livenews">
                  LIVE NEWS
                </a>
                <button className="live-new">New</button>
              </li>
            </ul>
            <ul className="navbar-nav">
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
            <div className="three-dots1">
                <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                </div>
          </div>
        </div>
      </nav>
      <div className="main-content">
        <div className="side-detail">
          <h1>IPO</h1>
          <p className="sd-1">Following is the list of companies for IPO as of today.</p>
          <span>Upcoming</span>
          <p className="sd-2">Companies that have filed for an IPO with SEBI.Few details might be disclosed by the comapnies later on.</p>
          <div className="upcoming-btn">
            <Link to="/UpcomingIPO">
        <button className="up-btn">View All</button>
        </Link>
        </div>
        </div>
          <div id="ipoCarousel" className="carousel slide">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="slide-container">
            {/* Table 1 */}
            <div className="box box1">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/nova.svg" className="sec-img" alt="Nova Agritech Ltd." />
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
              <div className="footer1">
                <button className="label1">RHP</button>
                <button className="label2">DRHP</button>
              </div>
            </div>
            </div>
            {/* Table 2 */}
            <div className="box box2">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/epack.svg" className="sec-img" alt="EPACK Durable Ltd." />
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
              <div className="footer1">
                <button className="label1">RHP</button>
                <button className="label2">DRHP</button>
              </div>
            </div>
            </div>
            {/* Table 3 */}
            <div className="box box3">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/rkswamy.svg" className="sec-img" alt="RK Swamy Ltd." />
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
              <div className="footer1">
                <button className="label1">RHP</button>
                <button className="label2">DRHP</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-container">
          <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\oyo.svg' className='sec-img'/>
                    <div className="value">Oravel Stays Ltd.</div>
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
                <div className="footer1">
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
                <div className="footer1">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>

        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\kidsclinic.svg' className='sec-img'/>
                    <div className="value">Kids Clinic India Ltd.</div>
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
                <div className="footer1">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="slide-container">
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
                <div className="footer1">
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
                <div className="footer1">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\ixigo.svg' className='sec-img'/>
                    <div className="value">Oravel Stays Ltd.</div>
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
                <div className="footer1">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <div className="slide-container">
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
                <div className="footer1">
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
                <div className="footer1">
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
                <div className="footer1">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#ipoCarousel"
        data-bs-slide="prev"
      >
        <span className="custom-prev-icon" aria-hidden="true"><i class="fa-solid fa-less-than" style={{color:" #0078ff"}}></i></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#ipoCarousel"
        data-bs-slide="next"
      >
        <span className="custom-next-icon" aria-hidden="true"><i class="fa-solid fa-greater-than" style={{color:" #0078ff"}}></i></span>
      </button>
    </div>
       </div> 
       <div className="applying-ipo">
        <div className="comp-logo">
        <img src="\src\assets\Copy of logo.png"/>
        <h1 className="comp-name-ipo">BLUESTOCK</h1>
        </div>
        <h1 className="applying-h1">Applying for this IPO?</h1>
        <p className="">The way you compare & invest in only the best IPO, let us help you get started by comparing and<br></br>selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.</p>
        <button>Open a Demat Account</button>
      </div>
      <div className="ongoing-ipo">
        <h6 className="ongoing">Ongoing</h6>
        <p>Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.</p>
        <div className="ongoing-btn">
        <button className="on-btn">View All</button>
        </div>
        </div>
        <div className="boxnew">
        <div className="contentnew">
                <div className="sectionnew1">
                    <img src='\src\assets\mediassist.svg' className='sec-img'/>
                    <div className="value">Medi Assist Healthcare Services Ltd. IPO</div>
                </div>
                <div className="detailsnew-2">
                <div className="sectionnew2">
                    <p className="label">PRICE BAND</p>
                    <p className="value">Rs 218-230</p>
                </div>
                <div className="sectionnew2">
                    <p className="label">OPEN</p>
                    <p className="value">2024-01-19</p>
                </div>
                <div className="sectionnew2">
                    <p className="label">CLOSE</p>
                    <p className="value">2024-01-23</p>
                </div>
                <div className="sectionnew3">
                    <p className="label">ISSUE SIZE</p>
                    <p className="value">640.05 Cr.</p>
                </div>
                <div className="sectionnew3">
                    <p className="label">ISSUE TYPE</p>
                    <p className="value">Book Built</p>
                </div>
                <div className="sectionnew3">
                    <p className="label">LISTING DATE</p>
                    <p className="value">2024-01-29</p>
                </div>
                </div>
                <div className="footernew">
                    <button className="label1">RHP</button>
                    <button className="label2">DRHP</button>
                </div>
        </div>
        </div>
        <div className="main-content">
        <div className="newlisted-ipo">
        <h6 className="newlisted">New Listed</h6>
        <p>Companies that have been listed recently through an IPO.Find their listing gains and returns here.</p>
        <div className="newlisted-btn">
        <button className="new-btn">View All</button>
        </div>
        </div>
        <div id="ipoCarousel" className="carousel slide">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#ipoCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="slide-container">
            {/* Table 1 */}
            <div className="box box1">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/jyothi.svg" className="sec-img" alt="Jyoti CNC Automation Ltd." />
                <div className="value">Jyoti CNC Automation Ltd.</div>
              </div>
              <div className="details-2">
              <div className="section2">
                <p className="label">IPO PRICE</p>
                <p className="value">Rs 331</p>
              </div>
              <div className="section2">
                <p className="label">LISTING PRICE</p>
                <p className="value">Rs 370</p>
              </div>
              <div className="section2">
                <p className="label">LISTING GAIN</p>
                <p className="value">11.78%</p>
              </div>
              <div className="section3">
                <p className="label">CMP</p>
                <p className="value">Rs 455.75</p>
              </div>
              <div className="section3">
                <p className="label">CURRENT RETURN</p>
                <p className="value">37.69%</p>
              </div>
              <div className="section3">
                <p className="label">LISTING DATE</p>
                <p className="value">2024-01-16</p>
              </div>
              </div>
              <div className="footer">
                <button className="label1">RHP</button>
                <button className="label2">DRHP</button>
              </div>
            </div>
            </div>
            {/* Table 2 */}
            <div className="box box2">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/innova.svg" className="sec-img" alt="Innova Captab Ltd." />
                <div className="value">Innova Captab Ltd.</div>
              </div>
              <div className="details-2">
              <div className="section2">
                <p className="label">IPO PRICE</p>
                <p className="value">Rs 448</p>
              </div>
              <div className="section2">
                <p className="label">LISTING PRICE</p>
                <p className="value">Rs 452.1</p>
              </div>
              <div className="section2">
                <p className="label">LISTING GAIN</p>
                <p className="value">0.92%</p>
              </div>
              <div className="section3">
                <p className="label">LISTING DATE</p>
                <p className="value">2023-12-29</p>
              </div>
              <div className="section3">
                <p className="label">CMP</p>
                <p className="value">Rs 515</p>
              </div>
              <div className="section3">
                <p className="label">CURRENT RETURN</p>
                <p className="value">14.96%</p>
              </div>
              </div>
              <div className="footer">
                <button className="label1">RHP</button>
                <button className="label2">DRHP</button>
              </div>
            </div>
            </div>
            {/* Table 3 */}
            <div className="box box3">
            <div className="content">
              <div className="section1">
                <img src="/src/assets/azad.svg" className="sec-img" alt="Azad Engineering Ltd." />
                <div className="value">Azad Engineering Ltd.</div>
              </div>
              <div className="details-2">
              <div className="section2">
                <p className="label">IPO PRICE</p>
                <p className="value">Rs 524</p>
              </div>
              <div className="section2">
                <p className="label">LISTING PRICE</p>
                <p className="value">Rs 720</p>
              </div>
              <div className="section2">
                <p className="label">LISTING PRICE</p>
                <p className="value">37.4%</p>
              </div>
              <div className="section3">
                <p className="label">LISTING DATE</p>
                <p className="value">2023-12-28</p>
              </div>
              <div className="section3">
                <p className="label">CMP</p>
                <p className="value">Rs 663.25</p>
              </div>
              <div className="section3">
                <p className="label">CURRENT RETURN</p>
                <p className="value">26.57%</p>
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
        <div className="carousel-item">
          <div className="slide-container">
          <div className="box box3">
        <div className="content">
                <div className="section1">
                    <img src='\src\assets\oyo.svg' className='sec-img'/>
                    <div className="value">Oravel Stays Ltd.</div>
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
                    <div className="value">Kids Clinic India Ltd.</div>
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
        <div className="carousel-item">
          <div className="slide-container">
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
                    <div className="value">Oravel Stays Ltd.</div>
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
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <div className="slide-container">
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
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#ipoCarousel"
        data-bs-slide="prev"
      >
        <span className="custom-prev-icon" aria-hidden="true"><i class="fa-solid fa-less-than" style={{color:" #0078ff"}}></i></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#ipoCarousel"
        data-bs-slide="next"
      >
        <span className="custom-next-icon" aria-hidden="true"><i class="fa-solid fa-greater-than" style={{color:" #0078ff"}}></i></span>
      </button>
    </div> 
    </div>
    <div className="ipo-section">
    <div className="iponews">
      <h3 className="iponews-h">IPO News</h3>
      <div className="iponews1">
      <h6 className="h6-1">Brainbess Solutions files DRHP with SEBI</h6>
      <span className="sh6-1">29 Dec,2:48PM</span>
      </div>
      <div className="iponews2">
      <h6 className="h6-2">Gretex Share Borking files DRHP with SEBI</h6>
      <span className="sh6-2">22 Dec,2:47PM</span>
      </div>
    </div>
    <div className="ipoanalysis">
    <h3 className="analysis-h">IPO Analysis</h3>
      <div className="analysis1">
      <h6 className="hana-1">Euphoria Infotech India coming with IPO to raise upto Rs 9.60 crore</h6>
      <span className="sana-1">18 Jan,2:26PM</span>
      </div>
      <div className="analysis2">
      <h6 className="hana-2">EPACK Durable coming with IPO to raise upto Rs 662 crore</h6>
      <span className="sana-2">17 Jan,4:52PM</span>
      </div>
      <div className="analysis3">
      <h6 className="hana-3">Qualitek Labs coming with IPO to raise Rs 19.64 crore</h6>
      <span className="sana-3">17 Dec,3:36PM</span>
      </div>
    </div>
    </div>
    <div className="freqasked">
    <h1 className='freqQuest'>Frequently Asked Questions?</h1>
    <span className='freqAnsw'>Find answers to common questions that come in your mind related to IPO.</span>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(0)}>
            {isOpen[0]? "−" : "+"}
          </button>
        </div>
        {isOpen[0] && (
          <div className="card card-body">
            <p>IPO or the Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares, which was earlier open to only a specific lot of internal and institutional investors via opening a Demat account.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How to invest in an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(1)}>
            {isOpen[1]? "−" : "+"}
          </button>
        </div>
        {isOpen[1] && (
          <div className="card card-body">
           <p>To invest in an IPO, open a Demat and trading account. Research the IPO details and apply through your broker or banking app using UPI. If allotted, shares will be credited to your Demat account; otherwise, funds are refunded. Once listed, you can hold or sell based on market conditions.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is the benefit of an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(2)}>
            {isOpen[2]? "−" : "+"}
          </button>
        </div>
        {isOpen[2] && (
          <div className="card card-body">
            <p>An IPO allows a company to raise capital for expansion, debt repayment, or other needs. For investors, it offers an opportunity to buy shares at an early stage, potentially benefiting from price appreciation if the company performs well.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What are the disadvantages of an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(3)}>
            {isOpen[3]? "−" : "+"}
          </button>
        </div>
        {isOpen[3] && (
          <div className="card card-body">
            <p>An IPO has some disadvantages:</p>
            <ul>
              <li className="box1mat">Market Volatility – Stock prices can be unpredictable after listing.</li>
              <li className="box1mat">Risk of Loss – If the company underperforms, investors may face losses.</li>
              <li className="box1mat">Lock-in Period – Some investors, like promoters, may have restrictions on selling shares.</li>
              <li className="box1mat">High Valuation – IPOs can be overpriced, leading to lower returns.</li>
            </ul>
          </div>
        )}
      </div>
    </div><div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is the differnece between book building issue and fixed price issue?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(4)}>
            {isOpen[4]? "−" : "+"}
          </button>
        </div>
        {isOpen[4] && (
          <div className="card card-body">
            <p>In a book building issue, the price is determined through investor bids within a price range, allowing for demand-based pricing. In a fixed price issue, the company sets a predetermined price for the shares before the IPO opens. Book building provides flexibility, while fixed price offers certainty.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Is it mandatory to have a PAN number to apply in an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(5)}>
            {isOpen[5]? "−" : "+"}
          </button>
        </div>
        {isOpen[5] && (
          <div className="card card-body">
            <p>Yes, having a PAN (Permanent Account Number) is mandatory to apply for an IPO in India. It helps in identity verification and prevents multiple applications under different names. Applications without a valid PAN are rejected.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Where do i get an IPO application form?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(6)}>
            {isOpen[6]? "−" : "+"}
          </button>
        </div>
        {isOpen[6] && (
          <div className="card card-body">
            <p>You can get an IPO application form through:</p>
            <ul>
              <li className="box1mat">Brokerage Firms – Online trading platforms and stockbrokers provide IPO forms.</li>
              <li className="box1mat">Stock Exchanges – Forms are available on NSE and BSE websites.</li>
              <li className="box1mat">Company Website – Some companies provide forms on their official websites.</li>
              <li className="box1mat">Registrar’s Website – IPO registrars like Link Intime or KFintech offer application links.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How one can apply in IPO's online?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(7)}>
            {isOpen[7]? "−" : "+"}
          </button>
        </div>
        {isOpen[7] && (
          <div className="card card-body">
            <p>You can apply for an IPO online using these steps:</p>
            <ul>
              <li className="box1mat">Login to Broker’s Platform – Use your Demat and trading account on a stockbroker's website or app (e.g., Zerodha, Groww, Upstox).</li>
              <li className="box1mat">Go to IPO Section – Select the IPO you want to apply for.</li>
              <li className="box1mat">Enter Bid Details – Choose the number of shares and bid price within the price range (for book-building IPOs).</li>
              <li className="box1mat">Use UPI for Payment – Enter your UPI ID and approve the mandate request from your banking app.</li>
              <li className="box1mat">Check Allotment – If allotted, shares will be credited to your Demat account; if not, funds will be refunded.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How one can apply in IPO's offline?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(8)}>
            {isOpen[8]? "−" : "+"}
          </button>
        </div>
        {isOpen[8] && (
          <div className="card card-body">
            <p>You can apply for an IPO offline using these steps:</p>
            <ul>
              <li className="box1mat">Get the IPO Application Form – Collect it from your broker, bank, or registrar's office.</li>
              <li className="box1mat">Fill in Details – Enter your PAN, Demat account number, bid price, and number of shares.</li>
              <li className="box1mat">Attach ASBA Authorization – Link your bank account for ASBA (Application Supported by Blocked Amount) to block funds.
              </li>
              <li className="box1mat">Submit the Form – Submit it at your bank branch or broker’s office before the IPO closes.</li>
              <li className="box1mat">Check Allotment – If allotted, shares will be credited to your Demat account; if not, funds will be unblocked.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Can a minor apply in an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(9)}>
            {isOpen[9]? "−" : "+"}
          </button>
        </div>
        {isOpen[9] && (
          <div className="card card-body">
           <p>Yes, a minor can apply for an IPO, but only through a Demat account opened in their name, with a guardian (parent/legal guardian) operating it. The minor must have a PAN card, and the application must be made using the guardian’s bank account for ASBA (Application Supported by Blocked Amount). Minors cannot apply using UPI.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is the procedure to withdraw from an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(10)}>
            {isOpen[10]? "−" : "+"}
          </button>
        </div>
        {isOpen[10] && (
          <div className="card card-body">
            <p>To withdraw from an IPO, log in to your broker’s platform, go to the IPO section, and select the applied IPO. Click on the "Withdraw" or "Cancel Application" option and confirm. If you applied through ASBA, you can request cancellation via your bank before allotment. Once withdrawn, the blocked funds will be released to your bank account within a few days.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How is IPO return calculated?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(11)}>
            {isOpen[11]? "−" : "+"}
          </button>
        </div>
        {isOpen[11] && (
          <div className="card card-body">
            <p>IPO return is calculated based on the difference between the listing price and the issue price of the shares. The formula is:<br></br>

IPO Return (%) = [(Listing Price - Issue Price) / Issue Price] × 100<br></br>

For example, if the issue price is ₹100 and the stock lists at ₹150, the return is:<br></br>

(150 - 100) / 100 × 100 = 50%

This means a 50% gain on the investment.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">Can one apply for an IPO from a sweep in/out saving bank account?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(12)}>
            {isOpen[12]? "−" : "+"}
          </button>
        </div>
        {isOpen[12] && (
          <div className="card card-body">
            <p>No, you cannot apply for an IPO from a sweep-in/out savings account because IPO applications require funds to be blocked using ASBA (Application Supported by Blocked Amount). Since sweep accounts automatically transfer excess funds between savings and fixed deposits, the required amount may not remain available, leading to application rejection. It's best to use a regular savings account for IPO applications.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">What is the minimum and maximum investment one could do in the HNI category?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(13)}>
            {isOpen[13]? "−" : "+"}
          </button>
        </div>
        {isOpen[13] && (
          <div className="card card-body">
            <p>In the HNI (High Net-worth Individual) category, the minimum investment starts at ₹2 lakh (above the retail investor limit). There is no fixed maximum limit; however, the investment must comply with the IPO's allocation rules and the investor’s available funds. HNIs typically apply under the Non-Institutional Investor (NII) category, and allotment is done on a proportionate basis.</p>
          </div>
        )}
      </div>
    </div>
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card cards">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0">How to apply more than one application in an IPO?</p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>toggleCollapse(14)}>
            {isOpen[14]? "−" : "+"}
          </button>
        </div>
        {isOpen[14] && (
          <div className="card card-body">
             <p>To apply for more than one application in an IPO, you need to use different Demat accounts linked to different PAN numbers (e.g., family members' accounts). Since SEBI allows only one IPO application per PAN, multiple applications from the same PAN will be rejected. You can apply using ASBA through different bank accounts or UPI IDs linked to those Demat accounts.</p>
          </div>
        )}
      </div>
    </div>
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
        <img src='\src\assets\startup india image.svg'/>
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
    </main>
    
  );
}
