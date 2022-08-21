import { logo, header, frame1, frame2 } from "./images";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const nav = useRef();

  // console.log(nav.current.classList[0]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 0)
      nav.current.classList.toggle("window_scrolled", window.scrollY > 0);
      // if (window.scrollY === 0) nav.current.classList.remove("window_scrolled");
    });
  }, [window.scrollY]);
  return (
    <div className="portfolio_container">
      <nav ref={nav}>
        <div className="nav_container">
          <img src={logo} alt="" className="logo" />
          <ul className="nav_links">
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#gallery"> Gallery</a>
            </li>
            <li>
              <a href="#exhibitions"> Exhibitions</a>
            </li>
            <li>
              <a href="#contact"> Contact</a>
            </li>
          </ul>
          <ul className="nav_socials">
            <li>
              <i className="uil uil-instagram"></i>
            </li>
            <li>
              <i className="uil uil-twitter"></i>
            </li>
            <li>
              <i className="uil uil-youtube"></i>
            </li>
          </ul>
          {isMobile && isMenuOpen && (
            <button>
              <i className="uil uil-bars"></i>
            </button>
          )}
          {isMobile && !isMenuOpen && (
            <button>
              <i className="uil uil-bars"></i>
            </button>
          )}
        </div>
      </nav>
      <header>
        <div className="header-container">
          <div className="left">
            <div className="header-image-bg"></div>
            <div className="header-image-lg">
              <img src={header} alt="" />
            </div>
            <div className="header-image-sm">
              <img src={header} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="header-head">
              <div className="empty header-empty"></div>
              <a href="" className="header-tag">
                #Best travel photographer 2022
              </a>
            </div>
            <h1>See the beauty of world through my lenses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              corrupti pariatur et voluptatum error soluta id rem fuga minima?
              Magnam iusto
            </p>
            {isMobile && (
              <a
                href="mailto:tarunrathore178@gmail.com"
                className="header-btn-md"
              >
                {" "}
                Lets talk
              </a>
            )}
          </div>
        </div>
      </header>
      <div className="header-frames">
        <div className="header-frame">
          <img src={frame1} alt="" />
        </div>
        <div className="header-frame">
          <img src={frame2} alt="" />
        </div>
      </div>
      <div className="contact-btn header-btn">
        <i class="uil uil-arrow-up-right"></i>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque rerum
      ducimus saepe corporis aliquid dignissimos at ad culpa minus placeat
      adipisci architecto provident itaque laudantium dicta consectetur
      accusamus iure id, omnis ipsa eveniet soluta perspiciatis. Iure inventore
      nisi, ex aliquam a vero adipisci consequuntur repudiandae sequi velit
      quae? Sequi commodi exercitationem nesciunt omnis tempore aliquam sint,
      atque, modi accusamus iure culpa, fugit placeat rem ipsa illo corporis.
      Nihil commodi est accusantium nisi consectetur vitae! Beatae recusandae,
      est et enim temporibus suscipit similique molestiae sit illum voluptatum.
      Ullam nostrum, quibusdam sed porro saepe repellendus dignissimos pariatur
      quas doloribus quaerat..
    </div>
  );
}
