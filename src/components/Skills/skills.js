import React from 'react';
import './skills.css';
import CPP from "../../assets/Cpp_logo.png";
import Java from "../../assets/java_logo.png";
import CSH from "../../assets/Csh_logo.png";
import MYSQL from '../../assets/mysql-logo.png';
import MongoDB from '../../assets/mongodb_logo.png';
import HTML from '../../assets//html_logo.png';
import CSS from '../../assets/css_logo.png';
import Bootstrap from '../../assets/bootstrap_logo.png';
import JS from '../../assets/javascript_logo.png';
import react from '../../assets/react_logo.png';
import asp from '../../assets/dotnet_logo.png';
import GCP from '../../assets/gcp_logo.png';
import Git from '../../assets/github-logo.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="Title">Technical Skills</span>
            <div className="allSkills">
                <div className="skill">
                    <div className="skillText">
                        <h2>Programming Languages</h2>
                        <div className="logoContainer">
                            <figure>
                                <img src={CPP} alt="C++" className="cpp" />
                                <figcaption>C++</figcaption>
                            </figure>
                            <figure>
                                <img src={Java} alt="Java" className="java" />
                                <figcaption>Java</figcaption>
                            </figure>
                            <figure>
                                <img src={CSH} alt="C#" className="csh" />
                                <figcaption>C#</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skillText">
                        <h2>Database Management System</h2>
                        <div className="logoContainer">
                            <figure>
                                <img src={MYSQL} alt="MySQL" className="cpp" />
                                <figcaption>MySQL</figcaption>
                            </figure>
                            <figure>
                                <img src={MongoDB} alt="MongoDB" className="java" />
                                <figcaption>MongoDB</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skillText">
                        <h2>Web Development</h2>
                        <div className="logoContainer">
                            <figure>
                                <img src={HTML} alt="HTML" className="cpp" />
                                <figcaption>HTML</figcaption>
                            </figure>
                            <figure>
                                <img src={CSS} alt="CSS" className="java" />
                                <figcaption>CSS</figcaption>
                            </figure>
                            <figure>
                                <img src={Bootstrap} alt="Bootstrap" className="java" />
                                <figcaption>Bootstrap</figcaption>
                            </figure>
                            <figure>
                                <img src={JS} alt="JavaScript" className="csh" />
                                <figcaption>JavaScript</figcaption>
                            </figure>
                            <figure>
                                <img src={react} alt="React Js" className="csh" />
                                <figcaption>React Js</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skillText">
                        <h2>Web Frameworks/Technologies</h2>
                        <div className="logoContainer">
                            <figure>
                                <img src={asp} alt="ASP .NET Core" className="cpp" />
                                <figcaption>ASP .NET Core</figcaption>
                            </figure>
                            <figure>
                                <img src={GCP} alt="Google Cloud Platform" className="java" />
                                <figcaption>Google Cloud Platform</figcaption>
                            </figure>
                            <figure>
                                <img src={Git} alt="Github" className="java" />
                                <figcaption>Github</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-section">
                <h2>Download My Resume</h2>
                <a href="../../assets/Harsh-Resume-7-12.pdf" target="_blank" rel="noopener noreferrer" download>
                    <button className="download-button">Download PDF</button>
                </a>
            </div>
        </section>
    );
}

export default Skills;
