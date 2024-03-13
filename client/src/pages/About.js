import React from "react";
import Layout from "../components/Layout/Layout";
import img from "../Images/aboutus.png";


const About = () => {
  return (
    <Layout title={"About | Corteva Agriscience™"}>
      <div className="row2 contactus ">
        <div className="col-md-6 ">
          <img className="about-img" src={img} alt="Aboutus" style={{ width: "83%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <b className="para-about">
             
                We build bridges between Farmers and Agri-input Sellers. Our team
              is always getting bigger, but we all work toward the same goal to
              make sales success not only possible, but also inevitable for all
              terms.
            </b>
            <br /> <br />
            <b className="para1-about"> Corteva is a private limited company that was established on
            September 3, 2021. Corteva is an Agritech enterprise providing an
            online marketplace to connect farmers and Agri input sellers, where
            farmers can buy branded, high-quality, and original products through
            Corteva. We are a company that delivers the highest quality input
            and guidance to farmers for their growth. Our services are available
            in over 26,000 locations. Through our services, we are helping
            farmers to have better profitability.</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
