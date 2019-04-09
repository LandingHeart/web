import React from 'react';
import '../CSS/design.css'
import Icons from './Icons';


const Home = () =>{
    return(
        <div>

                 <section className = "brand-quote" id = "section-1">
                    <div className = "container">
                    <p className = "div-divider center">
                    To raise to the next level,<br/> you have to start imagining
                    
                    </p>
                    
                    </div>
                    <div className = "icon-pos">
                    <Icons />
                    </div>
                    </section>

                    <section id = "section-2">
                <div className="container">
                <h3> My project</h3>
                <p>
                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,              
                    </p>
                
            </div>
            </section>

            <section id = "section-3">
                <div className="container">
                <h3> services </h3>
                <p>
                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and         
                    </p>
               
                    <div className="row">
                     <div className = "col">
                     <div className="card">
                        
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                    
                        </div>
                        </div>
                        
                     <div className = "col">
                     <div className="card">
                       
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                   
                       
                        </div>
                        </div>

                        <div className = "col">
                     <div className="card">
                        
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                     
                        </div>
                        </div>
                        
                </div>
                     </div>
            </section>
           
               
            
        </div>
    )
}
export default Home;