import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { Sticky } from "../../styles";
import {Container} from './styles';

const FirstAndSecond: React.FC = () => {
    const {scrollYProgress} = useViewportScroll();
    const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198],[0,1]);
    const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8]);

    return(
         <Sticky className="second">
             <First />
              
             <motion.div style={{
                 position: 'absolute',
                 top:0,
                 left:0,
                 right:0,
                 height:'100vh',
                 borderRadius:'4px',
                 border: '4px solid #fff',
                 opacity: frameOpacity,
                 scale: frameScale
             }}

             />
             
         </Sticky>
    );
};


const First: React.FC = () => {
    const {scrollYProgress} = useViewportScroll();

    const firstScale = useTransform(
        scrollYProgress,        
        [0.198, 0.264, 0.558, 0.627],
        [1, 0.511, 0.511, 1],        
    );

    const firstRadius = useTransform(
        scrollYProgress,        
        [0.198, 0.264, 0.558, 0.627],
        [0, 4, 4, 0],     
    );

    const leftSideHeight = useTransform(
        scrollYProgress,        
        [0, 0.058],
        ['20vh', '100vh'],       
    );

    const rightSideScale = useTransform(
        scrollYProgress,        
        [0.047, 0.093],
        [0, 0.511],       
    );

    const rightSideScaleB = useTransform(
        scrollYProgress,        
        [0.047, 0.093],
        [0, 0.511],       
    );

    const rightSideScaleBMob = useTransform(
        scrollYProgress,        
        [0.047, 0.093],
        [0, 0.911],       
    );


    const rightSideY = useTransform(
        scrollYProgress,        
        [0.047, 0.093],
        ['58vh', '0vh'],
    );

    const anotherText = useTransform(
        scrollYProgress,        
        [0.087, 0.24],
        ['1', '0'],
    );

    const divFirstText = useTransform(
        scrollYProgress,        
        [0, 0.058],
        ['1', '0'],
    );

    const offsetY = useTransform(
        scrollYProgress,        
        [0.32, 0.397, 0.461, 0.53],
        ['0%', '-100%', '-100%', '-200%'],
    );

    return(
         <Sticky className="first"
            style={{
                scale: firstScale,
                borderRadius: firstRadius
            }}
         >
             <motion.div className="offset"
                style={{
                    y: offsetY
                }}
             >  
             
                <div className="a">
                    
                    <motion.div 
                    className="left-side"
                    style={{
                        height: leftSideHeight,
                    }}
                    />                     
                    <div className="right-side">
                        <motion.div
                        className="right-image"
                        style={{
                            y:rightSideY,
                            scale:rightSideScale,
                        }}
                        />
                    </div>
                    <div className="left-text">
                        <motion.div
                        className="left-box"
                        style={{
                            y:rightSideY,
                            scale:rightSideScaleB,
                            opacity: anotherText
                        }}
                        >
                         <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>   
                         <p className="paragraph-2">
                            Non ratione soluta sequi minima cumque pariatur.
                         </p>
                        </motion.div>
                    </div>
                    <div className="left-textMob">
                        <motion.div
                        className="left-box"
                        style={{
                            y:rightSideY,
                            scale:rightSideScaleBMob,
                            opacity: anotherText
                        }}
                        >
                         <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>   
                         <p className="paragraph-2">
                            Non ratione soluta sequi minima cumque pariatur.
                         </p>
                        </motion.div>
                    </div>
                </div>
                <div className="textoFirst">
                    <motion.div
                    className="boxText"
                    style={{
                        opacity:divFirstText
                    }}>
                        <div className="title">
                            <h3>Lorem ipsum dolor sit amet, placeat dolore iusto</h3>
                        </div>
                        <div className="paragraph">
                            <p>Eligendi nihil aut expedita, quas quidem quia possimus nostrum quis hic.</p>
                        </div>

                        <div className="button">
                            <a href="#">
                                Learn More
                            </a>
                        </div>
                    </motion.div>
                </div>
                <div className="b">
                    <div className="textWhatever">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora rem, doloremque mollitia dolor eum beatae ab perferendis? </p>
                    </div>
                    <div className="wallpaperB">

                    </div>
                </div>
                <div className="c">
                    
                </div>
             </motion.div>

         </Sticky>
    );
};


export default FirstAndSecond