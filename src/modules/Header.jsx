import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(() => ({
  head: {
    fontFamily: 'PT Serif',
    color: "white",
    backgroundColor: "#081130",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [`@media (max-width:${600}px)`]: {
      display: "flex",
      flexDirection: "column"
    }
  },
  information: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15%",
    marginTop: "10%",
    fontSize: 20,
    [`@media (max-width:${600}px)`]: {
      fontSize: 15,
      marginTop: "20%"
    }
  },
  hello: {
    fontFamily: 'PT Serif',
    color: "#68ddbd"
  },
  name: {
    fontFamily: 'PT Serif',
    fontSize: 60,
    fontWeight: 700,
    marginTop: 50,
  },
  aboutme: {
    fontSize: 40,
    opacity: 0.6
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "0%",
    left: "5%",
    position: "fixed",
    zIndex: 9,
    [`@media (max-width:${1020}px)`]: {
      display:"none",
    }
  },
  iconsEmail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "0%",
    right: "5%",
    position: "fixed",
    zIndex: 9,
    '&:hover': {
      color: "#68ddbd",
    },
    [`@media (max-width:${1020}px)`]: {
      display:"none",
    }
  },
  nav: {
    fontSize: 14,
    position: "fixed",
    justifyContent: "end",
    zIndex: 99999999,
    display: "flex",
    backdropFilter: "blur(10px)",
    width: "100%",
    height: "60px", 
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    backgroundColor: "rgba(10, 25, 47, 0.85)",
    boxShadow: "0 10px 30px -10px var(--navy-shadow)",
    [`@media (max-width:${800}px)`]: {
      display: "none"
    }
  },
  navHidden: {
    transform: "translateY(-100%)", 
    boxShadow: "none",
  },
  navVisible: {
    transform: "translateY(0)",
  },

  line: {
    width: 1,
    height: 200,
    backgroundColor: "white",
    opacity: 0.5
  },
  icon: {
    fontSize: 300
  },
  iconMenu: {
    fontSize:40, 
    color: "#68ddbd", 
    paddingTop: 20, 
    display:"none", 
    justifyContent:"flex-end",
    position: "fixed",
    zIndex: 99999999,
    width: "100%",
    backdropFilter: "blur(10px)",
    [`@media (max-width:${800}px)`]: {
      display:"flex"
    }
  },
  containerBarMenu: {
    postion:"fixed", 
    zIndex:"99", 
    backgroundColor: "#0C2E58", 
    width: 400, 
    height: "100vh", 
    position:"fixed", 
    right: 0, 
    display: "flex", 
    justifyContent:"center", 
    flexDirection:"column",
  },
  barMenu: {
    display: "flex", 
    flexDirection:"column", 
    textAlign:"center",
    justifyContent:"center",
  },
  phill: {
    paddingRight: 20,
    textDecoration: "none",
    color: "white",
    flexDirection:"column", 
    padding:"20px 0px",
    '&:hover': {
      color: "#68ddbd",
    },

  },
  number: {
    color: "#68ddbd",
    marginRight: 4,
  },
  
  hidden: {
    display:"none",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 20,
    cursor: "pointer",
    "&:hover": {
      "& $line": {
        width: 50,
      },
    },

  },

}))


const Header = ({setSelectedNav,selectedNav}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCrossRotated, setIsCrossRotated] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true); 
  const [lastScrollTop, setLastScrollTop] = useState(0); 
  const classes = useStyles();



  const handleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedNav(!selectedNav);
    setIsCrossRotated(!isCrossRotated);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setIsNavVisible(false);
    } else if (scrollTop < lastScrollTop) {
      setIsNavVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.containerBarMenu') && !event.target.closest('.fa-bars')) {
        setIsMenuOpen(false);
        setSelectedNav(false);
        setIsCrossRotated(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, setSelectedNav]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={classes.head}>
      <div className={clsx(classes.nav, !isNavVisible && classes.navHidden, isNavVisible && classes.navVisible)}>
        <a href="#about" className={classes.phill}><span className={classes.number}>0.1</span>About</a>
        <a href="#proyects" className={classes.phill}><span className={classes.number}>0.2</span>Proyects</a>
        <a href="#experience" className={classes.phill}><span className={classes.number}>0.3</span>Experience Academic</a>
        <a href="#experience" className={classes.phill}><span className={classes.number}>0.4</span>Expetience</a>
      </div>
      <div className={classes.iconMenu} onClick={handleNavMenu}><i style={{paddingRight:10}} class="fa fa-bars" aria-hidden="true"></i></div>
      <div className={clsx(classes.containerBarMenu, !isMenuOpen && classes.hidden)}>
      <div onClick={handleNavMenu} style={{ color: "#68ddbd", position:"absolute", top: 20, right: 20 }}><i class="fa fa-times" style={{fontSize : 30 }} aria-hidden="true"></i></div>
        <div className={classes.barMenu}>
          <a href="#about" className={classes.phill} ><span className={classes.number} style={{marginBottom:"5px"}}>0.1</span>About</a>
          <a href="#proyects" className={classes.phill}><span className={classes.number} style={{marginBottom:"5px"}}>0.2</span>Proyects</a>
          <a href="#experience" className={classes.phill}><span className={classes.number} style={{marginBottom:"5px"}}>0.3</span>Experience Academic</a>
          <a href="#experience" className={classes.phill}><span className={classes.number} style={{marginBottom:"5px"}}>0.4</span>Expetience</a>
        </div>
      </div> 
      <div className={classes.icons}>
        <a href="https://github.com/maguiceri" class="icon">
          <i style={{ color: "white", fontSize: 25, paddingBottom: 10, opacity: 0.5 }} class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" class="icon">
          <i style={{ color: "white", fontSize: 25, paddingBottom: 10, opacity: 0.5 }} class="fa fa-linkedin " aria-hidden="true"></i>
        </a>
        <div className={classes.line} ></div>
      </div>
      <div className={classes.information}>
        <span className={classes.hello}>Hi, my name is</span>
        <span className={classes.name}>Magalí Aldana Cerisola</span>
        <p className={classes.aboutme}> Frontend Developer </p>
      </div>

      <div>
        <div className={classes.iconsEmail}>
          <div style={{ display: "flex", writingMode: "vertical-lr", transform: "rotate(360deg)", paddingBottom: 10, opacity: 0.5 }} >magui.cerisola@gmail.com</div>
          <div className={classes.line} ></div>
        </div>
      </div>
      {/*  <a href="https://www.linkedin.com/in/magali-cerisola-1a5111167" target="_blank">
                <img className={classes.imgQR} src={qr} alt="qr" />
            </a> */}
    </div>
  )
}

export default Header;