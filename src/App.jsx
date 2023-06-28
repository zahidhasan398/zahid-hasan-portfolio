import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Footer from './components/Footer/Footer';
import { education, skill } from './assets';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div style={{backgroundImage:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,0.4486928560486695) 36%, rgba(0,212,255,0.38986932663690477) 250%),url(${skill})`,backgroundBlendMode:'multiply'}} className="bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
        <div style={{backgroundImage:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,0.4486928560486695) 36%, rgba(0,212,255,0.38986932663690477) 250%),url(${education})`,backgroundBlendMode:'multiply'}} className="bg-cover bg-center bg-no-repeat">
        <Projects />
        </div>
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div style={{backgroundImage:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,0.4486928560486695) 36%, rgba(0,212,255,0.38986932663690477) 250%),url(${education})`,backgroundBlendMode:'multiply'}}
            className="bg-cover bg-center 
            bg-no-repeat">
            <Experience />
          </div>
        </div>
        <div style={{backgroundImage:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,0.4486928560486695) 36%, rgba(0,212,255,0.38986932663690477) 250%),url(${education})`,backgroundBlendMode:'multiply'}} className="relative z-0 bg-cover bg-center 
            bg-no-repeat">
          <Contact />
        </div>
        <div style={{backgroundImage:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,3,0.4486928560486695) 36%, rgba(0,212,255,0.38986932663690477) 250%),url(${education})`,backgroundBlendMode:'multiply'}} className='bg-cover bg-no-repeat'>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
