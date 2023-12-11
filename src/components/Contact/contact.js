import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

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
                <span className="contactDesc">Please fill out the form below to discuss any work oppurtinities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input className='name' type="text" placeholder="Name" name='from_name' />
                    <input className='email' type="email" placeholder="Email" name='from_email' />
                    <textarea className='msg' name="message" rows="5" placeholder="Message"></textarea>
                    <button className='submitBtn' type="submit" value='Send'>Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={YoutubeIcon} alt="Twitter" className="link" />
                        <img src={TwitterIcon} alt="Youtube" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;