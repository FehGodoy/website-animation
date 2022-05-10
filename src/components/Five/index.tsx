import React from "react";

import {Container} from './styles';
import business from '../../images/business.jpg';


const Five: React.FC = () => {

    return <Container>
        <div className="box">
            <div className="boxAzul">
                <div className="firstBox">
                    <div className="titulo">
                        <h6>Meaningful Series</h6>
                    </div>
                    <div className="texto">
                        <h4>Real talk with today's leaders</h4>
                    </div>
                </div>
                <div className="secondBox">
                    <h5>Lorem ipsum dolor, sit amet consectetur</h5>
                </div>
                <div className="lastBox">
                    <img src={business} alt="Lorem Ipsum Dolor" />
                </div>
            </div>
        </div>
    </Container>
}


export default Five;