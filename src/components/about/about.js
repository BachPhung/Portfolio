import './about.css'
import imgAbout from '../../img/about.svg'
import imgCode from '../../img/code.svg'
import imgEdu from '../../img/edu.svg'
const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-wrapper'>
            <div className='about-heading'>
                <h1 className='about-heading'>About me</h1>
            </div>
            <div className='about-content'>
            <div className='about-left'>
                <div className='about-subheading'><h2>INTRODUCTION</h2></div>
                <div className='about-desc'>
                    As second year student at Tampere University of Applied Sciences,
                    majoring in Software Engineering, I like to take up challenges and
                    think to accept both success and failure in a balanced way to move.
                    <br></br><br></br>
                    At the moment, I am looking for an intership related to my degree 
                    (Software Engineering) to improve my skills as well as experience
                    real-world working environment. I guarantee that after the intership, 
                    I can stick with the company for a long time.
                    <br></br>
                    
                </div>
            </div>
            <div className='about-right'>
                <img src ={imgAbout} alt='this is about' className='about-img'></img>
            </div>
            </div>
            <div className='about-content img-start'>
            <div className='about-left'>
                <div className='about-subheading'><h2>EDUCATION</h2></div>
                <ul>
                    <li className='edu-item'>
                        <a href='https://www.tuni.fi/fi/tutustu-meihin/tamk' rel="noopener noreferrer" target='_blank' className='school'><h3 className='school-name' >Tampere University of Applied Sciences</h3></a>
                        <p className='degree'>Software Engineering</p>
                        <p className='study_duration'>2020 - Now</p>
                        <p className='gpa'>GPA: 4.88</p>
                    </li>
                    <li className='edu-item'>
                        <a href='https://portal.ptit.edu.vn/'rel="noopener noreferrer" target='_blank' className='school'><h3 className='school-name' >Posts and Telecommunications Institute of Technology</h3></a>
                        <p className='degree'>Information Technology</p>
                        <p className='study_duration'>2018 - 2019</p>
                    </li>
                    <li className='edu-item'>
                        <a href='https://thptquocoai.hanoi.edu.vn/homegd3'rel="noopener noreferrer" target='_blank' className='school'><h3 className='school-name' >Quoc Oai High School</h3></a>
                        <p className='degree'>Chemistry</p>
                        <p className='study_duration'>2015 - 2018</p>
                    </li>
                </ul>
            </div>
            <div className='about-right'>
                <img src={imgEdu} alt='education' className='about-img'></img>
            </div>
            </div>
            <div className='about-content'>
            <div className='about-left'> 
            <div className='about-subheading'><h2>SKILLS</h2></div>
            <ul>
                    <li className='edu-item'>
                        <div  className='school'><h3 className='school-name' >PROGRAMMING LANGUAGES & TOOLS</h3></div>
                        <p>C++</p>
                        <p>JavaScript</p>
                        <p>NodeJS</p>
                        
                    </li>
                    <li className='edu-item'>
                        <div  className='school'><h3 className='school-name' >FRONT-END DEVELOPMENT</h3></div>
                        <p>HTML</p>
                        <p>Cascading Style Sheets (CSS)</p>
                        <p>ReactJS</p>
                    </li>
                    <li className='edu-item'>
                        <div className='school'><h3 className='school-name' >WORK FLOW</h3></div>
                        <p>GitHub, GitLab for teamwork</p>    
                    </li>
                    <li className='edu-item'>
                        <div className='school'><h3 className='school-name' >DATABASE</h3></div>
                        <p>MongoDB</p>    
                    </li>
                </ul>
            </div>
            <div className='about-right'>
            <img src={imgCode} alt='education' className='about-img'></img>
            </div>
            </div>
            </div>
        </div>
    )
}

export default About