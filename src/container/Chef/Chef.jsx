import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            At Lorriane&apos;s, we believe in the power of food to bring people
            together.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Our dishes are more than just meals; they are a celebration of
          culture, tradition, and the simple joy of eating. We take pride in our
          craft, meticulously preparing each dish with the freshest ingredients
          and time-honored cooking techniques. We strive to create a dining
          experience that not only satisfies the palate but also nourishes the
          soul. Our commitment to quality and authenticity is unwavering. We
          invite you to join us on this culinary journey, to savor the flavors
          of our heritage, and to share in the love and passion we pour into
          every dish.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
