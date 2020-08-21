import React, { Fragment }  from "react"

const  About =() =>{
    const colorRed ={
        backgroundColor:"#E92B2B"
      };
    
      const colorGreen={
        backgroundColor:"#8DFF34"
      };
    
      const colorYellow ={
        backgroundColor:"#FF9900"
      };
    
      const colorBlue ={
        backgroundColor:"#5564A2" 
      };

      const styleText={
        color: "#FFFFFF" , fontStyle:"normal", fontWeight:"normal", fontSize:"22px" , lineHeight:"22px"
      };

      const fontIcons ={
        fontSize: "22px" ,textAlign: "center",color:"white"
      };

    return(
        <Fragment>
             <section className="aboutSection" id="about">
                <div className="aboutTitle">
                    <h2  id="aboutTitle">ABOUT ME</h2>
                </div>
                <div className="photo"></div>
            </section>

            <div className="about">
                <p className="text" style={styleText}>Hello! My name is Shei, I am 22 years old. <br/>I am from CDMX and I dedicate myself to web development.</p>
                <p className="text" style={styleText}><i className="fas fa-quote-left"></i> I firmly believe that technology is simply a tool with which human capacity and creativity are amplified and these should be used to create a true impact with which life is facilitated and problems are solved <i className="fas fa-quote-right"></i></p>
                <div className="hobbies">
                    <div className="circle"><i className="fas fa-book-reader" ></i></div>
                    <p style={fontIcons}>I really like reading</p>
                    <div className="circle"><i className="fas fa-walking" ></i></div>
                    <p style={fontIcons}>I love going for a walk after a long day</p>
                    <div className="circle"><i className="fas fa-cookie-bite" ></i></div>
                    <p style={fontIcons}>I make desserts for sport</p>
                </div>
            </div>

            <div className="skills">
                <div className="textSkills"><h2 >Technical Skills</h2></div>
                <div className="containSkills">
                    <div className="boxM" style={colorRed}><i className="fab fa-html5" id="skill"  ></i></div>
                    <div className="boxM" style={colorBlue}><i className="fab fa-git" id="skill" ></i></div>
                    <div className="boxM" style={colorGreen}><i className="fab fa-github" id="skill" ></i></div>
                    <div className="boxM" style={colorYellow}><i className="fab fa-react" id="skill"></i></div>
                    <div className="boxM" style={colorRed}><i className="fab fa-node" id="skill" ></i></div>
                    <div className="boxM" style={colorBlue}><i className="fab fa-js" id="skill"></i></div>
                    <div className="boxM" style={colorGreen}><i className="fab fa-npm" id="skill"> </i></div>
                    <div className="boxM" style={colorYellow}><i className="fab fa-css3-alt" id="skill"></i></div>
                </div>
            </div>
        </Fragment>
    )
}

export default About