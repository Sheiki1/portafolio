import React, { Fragment }  from "react"

const  Contact =() =>{

    return(
        <Fragment>
            <div className="contactSection" id="contact">
                <h2 className="aboutTitle" id="aboutTitle" style={{color:" #FFFFFF"}}>CONTACT</h2>
            </div>
                <div className="contact">
                <p>Contact me! so that together we can achieve incredible things</p>
                <br/>
                <div>
                    <a href="https://github.com/Sheiki1" style={{color:"#FF9900"}}><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/shei-miceli/"><i className="fab fa-linkedin" style={{color:"#5564A2"}}></i></a>
                    <a href="/file/CV_SheiM.pdf" download="chi.pdf"><i class="far fa-file-pdf" style={{color:"#E92B2B"}}></i></a>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact