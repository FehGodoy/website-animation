import styled from 'styled-components';
import { motion } from 'framer-motion';
import guyPhoto from '../images/guy.jpg';
import image from '../images/image.jpg';
import dog from '../images/dog.jpg';

export const Main = styled.main`
    .first{
        /* background: #ff0000 ; */
        overflow: hidden ;

        .offset{
            width:100%;
            height:100%;
        }

        .a{
            background: #f5f1ea ;
            height:100%;
            display: flex ;
            align-items: flex-end ;

            .left-side{
                width:50%;
                height: 100%;
                background: #7dbb91 ; 

                @media screen and (max-width:991px){
                    width: 100% ;
                }
            }
            .right-side{
                width: 50%;
                height:100%;

                
            @media screen and (max-width:991px){
                display: none ;
            }
                .right-image{
                    background: url(${guyPhoto});
                    width:100%;
                    height:100%;
                    background-size:cover;
                    background-position:center 35% ;
                }
            }
            .left-text{
                position: absolute;
                bottom: 10%;
                left: -10%;
                max-width: 70%;

                    
                @media screen and (max-width:991px){
                    display: none;


                    .left-box{

                        h1{
                            font-size: 2.5em !important;
                        }
                    }
                }

                .left-box{

                    h1{
                        font-size: 7em ;
                        color: #fff ;
                    }

                    p.paragraph-2 {

                        font-size: 30px;
                        color: #fff;
                    }
                }
            }

            .left-textMob{
                position: absolute;
                bottom: 10%;
                left: -10%;
                max-width: 70%;

                    
                @media screen and (max-width:991px){
                    display: block;
                    max-width: 100% ;
                    left:0 ;
                    bottom:20% ;


                    .left-box{

                        h1{
                            font-size: 2.5em !important;
                        }
                    }
                }

                @media screen and (min-width:992px){
                    display: none ;
                }

                .left-box{

                    h1{
                        font-size: 7em ;
                        color: #fff ;
                    }

                    p.paragraph-2 {

                        font-size: 30px;
                        color: #fff;
                    }
                }
            }
        }
        .textoFirst{
            position: absolute ;
            top: 35% ;
            left: 100px ;

            @media screen and (max-width:767px){
                top: 15% ;
                left:50px ;
            }

            .boxText{

                .title{
                    max-width: 70% ;

                    @media screen and (max-width:767px){
                            max-width: 85% ;
                        }
                    h3{
                        font-weight: 300 ;
                        font-size: 3em ;

                        @media screen and (max-width:767px){
                            font-size: 2.4em ;
                        }
                        
                    }
                }
                .paragraph{
                    max-width: 40% ;
                    @media screen and (max-width:767px){
                            max-width: 80% ;
                        }
                    p{
                        color: #686868 ;
                    }
                }

                .button{
                    margin-top: 30px ;
                    a{
                        background-color: #000 ;
                        color: #fff ;
                        text-decoration: none;
                        padding: 8px 20px ;

                    }
                }
            }
        }
        .b{ 
            background: #808766;
            width:100%;
            height:100%;
            display: flex;
            align-items: center ;

            .textWhatever{
                width: 50% ;
                padding: 0px 35px ;

                
            @media screen and (max-width:991px){
                display: none ;
            }

                p{
                    font-size: 28px;
                    color: #d5d5d5;
                    line-height: 2 ;
                }
            }

            .wallpaperB{
                background: url(${image});
                width: 100%;
                background-size: cover;
                height: 100%;
                background-position: center 35% ;
            }
        }
        .c{
            background: url(${dog});            
            background-size: cover;            
            background-position: center 35% ;
            width:100%;
            height:100%;
        }

    }

    .second{
        background: #f5f1ea ;
    }    

    .fourth{
        background: #f5f1ea ;
    }
`;


export const Section = styled.section`
position: relative ;

`;


export const Sticky = styled(motion.div)`
    height:100vh;
    position: sticky;
    top:0 ;
    left:0;
    right:0;    
`;

export const Footer = styled.footer`
    background-color: #262627;
    padding: 40px 15px;
`;