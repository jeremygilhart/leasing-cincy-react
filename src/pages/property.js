import React, {useRef} from "react"
import map from "../map.png"
import three_lines from "../three_lines.png"
import housefront from "../Housefront.png"
import idaAve1 from "../2539-ida-ave-1.webp"
import idaAve2 from "../2539-ida-ave-2.webp"
import idaAve3 from "../2539-ida-ave-3.webp"
import idaAve4 from "../2539-ida-ave-4.webp"
import idaAve5 from "../2539-ida-ave-5.webp"
import idaAve6 from "../2539-ida-ave-6.webp"
import idaAve7 from "../2539-ida-ave-7.webp"
import idaAve8 from "../2539-ida-ave-8.webp"
import idaAve9 from "../2539-ida-ave-9.webp"
import idaAve10 from "../2539-ida-ave-10.webp"

import Spline from '@splinetool/react-spline';
import emailjs from '@emailjs/browser';


function HouseUnderImageDescription() {
  return (
  <div className="House-under-image-description">
    <div className="House-under-image-description-text-section">
      <div className="textGroupAlignLeft">
        <h2>$1,855 / Month</h2>
        <h3>Available June 1st</h3>
      </div>
      <div className="textGroupAlignRight">
        <h2>1,855</h2>
        <h3>Squarefeet</h3>
      </div>
      <div className="textGroupAlignRight">
        <h2>1 ½</h2>
        <h3>Bathrooms</h3>
      </div>
      <div className="textGroupAlignRight">
       <h2>3</h2>
       <h3>Bedrooms</h3>
      </div>
    </div>
  </div>
  );
}



function MainHomeView() {
  return (
  <div className="House-section-property-page">
    <HouseUnderImageDescription />
  </div>
  );
}

function GreatLocation() {
  return (
    <div className="Great-location">
      <div className = "Gl-text-container">
        <h1>
          Great <span class="orange">Location</span>
        </h1>
        <img src={map} alt="Map of norwood." />
        <p>Close proximity to I-71, Kroger, Rookwood Commons, and Wasson Way biketrail.</p>
        <img src={three_lines} class="three_lines" />
      </div>
    </div>
    );
}

function GreatFeatures() {
  return (
    <div className="Great-features">
      <h1>
        Great <span class="orange">Features</span>
      </h1>
      <div className = "Gf-text-container-full-width">
        <div className = "Gf-text-container">
          <div className = "Left-text-column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className = "Right-text-column">
            <ul>
              <li>3 Bedrooms</li>
              <li>1 Full Bathroom</li>
              <li>1 Half Bathroom</li>
              <li>1432 Square Feet</li>
              <li>Off Street Parking</li>
              <li>Private Fenced Backyard</li>
              <li>Central  AC</li>
              <li>Hardwood Floors</li>
              <li>Single Family Home</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}

function PhotoGallery({myState, changeMyState}) {
  return (
      <div class="photo-gallery">
          <h1 class="orange">Photo Gallery</h1>
          <div class = "photo-gallery-photos" onClick={() => changeMyState()}>
            <div class = "photo-gallery-photo photo-1" > <img src={idaAve1} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-2" > <img src={idaAve2} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-3" > <img src={idaAve3} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-4" > <img src={idaAve4} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-5" > <img src={idaAve5} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-6" > <img src={idaAve6} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-7" > <img src={idaAve7} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-8" > <img src={idaAve8} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-9" > <img src={idaAve9} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-10"> <img  src={idaAve10} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-11"> <img  src={idaAve1} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-12"> <img  src={idaAve2} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-13"> <img  src={idaAve3} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-14"> <img  src={idaAve4} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-15"> <img  src={idaAve5} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-16"> <img  src={idaAve6} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-17"> <img  src={idaAve7} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-18"> <img  src={idaAve8} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-19"> <img  src={idaAve9} alt="Map of norwood." /></div>
            <div class = "photo-gallery-photo photo-20"> <img  src={idaAve10} alt="property photo" /></div>
            <div class = "photo-gallery-photo photo-21"> <img  src={idaAve1} alt="Map of norwood." /></div>
          </div>
        </div>

    );
}

function VirtualTour() {
  return (
    <div className="virtual-tour">
      <h1>Virtual Tour</h1>
      <iframe width='853' height='480' src='https://my.matterport.com/show/?m=JJiWrFtrVXY' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
    </div>
    );
}

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9c23tzb', 'template_p3lizi7', form.current, 'NXddaTHpdVUShlgQT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return  <form ref={form} onSubmit={sendEmail}>
            <label>
              <input type="text" name="user_name" placeholder="Full Name" />
            </label>
            <label>
              <input type="text" name="user_email" placeholder = "Email Address" />
            </label>
            <label>
              <input type="text" name="user_phone" placeholder = "Phone Number"/>
            </label>
            <label>
              <textarea name="message" placeholder = "Message"/>
            </label>
            <input name="submit" type="submit" value="Send" />
          </form>

}


function ContactUs() {
  return (
    <div className="contact-us">
      <div className = "small-red-line"></div>
      <div className = "big-orange-line">
        <h1>Interested? Schedule a tour today!</h1>
      </div>
      <div className = "small-red-line"></div>
      <div className="contact-us-main">
        <h1>Contact Us</h1>
        <div className = "form-div">
          <Contact />
        </div>
      </div>
    </div>
    );
}

function Carousel({myState, changeMyState}) {
  /* https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t */
  const closeButton = document.getElementById("slide-arrow-close");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
/*
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });*/
  function nextSlide() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
    
  }

  function prevSlide() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  }

function closeCarousel() {
  changeMyState()
}


  return (
  <div className="carousel" myState={myState}>
    <div class="slider-wrapper">
      <div class="close-button-parent" >
        <button class="close-button" id="close-button"
      onClick={() => closeCarousel()}
      myState={myState}>
          &#10006;
        </button>
      </div>
      <button class="slide-arrow" id="slide-arrow-prev" onClick={prevSlide}>
        &#8249;
      </button>
      
      <button class="slide-arrow" id="slide-arrow-next" onClick={nextSlide}>
        &#8250;
      </button>
      
      <ul class="slides-container" id="slides-container">
        <li class="slide"><img src={idaAve1}/></li>
        <li class="slide"><img src={idaAve2}/></li>
        <li class="slide"><img src={idaAve3}/></li>
        <li class="slide"><img src={idaAve4}/></li>
        <li class="slide"><img src={idaAve5}/></li>
        <li class="slide"><img src={idaAve6}/></li>
        <li class="slide"><img src={idaAve7}/></li>
        <li class="slide"><img src={idaAve8}/></li>
        <li class="slide"><img src={idaAve9}/></li>
        <li class="slide"><img src={idaAve10}/></li>
      </ul>
    </div>
  </div>
  )
}


function Property() {

  const [myState, setMyState] = React.useState("unopened");

  const changeMyState =  () => {
      console.log("You just clicked");
      if (myState !== "visible") setMyState("visible");
        else
          setMyState("hidden")
    };

  const turnOffGallery =  () => {
      console.log("Closing photo carousel.");
          setMyState("hidden")
          setTimeout(500)
          setMyState("unopened")

    };

  const turnOnGallery =  () => {
      console.log("Opening photo carousel");
          setMyState("visible")

    };


  return (
    <div className="Property">
      <div className="Titlebar-offset"></div>
      <Carousel 
      myState = {myState}
      changeMyState = {() => turnOffGallery()}
      />
      <MainHomeView />
      <GreatLocation />
      <GreatFeatures />
      <PhotoGallery 
      myState = {myState}
      changeMyState = {() => turnOnGallery()}/>
      <VirtualTour />
      <ContactUs />
    </div>
  );
}




export default Property;