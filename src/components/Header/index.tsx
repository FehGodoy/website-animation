import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { Container } from "./styles";

const Header: React.FC = () => {
    const {scrollYProgress} = useViewportScroll();
    const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

    return <Container style={{y: headerY}}>
        <div className="head">
            <div className="logo">
                <h4>Web Animation 4.0</h4>
            </div>
        </div>
    </Container>
}
    


export default Header