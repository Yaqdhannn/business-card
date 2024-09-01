import yaqdhanImage from "../assets/yaqdhan.png";
import emailIcon from "../assets/mail-icon.png";
import linkedinIcon from "../assets/linkedin-blue-icon.png"

// This is the top portion of the card that includes a picture, name, title, and social buttons
function Info(){
    return(
        <div className="info">
            <img className="info--img" src={yaqdhanImage} alt="Yaqdhan's image"/>
            <h1 className="info--name">AlYaqdhan Al Maawali</h1>
            <h2 className="info--title">Aspiring Frontend developer</h2>
            <div className="info--buttons">
                <a href="mailto:xmawali@gmail.com">
                    <button type="button" className="info--buttons--email">
                        <img src={emailIcon} alt="Email" />
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/alyaqdhan-al-maawali/">
                    <button type="button" className="info--buttons--linkedin">
                        <img src={linkedinIcon} alt="LinkedIn"/>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Info;