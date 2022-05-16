import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Contact.scss';
import '../../components/Form.scss';

const Contact = () => {

    useDocumentTitle('Contact', true);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const nameInput = useRef<HTMLInputElement>(null);
    const nameErrorMessage = useRef<HTMLSpanElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const emailErrorMessage = useRef<HTMLSpanElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);
    const messageErrorMessage = useRef<HTMLSpanElement>(null);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value);
    }

    const handleFormSubmit = (e: FormEvent): void => {
        if (nameErrorMessage.current && emailErrorMessage.current && messageErrorMessage.current) {
            if (nameInput.current?.value.trim() === '') {
                nameInput.current.classList.add('error-border');
                nameErrorMessage.current.innerText = 'Name cannot be empty';
            } else {
                nameInput.current?.classList.remove('error-border');
                nameErrorMessage.current.innerText = '';
            }

            if (emailInput.current?.value.trim() === '') {
                emailInput.current.classList.add('error-border');
                emailErrorMessage.current.innerText = 'Email cannot be empty';
            } else {
                emailInput.current?.classList.remove('error-border');
                emailErrorMessage.current.innerText = '';
            }

            if (messageInput.current?.value.trim() === '') {
                messageInput.current.classList.add('error-border');
                messageErrorMessage.current.innerText = 'Message cannot be empty';
            } else {
                messageInput.current?.classList.remove('error-border');
                messageErrorMessage.current.innerText = '';
            }
        }
        
        e.preventDefault();
    }

    return (
        <div className="contact">
            <Header currentPage='Contact' />
            <main>
                <div className="side-graphic"></div>
                <section className="contact-content flex-column">
                    <h1>Contact</h1>
                    <p className="form-info">
                        If you have any enquiries about the restaurant such as 
                        functions, catering, or anything else, fill in the fields 
                        and we will get back to you as quick as we can.
                    </p>
                    <form action="" className='contact-form flex-column' onSubmit={handleFormSubmit}>
                        <div className="form-input-container flex-column">
                            <input 
                                type="text" 
                                name='name'
                                ref={nameInput}
                                placeholder='Name' 
                                value={name}
                                onChange={handleNameChange}
                                required
                                className='form-input'
                            />
                            <span ref={nameErrorMessage} className="error-message"></span>
                        </div>
                        <div className="form-input-container flex-column">
                            <input 
                                type="email" 
                                name="email" 
                                ref={emailInput}
                                placeholder='Email'
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="form-input" 
                            />
                            <span ref={emailErrorMessage} className="error-message"></span>
                        </div>
                        <div className="form-input-container flex-column">
                            <textarea 
                                name="message" 
                                ref={messageInput}
                                rows={4}
                                placeholder="What's your enquiry..."
                                value={message}
                                onChange={handleMessageChange}
                                required
                                className="form-input" 
                            />
                            <span ref={messageErrorMessage} className="error-message"></span>
                        </div>
                        <input 
                            type="submit" 
                            value="SEND" 
                            required
                            className="cta" 
                        />
                    </form>
                    <p className="form-info">
                        Note: for reservations, please call us or use the&nbsp;
                        <Link to='/reservations' className='text-link'>
                            reservations
                        </Link>
                        &nbsp;form
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
