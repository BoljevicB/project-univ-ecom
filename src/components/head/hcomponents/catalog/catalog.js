import './catalog.css';

function Catalog () {
    return (
        <div className='Catalog'>
            <div className="left_catalog">
            <h1>Catalog</h1>
            <ul>
                    <li><a href="/catalog/beds/beds.html">Beds</a></li>
                    <li><a href="/catalog/chairs/chairs.html">Chairs</a></li>
                    <li><a href="/catalog/desks/desks.html">Desks</a></li>
                    <li><a href="/catalog/dressers/dressers.html">Dressers</a></li>
                    <li><a href="/catalog/tables/tables.html">Tables</a></li>
                    <li><a href="/catalog/cabinets/cabinets.html">Cabinets</a></li>
                    <li><a href="/catalog/kitchens/kitchens.html">Kitchens</a></li>
                    <li><a href="#">Kids furniture</a></li>
                </ul>
            </div>

            <div className="catalog_default">
            <div className="catalog">
                <a href="./categories/beds/beds.html"><div className="catalog_img"><img src="/imgs/bed_cat.png" alt="service" width="300" height="250"/></div>
                <div className="catalog_name">Beds</div></a>
            </div>

            <div className="catalog">
                <a href="./categories/chairs/chairs.html"><div className="catalog_img"><img src="/imgs/chair2.png" alt="catalog" width="300" height="250"/></div>
                <div className="catalog_name">Chairs</div></a>
            </div>

            <div className="catalog">
                <a href="./categories/desks/desks.html">
                <div className="catalog_img"><img src="/imgs/desk2.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Desks</div></a>
            </div>

            <div className="catalog">
                <div className="catalog_img"><img src="/imgs/dresser-cat.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Dressers</div>
            </div>

            <div className="catalog">
                <div className="catalog_img"><img src="/imgs/table_cat.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Tables</div>
            </div>

            <div className="catalog">
                <div className="catalog_img"><img src="/imgs/cabinet_cat.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Cabinets</div>
            </div>
            
            <div className="catalog">
                <div className="catalog_img"><img src="/imgs/kitchen_cat.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Kitchens</div>
            </div>
            
            <div className="catalog">
                
                <div className="catalog_img"><img src="/imgs/kid_cat.png" alt="catalog" width="300" height="230"/></div>
                <div className="catalog_name">Kids Furniture</div>
            </div>
                </div>
            
        </div>
    );
}

export default Catalog;