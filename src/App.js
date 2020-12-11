import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Center from "./components/Center";
import Developer from "./components/Developer";
import About from "./components/About";

function App() {
  return (

    <Router>
    
    <div className="App">
    <Switch>

    <Route path = "/about">
    
    <Header />
    <About />
    <Footer/>
    
 </Route>


    <Route path = "/Developer">
    
        <Header />
        <Developer />
        <Footer/>
        
     </Route>

    <Route path = "/center">
    
        <Header />
        <Center />
        <Footer/>
        
     </Route>

    <Route path = "/">
        <Header />
        <Main />
        <Footer/>
     </Route>

     </Switch>
    </div>

    </Router>
  );


}
export default App;
