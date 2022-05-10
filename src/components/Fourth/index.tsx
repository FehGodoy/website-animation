import React from "react";

import {Container} from './styles';
import video from '../../images/video.mp4';
import firebase from '../../images/firebase.png';
import analytcs from '../../images/analytcs.png';
import calendar from '../../images/calendar.png';
import sheets from '../../images/sheets.png';
import mailchimp from '../../images/mailchimp.png';
import tag from '../../images/tag.png';


const Fourth: React.FC = () => {

    return <Container>
        <div className="videoBox">
            <div className="title">
                <h2>Make It Yours</h2>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="boxVideo">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
        <div className="boxTech">
            <div className="boxTechContent">
                <div className="title">
                    <h2>Lorem Ipsum dolor sit amet</h2>
                </div>
                <div className="text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quae ducimus dignissimos, adipisci vel dolores delectus eum molestiae blanditiis ullam facere eius ab, commodi voluptatum.
                    </p>
                </div>
            </div>
            <div className="boxTechFigure">
                <div className="box">
                    <ul>
                        <li>
                            <img src={firebase} alt="Firebase" />
                        </li>
                        <li>
                            <img src={analytcs} alt="Firebase" />
                        </li>
                        <li>
                            <img src={calendar} alt="Firebase" />
                        </li>
                        <li>
                            <img src={sheets} alt="Firebase" />
                        </li>
                        <li>
                            <img src={mailchimp} alt="Firebase" />
                        </li>
                        <li>
                            <img src={tag} alt="Firebase" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
}


export default Fourth;