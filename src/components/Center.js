import "../styles/Center.css";
import {useEffect} from 'react';
import { Alert } from "reactstrap";
import Aos from "aos";

function Center() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);

  return (
    <div className="center">
      <Alert color="primary">
        If you want your college to display here send us your college detail to{" "}
        <a href="mailto:weforyoublooddonation@gmail.com"> here</a>
      </Alert>
      <div className="container">
        <div className="row">
          <div class="col-sm-5">
            <a href="http://theemcoe.org/" rel="noreferrer" target="_blank">
              <img  data-Aos="fade-right"
                src="https://images.shiksha.com/mediadata/images/1588140314php1vfv8e.jpeg"
                className="img-fluid rounded float-left"
                alt="..."
              />
            </a>
          </div>

          <div class="col-sm-7"  data-Aos="fade-left">
            <h1 className="center__heading">Theem College Of Engineering</h1>
            <p className="center__address">
              Boisar, East, Boisar - Palghar Rd, Chilhar, Maharashtra 401501,
              India
            </p>
            <hr />
            <p className="center__slogan" >
              Blood Donation Campaign will be held between the month of
              February-march. It will take few minutes for you but a life time
              for somebody.
            </p>
          </div>
        </div>
        <hr />

        {/* second College */}

        <div className="row">
          <div class="col-sm-5">
            <a href="https://www.tcsc.edu.in/" rel="noreferrer" target="_blank">
              {" "}
              <img  data-Aos="fade-right"
                src="https://getmyuni.azureedge.net/college-image/big/thakur-college-of-science-and-commerce-tcsc-mumbai.jpg"
                className="img-fluid rounded float-left"
                alt="..."
              />{" "}
            </a>
          </div>

          <div class="col-sm-7" data-Aos="fade-left">
            <h1 className="center__heading">Thakur College Of Engineering</h1>
            <p className="center__address">
              Shyamnarayan Thakur Marg, Thakur Village, Kandivali East, Mumbai,
              Maharashtra 400101
            </p>
            <hr />
            <p className="center__slogan" >
              Blood Donation Campaign will be held between the month of
              February-march. It will take few minutes for you but a life time
              for somebody.
            </p>
          </div>
        </div>
        <hr />

               {/* fourth College */}

        <div className="row">
          <div class="col-sm-5">
            <a href="http://xaviers.edu/main/" rel="noreferrer" target="_blank">
              {" "}
              <img  data-Aos="fade-right"
                src="https://www.storypick.com/wp-content/uploads/2017/03/colg.jpg"
                className="img-fluid rounded float-left"
                alt="..."
              />
            </a>
          </div>

          <div class="col-sm-7" data-Aos="fade-left">
            <h1 className="center__heading">St.Xavier College </h1>
            <p className="center__address">
              5, Mahapalika Marg, Dhobi Talao, Chhatrapati Shivaji Terminus
              Area, Fort, Mumbai, Maharashtra 400001
            </p>{" "}
            <hr />
            <p className="center__slogan" >
              Blood Donation Campaign will be held between the month of
              February-march. It will take few minutes for you, but a life time
              for somebody.
            </p>
          </div>
        </div>
        <Alert color="dark">
          The schedule given above is as per our information. It may change
          later according to college curriculum.
        </Alert>
      </div>
    </div>
  );
}

export default Center;
