import React from "react";

import {Container} from './styles';
import firstImage from '../../images/first-image.jpg';


const Third: React.FC = () => {

    return <Container>
        <div className="firstSection">
            <div className="box">
                <div className="title">
                    <h1>Look Iconic</h1>
                </div>
                <div className="text">
                    <p>
                    Icons are the universal language. <br/>
                    Now you're fluent.
                    </p>                    
                </div>
            </div>
            <div className="images">
                <img src={firstImage} alt="" className="firtsImage" />                
            </div>
        </div>
    </Container>
}


export default Third;