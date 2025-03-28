import { Link } from "react-router-dom";
import IPOHomepage from '../IPOHomepage/IPOHomepage';

export default function Communitypage() {
    return (
        <>
            <header className='bg-white'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src="\src\assets\Copy of logo.png" />
                        <a className="navbar-brand" href="#home">
                            BLUESTOCK
                        </a>
                        <div className="three-dots2" onClick={(e) => {
                            e.stopPropagation();
                            document.querySelector('.menu-content').classList.toggle('show')
                        }}>
                            <i className="fa-solid fa-ellipsis-vertical" style={{ color: " #000000" }}></i>
                            <i className="fa-solid fa-ellipsis-vertical" style={{ color: " #000000" }}></i>
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
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                PRODUCTS
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#brokers">
                                            BROKERS
                                            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                                                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" /></svg>
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
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            PRODUCTS
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#brokers">
                                        BROKERS
                                        <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#9A9A9A">
                                            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" /></svg>
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
                                <i className="fa-solid fa-ellipsis-vertical" style={{ color: " #000000" }}></i>
                                <i className="fa-solid fa-ellipsis-vertical" style={{ color: " #000000" }}></i>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className='m-5 ml-[60px] bg-white'>
                    <div className="flex flex-row text-[#9A9A9A] text-[17px] font-medium gap-[5px]">
                        <p className='text-[#007bff]'>Home</p>
                        <p>{'>'}</p>
                        <span>Community</span>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white">
                        <div className="flex mt-[90px] gap-[230px] md:flex md:mt-[17px] md:ml-[-10px] md:block md:relative">
                            <div className="details1">
                                <h1 className='text-[45px] text-[#2A394E] font-bold md:text-[33px]'>The Most Active<br></br>Community of<br></br>Traders & Inverstors</h1>
                                <p className='mt-[50px] text-[#2A394E] text-base md:mt-[520px] md:text-[15px] md:ml-[2px]'>Join now to interact with thousands of active traders and<br></br>inverstors to learn and share your knowledge on out<br></br>buzzing forum.</p>
                                <button className='mt-2 p-[10px] text-[17px] px-[15px] bg-[#3F52FF] text-white border-none font-medium md:ml-[2px] md:mt-[10px]'>Join Our Community</button>
                            </div>
                            <div className="d1-img md:absolute md:top-[8%] md:left-[5%]">
                                <img src='/src/assets/community1.svg' />
                            </div>
                        </div>
                        <div className="flex flex-row mt-[90px] md:block md:mt-[50px] md:relative">
                            <div className="mr-[80px]">
                                <h1 className='text-[38px] text-[#2A394E] font-bold md:text-[33px]'>be a part of trading &<br></br>investments club</h1>
                                <p className='mt-[60px] flex text-[17px] md:mt-[380px] md:text-[15px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" className="mt-[1px] mr-[12px] md:text-[15px]">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                    </svg>
                                    rich environment for<br></br>knowledge exchange.
                                </p>
                                <p className='mt-[20px] flex text-[17px] md:text-[15px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" className="mt-[1px] mr-[12px] md:text-[15px]">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                    </svg>
                                    stay connected about<br></br>the latest stock market
                                </p>
                                <p className='mt-[20px] flex text-[17px] md:text-[15px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f" className="mt-[1px] mr-[12px] md:text-[15px]">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                    </svg>
                                    Access exclusive community<br></br>events,webinars,and meet-ups
                                </p>
                            </div>
                            <div className="mt-[90px] mr-[40px] md:mt-[80px] md:mr-[50px] md:absolute md:top-[10%] md:right-[-18%]">
                                <img src='/src/assets/community2.svg' />
                            </div>
                        </div>
                        <div className="flex flex-col mb-[40px] md:block md:mt-[40px]">
                            <div className="flex flex-col justify-center text-center mt-[130px] md:block md:mt-[70px] md:relative">
                                <h2 className='text-[38px] text-[#2A394E] font-bold md:text-[32px] md:ml-[-75px]'>Team Bluestock Cares</h2>
                                <p className='md:block md:ml-[-115px]'>Interact with our members to engage,<br></br>clarify and contribute</p>
                            </div>
                            <div className="flex flex-col mt-[40px] ml-[90px] md:block">
                                <h2 className='text-[30px] text-[#2A394E] font-bold md:text-[23px] md:mt-[400px] md:ml-[-67px]'>Interact With Our Experts</h2>
                                <div className="mt-[20px] flex gap-[10px] text-[17px] md:text-[15px] md:ml-[-70px]">
                                    <input className="w-[20px] h-[20px] border border-[#0000FF] cursor-pointer md:w-[15px] md:h-[15px]" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Get valid suggestions
                                    </label>
                                </div>
                                <div className="mt-[20px] flex gap-[10px] text-[17px] md:text-[15px] md:ml-[-70px]">
                                    <input className="w-[20px] h-[20px] border border-[#0000FF] cursor-pointer md:w-[15px] md:h-[15px]" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Raise issues or concerns
                                    </label>
                                </div>
                                <div className="mt-[20px] flex gap-[10px] text-[17px] md:text-[15px] md:ml-[-70px]">
                                    <input className="w-[20px] h-[20px] border border-[#0000FF] cursor-pointer md:w-[15px] md:h-[15px]" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Ask your questions
                                    </label>
                                </div>
                            </div>
                            <div className="ml-[500px] mt-[-215px] md:absolute md:left-[-110%] md:top-[82%] md:ml-[485px]">
                                <img src='/src/assets/community3.svg' />
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
                        <img src='\src\assets\bluestock logo.svg' />
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
                    <img src='\src\assets\startup india image.svg' className='startup-img' />
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
