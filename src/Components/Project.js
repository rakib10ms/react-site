import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import reacts from '../Components/images/fiver2.png'
import portfolio from '../Components/images/portfolio.png'
import tourist from '../Components/images/tourist.png'
import older from '../Components/images/older.png'


function Project() {
    return (
        <div>
                  <h1 className="text-center p-3"> My Projects..</h1>
               
               <div className="parent text-center py-2">
              
               <div className="child text-center">
               
                 <img src={portfolio}/>
                 
                 <h2> PORTFOLIO TYPE</h2>
                 <p className="text-secondary">This is portfolio based website.Where i used raw css and js.No framework or library is included</p >

                 <a target="_blank" href="https://rakib10ms.github.io/rakibofficial.github.io/"><i className="fa fa-link"> </i></a> 
                 <a target="_blank" href="https://github.com/rakib10ms/rakibofficial.github.io"><i className="fa fa-github"> </i></a> 

                 

                 </div>
               <div className="child text-center">
             
               <img src={tourist}/>
               
               <h2> TOURIST SITE</h2>
               <p className="text-secondary" >This is portfolio based website.Where i used raw css.No framework or library is included</p >
               <a target="_blank" href="https://rakib10ms.github.io/tourits-site/"><i className="fa fa-link"> </i></a> 
                 <a target="_blank" href="https://github.com/rakib10ms/tourits-site"><i className="fa fa-github"> </i></a> 
               </div>

               <div className="child text-center">
             
               <img src={older}/>
               
               <h2> OLDER PROJECT</h2>
               <p className="text-secondary" >This is portfolio based website.Where i used raw css and js.No framework or library is included</p >
               <a target="_blank" href="https://rakib10ms.github.io/older-project1/"><i className="fa fa-link"> </i></a> 
                 <a target="_blank" href="https://github.com/rakib10ms/older-project1"><i className="fa fa-github"> </i></a> 
               </div>

               <div className="child text-center">
             
               <img src={reacts}/>
               
               <h2> REACT </h2>
               <p className="text-secondary" >This is react router simple website.Where you can go any page without loading..</p >
               <a target="_blank" href="https://github.com/rakib10ms"><i className="fa fa-link"> </i></a> 
                 <a target="_blank" href="https://github.com/rakib10ms"><i className="fa fa-github"> </i></a> 
               </div>



               </div>
        

        </div>
    )
}

export default Project
