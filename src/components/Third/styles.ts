import styled from 'styled-components';
import background from '../../images/back.jpg';


export const Container = styled.div`
    height:100%;

    @media screen and (max-width:991px){
            padding-top: 40px ;
        }
    .firstSection{
        height: 100% ;
        display: flex ;
        align-items: center ;
        justify-content: center ;

        @media screen and (max-width:991px){
            flex-direction: column !important;
        }

        .box{
            width:50%;
            text-align: center;

            @media screen and (max-width:991px){
            width:100% ;
        }

            .title{

                h1{
                    font-size: 3em ;
                    font-weight: 300 ;
                }
            }
            .text{

                p{
                    color: #333 ;
                }
            }
        }
        .images{
            background-image: url(${background}) ;
            background-size: cover ;
            width: 50% ;
            height:100%;
            position: relative ;

            @media screen and (max-width:991px){
                width: 100%!important;
                display: flex!important;
                align-items: center!important;
                margin-top: 40px!important;

                img{
                    position: relative!important;
                    width: 80%!important;
                    height: auto!important;
                    left: auto!important;
                    margin: 0 auto!important;
                    display: flex!important;
                }
        }

            img{
                width:100%;
                border-radius: 2px ;

                &:last-child{
                    width: 50%;
                    position: absolute;
                    bottom: 60px;
                    left: 250px;
                    z-index: 2;
                }

                &:first-child{
                    width: 50%;
                    position: absolute;
                    top: 70px;
                    left: 150px;
                    z-index: 1;
                }
            }

        }
    }


`;