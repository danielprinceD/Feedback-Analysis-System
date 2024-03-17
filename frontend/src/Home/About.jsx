import React from "react";

const About = () => {
  return (
    <div className="d-flex flex-column align-items-center py-5 gap-5">
      <div className="w-75 d-flex flex-column gap-4">
        <h2 className="text-primary">About Us</h2>
        <h4>
          Welcome to Our Company! We are a passionate team of individuals
          committed to revolutionizing the online shopping experience.
        </h4>
      </div>
      <br />
      <div className="w-75 d-flex flex-column gap-4 ">
        <h2 className="text-primary">Who We Are ?</h2>
        <h4>
          At this place, we strive to be more than just an e-commerce platform.
          We are a community of like-minded individuals who believe in the power
          of innovation and customer-centricity. Our team comprises industry
          experts, tech enthusiasts, and customer support professionals, all
          working together to bring you the best products and services.
        </h4>
      </div>
      <br />
      <div className="w-75 d-flex flex-column gap-4">
        <h2 className="text-primary">Our Mission</h2>
        <h4>
          Our mission is simple yet ambitious – to provide you with a seamless
          shopping experience that exceeds your expectations. We are dedicated
          to sourcing high-quality products from trusted suppliers, ensuring
          that each item meets our stringent quality standards. We aim to make
          online shopping easier, more enjoyable, and more rewarding for every
          customer.
        </h4>
      </div>
      <br />
      <br />
      <table class="table w-75">
        <thead>
          <tr>
            <th scope="col">Our Value</th>
            <th scope="col">Our Partners</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ol
                className="d-flex flex-column gap-5"
                style={{ lineHeight: 3 }}
              >
                <li>
                  Customer-Centricity: Everything we do revolves around our
                  customers' needs and preferences. We listen to your feedback
                  and continuously strive to enhance your shopping experience.
                </li>
                <li>
                  Integrity: Honesty, transparency, and ethical business
                  practices are at the core of our operations. You can trust us
                  to deliver on our promises and maintain the highest standards
                  of integrity.
                </li>
                <li>
                  Innovation: We embrace innovation and technology to stay ahead
                  in a rapidly evolving industry. From user-friendly interfaces
                  to advanced logistics solutions, we leverage innovation to
                  improve every aspect of our service.
                </li>
                <li>
                  Diversity and Inclusion: We celebrate diversity and welcome
                  customers from all walks of life. Our platform is inclusive,
                  ensuring that everyone can find products that resonate with
                  their unique tastes and preferences.
                </li>
              </ol>
            </td>
            <td>
              <ol
                className="d-flex flex-column gap-5"
                style={{ lineHeight: 2 }}
              >
                <li>
                  Meet the passionate individuals behind [Your Company Name].
                  Our team comprises professionals with diverse backgrounds,
                  skills, and expertise, united by a shared passion for
                  delivering excellence. From product sourcing and marketing to
                  customer support and logistics, each team member plays a vital
                  role in ensuring your satisfaction.
                </li>
                <li>
                  We collaborate with reputable brands, manufacturers, and
                  suppliers to bring you a curated selection of top-notch
                  products. Our partnerships are built on mutual trust, quality
                  assurance, and a commitment to delivering value to our
                  customers.
                </li>
                <li>
                  Join Our Affiliate Program: Are you interested in partnering
                  with us and earning rewards for promoting our products?
                  Explore our affiliate program and discover the benefits of
                  joining our network of affiliates.
                </li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
