import './about.css';


function About() {
  return (
    <div className="about">
        <div className="top_container">
            
            <div className="landing_text">
                <div className="text_right">
                    <h2>Our company</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sequi harum facilis labore voluptatum aspernatur mollitia accusantium reprehenderit, quos quaerat ipsa, veritatis suscipit! Nihil eveniet ab officia eos earum pariatur nisi sit enim eaque excepturi ipsum cupiditate iste et fugit, suscipit totam voluptatum. Rem, similique. Earum amet similique dolores quis.</p>
                </div>
            </div>
            <div className="landing_img"><img src="/content/imgs/about2.jpg" alt="About"/></div>
        </div>

        <div className="bot_container">
            <div className="landing_img"><img src="/content/imgs/about1.jpg" alt="About"/></div>
            <div className="landing_text">
                <div className="text_right">
                    <h2>Our Mission</h2>
                    <p>Provident quis molestias laborum aut pariatur sed, temporibus ipsa! Labore at, molestias doloremque incidunt facilis obcaecati quibusdam numquam sed nesciunt! Repellat laboriosam dicta accusamus, voluptates labore quam, quisquam debitis possimus, impedit quidem aliquid ipsam quibusdam</p>
                </div>
            </div>
        </div>

        <div className="team_container">
            <div className="team_text">Our Team</div>
            <div className="team_img">
                <div className="worker">
                    <img src="/content/imgs/ceo.jpg" alt="ceo"/>
                    <h4>Peter Peter - CEO</h4>
                </div>
                <div className="worker"><img src="/content/imgs/designer.jpg" alt="designer"/>
                    <h4>Christian Andersen - Designer</h4>
                </div>
                <div className="worker"><img src="/content/imgs/sales_manager.jpg" alt="manager"/>
                    <h4>Xji Han Sol - Sales Manager</h4>
                </div>
                <div className="worker"><img src="/content/imgs/deliv.jpg" alt="costumer service"/>
                    <h4>Ekaterina Velikaya - Costumer Service</h4>
                </div>
            </div>
        </div>
    </div>
      
  );
}

export default About;