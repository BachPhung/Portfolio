import './contact.css'
import React,{useState} from 'react'
import {BsTelephone, BsFillSignpostFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import Feedback from '../feedback_form/feedback'
const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const submitForm = async()=>{
        setIsSubmitted(true);     
    }
    return (
        <div className='contact' id='contact'>
            <div className='contact-wrapper'>
                <div className='contact-left'>
                    <h1 className='contact-title'>CONTACT</h1>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <BsTelephone className='contact-icon'></BsTelephone>
                            <div className='contact-text'>0468489805</div>
                        </div>
                        <div className='contact-info-item'>
                            <AiOutlineMail className='contact-icon'></AiOutlineMail>
                            <div className='contact-text'>quangbach19112000@gmail.com</div>
                        </div>
                        <div className='contact-info-item'>
                            <BsFillSignpostFill className='contact-icon'></BsFillSignpostFill>
                            <div className='contact-text'>Orivedenkatu 8A 33720 Tampere</div>
                        </div>
                    </div>
                </div>
                <div className='contact-right'>
                    <h1 className='form-title'>Feedback</h1>
                    <div>
                        <Feedback submitForm={submitForm}></Feedback>
                        {/*isSummited -> render Modal*/}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
