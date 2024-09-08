import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import proyectSC from "../../assets/img/proyectSC.png"


const useStyles = makeStyles(() => ({
  containerProyects: {
    color: "rgb(255, 255, 255)",
    fontFamily: 'PT Serif',
    display: "flex",
    justifyContent: "center",
  },
  contentFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    [`@media (max-width:${800}px)`]: {
      display:"flex",
      flexDirection: "column",
    }
  },
  presentation: {
    fontWeight: 700,
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    marginBottom: 40,
  },
  number: {
    color: "#68ddbd",
    fontWeight: 400,
    marginRight: 4,
  },
  line: {
    width: 200,
    height: 1,
    backgroundColor: "#68ddbd",
    marginLeft: 20,
    opacity: 0.5
  },
  containerTitleImg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",

  },
  containerImg: {
    position: "relative",
    width: 500,
    height: 300,
  },
  img: {
    width: 500,
    height: 300,
    zIndex: 1,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#68ddbd",
    transition: "margin-top 0.3s, margin-left 0.3s",
    '&:hover': {
      marginTop: -5,
      marginLeft: -5,
    },
    [`@media (max-width:${800}px)`]: {
      '&:hover': {
        marginTop: 0,
      marginLeft: 0,
      },
    }
  },

  colorImg: {
    width: 500,
    height: 300,
    zIndex: 2,
    borderRadius: 10,
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    backgroundColor: "#68ddbd",
    opacity: 0.3,
  },

  proyect: {
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 350,
    [`@media (max-width:${800}px)`]: {
      position: "absolute"
    }
  },
  descriptionProyect: {
    color: "rgb(255, 255, 255, 0.7)",
    backgroundColor: "#0C2E58",
    width: 400,
    padding: 20,
    borderRadius: 2,
    textAlign: "center",
    marginLeft: "-200px",
    zIndex: 4,
    marginBottom: 15
  },
  featureProyect: {
    color: "#68ddbd",
    fontWeight: 400,
  },
  titleProyect: {
    fontWeight: 700,
    fontSize: 25,
    color: "white"
  },
  text: {
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.5,
    marginRight: 8
  },
}))

const Proyect1 = () => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(true);



  return (
    <>
      {
        <div className={classes.containerProyects} id="proyects">
          <div className={classes.contentFlex} >
            <div className={classes.containerTitleImg}>
              <div className={classes.presentation}><span className={classes.number}>0.2</span> Proyects <div className={classes.line}></div></div>
              <div className={classes.containerImg}
                onMouseEnter={() => setHovered(false)}
                onMouseLeave={() => setHovered(true)}
              >
                <div>
                  <img src={proyectSC} alt="img" className={classes.img}></img>
                  {hovered && <div className={classes.colorImg}></div>}
                </div>
              </div>
            </div>
            <div className={classes.proyect}>
              <span className={classes.featureProyect}>Featured Proyect</span>
              <p className={classes.titleProyect}>web e commers</p>
              <div className={classes.descriptionProyect}>
                work project in which we had to develop a website with a shopping cart, login and payment gateway.
              </div>
              <div className={classes.competenciesProyect}>
                <span className={classes.text}>React</span>
                <span className={classes.text}>Java Script</span>
                <span className={classes.text}>HTML</span>
                <span className={classes.text}>CSS</span>
                <span className={classes.text}>Node</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Proyect1; 