import './footer.css'
import {FaFacebookF, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import catGif from '../../img/cat.gif'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row logos'>
                <a href='https://www.facebook.com/pquang.bach' target='_blank' rel="noreferrer" className='icons'><FaFacebookF className='f-icons'/></a>
                <a href='https://www.instagram.com/pquangbach/' className='icons'target='_blank' rel="noreferrer"><FaInstagram className='f-icons'/></a>
                <a href='https://www.linkedin.com/in/bach-phung-874659206/' className='icons'target='_blank' rel="noreferrer"><FaLinkedin className='f-icons'/></a>
                <a href='https://github.com/BachPhung' className='icons'target='_blank' rel="noreferrer"><FaGithub className='f-icons'/></a>
            </div>
            <div className='row powered'>
                Powerd by BACH PHUNG
            </div>
            <div>
                <img src={catGif} alt='cat-gif' className='cat-img'></img>
            </div>
            
        </div>
    )
}

export default Footer
