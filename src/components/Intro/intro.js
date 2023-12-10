import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Harsh</span> <br /> Website Designer</span>
                <p className="introPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Minima corporis amet tempore ea hic ullam consequuntur <br />veniam, quidem sit praesentium? Optio, ea quasi? Neque <br />quibusdam veniam omnis, repellat non ad.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
            </div>
            {/* <img src={bg} alt="" className="bg" /> */}
        </section>
    )
}

export default Intro;