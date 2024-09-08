import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    containerAccordion: {
        display: "flex",
        justifyContent: "center",
        color: "rgb(255, 255, 255)",
        fontFamily: 'PT Serif',
        height: "100vh",
        flexDirection: "column",
        alignItems:"center",
        width:"90%"
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
        opacity: 0.5,
    },
    containerPresentation: {
        display: "flex",
        justifyContent: "center",
    },
    contentContainerNav: {
        display: "flex",
        flexDirection: "column",
    },
    containerNav: {
        fontFamily: 'PT Serif',
        width: 200,
    },
    listNav: {
        listStyleType: "none",
        borderLeft: "3px solid #0A173C",
        textAlign: "center",
        padding: "10px 5px",
        '&:hover': {
            backgroundColor: "#0A173C",
        },
    },
    containerExperience: {
        position: "relative",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      
        height: 300, 
    },
    cardExperience: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 300,
        height: 300,
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
    },
    visible: {
        opacity: 1,
    },
    titleExperience: {
        fontSize: 20,
    },
    timeExperience: {
        opacity: 0.5,
    },
    descriptionExperience: {
        opacity: 0.5,
    },
}));

const Experience = () => {
    const classes = useStyles();
    const [selectedSection, setSelectedSection] = useState('santander');

    const handleNavClick = (section) => {
        setSelectedSection(section);
    };

    return (
        <>
            <div className={classes.containerAccordion} id="experience">
                <div className={classes.presentation}>
                    <span className={classes.number}>0.3</span> Experience
                    <div className={classes.line}></div>
                </div>
                <div className={classes.containerPresentation}>
                    <div className={classes.contentContainerNav}>
                        <ul className={classes.containerNav}>
                            <li
                                style={{ borderLeft: selectedSection === "santander" && "3px solid #68ddbd" }}
                                className={classes.listNav}
                                onClick={() => handleNavClick('santander')}
                            >
                                <a
                                    style={{ color: selectedSection === "santander" && "#68ddbd" }}
                                    className={classes.linkNav}
                                >
                                    Santander Technology Argentina
                                </a>
                            </li>
                            <li
                                style={{ borderLeft: selectedSection === "latventure" && "3px solid #68ddbd" }}
                                className={classes.listNav}
                                onClick={() => handleNavClick('latventure')}
                            >
                                <a
                                    style={{ color: selectedSection === "latventure" && "#68ddbd" }}
                                    className={classes.linkNav}
                                >
                                    Latventure
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.containerExperience}>
                        <div
                            className={`${classes.cardExperience} ${selectedSection === "santander" ? classes.visible : ''}`}
                        >
                            <h3 className={classes.titleExperience}>Front End Developer</h3>
                            <p className={classes.timeExperience}>Currently working.</p>
                            <p className={classes.descriptionExperience}>
                                I am in the front-end area, focusing on everything related to the benefits provided by the bank. I have worked on both projects from scratch and refactoring projects.
                            </p>
                        </div>
                        <div
                            className={`${classes.cardExperience} ${selectedSection === "latventure" ? classes.visible : ''}`}
                        >
                            <h3 className={classes.titleExperience}>Latventure</h3>
                            <p className={classes.timeExperience}>2019-2020</p>
                            <p className={classes.descriptionExperience}>
                                Secretary, I perform organizational tasks, handle banking matters, invoices, Excel, and Outlook.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
