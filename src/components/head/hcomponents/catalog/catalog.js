import './catalog.css';
import Beds from "../../../categories/beds/beds";
import Chairs from "../../../categories/chairs/chairs";
import Desks from "../../../categories/desks/desks"
import Dressers from "../../../categories/dressers/dressers";
import Cabinets from "../../../categories/cabinets/cabinets";
import Kitchens from "../../../categories/kitchens/kitchens";
import Tables from "../../../categories/tables/tables";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

function Catalog () {
    return (
        <div className='Catalog'>
            <div className="left_catalog">
            <h1>Categories</h1>
            <ul>
            <li><Link to="/beds">Beds</Link></li>
                    <li><Link to="/chairs">Chairs</Link></li>
                    <li><Link to="/desks">Desks</Link></li>
                    <li><Link to="/dressers">Dressers</Link></li>
                    <li><Link to="/tables">Tables</Link></li>
                    <li><Link to="/cabinets">Cabinets</Link></li>
                    <li><Link to="/kitchens">Kitchens</Link></li>
                </ul>
            </div>

            <div className="catalog_default">
            
            <Routes>
              <Route path="/" element={<Beds />}/>
              <Route path="/chairs" element={<Chairs/>}/>
              <Route path="/desks" element={<Desks/>}/>
              <Route path="/dressers" element={<Dressers/>}/>
              <Route path="/cabinets" element={<Cabinets/>}/>
              <Route path="/kitchens" element={<Kitchens/>}/>
              <Route path="/tables" element={<Tables/>}/>
            </Routes>
        
        </div>
        </div>
    );
}

export default Catalog;