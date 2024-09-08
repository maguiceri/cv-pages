import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import profile from "../../assets/img/profile.png"


const useStyles = makeStyles(() => ({

    containerAccordion: {
        color: "rgb(255, 255, 255, 0.5)",
        fontFamily: 'PT Serif',
        height: "100vh",
        display: "flex",
        justifyContent: "center"
    },
    contentContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        [`@media (max-width:${800}px)`]: {
            display:"flex",
            flexDirection: "column",
          }
    },
    descriptionProfile: {
        fontFamily: 'PT Serif',
        fontSize: 18,
        color: "rgb(255, 255, 255, 0.5)",
        width: 550,
        marginRight: 15,
    },
    presentation: {
        fontWeight: 700,
        fontSize: 25,
        display: "flex",
        alignItems: "center",
        marginBottom: 40,
        color: "white"
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
    containerProfile: {
        position: "relative",
        width: 300,
        height: 300,
        [`@media (max-width:${800}px)`]: {
            marginTop: 20
          }
    },
    img: {
        right: "2%",
        top: "-1%",
        width: 250,
        height: 300,
        zIndex: 1,
        borderRadius: 10,
        position: "absolute",
        transition: "top 0.3s, right 0.3s",
        '&:hover': {
            right: "3%",
            top: "-2%",
        },
    },
    borderProfile: {
        right: "0%",
        position: "absolute",
        border: "3px solid #68ddbd",
        borderRadius: 10,
        width: 250,
        height: 300,
        transition: "width 0.3s, height 0.3s",
    },
    colorImg: {
        right: "2%",
        top: "-1%",
        width: 250,
        height: 300,
        zIndex: 2,
        borderRadius: 10,
        position: "absolute",
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: "#68ddbd",
        opacity: 0.3,
    },
}))

const About = () => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(true);
    return (
        <>
            <div className={classes.containerAccordion} id="about">
                <div className={classes.contentContainer}>
                    <div className={classes.descriptionProfile} >
                        <div className={classes.presentation}><span className={classes.number}>0.1</span> About Me <div className={classes.line}></div></div>
                        Frontend Developer with enthusiasm for professional development. I am passionate about programming, which makes my learning and adaptation abilities very quick.
                        <br></br>
                        <br></br>
                        I enjoy staying constantly informed about the technologies used today.
                        <br></br>
                        <br></br>
                        I have completed many projects that you can find at:
                        <a href="https://github.com/maguiceri?tab=repositories" style={{ color: "#68ddbd", textDecoration: "none", fontWeight: "bold" }}> gitHub.</a>
                    </div>

                    <div className={classes.containerProfile}
                        onMouseEnter={() => setHovered(false)}
                        onMouseLeave={() => setHovered(true)}

                    >
                        <img 

                            src={profile} alt="img" className={classes.img}></img>
                        <div className={classes.borderProfile}></div>
                        {<div className={classes.colorImg} style={{ visibility: hovered ? "visible" : "hidden" }} ></div>}

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;