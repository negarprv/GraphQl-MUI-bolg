import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        height: "100vh",
      }}
    >
      <Header />

      <div style={{ minHeight: "70vh" }}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
