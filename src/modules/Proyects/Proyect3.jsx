import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import travel from "../../assets/img/travel.png"


const useStyles = makeStyles(() => ({
  containerProyects: {
    color: "rgb(255, 255, 255)",
    fontFamily: 'PT Serif',
    display: "flex",
    justifyContent: "center",
    marginTop: "10%"
  },
  contentFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%"
  },
  containerImg: {
    position: "relative",
    width: 500,
    height: 300,
    [`@media (max-width:${600}px)`]: {
      width: 300,
    }
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
    },
    [`@media (max-width:${600}px)`]: {
      width: 300,
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
    [`@media (max-width:${600}px)`]: {
      width: 300,
    }
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
  featureProyect: {
    color: "#68ddbd",
    fontWeight: 400,
    [`@media (max-width:${800}px)`]: {
      display:"none"
    }
  },

  titleProyect: {
    fontWeight: 700,
    fontSize: 25,
    opacity: 0.8,
    color: "white",
    [`@media (max-width:${800}px)`]: {
      display:"none"
    }
  },
  descriptionProyect: {
    backgroundColor: "#0C2E58",
    width: 400,
    padding: 20,
    borderRadius: 2,
    textAlign: "center",
    marginLeft: "-200px",
    zIndex: 4,
    marginBottom: 15,
    [`@media (max-width:${800}px)`]: {
      width: 250,
      marginTop: 200
    }
  },
  text: {
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.5,
    marginRight: 8,
    [`@media (max-width:${800}px)`]: {
      display:"none"
    }
  },
}))

const Proyect3 = () => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(true);

  return (
    <>
      {
        <div className={classes.containerProyects}>
          <div className={classes.contentFlex} >
            <div className={classes.containerImg}
              onMouseEnter={() => setHovered(false)}
              onMouseLeave={() => setHovered(true)}
            >
              <div>
                <img src={travel} alt="img" className={classes.img}></img>
                {hovered && <div className={classes.colorImg}></div>}
              </div>
            </div>
            <div className={classes.proyect} >
              <span className={classes.featureProyect}>Featured Proyect</span>
              <p className={classes.titleProyect}>Travel website</p>
              <div className={classes.descriptionProyect}>
                Travel website with interactive map, ticket booking, and login.
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

export default Proyect3; 