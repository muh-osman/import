import NavBar from './component/NavBar';
import Container from 'react-bootstrap/Container';
import Hero from './component/Hero';
import Course from './component/Course';
import Trading from './component/Trading';
// import Youtube from './component/Youtube';
import Social from './component/Social';
import Footer from './component/Footer';

import ReactGA from "react-ga4"

ReactGA.initialize("G-X0V127YVW4")


function App() {
  return (
    <>
    <NavBar/>

    <Container>
      <Hero/>
      <Course/>
      <Trading/>
      {/* <Youtube/> */}
      <Social/>
    </Container>

    <Footer/>
    </>
  );
}

export default App;
