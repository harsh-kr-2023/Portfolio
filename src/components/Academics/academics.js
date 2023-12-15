import React from 'react';
import './academics.css';

const Academics = () => {
    return (
        <section id="academics">
            <span className="Title">Academics Section</span>
            <div className="allAcademics">
                <div className="academic">
                    <div className="academicText">
                        <h2>Bachelor Of Engineering</h2>
                        <p> Computer Science & Engineering</p>
                        <p>Visvesvaraya Technological University, Bangalore</p>
                        <p>2019-2023</p>
                        <p>CGPA: 7.83</p>
                    </div>
                </div>
                <div className="academic">
                    <div className="academicText">
                        <h2>Higher Secondary (12th Grade)</h2>
                        <p>MRJD Intermediate College, Begusarai</p>
                        <p>2016-2018</p>
                        <p>Percentage: 68%</p>
                    </div>
                </div>
                <div className="academic">
                    <div className="academicText">
                        <h2>Secondary (10th Grade)</h2>
                        <p>St. Paul Public School, Begusarai</p>
                        <p>Year of Completion: 2016</p>
                        <p>CGPA: 10</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Academics;