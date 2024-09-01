// This is the footer that includes the social buttons
import twitterIcon from '../assets/twitter-icon.png';
import linkedinIcon from '../assets/linkedin-grey-icon.png';
import githubIcon from '../assets/github-icon.png';

function Footer(){
    return(
        <div className="footer">
            <a href="https://x.com/UMNews">
                <img src={twitterIcon} alt="Twitter" />
            </a> 
            <a href="https://www.linkedin.com/in/alyaqdhan-al-maawali/">
                <img src={linkedinIcon} alt="LinkedIn" />
            </a> 
            <a href="https://github.com/Yaqdhannn">
                <img src={githubIcon} alt="GitHub" />
            </a> 
        </div>
    )
}

export default Footer;