import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import PageHeader from '../../page-header/PageHeader';
import { OutlineButton } from '../../button/Button';
import './contact.scss'


export default function Contact() {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_portfolio', form.current, 'WZypRJp0HIDf4Xq0_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>
            <PageHeader>
                Contact 
            </PageHeader>
            <div className='container' >
                <div className='section mb-3'>
                    <form className='form-container' ref={form} onSubmit={sendEmail}>
                        <input className='contact-input' id='subject' type='text' placeholder='Subject' name='subject' required></input>
                        <input className='contact-input' id='name' type='text' placeholder='Name' name='from_name' required></input>
                        <input className='contact-input' id='email' type='email' placeholder='Email' name='email' required></input>
                        <textarea className='contact-textArea' id='message' type='text' placeholder='Your message' name='message' required></textarea>
                        <OutlineButton className='small' type='submit'>Send email</OutlineButton>
                    </form>
                </div>
            </div>
        </>
    )
}