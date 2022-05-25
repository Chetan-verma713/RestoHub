import React from 'react';
import Ram from '../images/RamPratapSingh.jpeg';
import Vishnu from '../images/VishnuPandey.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <div className="container ">
            <div className="about-section">
                <h1>About Us</h1>
                <br />
                <br />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus facilis itaque, dolores aperiam debitis in quos
                    mollitia alias amet expedita porro optio recusandae, velit
                    voluptatum animi suscipit ex eaque laudantium est
                    perspiciatis fugiat, provident iste enim ea. Vel quas saepe
                    porro natus accusantium nulla blanditiis sint. Ab mollitia
                    excepturi animi ipsum sint assumenda cumque cum, qui
                    consectetur id dolorem reiciendis veritatis tempora, ut,
                    commodi recusandae tempore iste culpa! Atque a ab porro
                    voluptate, facilis consectetur iure quidem esse? Nemo,
                    alias!
                </p>
            </div>
            <br />
            <h2>Our Team</h2>
            <div className="container-dishes">
                <div className="card-dish">
                    <div className="card">
                        <img src={Ram} alt="Jane" className="about-image" />
                        <br />
                        <div className="container">
                            <h2>Ram Pratap Singh</h2>
                            <p className="title">
                                Team Leader and Not doing Anything
                            </p>
                            <p>
                                Some text that describes me lorem ipsum ipsum
                                lorem.
                            </p>
                            <p>ram.pratap_cs19@gla.ac.in</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-dish">
                    <div className="card">
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C5603AQH9WcPyAvpo0w/profile-displayphoto-shrink_800_800/0/1652107192260?e=1658966400&v=beta&t=crrw_5G34r5CFnLUvUpFEBIRGDwaeDrgRq91AOT98Kw"
                            alt="Jane"
                            className="about-image"
                        />
                        <br />
                        <div className="container">
                            <h2>Chetan Verma</h2>
                            <p className="title">Team Member</p>
                            <p>
                                Some text that describes me lorem ipsum ipsum
                                lorem.
                            </p>
                            <p>chetan.verma_cs19@gla.ac.in</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-dish">
                    <div className="card">
                        <img
                            src={<FontAwesomeIcon icon={faUser} />}
                            alt="Img Not Found"
                            className="about-image"
                        />
                        <br />
                        <div className="container">
                            <h2>Shreyansh</h2>
                            <p className="title">Team Member</p>
                            <p>
                                Some text that describes me lorem ipsum ipsum
                                lorem.
                            </p>
                            <p>shreyansh_cs19@gla.ac.in</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-dish">
                    <div className="card">
                        <img src={Vishnu} alt="Jane" className="about-image" />
                        <br />
                        <div className="container">
                            <h2>Vishnu Pandey</h2>
                            <p className="title">Team Member</p>
                            <p>
                                Some text that describes me lorem ipsum ipsum
                                lorem.
                            </p>
                            <p>vishnu.pandey_cs19@gla.ac.in</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-dish">
                    <div className="card">
                        <img
                            src="https://glauniversity.in:8103/191500918.jpg"
                            alt="Jane"
                            className="about-image"
                        />
                        <br />
                        <div className="container">
                            <h2>Vivek Bhadauriya</h2>
                            <p className="title">Team Member</p>
                            <p>
                                Some text that describes me lorem ipsum ipsum
                                lorem.
                            </p>
                            <p>vivek.bhadauriya_cs19@gla.ac.in</p>
                            <p>
                                <button className="button">Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
