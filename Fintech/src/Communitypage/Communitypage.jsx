import './Communitypage.css';
import { Link } from "react-router-dom";
import IPOHomepage from '../IPOHomepage/IPOHomepage';
export default function Communitypage(){
    return(
        <>
        <header className='cummunity-header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="\src\assets\Copy of logo.png" />
          <a className="navbar-brand" href="#home">
            BLUESTOCK
          </a>
         <div className="three-dots2" onClick={(e) =>
                                 {
                                   e.stopPropagation();
                                 document.querySelector('.menu-content').classList.toggle('show')}}>
                                 <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
                                 <i class="fa-solid fa-ellipsis-vertical" style={{color:" #000000"}}></i>
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
                  COMMUNITY
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
                  COMMUNITY
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
      <main className='cummunity-container'>
        <div className="heading">
            <p className='h-home'>Home</p>
            <p>{'>'}</p>
            <span>Community</span>
        </div>
        <div className="maincommunity">
            <div className="class1">
                <div className="details1">
                    <h1 className='d1-h1'>The Most Active<br></br>Community of<br></br>Traders & Inverstors</h1>
                    <p className='d1-p1'>Join now to interact with thousands of active traders and<br></br>inverstors to learn and share your knowledge on out<br></br>buzzing forum.</p>
                    <button className='d1-btn'>Join Our Community</button>
                </div>
                <div className="d1-img">
                    <img src='/src/assets/community1.svg'/>
                </div>
            </div>
            <div className="class2">
                <div className="details2">
                    <h1 className='d2-h1'>be a part of trading &<br></br>investments club</h1>
                    <p className='d2-p1'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    rich environment for<br></br>knowledge exchange.</p>
                    <p className='d2-p2'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    stay connected about<br></br>the latest stock market</p>
                    <p className='d2-p3'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    Access exclusive community<br></br>events,webinars,and meet-ups</p>
                </div>
                <div className="d2-img">
                    <img src='/src/assets/community2.svg'/>
                </div>
            </div>
            <div className="class3">
                <div className="cl3-main">
                    <h2 className='cl3-h2'>Team Bluestock Cares</h2>
                    <p className='cl3-p'>Interact with our members to engage,<br></br>clarify and contribute</p>
                </div>
                <div className="details3">
                    <h2 className='d3-h2'>Interact With Our Experts</h2>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label class="form-check-label" for="flexRadioDefault1">
                        Get valid suggestions
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        Raise issues or concerns
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                        <label class="form-check-label" for="flexRadioDefault3">
                        Ask your questions
                        </label>
                    </div>
                </div>
                <div className="d3-img">
                    <img src='/src/assets/community3.svg'/>
                </div>
            </div>
        </div>
      </main>
      </header>
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
        </>
    );
}