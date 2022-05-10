import styled from 'styled-components';



export const Container = styled.div` 
  max-width:60%;
    margin: 25px auto ;

    @media screen and (max-width:991px){
            max-width: 85%;
        }
  .box{
    
    .boxAzul{
        background-color: #102A42 ;
        display: flex ;
        align-items: center ;
        justify-content: space-between ;

        @media screen and (max-width:991px){
            padding: 10px ;
            }

        .firstBox{
            padding: 0px 15px;
            .titulo{

                h6{
                    text-transform: uppercase;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 500;
                }
            }

            .texto{

                h4{
                    color: #fff ;
                    font-size: 22px ;
                }
            }
        }

        .secondBox{
            padding: 0px 20px ;
            h5{
                color: #fff ;
                font-size: 18px ;
                font-weight: 200 ;
            }
        }


        .lastBox{
            max-width: 45% ;
            @media screen and (max-width:991px){
            width: 100% ;
            height: 100% ;
            max-width: 100% ;
            }

            img{
                width: 100%;
                object-fit: cover;
                height: 200px;
            }
        }
    }
  }
`;