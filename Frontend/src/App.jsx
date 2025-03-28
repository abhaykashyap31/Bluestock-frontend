import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home/Homepage'
import Blogs from './components/Blogs/Blogs';
import IPOHomepage from "./components/IPOHomepage/IPOHomepage";
import UpComingIPO from "./components/UpComingIPO/UpComingIPO";
import Communitypage from "./components/Communitypage/Communitypage";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/IPOHomepage" element={<IPOHomepage/>}/>
        <Route path="/UpComingIPO" element={<UpComingIPO/>}/>
       <Route path="/Communitypage" element={<Communitypage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
