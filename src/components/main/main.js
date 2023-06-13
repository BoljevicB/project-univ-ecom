import './main.css';
import {Link} from "react-router-dom";


function Main() {
  return (
    <main>
        <div className="top_container">
            <div className="landing_img"><img src="/imgs/landing1.jpg" alt="Landing"/></div>
            <div className="landing_text">
                <div className="text_right">
                    <h2>Stylish furniture</h2>
                    <h3>in unique style</h3>
                    <h5>We help you make modern interior</h5>
                    <button id="btn_main">Go to our Catalog</button>
                </div>
            </div>
        </div>

        <div className="middle_container">
            <div className="service_h">OUR SERVICES</div>
            <div className="service_container">
            <div className="service">
                <div className="service_name">Custom Made Furniture</div>
                <div className="service_img"><img src="/imgs/custom-made.jpg" alt="service" width="300" height="250"/></div>
                <div className="service_descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, modi.</div>
                <div className="read_more"><button id="read_more">Read More</button></div>
            </div>

            <div className="service">
                <div className="service_name">We Deliver Worldwide</div>
                <div className="service_img"><img src="/imgs/shipp.jpg" alt="service" width="300" height="250"/></div>
                <div className="service_descr">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ea?</div>
                <div className="read_more"><button id="read_more">Read More</button></div>
            </div>

            <div className="service">
                <div className="service_name">Consulting</div>
                <div className="service_img"><img src="/imgs/consulting.jpg" alt="service" width="300" height="250"/></div>
                <div className="service_descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, neque!</div>
                <div className="read_more"><button id="read_more">Read More</button></div>
            </div>
        </div>
    </div>

    <div className="bottom_container">
        <div className="categories_h">CATEGORIES</div>
            <div className="categories_container">
            <div className="category">
                <Link to="/beds"><div className="category_img"><img src="/imgs/bed_cat.png" alt="service" width="300" height="250"/></div>
                <div className="category_name">Beds</div></Link>
            </div>

            <div className="category">
                <Link to="/chairs"><div className="category_img"><img src="/imgs/chair2.png" alt="category" width="300" height="250"/></div>
                <div className="category_name">Chairs</div></Link>
            </div>

            <div className="category">
                <Link to="/desks"><div className="category_img"><img src="/imgs/desk2.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Desks</div></Link>
            </div>

            <div className="category">
            <Link to="/couches"> <div className="category_img"><img src="/imgs/couch_cat.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Couches</div></Link>
            </div>
            

            <div className="category">
            <Link to="/tables"><div className="category_img"><img src="/imgs/table_cat.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Tables</div></Link>
            </div>

            <div className="category">
            <Link to="/lamps"><div className="category_img"><img src="/imgs/lamp_cat.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Lamps</div></Link>
            </div>
            
            <div className="category">
            <Link to="/kitchens"><div className="category_img"><img src="/imgs/kitchen_cat.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Kitchens</div></Link>
            </div>
            
            <div className="category">
            <Link to="/kidsfurniture"><div className="category_img"><img src="/imgs/kid_cat.png" alt="category" width="300" height="230"/></div>
                <div className="category_name">Kids Furniture</div></Link>
            </div>
        </div>
    </div>

    <div className="about_container">
    
        <div className="about_left">
            <div className="about_h">
                ABOUT US
            </div>
            <div className="about_text"><span>Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Nostrum facere dolorum aspernatur, enim aut voluptatibus, ipsam eum consequatur fugit voluptate asperiores rerum alias tempore laborum modi corporis provident assumenda repudiandae nulla temporibus! Repellendus minima repudiandae magni ex velit unde veniam voluptas corporis, laborum iure delectus perferendis maxime ipsum? In mollitia excepturi beatae modi minus, laborum aliquam rerum cum quas ducimus nostrum laudantium quo quidem? Provident, tempore quos enim qui nisi ut vel repellat consequatur quasi excepturi fuga est alias dolore! <br/><Link to="/about"><button id="btn_about">Read More...</button></Link></div>
        </div>

        <div className="about_img"><img src="/imgs/about.jpg" alt="about" height="600" width="auto"/></div>

    </div>

    </main>

    
  );
}

export default Main;