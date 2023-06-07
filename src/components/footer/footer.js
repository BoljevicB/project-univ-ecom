import './footer.css';


function Footer() {
  return (
    <footer>
        <div className="logosm">
            <div className="logo_telegr"><img src="/imgs/logotg.png" alt="tg" width="20" height="auto"/></div>
        <div className="logo_vk"><img src="/imgs/logovk.png" alt="vk" width="30" height="auto"/></div>
        <div className="logo_gm"><img src="imgs/logomail.png" alt="gm" width="20" height="auto"/></div>
    </div>
    <div>MY BREND</div>
        <p>© 2023 BINS</p>
    </footer>
  );
}

export default Footer;