import React from 'react';
import '../CSS/design.css'
import Button from './Button.js';
import '../Images/image.jpg';
import '../CSS/_sticky-footer.css'
const Home = () =>{
    return(
        <div className = "App">
        <body className = "site">
            <main className = "site-content">
              <div>
                 <section className = "brand-quote section-1" id = "showcase">
                    <div className = "container">
                    <p className = "div-divider center p-text">
                    To raise to the next level, start imagining.
                    </p>
                    
                    <div id = "b-pos">
                    <Button />
                    </div>
                    </div>
             
                <div className="container">
          
                    <div className="row">
                     <div className = "col">
                     <div className="card">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card .</p>
                            <img src="https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif" title="this slowpoke moves" />
                            
                        </div>
                        </div>
                        
                     <div className = "col">
                     <div className="card">
                       
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card .</p>
                           
                   
                       
                        </div>
                        </div>

                        <div className = "col">
                     <div className="card">
                        
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card </p>
                           
                     
                        </div>
                        </div>
                        
                </div>
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
                <h3> My project</h3>
                <p>
                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,              
                    </p>
                
            </div>
            </section>
        </div>
        </main>
        </body>
        </div>
    )
}

export default Home;