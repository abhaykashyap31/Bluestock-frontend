import React from 'react';
import Navbar from './Home-components/nav-bar';
import AppAd from './Home-components/app-ad';
import Semi from './Home-components/semi-mid';
import Notes from './Home-components/flag-cards';
import Midpart from './Home-components/shark-investor';
import Onthego from './Home-components/on-the-go';
import UserReview from './Home-components/user-review';
import Marketmovers from './Home-components/market-table';
import CompareInvestor from './Home-components/investor-comparison';


function Homepage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="mt-16"> 
        <AppAd />
      </div>
      <div className="mt-2"> 
        <Semi />
      </div>
      <div className="mt-2"> 
        <Notes />
      </div>
      <div className="mt-2"> 
        <Midpart />
      </div>
      <div className="mt-2"> 
        <Onthego />
      </div>
      <div className="mt-2"> 
        <UserReview />
      </div>
      <div className="mt-2"> 
        <Marketmovers />
      </div>
      <div className="mt-2"> 
        <CompareInvestor />
      </div>
    </div>
  );
}


export default Homepage;
