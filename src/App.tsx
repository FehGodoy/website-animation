import React from "react";
import GlobalStyles from './styles/global';
import {Main, Section, Sticky, Footer} from './styles';
import FirstAndSecond from "./components/FirstAndSecond";
import Header from './components/Header';
import FooterComp from "./components/Footer";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Five from "./components/Five";
function App() {

  React.useEffect(() => {
    window.scrollTo({top:0})
  }, [])


  return (
    <> 
      <GlobalStyles />
      
      <Main>
        <Header />

        <Section style={{height: '72.7%'}}>
          <FirstAndSecond />
        </Section>

        <Section style={{height: '9.7%'}}>
          <Third />
        </Section>

        <Section>
          <Fourth />
        </Section>

        <Section>
          <Five />
        </Section>

        <Footer>
          <FooterComp />
        </Footer>
      </Main>
    </>
  );
}

export default App;
