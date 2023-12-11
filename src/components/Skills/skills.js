import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, tenetur. Optio perferendis numquam nisi debitis quibusdam. Ab id perferendis sint?</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UI Design" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quaerat.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Design" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, suscipit!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App Design" className='skillBarImg' />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, laudantium.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;