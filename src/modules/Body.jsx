import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Proyects from './Proyects/Proyects';
import Experience from './Experience/Experience';
import About from './About/About';

const useStyles = makeStyles(() => ({
  containerAccordion: {
    display: "flex",
    color: "white",
    fontFamily: 'PT Serif',
    margin: "0 auto",
    width: "70%",
    height: "100vh"
  },
  containerComp: {
    display: "flex",
    color: "white",
    fontFamily: 'PT Serif',
    margin: "0 auto",
    width: "70%",
    height: "100vh"
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
  colorImg: {
    width: 300,
    height: 300,
    zIndex: 22,
    borderRadius: 10,
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    left: "0%",
    backgroundColor: "#68ddbd",
    opacity: 0.3
  },
  containerProfile: {
    position: "relative",
    width: "60%"

  },
  borderProfile: {
    position: "absolute",
    border: "3px solid #68ddbd",
    borderRadius: 10,
    width: 300,
    height: 300,
    top: "2%",
    left: "3%",
    transition: "width 0.3s, height 0.3s",
    '&:hover': {

    },
  },
  img: {
    width: 300,
    height: 300,
    zIndex: 1,
    borderRadius: 10,
    position: "absolute",
    marginTop: 0,
    marginLeft: 0,
    left: "0%",
    backgroundColor: "#68ddbd",
    transition: "margin-top 0.3s, margin-left 0.3s",
    '&:hover': {
      marginTop: -5,
      marginLeft: -5,
    },
    [`@media (max-width:${600}px)`]: {
      display: "none"
    }
  },

  phill: {
    backgroundColor: "rgba(104, 221, 189, 0.3)",
    color: "#68ddbd",
    borderRadius: 20,
    textAlign: "center",
    marginBottom: 20,
    padding: 10

  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontFamily: 'PT Serif',
 

  },

  competencies: {
    display: "flex",
    justifyContent: "center",
    padding: 40,
    borderRadius: 20,
    '&:hover': {
      backgroundColor: "#14213d"
    },
  },
}))

const Body = () => {

  return (
    <div>
      <About />
      <Proyects/>
      <Experience/>
    </div>
  );
};

export default Body;