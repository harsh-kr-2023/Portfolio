import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import LinkedIn from '../../assets/linkedin_logo.png';
import Github from '../../assets/github-logo.png';
import GeeksforGeeks from '../../assets/gfg_logo.png';
import HackerRank from '../../assets/hackerrank_logo.png'
import Codechef from '../../assets/Codechef_logo.png';
import GCP from '../../assets/google-cloud-1.png';

const Contact = () => {
    const form = useRef();
    const [isFormValid, setIsFormValid] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        // Basic form validation
        const name = e.target.from_name.value.trim();
        const email = e.target.from_email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
            // Display error message or perform some action
            setIsFormValid(false);
            return;
        }

        // Reset form validity state
        setIsFormValid(true);

        emailjs.sendForm('service_dawf0yl', 'template_53f3p0x', form.current, 'laWWRASWdXEk-YmWt')
            .then((result) => {
                console.log(result.text);
                alert("Email Sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                {!isFormValid && <p style={{ color: 'red' }}>Please fill in all the details.</p>}
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input className='name' type="text" placeholder="Name" name='from_name' />
                    <input className='email' type="email" placeholder="Email" name='from_email' />
                    <textarea className='msg' name="message" rows="5" placeholder="Message"></textarea>
                    <button className='submitBtn' type="submit" value='Send'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/harsh-kumar2023/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/harsh-kr-2023" target="_blank" rel="noopener noreferrer">
                            <img src={Github} alt="Github" className="link" />
                        </a>
                        <a href="https://www.cloudskillsboost.google/public_profiles/ab6bf6e7-20ac-4671-bf81-7acf049f5f41" target="_blank" rel="noopener noreferrer">
                            <img src={GCP} alt="Google Cloud Platform" className="link" />
                        </a>
                        <a href="https://auth.geeksforgeeks.org/user/harsh_kr" target="_blank" rel="noopener noreferrer">
                            <img src={GeeksforGeeks} alt="GeeksforGeeks" className="link" />
                        </a>
                        <a href="https://www.hackerrank.com/profile/s1ngh_harsh" target="_blank" rel="noopener noreferrer">
                            <img src={HackerRank} alt="HackerRank" className="link" />
                        </a>
                        <a href="https://www.codechef.com/users/harsh_singh3" target="_blank" rel="noopener noreferrer">
                            <img src={Codechef} alt="CodeChef" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
