import React from 'react';
import "../intro/intro.css"
import imgIntro from '../../img/intro_2.jpg'
import CV from '../../documents/CV1.pdf'
const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='intro-left'>
                <div className='intro-left-wrapper'>
                    <h2 className='intro-hello'>Hello,my name is</h2>
                    <h1 className='intro-name'>Bach Phung</h1>
                    <div className='intro-tittle'>
                        <div className='intro-tittle-wrapper'>
                            <div className='intro-tittle-item'>Web Developer</div>
                            <div className='intro-tittle-item'>Second-year Student</div>
                        </div>
                    </div>
                    <div className='intro-desc'>
                        As a enthusiastic young programmer who is passionate about creating web applications,
                        I always force myself on achieving new knowledge every day. Currently, I have the basic
                        knowledge in ReactJS, MongoDB, Cascading Style Sheets and NodeJS.
                    </div>
                    <div className='div-intro-btn'>
                        <a href={CV} download='Bach_Phung_CV' className='intro-btn'>Resume</a>
                    </div>
                </div>
            </div>
            <div className='intro-right'>
                <div className='intro-bg'></div>              
                <img src={imgIntro} alt='My outlook' className='intro-image'></img>
            </div>
        </div>
    )
}

export default Intro