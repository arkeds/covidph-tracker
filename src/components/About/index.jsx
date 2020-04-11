import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <article className={`message is-info`}>
                <div className="message-header">
                    <p>App About</p>
                </div>
                <div className="message-body">
                    Simple tracker of infected victims of the Covid-19
                    <br/>
                    Data source: <a href="https://apify.com/covid-19">apify.com</a>
                </div>
            </article>
            <article className={`message is-info`}>
                <div className="message-header">
                    <p>Developer</p>
                </div>
                <div className="message-body">
                    Arvin Kenn L. delos Santos
                    <br/>
                    Full Stack Web Developer
                </div>
            </article>
        </React.Fragment>
    );
}

export default About;