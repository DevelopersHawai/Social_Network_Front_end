import React from 'react'
const Home = () => (
    <div className="jumbotron">
        <h2>Home</h2>

        <div>
                    <img src={ 
                        require(
                            "../core/images/work_Purple-Lamborghini-Aventador-LP700.png" 
                            )}
                                alt={"A Lamborghini Aventador LP700"}
                                width={600} 
                                height={300}
                    />

        </div>

        
        <p className="lead">Welcolme to the React Frontend this is what it looked like before we took over the world.</p>
        <p className="lead">Sit back or stand-up while you enjoy coding & learning </p>
        <p className="lead">You deserve to be happy, and you will be healthy </p>
        <p className="lead">GOD will give you Great health,the Mansion and purple Lamborghini you want.</p>
        <p className="lead">it will be awesome not paying rent or mortage and enjoying the wealth and</p>
        <p className="lead">Traveling the world</p>
        <p className="lead">Reach out to a designer to help you make a nice front page and make your million</p>
        
       {/* <button type="button" color="#1092F2" class="btn btn-raised btn-lg">Continue</button>  */}
    </div>
);

export default Home;

