import './App.css';
import Head from "./components/head/head";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Catalog from "./components/head/hcomponents/catalog/catalog";
import About from "./components/head/hcomponents/about/about";
import Contacts from "./components/head/hcomponents/contact/contacts";
import Beds from "./components/categories/beds/beds";
import Chairs from "./components/categories/chairs/chairs";
import Desks from "./components/categories/desks/desks"
import Couches from "./components/categories/couches/couches";
import Lamps from "./components/categories/lamps/lamps";
import Kitchens from "./components/categories/kitchens/kitchens";
import Tables from "./components/categories/tables/tables";
import Kids from "./components/categories/kidsfurniute/kids";
import { Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">

      
          <Head />
          
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/catalog" element={<Catalog/>}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contactus" element={<Contacts/>}/>
              <Route path="/beds" element={<Beds />}/>
              <Route path="/chairs" element={<Chairs/>}/>
              <Route path="/desks" element={<Desks/>}/>
              <Route path="/couches" element={<Couches />}/>
              <Route path="/lamps" element={<Lamps />}/>
              <Route path="/kitchens" element={<Kitchens/>}/>
              <Route path="/tables" element={<Tables/>}/>
              <Route path="/kidsfurniture" element={<Kids />}/>
            </Routes>

            <Footer/>
          
          
          </div>
          </>
        
  );
}

export default App;