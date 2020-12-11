import Blood from '../images/blood-donation.svg';
import '../styles/Main.css';
import Heart from '../images/heart.svg';
import Checkup from '../images/checkup.svg';
import {motion, useViewportScroll} from 'framer-motion';


function Main() {

const { scrollYProgress } = useViewportScroll()

    const fadeRight = {
        hidden : { opacity: 0, x: 150},
        visible : {opacity : 1, x : 0}
    };
     const fadeLeft = {
        hidden : { opacity: 0, x: -150},
        visible : {opacity : 1, x : 0}
    };


    return (
        <div className = "main">
        <div class="container main__first">
             <div class="row">
             {/* <div class="col-sm-6"> */}
             <div class="col-md-6">

          <div className = "main__left">
            <motion.h3 
            initial = {{ opacity : 0}}
            animate=  {{ opacity : 1 }}
            transition= {{ duration : 0.8 }}
            className = "main__quote">A <b className = "main__bold">Drop</b> from you is an ocean of <b className = "main__bold">Life </b>for someone else</motion.h3>
            <button className ="btn btn-first">Need Blood</button>
            <button className ="btn btn-second">Donate Blood</button>
        </div>
        </div>
        {/* <div class="col-sm-6"> */}
        <div class="col-md-6">
          <div className = "main__right">
    
         <motion.img
         variants = {fadeRight}
         initial = 'hidden'
         animate = 'visible'
         transition = {{ duration : 1 }}
          className = "main__image" src = {Blood} alt = "" />
         
        </div>
        </div>
        
        </div>
        <hr />
        
        </div>
       

        <div className = "container main__second">
        <h1 className = "main__second__center">Benefits Of Blood Donation:</h1>
        <div className = "row">
        {/* <div class="col-sm-6"> */}
        <div class="col-md-6">
        <motion.img
         
         variants = {fadeLeft}
         initial = 'hidden'
         animate = 'visible'
         transition = {{ duration : 1 }}
         className = "main__second__image" src = {Heart} alt = "" /> 
        </div>
        {/* <div class="col-sm-6 main__second__heart"> */}
        <div class="col-md-6 main__second__heart">
            <p className = "main__second__heartbenefits">
            <b className = "main__second__bold">Blood donation</b> is beneficial in reducing the risk of heart and liver ailments caused by the iron overload in the body. Intake of iron-rich diet may increase the iron levels in the body, and since only limited proportions can be absorbed, excess iron gets stored in heart, liver, and pancreas. This, in turn, increases the risk of cirrhosis, liver failure, damage to the pancreas, and heart abnormalities like irregular heart rhythms.
            </p>
        </div>
        </div>
        </div>

        <hr />
        <div className = "container main__third">
        <div className = "row">
        {/* <div class="col-sm-6 main__third__heart"> */}
        <div class="col-md-6 main__third__heart">
            <p className = "main__third__heartbenefits">
            Your blood is also tested for several diseases. These includes:
            <p><b className = "main__third__bold">Hepatitis B :</b></p>
            <p>A serious liver infection caused by the hepatitis B virus.</p>
            <p><b className = "main__third__bold">Hepatitis C :</b></p>
            <p>The virus is spread by contact with contaminated blood; for example, from sharing needles or from unsterile tattoo equipment.</p>
            <p><b className = "main__third__bold">HIV :</b></p>
            <p> HIV affects the immune system specifically the T-Cells or CD4 cells which fight infection.</p>
         
            </p>
        </div>
        {/* <div class="col-sm-6"> */}
        <div class="col-md-6">
        <img className = "main__third__image" src = {Checkup} alt = "" /> 
        </div>
       
        </div>
        </div>



        </div>
    )
}

export default Main

