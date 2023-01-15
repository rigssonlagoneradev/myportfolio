import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import 'bootstrap/dist/css/bootstrap.css';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import "../styles/Projects.css";
import me from "../assets/itsme.jpg";
import Card from 'react-bootstrap/Card';
import proj1 from "../assets/porkshopAngular.png";


function Home() {
    const [expandNavbar, setExpandNavbar] = useState(false);

        const location = useLocation();

        useEffect(() => {
        setExpandNavbar(false);
        }, [location]);
        const [open, setOPen] = useState(false);

        const msgMe=()=>{
            setOPen(!open);
        }
        const closeMsg=()=>{
            setOPen(false);
        }

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

        emailjs
            .sendForm(
            "service_wr7nk45",
            "template_btxa5ml",
            form.current,
            "uZ-RU64qFbmLFy-WG"
            )
            .then(
            (result) => {
                console.log(result.text);
                alert("Message Succesfully Sent!");
                e.target.reset();
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong. Try again.")
            }
            );
      }
  return (
    
    <div id="home" className="home">
    <div id="navigation" className="navigation">
        <div className="navwrapper">
            <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
              <button
                onClick={() => {
                  setExpandNavbar((prev) => !prev);
                }}
              >
                <ReorderIcon />
              </button>
            </div>
            <div className="links">
              <div>
              <a href="#about-me"> AboutMe</a>
              </div>
              <div>
              <a href="#projects-page"> Projects </a>
              </div>
              <div>
              <a href="#exp">Experience </a>
              </div>
              <div>
              <a href="#contactme"> Contact </a>
              </div>
            </div>
          </div>
          </div>
    </div>
      
      <div className="about">
        <span className="myName">
        <h2> Hi there, I'm Rigsson</h2><br/><br/><br/>
        </span>
        
        <p className="info">
            I'm a Full Stack Web Developer Student at Robertson College.<br/>
        </p>
        
        <div className="prompt">
          
          <a href="https://www.linkedin.com/in/rigssonlagonera">
          <LinkedInIcon />
          </a>
          <a href="https://github.com/TheFull-StackWebDeveloperGuy">
          <GithubIcon />
          </a>
        </div>
      </div>
     {/*---------------About Page------------------*/}
      <div className="wrapper-about">
      <img className="myPic" src={me} alt="me-logo" />
      <p className="sentence"> 
      <h1 id="h1me"> About Me</h1>
              Hi there, I'm Rigsson Lagonera and I am currently residing in Calgary, Alberta.
              I enjoy listening to music, playing guitar,singing, and playing multi-player games. 
              Before I moved to Canada I was a video editor in a Creative Agency called ECOMVIDS for 2 years (2018-2020).
              I've always been curious as to how websites, games, and different softwares are made. I originally wanted 
              to become a game developer but lately I have been more interested in web development.
      </p>
      
      </div>
      
      {/*---------------Skill------------------*/}
      <div className="proj-title">
      <h1><strong>My Skills</strong></h1>
      </div>
      
      <div className="skills"> 
        
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ExpressJS,
              MySQL, MongoDB, MS SQL, RestAPI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>VS Code, Microsoft Visual Studio, JavaEclipse IDE,
                  Git, GitHub, Postman
            </span>
          </li>
          
        </ol>
      </div>
      <div>
          <h1 className="exp-header">Experience</h1>
      </div>
      <div id="exp" className="experience-page">
        <div className="experience">    
          <div className="exp-body">
          <h2> <SchoolIcon/> Rugsuanan Alternative Learning Center</h2>
          <h4>Secondary School Diploma Graduate</h4>
          <h4>2011-2012</h4>
          <h2> <SchoolIcon/> University of Northern Philippines</h2>
          <h3> Bachelor of Arts in Communication </h3>
          <h4> Bachelor's Degree </h4>
          <h4>2013-2017</h4>
          <h2> <WorkIcon/> Bombo Radyo Philippines</h2>
          <h3> News Writer/Journalist </h3>
          <h4>2017-2018</h4>
          <h2> <WorkIcon/> ECOMVIDS </h2>
          <h3> Senior Video Editor & Team Leader </h3>
          <h4>2018-2020</h4>
          <h2> <WorkIcon/> Ice River Water Springs Co. </h2>
          <h3> Production Worker </h3>
          <h4>2020-2021</h4>
          <h2> <WorkIcon/> Amazon DSP </h2>
          <h3> Delivery Associate </h3>
          <h4>Year 2021</h4>
          <h2> <SchoolIcon/> Robertson College </h2>
          <h3> Full Stack Web Developer </h3>
          <h4> Diploma Graduate </h4>
          <h4>2022-2023</h4>
          <a href="#home">Back to Top</a>
          </div>
          </div>
      </div>
      <div id="projects-page" className="proj-title">
        <h1><strong>My Projects</strong></h1>
      </div>   
      <div className="project-page">     
      <Card className="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="project-img" src={proj1} alt="AngularProject" />
      <Card.Body className="project-body">
        <Card.Title>E-commerce Web App</Card.Title>
        <Card.Text>
          This project is created using a combination of Angular JS,
          ASP.NET, and API in Microsoft Visual Studio 2022.
        </Card.Text>
        <div>
          <GithubIcon/>
          <button className="proj-Button"><a href="https://github.com/TheFull-StackWebDeveloperGuy">View Project</a></button>
        </div> 
      </Card.Body>
      </Card>
      <Card className="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="project-img" src={proj1} alt="AngularProject" />
      <Card.Body className="project-body">
        <Card.Title>E-commerce Web App</Card.Title>
        <Card.Text>
          This project is created using a combination of Angular JS,
          ASP.NET, and API in Microsoft Visual Studio 2022.
        </Card.Text>
        <div>
          <GithubIcon/>
          <button className="proj-Button"><a href="https://github.com/TheFull-StackWebDeveloperGuy">View Project</a></button>
        </div> 
      </Card.Body>
      </Card>
      <Card className="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="project-img" src={proj1} alt="AngularProject" />
      <Card.Body className="project-body">
        <Card.Title>E-commerce Web App</Card.Title>
        <Card.Text>
          This project is created using a combination of Angular JS,
          ASP.NET, and API in Microsoft Visual Studio 2022.
        </Card.Text>
        <div>
          <GithubIcon/>
          <button className="proj-Button"><a href="https://github.com/TheFull-StackWebDeveloperGuy">View Project</a></button>
        </div> 
      </Card.Body>
      </Card>
      <Card className="project-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="project-img" src={proj1} alt="AngularProject" />
      <Card.Body className="project-body">
        <Card.Title>E-commerce Web App</Card.Title>
        <Card.Text>
          This project is created using a combination of Angular JS,
          ASP.NET, and API in Microsoft Visual Studio 2022.
        </Card.Text>
        <div>
          <GithubIcon/>
          <button className="proj-Button"><a href="https://github.com/TheFull-StackWebDeveloperGuy">View Project</a></button>
        </div> 
      </Card.Body>
      </Card>
        
      </div>
      <div id="contactme">
      <div className="contact-wrap">
      <div className="wrap-button">
      <button className="clicker" onClick={msgMe}>Contact Me</button>
      </div>
      
    {open && (
    <div className="contact-card">
      
      <div className="header">
        <button className="close-btn" onClick={closeMsg}><span>X</span></button>
      </div>
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <br/>
          <h4>Hi, how may I help you?</h4>
          <br/>
            <input className="form-control" type="text" name="user_name" placeholder="Name" required/>
            <br/>
            <input className="form-control" type="email" name="user_email" placeholder="Email" required />
            <br/>
            <textarea className="form-control" name="message" placeholder="Your Message" required />
            <br/>
            <input className="btn btn-danger" type="submit" value="Send" />
            <br/>
            <br/>
        </form>
      </div>
      
    </div>
    )}
    </div>
      </div>
      <div id="#footer">
        
      </div>
      <div id="footer">
        <div className="footer">
            <div className="socialMedia">
              <a href="https://www.instagram.com/rgsnlgnra/">
              <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/rigssonlagonera">
              <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/rgsnlgnra">
              <FacebookIcon />
              </a>
              
            </div>
            <p> &copy; 2023 Rigsson Lagonera</p>
          </div>
      </div>
      
      
    </div>
  );
}
export default Home;