import '../styles/About.css';
import Banner from '../images/Banner2.png'
import MobileBanner from '../images/banner.jpg'

function About() {
    return (
        <div className = "about">
        <div className = "about__banner">
            <img className = "img-fluid about__bannerImage" src = {Banner} alt = "Banner" />
            <img className = "img-fluid about__bannerImage__mobile" src = {MobileBanner} alt = "Banner" />
           
        </div>

        <div className = "about__main">
            <h1 className = "about__mainHeading">What We Do</h1>
            <div className = "container">
                <div className = "row">
                <div class="col-sm-8">
                    
                </div>
                <div class="col-sm-4">
                    
                </div>
                </div>
            </div>
        </div>

        </div>

    );
}

export default About;