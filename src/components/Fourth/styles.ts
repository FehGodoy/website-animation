import styled from 'styled-components';



export const Container = styled.div`   
        @media screen and (max-width:991px){
            padding-top: 130px ;
            text-align: center ;
        }
   .videoBox{
    position: relative;
    max-width: 50%;
    margin: 0 auto;

    @media screen and (max-width:991px){
            max-width: 100% ;
        }

    .title{
        margin-bottom: 20px ;

        h2{
            font-weight: 300;
            font-size: 3em;
        }
    }
    .text{

        p{
            font-weight: 300 ;
            color: #333 ;
        }
    }

    .boxVideo{
        margin-top: 50px;
        video{
            width:100% ;
            height: 300px ;
        }
    }

   }

   .boxTech{        
        width: 100%;
        display: flex ;
        margin-top: 100px ;
        background-color: #f5f1ea ;
        padding: 100px 0px ;
    
        @media screen and (max-width:991px){
            flex-direction: column ;            
        }

        .boxTechContent{
            
            width: 50% ;
            padding-left:40px ;

            @media screen and (max-width:991px){
            width: 100% ;
            padding-left: 0px ;
            }
            .title{
                margin-bottom: 34px;

                h2{
                    font-size: 3em;
                    font-weight: 300;
                    line-height: 1;
                }
            }

            .text{
                max-width: 80% ;
                @media screen and (max-width:991px){
                    max-width: 100% ;
                }

                p{
                    font-weight:200 ;
                    color: #333 ;
                }
            }
        }
        .boxTechFigure{
            width: 50% ;
            @media screen and (max-width:991px){
            width: 100% ;
            }
            .box{
                max-width: 50%;
                margin: 0 auto ;
                @media screen and (max-width:991px){
                max-width: 100% ;
                margin-top: 20px ;
            }
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    list-style: none;
                    justify-content: center;

                    li{
                        width: 80px;
                        height: 80px;
                        background-color: #fff;
                        border-radius: 5px;
                        margin: 6px 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img{
                            width: 55px;
                            height: 55px;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }


`;