import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const { clubObj, key, name } = useContext(PortfolioContext);
  const { brief_introduction, type } = clubObj;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container fluid>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            <span>{`${name}, `}</span>{" "}
            <span className={`text-color-main ${key}`}>{clubObj.name}</span>
            <br />
            {/* {brief_introduction} */}
            {/* <span className="brief">저는 열정있는 개발자입니다.</span> */}
            <span className="brief">{brief_introduction}</span>
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className={`cta-btn cta-btn--hero ${key}`}>
              <Link to="about" smooth duration={1000}>
                {"더 알아보기"}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
