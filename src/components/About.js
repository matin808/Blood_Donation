import '../styles/About.css';
import Aos from "aos";
import {useEffect} from "react";
import Banner from '../images/Banner2.png'
import MobileBanner from '../images/banner.jpg'

function About() {

    useEffect(() => {
        Aos.init({duration :600});
      }, []);
      
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
                <div class="col-sm-6">
                    <p  data-aos="zoom-in-right" className = "about__para">
                    Have you at anytime witnessed a relative of yours or a close friend searching frantically for a blood donor, when blood banks say out of stock, the donors in mind are out of reach and the time keeps ticking? Have you witnessed loss of life for the only reason that a donor was not available at the most needed hour? Is it something that we as a society can do nothing to prevent? This thought laid our foundation.

                  </p>
                </div>
                <div class="col-sm-6">
                <p  data-aos="zoom-in-left" className = "about__para">"We For You" is an organization that brings voluntary blood donors and those in need of blood on to a common platform.  Through this website, we seek donors who are willing to donate blood, as well as provide the timeliest support to those in frantic need of it.
  </p>
                </div>
                </div>
            </div>
        </div>

        {/* Second Para */}


      <div className = "about__main">
            <h1 className = "about__mainHeading">Our Mission</h1>
            <div className = "container">
                <div className = "row">
                <div class="col-sm-6">
                    <p data-aos="zoom-in-right" className = "about__para">
                    Started in the year 2020, on 14th Nov,with the zeal to serve our society, to inspire and spread the word, we dream to fulfill 100% blood need in the world.

                 </p>
                </div>
                <div class="col-sm-6">
               <p data-aos="zoom-in-left" className = "about__para"> Our mission is to fulfill every blood request in the country with a promising web portal and motivated individuals who are willing to donate blood.</p>
              </div>
                </div>        
            </div>
        </div>

        {/* third Para */}
        <div className = "about__main">
            {/* <h1 className = "about__mainHeading">Our Vision And Motto</h1> */}
            <div className = "container">
                <div className = "row">
                <div class="col-sm-6">
                <p  data-aos="zoom-in-up" className = "about__para">Our vision is to be “The hope of every Indian in search of a voluntary blood donor”</p>
              
                </div>
                <div class="col-sm-6">
              <p  data-aos="zoom-in-up" className = "about__para">Our motto - “Donate blood to save the most precious human life</p> 
                </div>
                </div>
            </div>
        </div>

        </div>

    );
}

export default About;