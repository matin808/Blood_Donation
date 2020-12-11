import '../styles/Developer.css';
import Matin from '../images/matin.png';
import Yash from '../images/yash.png';
import Anup from '../images/anup.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';

function Developer() {
    return (
        <div className = "developer">
            <div className = "container developer__container">
            <h1 className = "developer__heading">Developers</h1>
                <div className = "row">
                    <div className = "col-md-4 profile text-center developer__profile">
                        <div className = "img-box developer__image">
                            <img className = "img-responsive developer__matin" src = {Matin} alt ="Matin" />
                                <ul className = "developer__ul">
                               <a href = "https://instagram.com/matin_kadri"><li className = "developer__li"> <InstagramIcon /> </li></a>
                               <a href = "https://www.linkedin.com/in/matin-kadri-b129831a1/"><li className = "developer__li"> <LinkedInIcon /> </li></a>
                               <a href = "https://matin-kadri.web.app/"><li className = "developer__li"> <InfoIcon /> </li></a>
                                </ul>
                        </div>

                    <h2 className = "developer__name">Matin Kadri</h2>
                    <h3 className = "developer__skill">Developer</h3>
                    <p>Hello World, Welcome to We For You Organization</p>

                    </div>

                    <div className = "col-md-4 profile text-center developer__profile">
                        <div className = "img-box developer__image">
                            <img className = "img-responsive developer__anup" src = {Anup} alt ="Anup" />
                                <ul className = "developer__ul">
                               <a href = "https://www.instagram.com/khedekar_anup/"><li className = "developer__li"> <InstagramIcon /> </li></a>
                               <a href = "https://www.linkedin.com/in/yash-singh-7a8a7b1bb"><li className = "developer__li"> <LinkedInIcon /> </li></a>
                               <a href = "https://www.facebook.com/anup.khedekar.9"><li className = "developer__li"> <FacebookIcon /> </li></a>
                                </ul>
                        </div>

                    <h2 className = "developer__name">Anup Khedekar</h2>
                    <h3 className = "developer__skill">Developer</h3>
                    <p>Hello World, Welcome to We For You Organization</p>

                    </div>


                    <div className = "col-md-4 profile text-center developer__profile">
                        <div className = "img-box developer__image">
                            <img className = "img-responsive developer__yash" src = {Yash} alt ="Yash" />
                                <ul className = "developer__ul">
                               <a href = "https://www.instagram.com/_yashsinghh/"><li className = "developer__li"><InstagramIcon /></li></a>
                               <a href = "https://www.linkedin.com/in/yash-singh-7a8a7b1bb"><li className = "developer__li"><LinkedInIcon /></li></a>
                               <a href = "https://www.facebook.com/profile.php?id=100004032787226"><li className = "developer__li"><FacebookIcon /></li></a>
                                </ul>
                        </div>

                    <h2 className = "developer__name">Yash Singh</h2>
                    <h3 className = "developer__skill">Developer</h3>
                    <p>Hello World, Welcome to We For You Organization</p>

                    </div>



                </div>


               


                

            </div>
        </div>
    );
}

export default Developer;

