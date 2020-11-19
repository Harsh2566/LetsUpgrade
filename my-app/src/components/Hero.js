/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';                  //main page 

    const Hero = () => 
    <section className="hero is-default is-bold">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            LEARN, FROM
                        </h1>
                         <h1 className="title is-1 is-bold is-spaced">
                            COMPETITION.
                        </h1>
                        <h2 className="subtitle is-5 is-muted">Take a Part in Competition and gain extraordinary knowledge. </h2>
                    </div>
                    <div className="column is-5 is-offset-1">
                        <figure className="image is-4by3">
                            <img src={process.env.PUBLIC_URL + '/comp.svg'} alt="Description" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>



export default Hero