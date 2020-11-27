import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import Navigation from './Components/Navigation'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <Navigation/>
         <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/project" component={Project}/>
       <Redirect to="/"/>

       </Switch>
    
       <Footer/>
     </div>
  
     </BrowserRouter>
  );
}

export default App;



