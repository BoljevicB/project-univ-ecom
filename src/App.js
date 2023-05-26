import './App.css';
import Head from "./components/head/head.js";
import Main from "./components/main/main.js";
import Footer from "./components/footer/footer.js"
import Chairs from "./components/categories/chairs/chairs"
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
                    <li><a href="/categories/beds/beds.html">Beds</a></li>
                    <li><Link to="/chairs">Chairs</Link></li>
                    <li><a href="./categories/desks/desks.html">Desks</a></li>
                    <li><a href="./categories/dressers/dressers.html">Dressers</a></li>
                    <li><a href="./categories/tables/tables.html">Tables</a></li>
                    <li><a href="./categories/cabinets/cabinets.html">Cabinets</a></li>
                    <li><a href="./categories/kitchens/kitchens.html">Kitchens</a></li>
                    <li><a href="#">Kids furniture</a></li>
                </ul>
            </li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="./categories/about/about.html">About us</a></li>
            <li><a href="./categories/contact/contacts.html">Contact</a></li>
        </ul>
    </nav>
          </div>

          <div className="grid_main">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/chairs" element={<Chairs />}/>
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