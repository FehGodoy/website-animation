import styled from 'styled-components';
import {motion} from 'framer-motion';


export const Container = styled(motion.header)`
    width: 100%;
    height:100px;
    background: rgba(0,0,0,0.1);
    position: fixed ;
    top:0 ;
    z-index: 9999 ;    

    .head{
        display: flex ;
        height:100%;
        align-items: center ;
        padding: 0px 20px ;
        width: 100% ;
        
        .logo{
            width: 30%;
            height:100%;
            display: flex ;
            align-items: center ;
            margin: 0 auto ;
            justify-content:center ;
            h4{
                font-weight: 400 ;
            }
        }
    }

`;

export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width:767px){
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--white);
    }
`;