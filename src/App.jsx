
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Service from './pages/Home/Service/Service.jsx';
import About from './pages/Home/About/About.jsx';
import Pricing from './pages/Home/Pricing/Pricing.jsx';
import  Contact  from './pages/Home/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Blog from './pages/Home/Blog/Blog.jsx';
import './index.css'



function App() {

  
  return (
    <>
      <Navbar
          
      /> 
      <section id="home">
      <Home 
        
        name1="TAKE YOUR FITNESS TO NEW HEIGHTS"
        name2=" FULL FORCE FITNESS
              For Best Results
              We transform lives through fitness and healthy living."
        FloatingVideo src="/image/31963a7c-23c2-4d27-b725-c31466ce2b47.mp4" 
      /> 
      </section>
      <section id="service">
      <Service
        s1="Our Service"
        s2="Choose the best class that fits your lifestyle and goals."
      />
      </section>
      <About
        n1="Facility"
        n2="F3 Sports Center"
        n3="We transform lives through fitness and healthy living. 
            Our trainers are committed to helping you achieve your goals 
            with modern equipment and personalized programs."
      />
      <section id="pricing">
      <Pricing
        p1="Pricing plan"
        p3="Choose a plan that fits your fitness goals."
        p2="Join Now"
      />
      </section>
      <section id="Blog">
        <Blog/>
      </section>
      <Contact
        c1="Contact  US "
        c3="Get in touch"
        
      />
      <Footer/>
      
    </>
  );
}

export default App;
