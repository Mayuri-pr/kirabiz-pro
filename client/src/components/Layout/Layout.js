import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "85vh" }}>
        <Toaster  />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Corteva Agriscience™ ",
  description:
    "   Corteva Agriscience™ is a publicly traded, global agricultural company that enables farmers to purchase seeds, pesticides and fertilizers from anywhere through internet connectivity ",
  keywords: "Agriscience™,seeds,pesticides,fertilizers,farmers ",
  author: "Corteva ",
};

export default Layout;
