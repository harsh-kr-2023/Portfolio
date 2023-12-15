import React from 'react';
import './internship.css';

const Internship = () => {
    return (
        <section id="internships">
            <span className="Title">Internships</span>
            <div className="allInternships">
                <div className="internship">
                    <div className="internshipsText">
                        <h2>Jr. Software Engineer - Trainee</h2>
                        <p>iRely Soft Services Pvt Ltd</p>
                        <p>August 2023 - September 2023</p>
                        <ul>
                            <li>Developed a robust Movie Rental System with a modern MVVM architecture using Sencha ExtJS for the frontend and ASP.NET Core for the backend.</li>
                            <li>Established and maintained an efficient SQL Server database to ensure data integrity and optimize data retrieval processes.</li>
                            <li>Implemented secure user authentication and authorization using ASP.NET Core Identity, enhancing system security and user experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="allInternships">
                <div className="internship">
                    <div className="internshipsText">
                        <h2>Web Developer Intern</h2>
                        <p>Business Web Solutions</p>
                        <p>September 2022 - November 2022</p>
                        <ul>
                            <li>Led Front-End development, creating captivating and interactive User Interface (UI) for enhanced user experience.</li>
                            <li>Ensured seamless website responsiveness across various devices, improving user accessibility and satisfaction.</li>
                            <li>Drove Back-End initiatives, optimizing website performance for rapid and flawless loading of web pages.</li>
                            <li>Leveraged HTML, CSS, JavaScript, and jQuery to architect and optimize web pages, elevating overall user experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Internship;