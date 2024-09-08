import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import netflix from "../../assets/img/netflix.png"


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
    alignItems:"center",
    justifyContent: "center",
    width: "90%"
  },
  presentation: {
    fontWeight: 700,
    fontSize: 25,
    display: "flex",
    alignItems: "center",
    marginBottom: 40,
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
    opacity: 0.3
  },

  proyect: {
    fontFamily: 'PT Serif',
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    width: 350,
    [`@media (max-width:${800}px)`]: {
      position: "absolute"
    }
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
  descriptionProyect: {
    color: "rgb(255, 255, 255, 0.7)",
    backgroundColor: "#0C2E58",
    width: 400,
    padding: 20,
    borderRadius: 2,
    textAlign: "center",
    marginRight: "-200px",
    zIndex: 4,
    marginBottom: 15
  },
  text: {
    fontSize: 13,
    fontWeight: 400,
    opacity: 0.5,
    marginRight: 8
  },
}))

const Proyect2 = () => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(true);



  return (
    <>
      {
        <div className={classes.containerProyects}>
          <div className={classes.contentFlex}>
            <div className={classes.proyect} >
              <span className={classes.featureProyect}>Featured Proyect</span>
              <p className={classes.titleProyect}>Netflix replica</p>
              <div className={classes.descriptionProyect}>
                Student project in which I had to replicate Netflix with all its interactions, using React.
              </div>
              <div className={classes.competenciesProyect}>
                <span className={classes.text}>React</span>
                <span className={classes.text}>Java Script</span>
                <span className={classes.text}>HTML</span>
                <span className={classes.text}>CSS</span>
                <span className={classes.text}>Node</span>
              </div>
            </div>


           
            <div className={classes.containerImg}
              onMouseEnter={() => setHovered(false)}
              onMouseLeave={() => setHovered(true)}
            >
              <div>
                <img src={netflix} alt="img" className={classes.img}></img>
                {hovered && <div className={classes.colorImg}></div>}
              </div>
            </div>

          </div>
        </div>
      }
    </>
  );
};

export default Proyect2; 