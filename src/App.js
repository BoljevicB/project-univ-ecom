import './App.css';
import Head from "./components/head/head";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import About from "./components/head/hcomponents/about/about";
import Contacts from "./components/head/hcomponents/contact/contacts";
import Beds from "./components/categories/beds/beds";
import Chairs from "./components/categories/chairs/chairs";
import Desks from "./components/categories/desks/desks"
import Dressers from "./components/categories/dressers/dressers";
import Cabinets from "./components/categories/cabinets/cabinets";
import Kitchens from "./components/categories/kitchens/kitchens";
import Tables from "./components/categories/tables/tables";

import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">

      <div className="grid_container">
          <div className="grid_head">
          <nav>
        <div className="nav_logo">
            <div className="navlogobg"><img src="#" alt="Logo"/></div>
        </div>
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><a href="#">Catalog</a>
                <ul>
                    <li><Link to="/beds">Beds</Link></li>
                    <li><Link to="/chairs">Chairs</Link></li>
                    <li><Link to="/desks">Desks</Link></li>
                    <li><Link to="/dressers">Dressers</Link></li>
                    <li><Link to="/tables">Tables</Link></li>
                    <li><Link to="/cabinets">Cabinets</Link></li>
                    <li><Link to="/kitchens">Kitchens</Link></li>
                    <li><a href="#">Kids furniture</a></li>
                </ul>
            </li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Blog</a></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
        </ul>
    </nav>
          </div>

          <div className="grid_main">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contactus" element={<Contacts/>}/>
              <Route path="/beds" element={<Beds />}/>
              <Route path="/chairs" element={<Chairs/>}/>
              <Route path="/desks" element={<Desks/>}/>
              <Route path="/dressers" element={<Dressers/>}/>
              <Route path="/cabinets" element={<Cabinets/>}/>
              <Route path="/kitchens" element={<Kitchens/>}/>
              <Route path="/tables" element={<Tables/>}/>
            </Routes>
            
          </div>
          
          <div className="grid_footer">
            <Footer/>
          </div>
          </div>
          </div>
          </>
        
  );
}

export default App;