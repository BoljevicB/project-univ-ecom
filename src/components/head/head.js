import './head.css';
import {Link} from "react-router-dom";

function Head() {
  return (
    <nav>
    <div className="nav_logo">
        <div className="navlogobg"><img src="#" alt="Logo"/></div>
    </div>
    <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/catalog">Catalog</Link>
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
  );
}

export default Head;