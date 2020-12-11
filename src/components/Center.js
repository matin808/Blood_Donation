import "../styles/Center.css";
import { Alert } from 'reactstrap';


function Center() {
    return(
        <div className = "center">
       <Alert color="primary">
          If you want your college to display here send us your college detail to <a href = "mailto:weforyoublooddonation@gmail.com"> here</a>
      </Alert>
        <div className = "container">

        <div className = "row">
        <div class="col-sm-5">
      <a href = "http://theemcoe.org/" target="_blank"><img src="https://images.shiksha.com/mediadata/images/1588140314php1vfv8e.jpeg" className="img-fluid rounded float-left" alt="..." /></a>
        </div>
    
        <div class="col-sm-7">
       <h1 className = "center__heading">Theem College Of Engineering</h1>
       <p className = "center__address">Boisar, East, Boisar - Palghar Rd, Chilhar, Maharashtra 401501, India</p>
       <hr />
       <p className = "center__slogan">Blood Donation Campaign will be held between the month of February-march. It will take few minutes for you but a life time for somebody.</p>
            </div>
            </div><hr />

{/* second College */}

    <div className = "row">
        <div class="col-sm-5">
          <a href = "https://www.tcsc.edu.in/" target="_blank"> <img src="https://getmyuni.azureedge.net/college-image/big/thakur-college-of-science-and-commerce-tcsc-mumbai.jpg" className="img-fluid rounded float-left" alt="..." /> </a>
           
        </div>
       
    
        <div class="col-sm-7">
             <h1 className = "center__heading">Thakur College Of Engineering</h1>
             <p className = "center__address">Shyamnarayan Thakur Marg, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101</p>
               <hr />
               <p className = "center__slogan">Blood Donation Campaign will be held between the month of February-march. It will take few minutes for you but a life time for somebody.</p>
        </div>
            </div><hr />

{/* third College */}

            <div className = "row">
        <div class="col-sm-5">
            <a href = "http://www.ruparel.edu/" target="_blank">  <img src="https://www.localbizworld.com/wp-content/uploads/2018/12/dg-ruparel-college-of-arts.jpg" className="img-fluid rounded float-left" alt="..." /> </a>
           
        </div>
       
    
        <div class="col-sm-7">
             <h1 className = "center__heading">Ruparel College</h1>
             <p className = "center__address">Senapati Bapat Marg Mahim, Mumbai 400016 Maharashtra, India</p> <hr />
             <p className = "center__slogan">Blood Donation Campaign will be held between the month of February-march. It will take few minutes for you but a life time for somebody.</p>
                </div>
            </div><hr />

{/* fourth College */}

            <div className = "row">
        <div class="col-sm-5">
           <a href = "http://xaviers.edu/main/" target="_blank">   <img src="https://www.storypick.com/wp-content/uploads/2017/03/colg.jpg" className="img-fluid rounded float-left" alt="..." /></a>
           
        </div>
       
    
        <div class="col-sm-7">
             <h1 className = "center__heading">St.Xavier College </h1>
             <p className = "center__address">5, Mahapalika Marg, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001</p> <hr />
             <p className = "center__slogan">Blood Donation Campaign will be held between the month of February-march. It will take few minutes for you, but a life time for somebody.</p>
        </div>
            </div>
            <Alert color="dark">
               The schedule given above is as per our information. It may change later according to college curriculum.
           </Alert>
            </div>
        
            </div>
      

    );
}

export default Center;