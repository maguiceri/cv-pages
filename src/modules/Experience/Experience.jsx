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
        alignItems: "center",
    },
    presentation: {
        fontWeight: 700,
        fontSize: 25,
        display: "flex",
        alignItems: "center",
        marginBottom: 40,
        [`@media (max-width:800px)`]: {
            fontSize: 18,
        }
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
        [`@media (max-width:800px)`]: {
            width: 150
        }
    },
    containerPresentation: {
        display: "flex",
        justifyContent: "center",
        [`@media (max-width:800px)`]: {
            flexDirection: "column",
            textAlign:"center"
        },
    },
    contentContainerNav: {
        display: "flex",
        flexDirection: "column",
    },
    containerNav: {
        fontFamily: 'PT Serif',
        width: 200,
        [`@media (max-width:800px)`]: {
            display: "flex",
            width: "unset",
            padding: "0px 10px",
        }
    },
    listNav: {
        listStyleType: "none",
        textAlign: "center",
        padding: "10px 5px",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "#0A173C",
        },

        borderLeft: "3px solid transparent", 
        [`@media (max-width:800px)`]: {
            borderLeft: "none",
            borderTop: "3px solid grey",
        }
    },
    listNavActive: {
        borderLeft: "3px solid #68ddbd",
        [`@media (max-width:800px)`]: {
            borderLeft: "none",
            borderTop: "3px solid #68ddbd",
        },
        color: "#68ddbd",
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
        [`@media (max-width:800px)`]: {
            top: "unset",
        left: "unset",
        },
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
        <div className={classes.containerAccordion} id="experience">
            <div className={classes.presentation}>
                <span className={classes.number}>0.3</span> Experience
                <div className={classes.line}></div>
            </div>
            <div className={classes.containerPresentation}>
                <div className={classes.contentContainerNav}>
                    <ul className={classes.containerNav}>
                        <li
                            className={`${classes.listNav} ${selectedSection === 'santander' ? classes.listNavActive : ''}`}
                            onClick={() => handleNavClick('santander')}
                        >
                            <a>Santander Technology Argentina</a>
                        </li>
                        <li
                            className={`${classes.listNav} ${selectedSection === 'latventure' ? classes.listNavActive : ''}`}
                            onClick={() => handleNavClick('latventure')}
                        >
                            <a>Latventure</a>
                        </li>
                    </ul>
                </div>

                <div className={classes.containerExperience}>
                    <div className={`${classes.cardExperience} ${selectedSection === "santander" ? classes.visible : ''}`}>
                        <h3 className={classes.titleExperience}>Front End Developer</h3>
                        <p className={classes.timeExperience}>Currently working.</p>
                        <p className={classes.descriptionExperience}>
                            I am in the front-end area, focusing on everything related to the benefits provided by the bank. I have worked on both projects from scratch and refactoring projects.
                        </p>
                    </div>
                    <div className={`${classes.cardExperience} ${selectedSection === "latventure" ? classes.visible : ''}`}>
                        <h3 className={classes.titleExperience}>Latventure</h3>
                        <p className={classes.timeExperience}>2019-2020</p>
                        <p className={classes.descriptionExperience}>
                            Secretary, I perform organizational tasks, handle banking matters, invoices, Excel, and Outlook.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;