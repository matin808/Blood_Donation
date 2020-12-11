import '../styles/Footer.css';
import {Link} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import DirectionsRunSharpIcon from '@material-ui/icons/DirectionsRunSharp';
import {Button } from '@material-ui/core';

function Footer() {
    return (
        <div className = "footer">
         <div className = "footer__left">
            <h1 className = "footer__left__heading">Info</h1>
            <p className = "footer__left__paragraph">This is college mini project made by S.E IT Student for spreading knowledge of blood donation and its benefits and awarness about it.</p>

         </div>

         <div className = "footer__center">
           <h3 className = "footer__left__heading">Links</h3>
                    <ul className="list-unstyled">

                    <Link to = "/"> <li className = "footer__link"> <AppsSharpIcon />Home</li></Link>
                    <Link to = "/center"><li className = "footer__link"><DirectionsRunSharpIcon />Centers</li></Link>
                    <Link to = "/"><li className = "footer__link"><CodeIcon />Developer</li></Link>
                    <Link to = "/"> <li className = "footer__link"><InfoIcon />About</li></Link>
                    </ul>
         </div>

         <div className = "footer__right">
         <h3 className = "footer__left__heading">Our Address</h3>
                    <address>
		             <p className = "footer__right__address"> Theem College Of Engineering<br />
		              Betagaon, Boisar<br />
		              India<br /> </p>
		             <CallIcon />+918087126299<br />
		             <CallIcon />+918356054311<br />
                     <CallIcon />+918268215930<br />
		              <EmailIcon /> <a href="mailto:weforyoublooddonation@gmail.com">
                         BloodDonation.net</a>
                    </address>
         </div>
        </div>
    )
}

export default Footer;

