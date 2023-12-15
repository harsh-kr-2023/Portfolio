import React, { useState } from 'react';
import './intro.css';
// import btnImg from '../../assets/hireme.png';

const Intro = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleButtonClick = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Harsh</span> <br />Full Stack Web Developer</span>
                <p className='subTitle'>Creating Seamless User Experiences, Front-to-Back</p>
                <p className="introPara">"Hello, lovely humans! 👋 I'm Harsh, the pixel sorcerer and chai enthusiast. By day, I'm taming code dragons; by night, I'm on a quest for the perfect brew. Join me on this tech journey, where bugs fear to tread, and laughter is the best debugging tool. Think of me as your code buddy – with a dash of spice and a sprinkle of bytes. Ready for the adventure? Let's roll!" </p>
                <button
                    className={`btn ${showContactInfo ? 'expanded' : ''}`}
                    onClick={handleButtonClick}
                >
                    {showContactInfo ? (
                        <div>
                            <p>
                                Email:{' '}
                                <a href="mailto:harshksingh42@gmail.com">
                                    harshksingh42@gmail.com
                                </a>
                            </p>
                            <p>
                                Phone:{' '}
                                <a href="tel:9334633819">9334633819</a>
                            </p>
                        </div>
                    ) : (
                        <div>
                            {/* <img src={btnImg} alt="Hire Me" className="btnImg" /> */}
                            Click Here Reach Out To Me
                        </div>
                    )}
                </button>
            </div>
        </section>
    )
}

export default Intro;