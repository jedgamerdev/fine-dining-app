import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.L} alt="L_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Established in the heart of Gingoog, Lorriane&apos;s is a testament to
          the city&apos;s vibrant culinary scene. We are a family-owned
          establishment with a passion for food and a commitment to our
          community. Our mission is to provide an unforgettable dining
          experience that delights the palate and warms the soul. We source the
          finest local ingredients, celebrate traditional cooking methods, and
          strive to innovate with every dish we serve. Join us for a meal, and
          become a part of our culinary journey.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          <ul>
            <li>
              Established in 2018, Lorriane&apos;s has been serving the
              community with delicious dish and warm hospitality ever since.
            </li>
            <li>
              Since 2019, Lorriane&apos;s has been a staple in Gingoog City,
              offering a welcoming space and delicious cuisine for locals and
              visitors alike.
            </li>
            <li>
              From our humble beginnings in 2019, Lorriane&apos;s has grown into
              a beloved community spot. We remain committed to delivering fresh,
              high-quality food and friendly service.
            </li>
          </ul>
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
