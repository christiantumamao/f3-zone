import "./Contact.css";
function Contact({c1,c3,}){
  return(
    <>
    <section className="contact" id="contact">
      <h1 className="heading">
        {c1}
       </h1>
       <div className="row">
       <iframe className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.
       766919311444!2d120.56873027363278!3d15.973543841995392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
       1!3m3!1m2!1s0x33913fdc4a884813%3A0x268062b59feff4fe!2sF3%20Sports%20Center!5e0!3m2!1sen!
        2sph!4v1757060887713!5m2!1sen!2sphno-referrer-when-downgrade">
       </iframe>

       <form action="">
        <h3>{c3}</h3>
        <div className="share">
        <a href="https://www.facebook.com/f3sportscenter?mibextid=ZbWKwL" className="fab fa-facebook-f"></a>
        <a href="https://www.instagram.com/f3sportscenter?igsh=Mmk3YW1xdjh2Mnc1" className="fab fa-instagram"></a>
      </div>
      </form>

       </div>
    </section>
    </>
  );
}
export default Contact;