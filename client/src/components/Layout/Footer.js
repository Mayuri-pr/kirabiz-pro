import React from "react";
import { CDBLink, CDBBtn, CDBIcon, CDBBox } from "cdbreact";
import img from "../../Images/logo.jpg";

// #494950
  
const Footer = () => {
  return (
    <div
      className="shadow"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="ms-3 h5 font-weight-bold">
                <img src={img} alt="Logo" className="logo" color="white" />
              </span>
            </a>
            <p className="my-3" style={{ width: "250px" }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Quick Links
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBLink to="/">➡️Home</CDBLink>
              <CDBLink to="/category">➡️Products</CDBLink>
              <CDBLink to="/about">➡️About Us</CDBLink>
              <CDBLink to="/register">➡️Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Categories
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBLink to="/">➡️Seeds</CDBLink>
              <CDBLink to="/">➡️Fertilizers</CDBLink>
              <CDBLink to="/">➡️Pesticides</CDBLink>
              <CDBLink to="/">➡️Tools</CDBLink>
              <CDBLink to="/">➡️Equipment</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Help
            </p>
            <CDBBox
              display="flex"
              flex="column"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBLink to="/contact">➡️Contact Us</CDBLink>
              
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%" }}
          className="mx-auto mt-4"
        >
          <small
            className="text-center"
            style={{ width: "50%", fontSize: "16px" }}
          >
            &copy;™ ® Trademarks of Corteva Agriscience and its affiliated
            companies. © 2024 Corteva.
          </small>
          <CDBBtn
            flat
            color="dark"
            href="https://www.facebook.com/Corteva/"
            className="p-2"
          >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            href="https://twitter.com/corteva"
            className="mx-3 p-2"
          >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn
            flat
            color="dark"
            href="https://www.instagram.com/corteva/"
            className="p-2"
          >
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </div>
  );
};
export default Footer;
