import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPOHomepage from "./IPOHomepage/IPOHomepage";
import UpComingIPO from "./UpComingIPO/UpComingIPO";
import Communitypage from "./Communitypage/Communitypage";
function App(){
  return (
    <Router>
      <Routes>
      <Route path="/IPOHomepage" element={<IPOHomepage/>}/>
      <Route path="/UpComingIPO" element={<UpComingIPO/>}/>
      <Route path="/Communitypage" element={<Communitypage/>}/>
    </Routes>    
    </Router>
  )
}
export default App
