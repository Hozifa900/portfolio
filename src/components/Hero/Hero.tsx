import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "react-lottie";
import Illustration from "../../assets/Animation1719808748391.json";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
export function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Illustration,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, This is
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Zane Technology</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Transforming Ideas into Reality</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            At Zane Tech Solutions, we specialize in providing cutting-edge
            technology services to small businesses and companies. Our goal is
            to help you achieve your business objectives by delivering
            custom-tailored solutions that meet your unique needs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <p className="small-resume">
            <h3>Our Process:</h3>
            <ol>
              <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
                <li>
                  1- Consultation: We meet with you to discuss your needs.
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
                <li>
                  2- Planning: We create a detailed plan to address your
                  requirements.
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={1.3 * 1000}>
                <li>
                  3- Development: Our team develops and implements the
                  solutions.
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={1.5 * 1000}>
                <li>
                  4- Testing: We rigorously test the solutions to ensure they
                  meet your expectations.
                </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={1.7 * 1000}>
                <li>
                  5- Deployment: We deploy the solutions and provide ongoing
                  support.
                </li>
              </ScrollAnimation>
            </ol>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={2 * 1000}>
          <p>Ready to take your business to the next level?</p>
        </ScrollAnimation>
        <br />

        <ScrollAnimation animateIn="fadeInUp" delay={2.2 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Book your free Consultation 
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/hozifa-zean/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Hozifa900"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=+13479863996&text=Hello+Hozifa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="https://t.me/hozifa90" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          {/* <img style={{ width: "400px" }} src={Illustration} alt="Ilustração" /> */}
          <Lottie options={defaultOptions} height={400} width={400} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
