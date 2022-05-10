import styled from 'styled-components';

export const Container = styled.div`
font-family: 'Mukta', sans-serif;
.box{
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;
    @media screen and (max-width:991px){
                max-width: 95% ;
                flex-direction: column;
    }
    .boxFooter{
        margin: 0 25px;     
        max-width: 30% ;
        @media screen and (max-width:991px){
                max-width: 100% ;
        }
        h6{
            color: #fff ;
            font-size: 22px ;
            font-weight:600 ;
            text-transform: uppercase ;
        }

        ul{
            list-style: none ;

            li{
                color: #fff ;
                font-weight:100 ;
                text-align: justify ;
            }
        }
    }
}

.copy{
    border-top: 1px solid #eeeeee12;
    margin-top: 35px;
    padding: 30px 30px 0px 30px;
    display: flex;
    justify-content: flex-end;

    .copyTitle{

        h6{
            color: #fff;
            font-size: 15px;
            font-weight: 300;
        }        
    }
}

`;