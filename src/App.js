import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import PageNotFound from "./Pages/PageNotFound";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/scroll";
import SwipeableSidebar from "./Components/SwipeableSidebar ";



function App() {
  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/about" element={<About />} />
    //       <Route exact path="/services" element={<Services />} />
    //       <Route exact path="/career" element={<Career />} />
    //       <Route exact path="/team" element={<Team />} />
    //       <Route exact path="/contact" element={<Contact />} />
    //     </Routes>
    //     <ScrollToTop />
    //     <Footer/>
    //   </Layout>

    // </Router>
    <Router>
      <Navbar />
      <SwipeableSidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
