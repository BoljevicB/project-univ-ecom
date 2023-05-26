import './head.css';
import {Link} from "react-router-dom";

function Head() {
  return (
       <header>
        <div className="nav_logo">
            <div className="navlogobg"><img src="#" alt="Logo"/></div>
        </div>
        <ul>
            <li><a href="index.html">Main</a></li>
            <li><a href="#">Catalog</a>
                <ul>
                    <li><a href="/categories/beds/beds.html">Beds</a></li>
                    <li><Link to="/categories/chairs/chairs.js">Chairs</Link></li>
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
    </header>
  );
}

export default Head;