import React from "react";

function Info(){
    return(
        <div className="info">
            <img className="info--img" src="../images/yaqdhan.png" />
            <h1 className="info--name">AlYaqdhan Al Maawali</h1>
            <h2 className="info--title">Aspiring Frontend developer</h2>
            <div className="info--buttons">
                <a href="mailto:xmawali@gmail.com">
                    <button type="button" className="info--buttons--email">
                        <img src="../images/mail.png" />
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/alyaqdhan-al-maawali/">
                    <button type="button" className="info--buttons--linkedin">
                        <img src="../images/linkedin.png" />
                        Linkedin
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Info;